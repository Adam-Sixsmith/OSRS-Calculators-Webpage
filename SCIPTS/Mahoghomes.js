import levelXPmapping from "./OSRSLevelMap.js";


document.getElementById("TestButton").addEventListener("click",() => {
    let userRequiredLevel = document.getElementById("TargetLevel").value;

    let TargetLevel = parseInt(userRequiredLevel);

    let xpNeeded = levelXPmapping[TargetLevel];

    let currentXP = document.getElementById("currentXP").value;

    let xpToLevel = xpNeeded - currentXP

    if (userRequiredLevel < 1 || userRequiredLevel > 99){
        document.getElementById("outcome").textContent = "Please only submit a number from 1 to 99."
    } else {    
        document.getElementById("outcome").innerHTML = "To reach level " + TargetLevel + ", you need " + xpToLevel.toLocaleString() + " XP."

        let averageXpPerContract = 4445

        let totalContracts = xpToLevel / averageXpPerContract

        let roundedNumberOfContacts = Math.ceil(totalContracts)

        document.getElementById("totalContracts").textContent = "You have roughly  " + roundedNumberOfContacts + " contracts left until your level!"

        let averagePlankXp = 344

        let planksUserNeeds = xpToLevel / averagePlankXp

        let roundedNumberOfPlanks = Math.ceil(planksUserNeeds)

        document.getElementById("planksNeeded").textContent = "You have roughly  " + roundedNumberOfPlanks + " planks to get for your level!"
    }});
