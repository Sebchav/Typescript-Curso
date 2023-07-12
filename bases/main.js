"use strict";
(() => {
    let flash = {
        name: "Barry Allen",
        age: 24,
        powers: ["Super velocidad", "Viajar en el tiempo"]
    };
    let superman = {
        name: "Clark Kent",
        age: 60,
        powers: ["Super velocidad"],
        getName() {
            return this.name;
        }
    };
})();
(() => {
    const client = {
        name: "Fernando",
        age: 25,
        address: {
            id: 125,
            zip: "JDSJA",
            city: "OHAMA"
        }
    };
    const client2 = {
        name: "Melissa",
        age: 30,
        address: {
            id: 135,
            zip: "JDSJsA",
            city: "Toronto"
        }
    };
})();
//# sourceMappingURL=main.js.map