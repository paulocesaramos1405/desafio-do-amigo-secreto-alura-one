let amigos = [];

function adicionarAmigo(){
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if(nomeAmigo === ""){
        alert("Insira um nome válido!");
        return;
    }

    if(amigos.includes(nomeAmigo)){
        alert(`O nome ${nomeAmigo} já está na lista, tente o sobrenome!`);
        return;
    }

    amigos.push(nomeAmigo);

    inputAmigo.value = "";

    atualizarLista();
}

function atualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo(){
    if(amigos.length === 0){
        alert("Não há amigos listados para sortear, insira os nomes para sortear");
        return;
    }

    const sorteioAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[sorteioAleatorio];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `O amigo sorteado: <strong>${amigoSorteado}</strong>`;

    const historicoSorteios = document.getElementById('historicoSorteios');
    const li = document.createElement('li')
    li.textContent = amigoSorteado;
    historicoSorteios.appendChild(li);

    amigos.splice(sorteioAleatorio, 1);

    setTimeout(reiniciarJogo, 5000);
}

function reiniciarJogo(){
    amigos = [];
    const listaAmigos = document.getElementById('listaAmigos')
    const resultado = document.getElementById('resultado')

    listaAmigos.innerHTML = "";
    resultado.innerHTML = "";
}