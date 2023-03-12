function celToFah(cel){
    let value = (cel * 1.8) + 32
    return value.toFixed(2) + " ฟาเรนไฮต์"

}
function fahToCel(fah){
    let value = (fah - 32) * 5 / 9
   return value.toFixed(2) + " องศาเซลเซียส"
}
function display(elementId, value){
    document.getElementById(elementId).innerHTML = "<i>" + value  + "</i>"
}
function toFahProgram(value){
    document.getElementById("result").innerHTML = (celToFah(value))
}
function toCelProgram(value){
    document.getElementById("result").innerHTML = (fahToCel(value))
}
