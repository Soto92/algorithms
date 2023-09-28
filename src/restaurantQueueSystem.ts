// Challenge 05: https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges---round-1
interface Dish {
    name: string;
    cookTime: number;
}

class LocosConMayo implements Dish {
    name = "LocosConMayo";
    cookTime = 5;
}

class Ceviche implements Dish {
    name = "Ceviche";
    cookTime = 4;
}

interface DishFactory {
    createDish(): Dish;
}

class LocosConMayoFactory implements DishFactory {
    createDish() {
        return new LocosConMayo();
    }
}

class CevicheFactory implements DishFactory {
    createDish() {
        return new Ceviche();
    }
}

interface TimeEstimationStrategy {
    estimateTime(dish: Dish): number;
}

class SimpleEstimationStrategy implements TimeEstimationStrategy {
    estimateTime(dish: Dish) {
        return dish.cookTime;
    }
}

class ComplexEstimationStrategy implements TimeEstimationStrategy {
    estimateTime(dish: Dish) {
        return dish.cookTime * 1.5;
    }
}

class QueueItem {
    constructor(public dish: Dish, public strategy: TimeEstimationStrategy) {}
    estimateCompletionTime() {
        return this.strategy.estimateTime(this.dish);
    }
}

class RestaurantQueue {
    private queue: QueueItem[] = [];
    addToQueue(dishNames: string[], estimationStrategy: TimeEstimationStrategy) {
        for (const dishName of dishNames) {
            const dishFactory = this.getDishFactoryByName(dishName);
            if (dishFactory) {
                const dish = dishFactory.createDish();
                const queueItem = new QueueItem(dish, estimationStrategy);
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
                return new LocosConMayoFactory();
            case "ceviche":
                return new CevicheFactory();
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
        const completionTime = nextItem?.estimateCompletionTime();
        if (completionTime !== undefined) {
            console.log(`Preparing ${nextItem?.dish.name}. Estimated time: ${completionTime} minutes.`);
            setTimeout(() => {
                console.log(`${nextItem?.dish.name} is ready.`);
                this.processQueue();
            }, completionTime * 1000);
        }
    }
}

const queue = new RestaurantQueue();
queue.addToQueue(["Ceviche", "LocosConMayo"], new ComplexEstimationStrategy());

queue.processQueue();

/**
npx ts-node src/restaurantQueueSystem.ts
Added Ceviche to the queue.
Added LocosConMayo to the queue.
Preparing Ceviche. Estimated time: 6 minutes.
Ceviche is ready.
Preparing LocosConMayo. Estimated time: 7.5 minutes.
LocosConMayo is ready.
Queue is empty.
 */