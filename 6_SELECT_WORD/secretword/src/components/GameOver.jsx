import PropTypes from 'prop-types'
import "./GameOver.css"
const GameOver = ({retry, score}) => {
  return (
    <div>
      <h1>Fim de Jogo</h1>
      <h2>
        A sua pontuação foi: <span>{score}</span>
      </h2>
      <button onClick={retry}>Restars</button>
    </div>
  )
}


GameOver.propTypes = {
    retry: PropTypes.func.isRequired,
    score: PropTypes.number.isRequired,
  };

export default GameOver
