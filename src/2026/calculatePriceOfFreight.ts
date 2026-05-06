// Challenge: 4 https://github.com/diegopacheco/tech-resources/blob/master/react-native-resources.md#ooad-challenges---round-1
interface PriceCalculationStrategy {
    calculatePrice(volume: number, size: number): number;
}

class BoatPriceStrategy implements PriceCalculationStrategy {
    calculatePrice(volume: number, size: number): number {
        return volume * size * 1;
    }
}

class TruckPriceStrategy implements PriceCalculationStrategy {
    calculatePrice(volume: number, size: number): number {
        return volume * size * 2;
    }
}

class RailPriceStrategy implements PriceCalculationStrategy {
    calculatePrice(volume: number, size: number): number {
        return volume * size * 3;
    }
}

class PriceCalculationFactory {
    static createStrategy(transportType: string): PriceCalculationStrategy {
        switch (transportType.toLowerCase()) {
            case 'boat':
                return new BoatPriceStrategy();
            case 'truck':
                return new TruckPriceStrategy();
            case 'rail':
                return new RailPriceStrategy();
            default:
                throw new Error('Invalid transportation type');
        }
    }
}


const transportType = ['boat', "truck", "rail"];
const volume = 10;
const size = 5;

transportType.forEach(vehicle => {
    const strategy = PriceCalculationFactory.createStrategy(vehicle);
    const price = strategy.calculatePrice(volume, size);

    console.log(`Freight price for ${vehicle} transportation: $${price.toFixed(2)}`);
})

/*
Output:

npx ts-node src/calculatePriceOfFreight.ts

Freight price for boat transportation: $50.00

Freight price for truck transportation: $100.00

Freight price for rail transportation: $150.00
**/