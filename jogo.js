//função para captar tamanho do body
var altura = 0
var largura = 0
var vidas = 1 
var tempo = 60

var criarMosquitoTempo = 2000

var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'facil'){
     criarMosquitoTempo = 2000
}else if(nivel === 'normal'){
     criarMosquitoTempo = 1000
}else{
     criarMosquitoTempo = 750
}




function ajustaTamanhoJogo(){
     altura = window.innerHeight
     largura = window.innerWidth

     console.log(altura, largura  +  " Altura e largura")
}

ajustaTamanhoJogo()

var cronometro = setInterval(function(){
     tempo -= 1

     if(tempo < 0 ){
          clearInterval(cronometro)
          clearInterval(criaMosquito)
          window.location.href='voce_ganhou.html'
     }else {
          document.getElementById('cronometro').innerHTML = tempo
     }
     
},1000)

//função para cordenada aleatoria da imagem
function posicaoRandomica(){
     //remover mosquito anterior caso exista e remover vidas 
     if(document.getElementById('mosquito')){
          if(vidas>3){
               window.location.href='fim_de_jogo.html'
          }else{
          document.getElementById('mosquito').remove()

          document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"

          vidas++
     }
     }

     var posicaoX = Math.floor(Math.random() * largura) - 90
     var posicaoY =  Math.floor(Math.random() * altura) - 90

     posicaoX = posicaoX < 0 ? 0 : posicaoX
     posicaoY = posicaoY < 0 ? 0 : posicaoY


     console.log(posicaoX, posicaoY + ' Posição X e Y')

     //criar elemento html
     var mosquito =  document.createElement('img')
     mosquito.src = 'imagens/mosca.png'
     mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
     mosquito.style.left = posicaoX + 'px'
     mosquito.style.top = posicaoY + 'px'
     mosquito.style.position = 'absolute'
     mosquito.id = 'mosquito'
     mosquito.onclick = function(){
          this.remove()
     }

     document.body.appendChild(mosquito)

     tamanhoAleatorio()
}

// Função para tamanho aleatório do mosquito
function tamanhoAleatorio(){
     var classe =Math.floor(Math.random() * 3)
     
     switch(classe){
          case 0:
               return 'mosquito1'
          case 1:
               return 'mosquito2'
          case 2:
               return 'mosquito3'
     }
}

// Função para lado aleatorio do mosquito
function ladoAleatorio(){
     var classe = Math.floor(Math.random() * 2)
     switch(classe){
          case 0:
               return 'ladoA'
          case 1:
               return 'ladoB'
     }
}