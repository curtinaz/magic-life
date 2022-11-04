var player1Life = document.querySelector("#player1life");
var player2Life = document.querySelector("#player2life");

document.querySelector("#player1_damage").addEventListener("click", () => {
    player1Life.innerHTML = player1Life.innerHTML - 1;
});

document.querySelector("#player1_regen").addEventListener("click", () => {
    player1Life.innerHTML = parseInt(player1Life.innerHTML) + 1;
});

document.querySelector("#player2_damage").addEventListener("click", () => {
    player2Life.innerHTML = player2Life.innerHTML - 1;
});

document.querySelector("#player2_regen").addEventListener("click", () => {
    player2Life.innerHTML = parseInt(player2Life.innerHTML) + 1;
});