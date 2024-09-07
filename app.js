function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if (!campoPesquisa) {
        section.innerHTML = "<p>Nenhum jogador encontrado. Você deve digitar algo para a pesquisa.</p>"
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
  
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

        if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {

            resultados += `
            <div class="item-resultado">
                <div class="jogador">
                    <div class="nome-e-cargo">
                        <a href=${dado.link} target="_blank"><h2>${dado.titulo}</h2></a>
                        <span class="cargo">${dado.cargo || "Jogador"}</span>
                    </div>
                    <div class="imagem-container">
                        <img src="${dado.imagem}" alt="Foto de ${dado.titulo}" class="foto-jogador">
                    </div>
                </div>
                <p class="descricao-meta">${dado.descricao}</p>
            </div>
          `;
        }
    }

    if (!resultados ) {
        resultados = "<p>Nenhum jogador foi encontrado</p>"
    }
  
    // Atualiza o HTML da seção com os resultados
    section.innerHTML = resultados;
  }