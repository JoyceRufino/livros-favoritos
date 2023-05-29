import React from "react";
import "./header.css";
import perfil from '../../assets/image/perfil.svg';
import sacola from '../../assets/image/sacola.svg';

const textOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

const icones = [
  perfil, sacola
]

const Header = () => {
  return (
    <div className="categoria-container">
      <ul className="categorias">
        {textOpcoes.map((texto) => (
          <li className="categoria">{texto}</li>
        ))}
      </ul>
      <ul className="icones">
        {icones.map((icone) => (
          <li className="icone"><img src={icone} alt='icone de sacola'/></li>
        ))}
      </ul>
    </div>
  );
};

export default Header;
