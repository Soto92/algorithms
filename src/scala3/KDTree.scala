//> using scala "3.3.3"

package algorithms.scala3

final case class KDTree private (k: Int, root: Option[KDTree.Node], size: Int):
  import KDTree.Node

  def insert(point: Vector[Double]): KDTree =
    KDTree.validatePoint(k, point)
    val newRoot = insertNode(root, point, depth = 0)
    val newSize = if contains(point) then size else size + 1
    copy(root = Some(newRoot), size = newSize)

  def contains(point: Vector[Double]): Boolean =
    KDTree.validatePoint(k, point)
    def loop(node: Option[Node], depth: Int): Boolean =
      node match
        case None => false
        case Some(n) =>
          if n.point == point then true
          else
            val axis = depth % k
            if point(axis) < n.point(axis) then loop(n.left, depth + 1)
            else loop(n.right, depth + 1)
    loop(root, 0)

  def nearest(target: Vector[Double]): Option[Vector[Double]] =
    KDTree.validatePoint(k, target)
    root.map { r =>
      val (bestPoint, _) = nearestNode(r, target, depth = 0, bestPoint = r.point, bestDist2 = KDTree.dist2(r.point, target))
      bestPoint
    }

  def range(min: Vector[Double], max: Vector[Double]): Vector[Vector[Double]] =
    KDTree.validatePoint(k, min)
    KDTree.validatePoint(k, max)
    def loop(node: Option[Node], depth: Int, acc: Vector[Vector[Double]]): Vector[Vector[Double]] =
      node match
        case None => acc
        case Some(n) =>
          val axis = depth % k
          val inRange = KDTree.inRange(n.point, min, max)
          val acc1 = if inRange then acc :+ n.point else acc
          val acc2 = if min(axis) <= n.point(axis) then loop(n.left, depth + 1, acc1) else acc1
          if max(axis) >= n.point(axis) then loop(n.right, depth + 1, acc2) else acc2
    loop(root, 0, Vector.empty)

  private def insertNode(node: Option[Node], point: Vector[Double], depth: Int): Node =
    node match
      case None => Node(point, None, None)
      case Some(n) =>
        if n.point == point then n
        else
          val axis = depth % k
          if point(axis) < n.point(axis) then
            n.copy(left = Some(insertNode(n.left, point, depth + 1)))
          else
            n.copy(right = Some(insertNode(n.right, point, depth + 1)))

  private def nearestNode(node: Node, target: Vector[Double], depth: Int, bestPoint: Vector[Double], bestDist2: Double): (Vector[Double], Double) =
    val currentDist2 = KDTree.dist2(node.point, target)
    val (newBestPoint, newBestDist2) =
      if currentDist2 < bestDist2 then (node.point, currentDist2) else (bestPoint, bestDist2)

    val axis = depth % k
    val (near, far) =
      if target(axis) < node.point(axis) then (node.left, node.right) else (node.right, node.left)

    val (bestAfterNearPoint, bestAfterNearDist2) =
      near match
        case None => (newBestPoint, newBestDist2)
        case Some(n) => nearestNode(n, target, depth + 1, newBestPoint, newBestDist2)

    val axisDelta = target(axis) - node.point(axis)
    if axisDelta * axisDelta < bestAfterNearDist2 then
      far match
        case None => (bestAfterNearPoint, bestAfterNearDist2)
        case Some(n) => nearestNode(n, target, depth + 1, bestAfterNearPoint, bestAfterNearDist2)
    else
      (bestAfterNearPoint, bestAfterNearDist2)

object KDTree:
  final case class Node(point: Vector[Double], left: Option[Node], right: Option[Node])

  def empty(k: Int): KDTree =
    require(k > 0, "k must be positive")
    KDTree(k, None, 0)

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
