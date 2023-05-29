import React, { useState } from "react";
import "./pesquisa.css";
import { livros } from "./dadosPesquisa";

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  return (
    <>
      <section className="pesquisa-container">
        <h2 className="pesquisa-title">Já sabe por onde começar?</h2>
        <h3 className="pesquisar-subtitle">
          Encontre seu livro em nossa estante
        </h3>
        <input
          className="input"
          placeholder="Escreva sua próxima leitura"
          onBlur={(evento) => {
            const textoDigitado = evento.target.value;
            const resultadoPesquisa = livros.filter((livro) =>
              livro.nome.includes(textoDigitado)
            );
            setLivrosPesquisados(resultadoPesquisa);
          }}
        />
      </section>
      <div className="busca-container">
        {livrosPesquisados.map((livro) => (
          <div className="busca-container-item">
            <p>{livro.nome}</p>
            <img src={livro.src} alt="capa do livro" />
          </div>
        ))}
      </div>
    </>
  );
}

export default Pesquisa;
