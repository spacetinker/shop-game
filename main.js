var clothingdemand = 1;
var fooddemand = 1;
var snackdemand = 1;
var drinkdemand = 1;
var toydemand = 1;
var totaldemand = toydemand + drinkdemand + snackdemand + fooddemand + clothingdemand;

function nextturn() {
    for (let i = 0; i < Math.floor(Math.random() * 24) + 2; i++) {
        let productpick = Math.floor(Math.random() * totaldemand) + 1;
        if (productpick <= clothingdemand && frontclo >= 1) {
            frontclo--;
            money += 18;
        } else if (productpick <= fooddemand + clothingdemand && frontfoo >= 1) {
            frontfoo--;
            money += 12;
        } else if (productpick <= snackdemand + fooddemand + clothingdemand && frontsna >= 1) {
            frontsna--;
            money += 10;
        } else if (productpick <= drinkdemand + snackdemand + fooddemand + clothingdemand && frontdri >= 1) {
            frontdri--;
            money += 8;
        } else if (productpick <= totaldemand && fronttoy >= 1) {
            fronttoy--;
            money += 10;
        }
    }
    load();
}

function load() {
    document.getElementById("money").innerHTML = "you have " + money + "$";
    document.getElementById("clothing").innerHTML = "you have " + clo + " pieces of clothing";
    document.getElementById("food").innerHTML = "you have " + foo + " pieces of food";
    document.getElementById("snacks").innerHTML = "you have " + sna + " snacks";
    document.getElementById("drinks").innerHTML = "you have " + dri + " drinks";
    document.getElementById("toys").innerHTML = "you have " + toy + " toys";
    document.getElementById("spacefront").innerHTML = "you still have " + frontspace + " space available";
}

var clo = 0, foo = 0, sna = 0, dri = 0, toy = 0;
var frontclo = 0, frontfoo = 0, frontsna = 0, frontdri = 0, fronttoy = 0;
var money = 100, frontspace = 200;

function buystuff() {
    let buyAmount = parseInt(document.getElementById("buyamount").value);
    let buySelect = parseInt(document.getElementById("buyselect").value);

    if (buySelect === 1) { clo += buyAmount; money -= buyAmount * 15; }
    if (buySelect === 2) { foo += buyAmount; money -= buyAmount * 10; }
    if (buySelect === 3) { sna += buyAmount; money -= buyAmount * 7; }
    if (buySelect === 4) { dri += buyAmount; money -= buyAmount * 6; }
    if (buySelect === 5) { toy += buyAmount; money -= buyAmount * 8; }

    load();
}

function placefront() {
    let frontAmount = parseInt(document.getElementById("frontamount").value);
    let frontSelect = parseInt(document.getElementById("frontselector").value);

    if (frontspace >= frontAmount) {
        if (frontSelect === 1 && clo >= frontAmount) { clo -= frontAmount; frontclo += frontAmount; }
        else if (frontSelect === 2 && foo >= frontAmount) { foo -= frontAmount; frontfoo += frontAmount; }
        else if (frontSelect === 3 && sna >= frontAmount) { sna -= frontAmount; frontsna += frontAmount; }
        else if (frontSelect === 4 && dri >= frontAmount) { dri -= frontAmount; frontdri += frontAmount; }
        else if (frontSelect === 5 && toy >= frontAmount) { toy -= frontAmount; fronttoy += frontAmount; }
        else {
            document.getElementById("fronterror").hidden = false;
            return;
        }
        frontspace -= frontAmount;
        document.getElementById("fronterror").hidden = true;
    }
    load();
}
function tutorialclose() {
    
}
function continuestartend() {
    document.getElementById("introend").hidden = true;
    document.getElementById("continueintroend").hidden = true;
    document.getElementById("stats").hidden = false;
    document.getElementById("sell").hidden = false;
    document.getElementById("buy").hidden = false;
    document.getElementById("money").hidden = false;
    document.getElementById("tutorialtext").hidden = false;
}

function continuestart() {
    document.getElementById("continueintroend").hidden = false;
    document.getElementById("introend").hidden = false;
    document.getElementById("continueintro").hidden = true;
    document.getElementById("intro").hidden = true;
}
function showStats() {
    document.getElementById("money").hidden = false;
    document.getElementById("clothing").hidden = false;
    document.getElementById("food").hidden = false;
    document.getElementById("snacks").hidden = false;
    document.getElementById("drinks").hidden = false;
    document.getElementById("toys").hidden = false;
    document.getElementById("fronttalk").hidden = true;
    document.getElementById("frontselector").hidden = true;
    document.getElementById("frontamount").hidden = true;
    document.getElementById("frontplace").hidden = true;
    document.getElementById("spacefront").hidden = true;
    document.getElementById("buyoption").hidden = true;
    document.getElementById("buyselect").hidden = true;
    document.getElementById("buyamount").hidden = true;
    document.getElementById("buystart").hidden = true;
}

function showBuyMenu() {
    document.getElementById("buyoption").hidden = false;
    document.getElementById("buyselect").hidden = false;
    document.getElementById("buyamount").hidden = false;
    document.getElementById("buystart").hidden = false;
    document.getElementById("fronttalk").hidden = true;
    document.getElementById("frontselector").hidden = true;
    document.getElementById("frontamount").hidden = true;
    document.getElementById("frontplace").hidden = true;
    document.getElementById("spacefront").hidden = true;
    document.getElementById("clothing").hidden = true;
    document.getElementById("food").hidden = true;
    document.getElementById("snacks").hidden = true;
    document.getElementById("drinks").hidden = true;
    document.getElementById("toys").hidden = true;
}

function showStorefront() {
    document.getElementById("fronttalk").hidden = false;
    document.getElementById("frontselector").hidden = false;
    document.getElementById("frontamount").hidden = false;
    document.getElementById("frontplace").hidden = false;
    document.getElementById("spacefront").hidden = false;
    document.getElementById("clothing").hidden = true;
    document.getElementById("food").hidden = true;
    document.getElementById("snacks").hidden = true;
    document.getElementById("drinks").hidden = true;
    document.getElementById("toys").hidden = true;
    document.getElementById("buyoption").hidden = true;
    document.getElementById("buyselect").hidden = true;
    document.getElementById("buyamount").hidden = true;
    document.getElementById("buystart").hidden = true;
}
