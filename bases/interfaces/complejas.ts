(()=>{

    interface Client {
        name: string,
        age?:number
        address: Address
    }

    interface Address {
        id: number,
        zip: string,
        city: string
    }

    const client: Client = {
        name: "Fernando",
        age:25,
        address: {
            id: 125,
            zip: "JDSJA",
            city: "OHAMA"
        }
    }

    const client2: Client = {
        name: "Melissa",
        age:30,
        address: {
            id: 135,
            zip: "JDSJsA",
            city: "Toronto"
        }
    }
})()