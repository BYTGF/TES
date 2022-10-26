function suitComp() {
    let tanganComp = Math.floor(Math.random() * 3);
    if (tanganComp == 0){
        return "Gunting";
    }
    else if (tanganComp == 1){
        return "Batu";
    }
    else if (tanganComp == 2){
        return "Kertas";
    }
}

function hasilDuel(player, comp){
    if (player == "Gunting" && comp == "Batu"){
        return "Kalah"
    }
    else if (player == "Gunting" && comp == "Kertas"){
        return "Menang"
    }
    else if (player == "Batu" && comp == "Gunting"){
        return "Menang"
    }
    else if (player == "Batu" && comp == "Kertas"){
        return "Kalah"
    }
    else if (player == "Kertas" && comp == "Gunting"){
        return "Kalah"
    }
    else if (player == "Kertas" && comp == "Batu"){
        return "Menang"
    }
    else if (player == comp){
        return "Seri"
    }
}

function catatHistory(hasil){

    if (hasil == "Menang"){
        historym += 1;
        console.log("Menang : " + historym);
        historyMenang.textContent = historym;
    }
    else if (hasil == "Kalah"){
        historyk += 1;
        console.log("Kalah : " + historyk);
        historyKalah.textContent = historyk;
    }
    else if (hasil == "Seri"){
        historys += 1;
        console.log("Seri : " + historys);
        historySeri.textContent = historys;
    }
}

const pilGun = document.querySelector("#gunting");
const pilBat = document.querySelector("#batu");
const pilKer = document.querySelector("#kertas");
const reset = document.querySelector("#reset");

const historyMenang = document.querySelector("#hmenang");
const historyKalah = document.querySelector("#hkalah");
const historySeri = document.querySelector("#hseri");

let historym = 0;
let historyk = 0;
let historys = 0;

pilGun.addEventListener("click", function(){
    let verdict = hasilDuel("Gunting", suitComp());
    document.getElementById("result").innerHTML = verdict;
    document.getElementById("play").innerHTML = "Kamu Pilih Gunting";
    catatHistory(verdict);

});

pilBat.addEventListener("click", function(){
    let verdict = hasilDuel("Batu", suitComp());
    document.getElementById("result").innerHTML = verdict;
    document.getElementById("play").innerHTML = "Kamu Pilih Batu";
    catatHistory(verdict);
});

pilKer.addEventListener("click", function(){
    let verdict = hasilDuel("Kertas", suitComp());
    document.getElementById("result").innerHTML = verdict;
    document.getElementById("play").innerHTML = "Kamu Pilih Kertas";
    catatHistory(verdict);
});

reset.addEventListener("click", function(){
    historym = 0;
    historyk = 0;
    historys = 0;
    historyMenang.textContent = 0;
    historyKalah.textContent = 0;
    historySeri.textContent = 0;
});



