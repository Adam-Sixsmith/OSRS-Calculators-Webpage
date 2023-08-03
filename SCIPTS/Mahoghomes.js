import levelXPmapping from "./OSRSLevelMap.js";


document.getElementById("TestButton").addEventListener("click",() => {
    let userRequiredLevel = document.getElementById("TargetLevel").value;

    let TargetLevel = parseInt(userRequiredLevel);

    if (isNaN(TargetLevel) || TargetLevel <1 || TargetLevel > 99){
        console.log("Please enter a number between 1 and 99");
    } else {
        let xpNeeded = levelXPmapping[TargetLevel];
        console.log("To reach level " + TargetLevel + ", you need " + xpNeeded + " XP.");
    }
});