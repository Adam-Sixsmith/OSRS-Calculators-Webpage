import levelXPmapping from "./OSRSLevelMap.js";

document.getElementById("TestButton").addEventListener("click",() => {
    //pulls the users level they want
    let userRequiredLevel = document.getElementById("TargetLevel").value;
    //tuns the level they input into a int
    let TargetLevel = parseInt(userRequiredLevel);
    //looks into the dictionary to find what is the total xp for that level
    let xpNeeded = levelXPmapping[TargetLevel];
    //gets the users current xp
    let currentXP = document.getElementById("currentXP").value;
    //calculation to work out the difference between the xp they have to the xp they need
    let xpToLevel = xpNeeded - currentXP
    //if statment to control if the user trys to put any number under 1 and over 99
    if (userRequiredLevel < 1 || userRequiredLevel > 99){
        document.getElementById("outcome").textContent = "Please only submit a number from 1 to 99."
    } else {    
        //edits the outcome <p> element on what they need to reach that level
        document.getElementById("outcome").innerHTML = "To reach level " + TargetLevel + ", you need " + xpToLevel.toLocaleString() + " XP."
        //this is based on my own findings using full outfit along with mahogany planks
        let averageXpPerContract = 4445
        //works out the total number of contracts needed, however this will be a float
        let totalContracts = xpToLevel / averageXpPerContract
        //takes the number above and rounds it to the next whole number
        let roundedNumberOfContacts = Math.ceil(totalContracts)
        
        document.getElementById("totalContracts").textContent = "You have roughly  " + roundedNumberOfContacts + " contracts left until your level!"
        //this is based on what the wiki states for mahogany planks
        let averagePlankXp = 344
        //works out the total number planks needed, however this will be a float
        let planksUserNeeds = xpToLevel / averagePlankXp
        //takes the number above and rounds it to the next whole number
        let roundedNumberOfPlanks = Math.ceil(planksUserNeeds)

        document.getElementById("planksNeeded").textContent = "You have roughly  " + roundedNumberOfPlanks + " planks to get for your level!"
    }});
