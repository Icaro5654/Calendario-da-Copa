//DEIXANFDO A PAGINA DINAMICA UTILIZANDO O OBJETO DOCUMENT:
//acenstos graves (``) podem ser udsados pra quebra de linha
function createGame(player1, hour, player2) {
  return `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
    `
}
let delay = -0.4;
//crinado função pra gerar cards:
function createCard(date, day, games) {
    delay = delay + 0.4;
  return `
    <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </ul>
    </div>
    `
}

//DOCUMENT é o objeto do navegador
//Pegando o objeto do navegador:
//pegando o seletor APP do documento (INDEX.HTML):
document.querySelector("#cards").innerHTML = 
createCard("24/11", "quinta", 
createGame("brazil", "16:00", "serbia") +
 createGame("japan", "20:00", "south-korea")) + 

createCard("28/11","segunda",
  createGame("switzerland", "13:00", "brazil") +
    createGame("portugal", "16:00", "uruguai")
) +
createCard("02/12", "sexta", 
createGame("brazil", "16:00", "cameroon") +
createGame("uruguai", "13:00", "brazil")) +

createCard("07/12", "quarta", 
createGame("ghana", "13:00", "japan") +
createGame("comoros", "20:00", "jordan"))
// $ é uma interpolação poossivel dentro do acento grave (``), usada para executa um trecho de javaScript;
// chamando a função: ${createCard()};
//pode-se concatena (+) funçoes como acima; 
