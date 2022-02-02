//
// Opdracht 1 - Array Methoden
// Opdracht 1a: Gebruik een array-methode om een array te maken met alle tv-type namen. Log de uitkomst in de console.



const tvType = inventory.map((types) => {
    return types.name
})

console.log(tvType);

// Opdracht 1b: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die volledig uitverkocht zijn. Log de uitkomst in de console.

const outOfStock = inventory.filter((tv)=>{
    return tv.sold === tv.originalStock
})

console.log(outOfStock);

// Opdracht 1c: Gebruik een array-methode om alle tv's te verzamelen (de hele objecten) die over AmbiLight beschikken. Log de uitkomst in de console.
const ambiLight = inventory.filter ((light) =>{
    return light.options.ambiLight === true
})

console.log(ambiLight);


// Opdracht 1d: Schrijf een functie die alle tv's van laagste naar hoogste prijs sorteert. Log de uitkomst in de console.

const prices = inventory.sort ((a, b) => a.price - b.price )

console.log(prices)