class Vehicle {
    drive(): void {
        console.log('run run');
    }

    honk(): void {
        console.log('beep');
    }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();