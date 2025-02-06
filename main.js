function nextturn(){
        
        
}
function placefront(){
document.getElementById("fronterror").hidden = true;
    if ("frontselector" == 1){
        if (frontamount <= clo) and (frontspace >=frontamount){
        frontclo = frontclo + frontamount
        frontspace = frontspace - frontamount
        clo = clo - frontamount
    }else{
        document.getElementById("fronterror").hidden = false;
    }
    if ("frontselector" == 2){
        if (frontamount <= foo) and (frontspace >=frontamount){
        frontfoo = frontfoo + frontamount
        frontspace = frontspace - frontamount
        foo = foo - frontamount
    }else{
        document.getElementById("fronterror").hidden = false;
    }
    if ("frontselector" == 3){
        if (frontamount <= sna) and (frontspace >=frontamount){
        frontsna = frontsna + frontamount
        frontspace = frontspace - frontamount
        sna = sna - frontamount
    }else{
        document.getElementById("fronterror").hidden = false;
    }
    if ("frontselector" == 2){
        if (frontamount <= dri) and (frontspace >=frontamount){
        frontdri = frontdri + frontamount
        frontspace = frontspace - frontamount
        dri = dri - frontamount
    }else{
        document.getElementById("fronterror").hidden = false;
    }
    if ("frontselector" == 3){
        if (frontamount <= toy) and (frontspace >=frontamount){
        fronttoy = fronttoy + frontamount
        frontspace = frontspace - frontamount
        toy = toy - frontamount
    }else{
        document.getElementById("fronterror").hidden = false;
    }
    load()
}
function load(){
    document.getElementById("money").innerHTML = "you have " + money + "$";
    document.getElementById("clothing").innerHTML = "you have " + clo + "pieces of clothing";
    document.getElementById("money").innerHTML = "you have " + foo + " pieces of food";
    document.getElementById("snacks").innerHTML = "you have " + sna + " snacks";
    document.getElementById("drinks").innerHTML = "you have " + dri + " drinks";
    document.getElementById("toys").innerHTML = "you have " + toy + " toys";
    document.getElementById("spacefront").innerHTML = "you still have " + frontspace + " space avaliable";
}
var clo = 0;
var foo = 0;
var sna = 0;
var dri = 0;
var toy = 0;
var frontclo = 0;
var frontfoo = 0;
var frontsna = 0;
var frontdri = 0;
var fronttoy = 0;
var money = 100;
var frontspace = 200;
function buystuff(){
    if (buyselect == 1)
        clo = number(clo) + number(buyamount)
        money = money - (buyamount *  15) 
    if (buyselect == 2)
        foo = number(foo) + number(buyamount)
        money = money - (buyamount *  10) 
    if (buyselect == 3)
        sna = number(sna) + number(buyamount)
        money = money - (buyamount *  7) 
    if (buyselect == 4)
        dri = number(dri) + number(buyamount)
        money = money - (buyamount *  6) 
    if (buyselect == 5)
        toy = number(toy) + number(buyamount)
        money = money - (buyamount *  8) 
    load()
}
function frontarea(){
    document.getElementById("buyoption").hidden = true;
    document.getElementById("buyselect").hidden = true; 
    document.getElementById("buyamount").hidden = true;
    document.getElementById("buystart").hidden = true; 
    document.getElementById("clothing").hidden = true;
    document.getElementById("food").hidden = true;
    document.getElementById("snacks").hidden = true; 
    document.getElementById("drinks").hidden = true; 
    document.getElementById("toys").hidden = true;
    document.getElementById("spacefront").hidden = false;
    document.getElementById("frontplace").hidden = false;
    document.getElementById("frontamount").hidden = false; 
    document.getElementById("frontselector").hidden = false; 
    document.getElementById("fronttalk").hidden = false;  
    load()
}
function buyarea(){
    document.getElementById("buyoption").hidden = false;
    document.getElementById("buyselect").hidden = false;
    document.getElementById("buyamount").hidden = false; 
    document.getElementById("buystart").hidden = false; 
    document.getElementById("clothing").hidden = false;
    document.getElementById("food").hidden = false;
    document.getElementById("snacks").hidden = false; 
    document.getElementById("drinks").hidden = false; 
    document.getElementById("toys").hidden = false;
    document.getElementById("spacefront").hidden = true;
    document.getElementById("frontplace").hidden = true;
    document.getElementById("frontamount").hidden = true; 
    document.getElementById("frontselector").hidden = true; 
    document.getElementById("fronttalk").hidden = true;  
    load()
    
}
function continuestartend(){
    document.getElementById("introend").hidden = true;
    document.getElementById("continueintroend").hidden = true;
    document.getElementById("stats").hidden = false;
    document.getElementById("sell").hidden = false;
    document.getElementById("buy").hidden = false;
    document.getElementById("money").hidden = false; 
    buyarea()
}
function continuestart(){
    document.getElementById("continueintroend").hidden = false;
    document.getElementById("introend").hidden = false; 
    document.getElementById("continueintro").hidden = true;
    document.getElementById("intro").hidden = true;
}