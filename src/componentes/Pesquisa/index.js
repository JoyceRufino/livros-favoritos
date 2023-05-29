import React, { useState } from "react";
import "./pesquisa.css";
import { livros } from "./dadosPesquisa";

function Pesquisa() {
  const [livrosPesquisados, setLivrosPesquisados] = useState([]);

  console.log(livrosPesquisados);

  return (
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
  );
}

export default Pesquisa;
