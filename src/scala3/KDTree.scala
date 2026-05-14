//> using scala "3.3.3"

package algorithms.scala3

final case class KDTree[A] private (k: Int, root: Option[KDTree.Node[A]], size: Int):
  import KDTree.{Entry, Node}

  def insert(point: Vector[Double], value: A): KDTree[A] =
    KDTree.validatePoint(k, point)
    KDTree.fromEntries(k, entries.updatedWith(point, value))

  def contains(point: Vector[Double]): Boolean =
    KDTree.validatePoint(k, point)
    def loop(node: Option[Node[A]]): Boolean =
      node match
        case None => false
        case Some(n) =>
          if n.entry.point == point then true
          else
            val axis = n.axis
            if point(axis) < n.entry.point(axis) then loop(n.left)
            else if point(axis) > n.entry.point(axis) then loop(n.right)
            // Equal on the split axis does not imply equal points, so both subtrees can still contain the target.
            else loop(n.left) || loop(n.right)
    loop(root)

  def get(point: Vector[Double]): Option[A] =
    KDTree.validatePoint(k, point)
    def loop(node: Option[Node[A]]): Option[A] =
      node match
        case None => None
        case Some(n) =>
          if n.entry.point == point then Some(n.entry.value)
          else
            val axis = n.axis
            if point(axis) < n.entry.point(axis) then loop(n.left)
            else if point(axis) > n.entry.point(axis) then loop(n.right)
            // Equal on this axis may still differ on another coordinate.
            else loop(n.left).orElse(loop(n.right))
    loop(root)

  def nearest(target: Vector[Double]): Option[Entry[A]] =
    KDTree.validatePoint(k, target)
    root.map { r =>
      val (bestEntry, _) =
        nearestNode(
          r,
          target,
          bestEntry = r.entry,
          bestDist2 = KDTree.dist2(r.entry.point, target)
        )
      bestEntry
    }

  def range(min: Vector[Double], max: Vector[Double]): Vector[Entry[A]] =
    KDTree.validatePoint(k, min)
    KDTree.validatePoint(k, max)
    def loop(node: Option[Node[A]], acc: Vector[Entry[A]]): Vector[Entry[A]] =
      node match
        case None => acc
        case Some(n) =>
          val axis = n.axis
          val inRange = KDTree.inRange(n.entry.point, min, max)
          val acc1 = if inRange then acc :+ n.entry else acc
          val acc2 = if min(axis) <= n.entry.point(axis) then loop(n.left, acc1) else acc1
          if max(axis) >= n.entry.point(axis) then loop(n.right, acc2) else acc2
    loop(root, Vector.empty)

  private def entries: Vector[Entry[A]] =
    def loop(node: Option[Node[A]], acc: Vector[Entry[A]]): Vector[Entry[A]] =
      node match
        case None => acc
        case Some(n) => loop(n.right, loop(n.left, acc :+ n.entry))
    loop(root, Vector.empty)

  private def nearestNode(node: Node[A], target: Vector[Double], bestEntry: Entry[A], bestDist2: Double): (Entry[A], Double) =
    val currentDist2 = KDTree.dist2(node.entry.point, target)
    val (newBestEntry, newBestDist2) =
      if currentDist2 < bestDist2 then (node.entry, currentDist2) else (bestEntry, bestDist2)

    val axis = node.axis
    val (near, far) =
      if target(axis) < node.entry.point(axis) then (node.left, node.right) else (node.right, node.left)

    val (bestAfterNearEntry, bestAfterNearDist2) =
      near match
        case None => (newBestEntry, newBestDist2)
        case Some(n) => nearestNode(n, target, newBestEntry, newBestDist2)

    // If the hypersphere around the target crosses the split plane, the far side may contain a closer point.
    val axisDelta = target(axis) - node.entry.point(axis)
    if axisDelta * axisDelta < bestAfterNearDist2 then
      far match
        case None => (bestAfterNearEntry, bestAfterNearDist2)
        case Some(n) => nearestNode(n, target, bestAfterNearEntry, bestAfterNearDist2)
    else
      (bestAfterNearEntry, bestAfterNearDist2)

object KDTree:
  final case class Entry[A](point: Vector[Double], value: A)
  final case class Node[A](entry: Entry[A], axis: Int, left: Option[Node[A]], right: Option[Node[A]])

  def empty[A](k: Int): KDTree[A] =
    require(k > 0, "k must be positive")
    KDTree[A](k, None, 0)

  def from[A](k: Int, values: Iterable[(Vector[Double], A)]): KDTree[A] =
    require(k > 0, "k must be positive")
    val entries =
      values.foldLeft(Vector.empty[Entry[A]]) { case (acc, (point, value)) =>
        validatePoint(k, point)
        acc.updatedWith(point, value)
      }
    fromEntries(k, entries)

  private def fromEntries[A](k: Int, entries: Vector[Entry[A]]): KDTree[A] =
    KDTree[A](k, build(entries, k, depth = 0), entries.size)

  private def build[A](entries: Vector[Entry[A]], k: Int, depth: Int): Option[Node[A]] =
    if entries.isEmpty then None
    else
      val axis = depth % k
      // Classic kd-tree construction: choose the median on the current axis to keep subtrees balanced.
      val sorted = entries.sortBy(_.point(axis))
      val median = sorted.size / 2
      Some(
        Node(
          entry = sorted(median),
          axis = axis,
          left = build(sorted.take(median), k, depth + 1),
          right = build(sorted.drop(median + 1), k, depth + 1)
        )
      )

  private def validatePoint(k: Int, point: Vector[Double]): Unit =
    require(point.size == k, s"Point dimension ${point.size} does not match k=$k")

  private def inRange(point: Vector[Double], min: Vector[Double], max: Vector[Double]): Boolean =
    var i = 0
    var ok = true
    while i < point.size && ok do
      ok = point(i) >= min(i) && point(i) <= max(i)
      i += 1
    ok

  private def dist2(a: Vector[Double], b: Vector[Double]): Double =
    var i = 0
    var sum = 0.0
    while i < a.size do
      val d = a(i) - b(i)
      // Squared distance avoids sqrt during comparisons; ordering is the same as Euclidean distance.
      sum += d * d
      i += 1
    sum

  extension [A](entries: Vector[Entry[A]])
    private def updatedWith(point: Vector[Double], value: A): Vector[Entry[A]] =
      val index = entries.indexWhere(_.point == point)
      val entry = Entry(point, value)
      if index >= 0 then entries.updated(index, entry) else entries :+ entry
