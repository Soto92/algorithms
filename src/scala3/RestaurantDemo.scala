//> using scala "3.3.3"

package algorithms.scala3

import scala.math.{Pi, abs, cos, sqrt}

final case class Restaurant(name: String, cuisine: String, latitude: Double, longitude: Double)

object Geo:
  private val EarthRadiusMeters = 6_371_000.0

  def toRadians(deg: Double): Double = deg * (Pi / 180.0)

  def projectToMeters(originLat: Double, originLon: Double, lat: Double, lon: Double): Vector[Double] =
    val originLatRad = toRadians(originLat)
    val originLonRad = toRadians(originLon)
    val latRad = toRadians(lat)
    val lonRad = toRadians(lon)
    val x = (lonRad - originLonRad) * cos((latRad + originLatRad) / 2.0) * EarthRadiusMeters
    val y = (latRad - originLatRad) * EarthRadiusMeters
    Vector(x, y)

  def distMeters(a: Vector[Double], b: Vector[Double]): Double =
    val dx = a(0) - b(0)
    val dy = a(1) - b(1)
    sqrt(dx * dx + dy * dy)

object RestaurantIndex:
  private val OriginLat = -23.5505
  private val OriginLon = -46.6333

  def build(restaurants: Vector[Restaurant]): KDTree[Restaurant] =
    restaurants.foldLeft(KDTree.empty[Restaurant](2)) { (tree, r) =>
      val p = Geo.projectToMeters(OriginLat, OriginLon, r.latitude, r.longitude)
      tree.insert(p, r)
    }

  def nearest(tree: KDTree[Restaurant], latitude: Double, longitude: Double): Option[(Restaurant, Double)] =
    val target = Geo.projectToMeters(OriginLat, OriginLon, latitude, longitude)
    tree.nearest(target).map { e =>
      val d = Geo.distMeters(e.point, target)
      (e.value, d)
    }

  def withinRadius(tree: KDTree[Restaurant], latitude: Double, longitude: Double, radiusMeters: Double): Vector[(Restaurant, Double)] =
    val center = Geo.projectToMeters(OriginLat, OriginLon, latitude, longitude)
    val min = Vector(center(0) - abs(radiusMeters), center(1) - abs(radiusMeters))
    val max = Vector(center(0) + abs(radiusMeters), center(1) + abs(radiusMeters))
    tree
      .range(min, max)
      .map(e => (e.value, Geo.distMeters(e.point, center)))
      .filter { case (_, d) => d <= abs(radiusMeters) }
      .sortBy(_._2)

@main def restaurantDemo(): Unit =
  val restaurants = Vector(
    Restaurant("Paulista Grill", "Brazilian", -23.5636, -46.6544),
    Restaurant("Liberdade Sushi", "Japanese", -23.5593, -46.6359),
    Restaurant("Pinheiros Pasta", "Italian", -23.5640, -46.6977),
    Restaurant("Vila Madalena Tacos", "Mexican", -23.5503, -46.6914),
    Restaurant("Centro Veggie", "Vegetarian", -23.5489, -46.6388),
    Restaurant("Itaim Bistro", "French", -23.5859, -46.6790)
  )

  val tree = RestaurantIndex.build(restaurants)

  val myLat = -23.5617
  val myLon = -46.6559

  val nearest = RestaurantIndex.nearest(tree, myLat, myLon)
  val nearestText = nearest
    .map { case (r, d) => f"${r.name} (${r.cuisine}) - ${d}%.0f m" }
    .getOrElse("none")
  println(s"Nearest: $nearestText")

  val close = RestaurantIndex.withinRadius(tree, myLat, myLon, radiusMeters = 1500.0)
  println("Within 1500 m:")
  close.foreach { (r, d) =>
    println(f"- ${r.name} (${r.cuisine}) - ${d}%.0f m")
  }
