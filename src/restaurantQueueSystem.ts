// Challenge 05: https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges---round-1
interface Dish {
    name: string;
    cookTime: number;
}

class Fish implements Dish {
    name = "Fish";
    constructor(value: string) {
        this.name = value
    }
    cookTime = 5;
}

class Beef implements Dish {
    name = "Beef";
    constructor(value: string) {
        this.name = value
    }
    cookTime = 4;
}

interface DishFactory {
    createDish(dishName: string): Dish;
}

class FishFactory implements DishFactory {
    createDish(dishName: string) {
        return new Fish(dishName);
    }
}

class BeefFactory implements DishFactory {
    createDish(dishName: string) {
        return new Beef(dishName);
    }
}

class QueueItem {
    constructor(public dish: Dish) {}
    estimateTime() {
        return this.dish.cookTime;
    }
}

class RestaurantQueue {
    private queue: QueueItem[] = [];
    addToQueue(dishNames: string[]) {
        for (const dishName of dishNames) {
            const dishFactory = this.getDishFactoryByName(dishName);
            if (dishFactory) {
                const dish = dishFactory.createDish(dishName);
                const queueItem = new QueueItem(dish);
                this.queue.push(queueItem);
                console.log(`Added ${dish.name} to the queue.`);
            } else {
                console.log(`Unknown dish: ${dishName}. Skipping.`);
            }
        }
    }

    private getDishFactoryByName(dishName: string): DishFactory | undefined {
        switch (dishName.toLowerCase()) {
            case "locosconmayo":
                return new FishFactory();
            case "beefwithfries":
                return new BeefFactory();
            case "ceviche":
                return new FishFactory();
            default:
                return undefined;
        }
    }
    processQueue() {
        if (this.queue.length === 0) {
            console.log("Queue is empty.");
            return;
        }
        const nextItem = this.queue.shift();
        const completionTime = nextItem?.estimateTime();
        if (completionTime !== undefined) {
            console.log(`Preparing ${nextItem?.dish.name}. Estimated time: ${completionTime} minutes.`);
            setTimeout(() => {
                console.log(`${nextItem?.dish.name} is ready.`);
                this.processQueue();
            }, completionTime * 1000);
        }
    }
    timeQueue() {
        let totalTime = 0
        this.queue.forEach(dish => {
            totalTime += dish.estimateTime()
        });
        console.log("Total time: ", totalTime)
    }
}

const queue = new RestaurantQueue();
queue.addToQueue(["Ceviche", "LocosConMayo", "BeefWithFries"]);
queue.timeQueue();
queue.processQueue();

/**
npx ts-node src/restaurantQueueSystem.ts
Added Ceviche to the queue.
Added LocosConMayo to the queue.
Added BeefWithFries to the queue.
Total time:  14
Preparing Ceviche. Estimated time: 5 minutes.
Ceviche is ready.
Preparing LocosConMayo. Estimated time: 5 minutes.
LocosConMayo is ready.
Preparing BeefWithFries. Estimated time: 4 minutes.
BeefWithFries is ready.
Queue is empty.
 */