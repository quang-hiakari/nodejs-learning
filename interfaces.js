;
var oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary: function () {
        return "Name: ".concat(this.name);
    }
};
var drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary: function () {
        return "My Drink has ".concat(this.sugar, " grams of sugar");
    }
};
var printSummary = function (item) {
    console.log(item.summary());
    // console.log(`Name: ${vehicle.name}`);
    // console.log(`Year: ${vehicle.year}`);
    // console.log(`Broken? ${vehicle.broken}`);
};
printSummary(oldCivic);
printSummary(drink);
