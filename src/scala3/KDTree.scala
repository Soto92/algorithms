//> using scala "3.3.3"

package algorithms.scala3

final case class KDTree[A] private (k: Int, root: Option[KDTree.Node[A]], size: Int):
  import KDTree.{Entry, Node}

  def insert(point: Vector[Double], value: A): KDTree[A] =
    KDTree.validatePoint(k, point)
    val (newRoot, insertedNew) = insertNode(root, Entry(point, value), depth = 0)
    val newSize = if insertedNew then size + 1 else size
    copy(root = Some(newRoot), size = newSize)

  def contains(point: Vector[Double]): Boolean =
    KDTree.validatePoint(k, point)
    def loop(node: Option[Node[A]], depth: Int): Boolean =
      node match
        case None => false
        case Some(n) =>
          if n.entry.point == point then true
          else
            val axis = depth % k
            if point(axis) < n.entry.point(axis) then loop(n.left, depth + 1)
            else loop(n.right, depth + 1)
    loop(root, 0)

  def get(point: Vector[Double]): Option[A] =
    KDTree.validatePoint(k, point)
    def loop(node: Option[Node[A]], depth: Int): Option[A] =
      node match
        case None => None
        case Some(n) =>
          if n.entry.point == point then Some(n.entry.value)
          else
            val axis = depth % k
            if point(axis) < n.entry.point(axis) then loop(n.left, depth + 1)
            else loop(n.right, depth + 1)
    loop(root, 0)

  def nearest(target: Vector[Double]): Option[Entry[A]] =
    KDTree.validatePoint(k, target)
    root.map { r =>
      val (bestEntry, _) =
        nearestNode(
          r,
          target,
          depth = 0,
          bestEntry = r.entry,
          bestDist2 = KDTree.dist2(r.entry.point, target)
        )
      bestEntry
    }

  def range(min: Vector[Double], max: Vector[Double]): Vector[Entry[A]] =
    KDTree.validatePoint(k, min)
    KDTree.validatePoint(k, max)
    def loop(node: Option[Node[A]], depth: Int, acc: Vector[Entry[A]]): Vector[Entry[A]] =
      node match
        case None => acc
        case Some(n) =>
          val axis = depth % k
          val inRange = KDTree.inRange(n.entry.point, min, max)
          val acc1 = if inRange then acc :+ n.entry else acc
          val acc2 = if min(axis) <= n.entry.point(axis) then loop(n.left, depth + 1, acc1) else acc1
          if max(axis) >= n.entry.point(axis) then loop(n.right, depth + 1, acc2) else acc2
    loop(root, 0, Vector.empty)

  private def insertNode(node: Option[Node[A]], entry: Entry[A], depth: Int): (Node[A], Boolean) =
    node match
      case None => (Node(entry, None, None), true)
      case Some(n) =>
        if n.entry.point == entry.point then (n.copy(entry = entry), false)
        else
          val axis = depth % k
          if entry.point(axis) < n.entry.point(axis) then
            val (newLeft, insertedNew) = insertNode(n.left, entry, depth + 1)
            (n.copy(left = Some(newLeft)), insertedNew)
          else
            val (newRight, insertedNew) = insertNode(n.right, entry, depth + 1)
            (n.copy(right = Some(newRight)), insertedNew)

  private def nearestNode(node: Node[A], target: Vector[Double], depth: Int, bestEntry: Entry[A], bestDist2: Double): (Entry[A], Double) =
    val currentDist2 = KDTree.dist2(node.entry.point, target)
    val (newBestEntry, newBestDist2) =
      if currentDist2 < bestDist2 then (node.entry, currentDist2) else (bestEntry, bestDist2)

    val axis = depth % k
    val (near, far) =
      if target(axis) < node.entry.point(axis) then (node.left, node.right) else (node.right, node.left)

    val (bestAfterNearEntry, bestAfterNearDist2) =
      near match
        case None => (newBestEntry, newBestDist2)
        case Some(n) => nearestNode(n, target, depth + 1, newBestEntry, newBestDist2)

    val axisDelta = target(axis) - node.entry.point(axis)
    if axisDelta * axisDelta < bestAfterNearDist2 then
      far match
        case None => (bestAfterNearEntry, bestAfterNearDist2)
        case Some(n) => nearestNode(n, target, depth + 1, bestAfterNearEntry, bestAfterNearDist2)
    else
      (bestAfterNearEntry, bestAfterNearDist2)

object KDTree:
  final case class Entry[A](point: Vector[Double], value: A)
  final case class Node[A](entry: Entry[A], left: Option[Node[A]], right: Option[Node[A]])

  def empty[A](k: Int): KDTree[A] =
    require(k > 0, "k must be positive")
    KDTree[A](k, None, 0)

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
      sum += d * d
      i += 1
    sum
