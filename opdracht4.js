// Opdracht 4a: Zorg ervoor dat er een string wordt gegenereerd voor de naam van een tv. Maak een functie die één enkel tv-object (zoals inventory[0] of inventory[6])
// verwacht en de naam op de volgende manier samenvoegt: [merk] [type] - [naam] zoals Philips 43PUS6504/12 - 4K TV of NIKKEI NH3216SMART - HD smart TV.
// Test of jouw functie ook werkt wanneer er een ander tv object wordt meegegeven.

function tvBrands(tv) {
    let branded = "";
    for (let i = 0; i < tv.length ; i++) {
        branded = `${inventory[i].brand}  ${inventory[i].type} - ${inventory[i].name}`
    }
    return (branded)
}

console.log(tvBrands(inventory[3].brand))

// const tvBrandss = document.getElementById("container4")
// container4.innerHTML = `${inventory[6].brand}  ${inventory[6].type} - ${inventory[6].name}`


// Opdracht 4b: Zorg ervoor dat de prijs van een tv netjes geformat wordt.
// Maak een functie die één tv-prijs als parameter verwacht (zoals 379) en daar de volgende string van maakt: €379,-. Test of jouw functie ook werkt wanneer er een andere tv-prijs wordt meegegeven.

function tvPrice(tv) {
    return `€${tv.price},-`;
}

console.log(tvPrice(inventory[3]))

// function tvPrices(tvPrice) {
//     let prices = "";
//     for (let i = 0; i < tvPrice.length; i++) {
//         prices = `${inventory[i].brand}`
//     }
//     return (prices);
// }
//
// console.log(tvPrices(inventory[3].price))

 // const tvPrice = document.getElementById("container4")
 // container4.innerHTML = `€${inventory[6].price},-`


// Opdracht 4c: Zorg ervoor dat er een string wordt gegenereerd voor alle beschikbare schermgroottes van één tv,
// in zowel inches als cm. Doe dit door een functie te schrijven die één screen-sizes array verwacht ( zoals inventory[0].availableSizes) en de groottes op de volgende manier samenvoegt:
// [schermgrootte] inches ([schermgrootte omgerekend]cm) | [schermgrootte] inches ([schermgrootte omgerekend]cm) etc. Als een tv maar één schermgrootte heeft ([32]) wordt de output 32 inch (81 cm). Wanneer een tv vier schermgroottes heeft
// ([43, 50, 55, 58]) wordt de output 43 inch (109 cm) | 50 inch (127 cm) | 58 inch (147 cm). Test of jouw functie werkt in alle mogelijke gevallen.

function tvSizes(tv) {
    let screenSize = "";
    for (let i = 0; i < tv.length; i++) {
        screenSize += `${tv[i]} inches (${Math.round (tv[i] * 2.54)} cm) | `;
    }
return (screenSize = screenSize.slice(0, -2))
}

console.log(tvSizes(inventory[3].availableSizes));

//  Opdracht 4d: Zorg ervoor de informatie van één van de tv's zoals het voorbeeld wordt weergegeven op de pagina.
//  Gebruik hiervoor de functies die je hebt gemaakt in opdracht 5a, 5b en 5c.

function allInfo(){
    const tvInfo = document.getElementById("container4")
    container4.innerHTML = `
    <h3> ${inventory[6].brand}  ${inventory[6].type} - ${inventory[6].name}</h3>
    <p>€${inventory[6].price},-</p>
    <p>${inventory[6].availableSizes} inch (${inventory[6].availableSizes * 2.54} cm) |</p>
`;
}

allInfo()



//  Opdracht 4e: Schrijf een functie die ALLE tv's weergeeft op de pagina zoals in het voorbeeld.
//  Dit wil je natuurlijk niet acht keer opnieuw schrijven, want nu zijn het 8 tv's, maar in de toekomst misschien wel 200!
//  Gebruik in deze functie de voorgaande functies die je hebt geschreven, om onderdelen van de data te formatten. De overkoepelende "tv-generator-functie" verwacht één parameter: de volledige array met tv-objecten.
//  Vergeet 'm niet aan te roepen!

// function alltvs(array){
//     const tvInfo = document.getElementById("container4")
//     container4.innerHTML = `
//     <p> ${inventory[1].brand}  ${inventory[1].type} - ${inventory[1].name}</p>
//     <p>€${inventory[1].price},-</p>
//     <p>${inventory[1].availableSizes} inch (${inventory[1].availableSizes * 2.54} cm) |</p>
// `;
// }
//
// alltvs(array)

function generateTV() {
    const tvInfo = document.getElementById("container4")
    let televisionList = "";
    for (let i = 0; i < inventory.length; i++) {
        televisionList += `
    <div class="tv">
    <h3>${tvBrands(inventory[i])}</h3>
    <p>${tvPrice(inventory[i])}</p>
    <p>${tvSizes(inventory[i].availableSizes)}</p>
    </div>`;
    }
    generateTV();


// ik kom er bij de laatste opdracht helaas  iet uit en zie niet precies wat ik fout heb gedaan....