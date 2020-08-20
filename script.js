let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset');

let seconds = document.getElementById('seconds');
let minuts = document.getElementById('minuts');
let hours = document.getElementById('hours');

let s=0;
let m=0;
let h=0;

let interval;

start.onclick = enteryPoint;
stop.onclick = stopFun;
reset.onclick = resetFun;

function enteryPoint(){
	clearInterval(interval);
	interval = setInterval(updateTime, 1000);
}

function updateTime(){
	++s;
	seconds.innerHTML = `: ${timeEdit(s)}`;
	if (s > 59){
		s=0;
		m++;
		minuts.innerHTML = `: ${timeEdit(m)}`;
	}
	if(m > 59){
		m=0;
		h++;
		hours.innerHTML = `${timeEdit(h)}`;
	}
}

function stopFun(){
	clearInterval(interval);
	seconds.innerHTML = `: ${timeEdit(s)}`;
	minuts.innerHTML = `: ${timeEdit(m)}`;
	hours.innerHTML = `${timeEdit(h)}`;
}

function resetFun(){
	clearInterval(interval);
	s=0;m=0;h=0;
    seconds.innerHTML = `: 00`;
	minuts.innerHTML = `: 00`;
	hours.innerHTML = `00 `;
}

function timeEdit(t){
	if (t < 10){
		t = '0' +t;
	}
	return t;
}