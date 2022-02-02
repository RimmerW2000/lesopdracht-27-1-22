// Opdracht 2a: Hoeveel tv's zijn er al verkocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let result = 0

for (let i = 0; i < inventory.length; i++) {
    result = result + inventory[i].sold
}

console.log(result);



// Opdracht 2b: Zorg ervoor dat dit aantal in het groen wordt weergegeven op de pagina.

const soldTvs = document.getElementById("container1")

const soldTvsTitle = document.createElement("h3")
soldTvsTitle.textContent = "Het aantal verkochte tv's:"

const allSoldTvs = document.createElement("h4")
allSoldTvs.textContent = result
allSoldTvs.setAttribute("class", "result-color")


soldTvs.appendChild(soldTvsTitle);
soldTvs.appendChild(allSoldTvs);


//     Opdracht 2c: Hoeveel tv's heeft Tech It Easy ingekocht? Schrijf een script dat dit berekent. Log de uitkomst in de console.

let howMany = 0

for ( i = 0; i < inventory.length; i++) {
    howMany = howMany + inventory[i].originalStock
}

console.log(howMany);



// Opdracht 2d: Zorg ervoor dat dit aantal in het blauw wordt weergegeven op de pagina.

const allTvs = document.getElementById("container2")

const allTvsTitle = document.createElement("h3")
allTvsTitle.textContent = "Dit is het aantal tv's dat was ingekocht:"

const allBoughtTvs = document.createElement("h4")
allBoughtTvs.textContent = howMany
allBoughtTvs.setAttribute("class", "howMany-color")

allTvs.appendChild(allTvsTitle)
allTvs.appendChild(allBoughtTvs)

//     Opdracht 2e: Geef in het rood weer hoeveel tv's er nog verkocht moeten worden.

const needToSell = document.getElementById("container3")

const currentStock = document.createElement("h3")
currentStock.textContent = "Nog te verkopen tv's:"

const currentStockNumber = document.createElement("h4")
currentStockNumber.textContent = `${howMany - result}`
currentStockNumber.setAttribute("class", "current-color")

needToSell.appendChild(currentStock);
needToSell.appendChild(currentStockNumber);
