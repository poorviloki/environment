
const $climate = document.getElementById("climate");
const $consumption = document.getElementById("consumption");
const $resources = document.getElementById("resources");
const $people = document.getElementById("people");

$climate.onclick = () => {
    document.body.style.backgroundImage =
        "url('https://i1.faceprep.in/prograd-junior/climate-change-bg.png ')";
    document.body.style.backgroundSize = "100% 100%";
    $climate.style.backgroundColor = "#2f80ed";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "2,911,343,321";
    document.getElementById("cause").innerHTML =
        "Tons of co2 emitted in atmosphere.";
    document.getElementById("save").innerHTML =
        "Do you bit! Save tress,use renewable resources and prefer to travel green.";
};

$consumption.onclick = () => {
    document.body.style.backgroundImage =
        "url('https://i1.faceprep.in/prograd-junior/food-wastage-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $consumption.style.backgroundColor = "#27ae60";
    $resources.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    $climate.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "878,262,909";
    document.getElementById("cause").innerHTML = "Tons of food lost or wasted.";
    document.getElementById("save").innerHTML =
        "Do your bit! Shop only what you need,eat only what you need and always save the left overs.";
};

$resources.onclick = () => {
    document.body.style.backgroundImage =
        "url('https://i1.faceprep.in/prograd-junior/natural-resources-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $resources.style.backgroundColor = "#f2994a";
    $consumption.style.backgroundColor = "transparent";
    $people.style.backgroundColor = "transparent";
    $climate.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "347,822,203";
    document.getElementById("cause").innerHTML = "Tons of minerals extracted from Earth.";
    document.getElementById("save").innerHTML = "Do your bit !Grow more trees and believe in 'Reduce, Reuse and Recycle .";

};

$people.onclick = () => {
    document.body.style.backgroundImage =
        "url('https://i1.faceprep.in/prograd-junior/poverty-bg.png')";
    document.body.style.backgroundSize = "100% 100%";
    $people.style.backgroundColor = "#eb5757";
    $consumption.style.backgroundColor = "transparent";
    $resources.style.backgroundColor = "transparent";
    $climate.style.backgroundColor = "transparent";
    document.getElementById("amount").innerHTML = "822,773,598";
    document.getElementById("cause").innerHTML = "Millions of people die of hunger.";
    document.getElementById("save").innerHTML = "Do your bit!Never waste food and always feed the needy .";


    

};