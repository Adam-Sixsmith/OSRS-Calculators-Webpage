document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("casubmit").addEventListener("click",() => {

        let easyTasks = parseInt(document.getElementById("easytasks").value);
        let medTasks = parseInt(document.getElementById("medtasks").value);
        let hardTasks = parseInt(document.getElementById("hardtasks").value);
        let eliteTasks = parseInt(document.getElementById("elitetasks").value);
        let masterTasks = parseInt(document.getElementById("mastertasks").value);
        let grandmasterTasks = parseInt(document.getElementById("grandmastertasks").value);

        console.log(easyTasks + medTasks + hardTasks + eliteTasks + masterTasks + grandmasterTasks);

        let easyPoints = easyTasks;
        let medPoints = medTasks * 2;
        let hardPoints = hardTasks * 3;
        let elitePoints = eliteTasks * 4;
        let masterPoints = masterTasks * 5;
        let grandmasterPoints = grandmasterTasks * 6;

        let totalPoints = easyPoints + medPoints + hardPoints + elitePoints + masterPoints + grandmasterPoints;

        console.log("You have a total of " + totalPoints);

        let tierClass;

        if (totalPoints < 115){
            tierClass = "easy";
            document.getElementById("currentTier").textContent = "You are currently at the easy tier";
        } else if (totalPoints < 304 && totalPoints >= 115){
            tierClass = "medium";
            document.getElementById("currentTier").textContent = "You are currently at the medium tier";
        } else if (totalPoints < 820 && totalPoints >= 304){
            tierClass = "hard";
            document.getElementById("currentTier").textContent = "You are currently at the hard tier";
        } else if (totalPoints < 1465 && totalPoints >= 820){
            tierClass = "elite";
            document.getElementById("currentTier").textContent = "You are currently at the elite tier";
        } else if (totalPoints < 2005 && totalPoints >= 1465){
            tierClass = "master";
            document.getElementById("currentTier").textContent = "You are currently at the master tier";
        } else if(totalPoints >= 2005){
            tierClass = "grandmaster";
            document.getElementById("currentTier").textContent = "You are currently at the grandmaster tier";
        }

        console.log(tierClass);

        if (tierClass === "easy"){
            let pointsUntilNext = 115 - totalPoints
            document.getElementById("nextTier").textContent = "You need " + pointsUntilNext + " points until the next tier.";
        } else if (tierClass === "medium"){
            let pointsUntilNext = 304 - totalPoints
            document.getElementById("nextTier").textContent = "You need " + pointsUntilNext + " points until the next tier.";
        } else if (tierClass === "hard"){
            let pointsUntilNext = 820 - totalPoints
            document.getElementById("nextTier").textContent = "You need " + pointsUntilNext + " points until the next tier.";
        } else if (tierClass === "elite"){
            let pointsUntilNext = 1465 - totalPoints
            document.getElementById("nextTier").textContent = "You need " + pointsUntilNext + " points until the next tier.";
        } else if (tierClass === "master"){
            let pointsUntilNext = 2005 - totalPoints
            document.getElementById("nextTier").textContent = "You need " + pointsUntilNext + " points until the next tier.";
        } else if (tierClass === "grandmaster"){
            document.getElementById("nextTier").textContent = "You'e already a grandmaster!?.........";
        } 
    });
});


