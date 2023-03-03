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
    let responsex = getRandomInt()
    let responsey = getRandomInt()
    botao.style.cssText = `left:${responsex}px;top:${responsey}px;`

}
