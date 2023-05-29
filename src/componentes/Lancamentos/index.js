import React from "react";
import { livros } from "./dadosLancamentos";
import "./lancamento.css";
import CardRecomenda from "../CardRecomenda";
import  imagemLivro from "../../assets/image/livro2.png";

function Lancamentos() {
  return (
    <div className="content">
      <h2 className="title"> Lançamentos</h2>
      <div className="container-lancamento">
        {livros.map((livro) => (
          <div className="lancamento-item">
            <img src={livro.src} alt="capa do livro" />
          </div>
        ))}
      </div>
      <CardRecomenda
        titulo="Tecnologias"
        subtitulo="Angular 11"
        descricao="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={imagemLivro}
      />
      <CardRecomenda
        titulo="Tecnologias"
        subtitulo="Angular 12"
        descricao="Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        img={imagemLivro}
      />
    </div>
  );
}

export default Lancamentos;
