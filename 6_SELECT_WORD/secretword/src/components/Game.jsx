import PropTypes from 'prop-types'
import "./Game.css"
import { useState, useRef } from 'react'
const Game = ({
  verifyLetter,
  pickedCategory,
  letters,
  guessedLetters,
  wrongLetters,
  guesses,
  score,
}) => {
  const [letter, setLetters] = useState("")
  const letterInputRef = useRef(null) // referencia a posição de algum comando

  const handleSubmit = (e) => {
    e.preventDefault();

    verifyLetter(letter);
    setLetters("");
    letterInputRef.current.focus(); // Focando na minha referencia
    // Assim quando jogamos o cursor volta para o input
  }

  return (
   <div className="game">
    <p className="points">
      <span>Pontuação: {score}</span>
    </p>
    <h1>Adivinhe a palavra</h1>
    <h3 className="tip">
      Dica sobre a palavra: <span>{pickedCategory}</span>
    </h3>
    <p>Voce ainda tem {guesses} tentativa(s).</p>

    <div className="wordContainer">
      {letters.map((letter, i) => (
        guessedLetters.includes(letter) ? (
          <span key={i} className="letter">
            {letter}
          </span>
        ) : (
          <span key={i} className="blankSquare"></span>
        )
      ))}
    </div>
      <div className="letterContainer">
        <p>Tente adivinhar a palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
          type="text" 
          name="letter" 
          maxLength= "1" 
          required
          onChange={(e) => setLetters(e.target.value)}
          value={letter}
          ref={letterInputRef} // referencia de onde estar o input
          />
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
   </div>
  )
}

Game.propTypes = {
  verifyLetter: PropTypes.func.isRequired,
  pickedCategory: PropTypes.string.isRequired,
  letters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guessedLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  wrongLetters: PropTypes.arrayOf(PropTypes.string).isRequired,
  guesses: PropTypes.number.isRequired,
  score: PropTypes.number.isRequired,
};

export default Game
