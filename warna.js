// Tombol Ubah Warna
const uWarna = document.getElementById('ubahWarna');
uWarna.addEventListener('click', function(){
	document.body.classList.toggle('biru-muda');
	document.body.style.backgroundColor = '';
});


// Tombol Acak Warna
const wAcak = document.createElement('button');
const tAcak = document.createTextNode('Acak Warna');
wAcak.appendChild(tAcak);
uWarna.after(wAcak);
wAcak.setAttribute('type', 'button');
	// Event Tombol Acak Warna
	wAcak.addEventListener('click', function(){
		const r = (Math.round(Math.random() * 255));
		const g = (Math.round(Math.random() * 255));
		const b = (Math.round(Math.random() * 255));
		document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
	});

// Style Tombol
const tombol = document.querySelectorAll('button');
tombol.forEach(function(button){
	button.style.margin = '10px';
	button.style.padding = '5px';
	button.style.fontSize = '15px'
})

