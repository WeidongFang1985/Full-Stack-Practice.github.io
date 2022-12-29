const pilots = [
    {
        id: 10,
        name: "Poe Dameron",
        years: 14,
    },
    {
        id: 2,
        name: "Temmin 'Snap' Wexley",
        years: 30,
    },
    {
        id: 41,
        name: "Tallissan Lintra",
        years: 16,
    },
    {
        id: 99,
        name: "Ello Asty",
        years: 22,
    },
];
//output  1.totalYears of pilots
console.log(pilots.reduce((acc, pilot) => acc += pilot.years, 0));

//2. find which pilot is the most experienced one
console.log(pilots.reduce((old, pilot) => (old.years || 0) < pilot.years ? pilot : old, {}));