// loop methods: They are all methods that help loop over a list
// forEach, map, filter, find, sort, reduce

const trolls = [
    { name: 'anonymous', trolllevel: 9 },
    { name: 'krolleboolle', trolllevel: 22 },
    { name: 'krolleline', trolllevel: 27 },
];

/* 
    task add 5 trolllevel to all the trolls
    return trolls still
*/
// trolls.map((element, index, array) => console.log());

// console.log(trolls);

// 1. solution
const upgradedTrolls = trolls.map((troll) => {
    troll.trolllevel += 5;
    return troll;
});
console.log(upgradedTrolls);

// 2. solution
const doubleUpgradedTrolls = upgradedTrolls.map((troll) => ({
    name: troll.name,
    trolllevel: troll.trolllevel + 5
}));
console.log(doubleUpgradedTrolls);

// task 2: Create a list of trolls where the trolllevel is an odd number

// 1. solution
const oddNumberedTrolls = doubleUpgradedTrolls.filter((troll) => troll.trolllevel % 2 === 1);
console.log(oddNumberedTrolls);
