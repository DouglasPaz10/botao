function getRandomInt() {
    min = Math.ceil(1);
    max = Math.floor(60);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

function sim(){
  alert('boa escolha, não ira se arrepender')


}




function sumir(){
    let botao = document.getElementById("nao")
    let response = getRandomInt()
    botao.style.cssText = `left:${response}px;right:${response}px;top:${response};bottom:${response}px`

    


}