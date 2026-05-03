let chamados = JSON.parse(localStorage.getItem("chamados")) || [];

function salvar() {
  localStorage.setItem("chamados", JSON.stringify(chamados));
}

function adicionarChamado() {
  const titulo = document.getElementById("titulo").value;
  const status = document.getElementById("status").value;

  if (!titulo) return alert("Digite um título");

  chamados.push({ titulo, status });
  salvar();
  render();
}

function render() {
  const lista = document.getElementById("lista");
  lista.innerHTML = "";

  let abertos = 0, andamento = 0, fechados = 0;

  chamados.forEach((c, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${c.titulo} - ${c.status}
      <button onclick="remover(${index})">❌</button>`;

    lista.appendChild(li);

    if (c.status === "Aberto") abertos++;
    if (c.status === "Em andamento") andamento++;
    if (c.status === "Fechado") fechados++;
  });

  document.getElementById("abertos").textContent = abertos;
  document.getElementById("andamento").textContent = andamento;
  document.getElementById("fechados").textContent = fechados;
}

function remover(index) {
  chamados.splice(index, 1);
  salvar();
  render();
}

render();