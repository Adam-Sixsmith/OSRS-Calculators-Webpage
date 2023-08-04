const bosses = ["Barrows", "Wildy boss", "Nex", "Nightmare", "Tempoross", "Vorkath", "Wintertodt", "Zalcano", 
                "Zulrah", "Cox", "Tob", "Toa", "GOTR", "Volcanic Mine", "CG", "Duke Sucellus",
                 "Vardorvis", "The Leviathan", "The Whisperer"];
const wildy_boss = ["Artio/Callisto", "Calvar'ion/Vet'ion", "Spindel/Venenatis", "Chaos Elemental", "Chaos Fanatic", "Crazy Archaeologist", "Scorpia"]

function pickBoss(){
    var boss = bosses[Math.floor(Math.random()*bosses.length)];
    console.log(boss);

    let numberofkills = Math.floor(Math.random() * (50 - 10 + 1)) + 10;

    if (boss == "Wildy boss"){
        let chosenWildyBoss = wildy_boss[Math.floor(Math.random()*wildy_boss.length)];
        document.getElementById("bosspicked").textContent = "Boss Picked: " + chosenWildyBoss + " " + " " + numberofkills + " times.";

    } else {
        document.getElementById("bosspicked").textContent = "Boss Picked: " + boss + " " + " " + numberofkills + " times.";
    };
    
    console.log(numberofkills)

    
};