"use strict";
;
const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary() {
        return `Name: ${this.name}`;
    }
};
const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary() {
        return `My Drink has ${this.sugar} grams of sugar`;
    }
};
const printSummary = (item) => {
    console.log(item.summary());
};
printSummary(oldCivic);
printSummary(drink);
