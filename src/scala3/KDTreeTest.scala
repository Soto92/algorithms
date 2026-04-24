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
    val tree = points.foldLeft(KDTree.empty[Vector[Double]](2))((t, p) => t.insert(p, p))
    points.foreach(p => assert(tree.contains(p)))
    assert(!tree.contains(Vector(1.0, 1.0)))

  test("size does not change with duplicates"):
    val tree = KDTree.empty[String](2).insert(Vector(1.0, 1.0), "first").insert(Vector(1.0, 1.0), "second")
    assertEquals(tree.size, 1)
    assertEquals(tree.get(Vector(1.0, 1.0)), Some("second"))

  test("nearest neighbor"):
    val tree = points.foldLeft(KDTree.empty[Vector[Double]](2))((t, p) => t.insert(p, p))
    val nearest = tree.nearest(Vector(9.2, 6.2)).map(_.point)
    assertEquals(nearest, Some(Vector(9.0, 6.0)))

  test("range search"):
    val tree = points.foldLeft(KDTree.empty[Vector[Double]](2))((t, p) => t.insert(p, p))
    val found = tree.range(Vector(4.0, 2.0), Vector(9.0, 6.0)).map(_.point)
    val expected = Vector(
      Vector(5.0, 4.0),
      Vector(9.0, 6.0),
      Vector(7.0, 2.0)
    )
    assertEquals(found.toSet, expected.toSet)

  test("dimension validation"):
    val tree = KDTree.empty[Int](3)
    intercept[IllegalArgumentException] {
      tree.insert(Vector(1.0, 2.0), 1)
    }
