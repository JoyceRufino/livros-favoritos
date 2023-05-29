import './index.css'

function CardRecomenda({titulo,subtitulo,descricao,img}) {
  return (
    <>
      <div className="container-card">
        <div className='card-title'>
            <h2>Talvez você se interesse por estes livros...</h2>
            <h3>{titulo}</h3>
            <h4>{subtitulo}</h4>
            <p>
              {descricao}
            </p>
        </div>
        <div>
            <img className='img' src={img} alt='capa'/>
            <button className='btn'>Saiba mais</button>
        </div>
      </div>
    </>
  );
}
export default CardRecomenda;
