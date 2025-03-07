let amigos = [];
const btnAgregar = document.getElementById("btnAgregar");
const inputAmigo = document.getElementById("amigo");
const listaAmigos = document.getElementById("listaAmigos");
const btnSortear = document.getElementById("btnSortear");
const resultado = document.getElementById("resultado");
const btnReiniciar = document.getElementById("btnReiniciar");


btnAgregar.addEventListener("click", () => {
    const nombreAmigo = inputAmigo.value.trim();
    
    if (nombreAmigo === "") {
        alert("¡El nombre no puede estar vacío!");
        return;
    }

    if (amigos.includes(nombreAmigo)) {
        alert("¡Este amigo ya está en la lista!");
        return;
    }

    amigos.push(nombreAmigo);
    inputAmigo.value = ""; 
    renderizarLista();
});

function renderizarLista() {
    listaAmigos.innerHTML = "";
    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}


btnSortear.addEventListener("click", () => {
    if (amigos.length < 2) {
        alert("¡Debe haber al menos dos amigos para realizar el sorteo!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * amigos.length);
    const amigoAleatorio = amigos[randomIndex];
    
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoAleatorio}</li>`;
});

btnReiniciar.addEventListener("click", () => {
    amigos = [];
    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
    inputAmigo.value = "";
});
