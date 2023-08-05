//list of bosses
const bosses = ["Barrows", "Wildy boss", "Nex", "Nightmare", "Tempoross", "Vorkath", "Wintertodt", "Zalcano", 
                "Zulrah", "Cox", "Tob", "Toa", "GOTR", "Volcanic Mine", "CG", "Duke Sucellus",
                 "Vardorvis", "The Leviathan", "The Whisperer"];
//list of wilderness bosses should wildyboss be picked from the top
const wildyBoss = ["Artio/Callisto", "Calvar'ion/Vet'ion", "Spindel/Venenatis", "Chaos Elemental", "Chaos Fanatic", "Crazy Archaeologist", "Scorpia"]

function pickBoss(){
    //way to randomally pick from the bosses list
    var boss = bosses[Math.floor(Math.random()*bosses.length)];
    //picks a random number between 10 and 50
    let numberofkills = Math.floor(Math.random() * (50 - 10 + 1)) + 10;
    //if statment to handle if wildy boss is picked from the bosses list
    if (boss == "Wildy boss"){
        let chosenWildyBoss = wildyBoss[Math.floor(Math.random()*wildyBoss.length)];
        document.getElementById("bosspicked").textContent = "Boss Picked: " + chosenWildyBoss + " " + " " + numberofkills + " times.";

    } else {
        document.getElementById("bosspicked").textContent = "Boss Picked: " + boss + " " + " " + numberofkills + " times.";
    };   
};