// JavaScript Document trabalhando com classes e seletores evento

function tocaSom (seletorAudio) {
	
	const elemento = document.querySelector(seletorAudio);
	
	if (elemento  && elemento.localName ==='audio' ){ // elemento != null && elemento.localName ==='audio'
		
		//console.log(elemento);
			elemento.play();
	
	} 
	else {
		console.log('Elemento não encontrato');
	}
}

const listaDeTeclas = document.querySelectorAll('.tecla');



for (let contador = 0; contador < listaDeTeclas.length; contador++) {
	
	const tecla = listaDeTeclas[contador];
	const instrumento = tecla.classList[1];
	const idAudio = `#som_${instrumento}`; //template string
	

	//console.log(idAudio);
 
	tecla.onclick = function () {
		tocaSom(idAudio);
	}
 	tecla.onkeydown = function (evento) {
		
		//console.log(evento); // mostra a propriedade de um evento
		
		if ( evento.code === 'Space' || evento.code === 'Enter') {
				tecla.classList.add('ativa');
			}
	}
	
	tecla.onkeyup = function () {
		tecla.classList.remove('ativa');
	}
}

