 
function currentTime(){
  let date = new Date()
  let hours = date.getHours()
  let sec = date.getSeconds()
   let min= date.getMinutes()
sec = pluusZezo(sec);
hours = pluusZezo(hours);
 min = pluusZezo(min);
   document.getElementById('time').innerHTML = hours+':' +min+':' + sec
setTimeout(currentTime, 1000)
}
currentTime()

function pluusZezo(number){
if (number < 10) {
return "0" + number
} else{
  return number
  }
}






