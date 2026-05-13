## Factory method vs Abstract Factory

### Factory Method

The Factory Method handles the creation of individual objects of a single class

### Abstract Factory

Abstract Factory deals with creating families of related objects.
Like to create widgets for Android or iOS, or modern or antique style sofas.

### Examples

```js
// Factory Method
class Food {
  constructor(public name: string) {}
}

abstract class FoodCreator {
  abstract createFood(): Food;
}

class PizzaCreator extends FoodCreator {
  createFood(): Food {
    return new Food('Pizza');
  }
}

class BurgerCreator extends FoodCreator {
  createFood(): Food {
    return new Food('Hamburger');
  }
}

const pizzaCreator = new PizzaCreator();
const pizza = pizzaCreator.createFood();
```

```js
// Abstract Factory - Families
interface FoodA {
  eat(): void;
}

interface FoodB {
  eat(): void;
}

interface AbstractFoodFactory {
  createFoodA(): FoodA;
  createFoodB(): FoodB;
}

class FastFoodFactory implements AbstractFoodFactory {
  createFoodA(): FoodA {
    return new FrenchFries();
  }
  createFoodB(): FoodB {
    return new ChickenNuggets();
  }
}
class ItalianFoodFactory implements AbstractFoodFactory {
  createFoodA(): FoodA {
    return new Spaghetti();
  }
  createFoodB(): FoodB {
    return new Pizza();
  }
}

class FrenchFries implements FoodA {
  eat(): void {
    console.log("Eating French Fries.");
  }
}
class ChickenNuggets implements FoodB {
  eat(): void {
    console.log("Eating Chicken Nuggets.");
  }
}
class Spaghetti implements FoodA {
  eat(): void {
    console.log("Eating Spaghetti.");
  }
}
class Pizza implements FoodB {
  eat(): void {
    console.log("Eating Pizza.");
  }
}

const fastFoodFactory = new FastFoodFactory();
const foodA1 = fastFoodFactory.createFoodA();
const foodB1 = fastFoodFactory.createFoodB();

const italianFoodFactory = new ItalianFoodFactory();
const foodA2 = italianFoodFactory.createFoodA();
const foodB2 = italianFoodFactory.createFoodB();
```
