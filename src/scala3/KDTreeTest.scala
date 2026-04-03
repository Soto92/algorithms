//> using scala "3.3.3"
//> using dep "org.scalameta::munit:0.7.29"

package algorithms.scala3

class KDTreeTest extends munit.FunSuite:
  private val points = Vector(
    Vector(2.0, 3.0),
    Vector(5.0, 4.0),
    Vector(9.0, 6.0),
    Vector(4.0, 7.0),
    Vector(8.0, 1.0),
    Vector(7.0, 2.0)
  )

  test("insert and contains"):
    val tree = points.foldLeft(KDTree.empty(2))(_.insert(_))
    points.foreach(p => assert(tree.contains(p)))
    assert(!tree.contains(Vector(1.0, 1.0)))

  test("size does not change with duplicates"):
    val tree = KDTree.empty(2).insert(Vector(1.0, 1.0)).insert(Vector(1.0, 1.0))
    assertEquals(tree.size, 1)

  test("nearest neighbor"):
    val tree = points.foldLeft(KDTree.empty(2))(_.insert(_))
    val nearest = tree.nearest(Vector(9.2, 6.2))
    assertEquals(nearest, Some(Vector(9.0, 6.0)))

  test("range search"):
    val tree = points.foldLeft(KDTree.empty(2))(_.insert(_))
    val found = tree.range(Vector(4.0, 2.0), Vector(9.0, 6.0))
    val expected = Vector(
      Vector(5.0, 4.0),
      Vector(9.0, 6.0),
      Vector(7.0, 2.0)
    )
    assertEquals(found.toSet, expected.toSet)

  test("dimension validation"):
    val tree = KDTree.empty(3)
    intercept[IllegalArgumentException] {
      tree.insert(Vector(1.0, 2.0))
    }
