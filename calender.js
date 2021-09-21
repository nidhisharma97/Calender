
const lang = navigator.language;
let date = new Date();

let month = date.getMonth();
let dayNum = date.getDate();
let dayName = date.toLocaleString(lang,{weekday: "long"});
let monthName = date.toLocaleString(lang,{month: "long"});
let year = date.getFullYear();

document.getElementById("month").innerHTML = monthName;
document.getElementById("dayName").innerHTML = dayName;
document.getElementById("dayNum").innerHTML = dayNum;
document.getElementById("year").innerHTML = year;
