import PropTypes from 'prop-types'
import "./GameOver.css"
const GameOver = ({retry}) => {
  return (
    <div>
      <h1>Game Over</h1>
      <button onClick={retry}>Restars</button>
    </div>
  )
}


GameOver.propTypes = {
    retry: PropTypes.func.isRequired,
  };

export default GameOver
