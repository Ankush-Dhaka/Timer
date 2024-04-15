let endDate = '16 April 2024 10:00 PM';

document.getElementById('end-date').innerText = endDate;
let inputs = document.querySelectorAll('input');


function clock(){
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now)/1000;
    inputs[0].value=(Math.floor(diff/3600/24));
    inputs[1].value=(Math.floor(diff/3600)%24);
    inputs[2].value=(Math.floor(diff/60)%60);
    inputs[3].value=(Math.floor(diff%60));
    
}
clock();

/*
1day = 24hrs
1hr= 60mins
60min= 3600secs
*/

setInterval(()=>{clock()},1000)