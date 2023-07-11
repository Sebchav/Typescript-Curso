(()=>{
    const hero: string = "Flash";

    function returnName():string{
        return hero
    }

    const activateBatiSignal = ():string=>{
        return "Batiseñar activada!";
    }

    console.log(typeof activateBatiSignal);

    const heroName:string = returnName();


})();