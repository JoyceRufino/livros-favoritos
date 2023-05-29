import React from "react";
import { livros } from "./dadosLancamentos";
import './lancamento.css';

function Lancamentos() {
  return (
    <div className="content">
      <h2 className="title"> Lançamentos</h2>
      <div className="container-lancamento">
          {livros.map((livro) => (
            <div className="lancamento-item">
                <img src={livro.src} alt='capa do livro'/>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Lancamentos;
