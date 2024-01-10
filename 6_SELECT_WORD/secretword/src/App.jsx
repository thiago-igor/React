//CSS:
import './App.css'

//React:
import { useCallback, useEffect, useState } from 'react';

//data:
import { wordsList } from './data/words';

//components
import StartScreen from './components/StartScreen';
import GameOver from './components/GameOver';
import Game from './components/game';



const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"},
]

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState(""); // A Palavra
  const [pickedCategory, setPickedCategory] = useState(""); // A Categoria onde estar a palavra
  const [letters, setLetters] = useState([]); // Array de letras da palavra

  const [guessedLetters, setGuessedLetters] = useState([]); // Palavras acertadas
  const [wrongLetters, setWrongLetters] = useState([]);// Palavras erradas
  const [guesses, setGuesses] = useState(3); // tentativas para acertar
  const [score, setScore] = useState(0) // pontuação a cada acerto

  const pickWordAndCategory = () => {
    //Categoria Aleatoria:
    const categories = Object.keys(words) //As chaves do objeto word (Categorias)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] // pegando categoria aleatoriamente

    // Palavra aleatoria:
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }

  //start the secret word game
  const startGame = () => {
    const {word, category} = pickWordAndCategory();

    
    // Create palavras em letras
    let wordLetters = word.split("");
    
    wordLetters = wordLetters.map((I) => I.toLowerCase())
    
    console.log(word, category)
    console.log(wordLetters);

    //Finalizando:
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(letters);

    //start jogo
    setGameStage(stages[1].name)
  };

  // process the latter input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }

  //restarts the game:
  const retry = () => {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
  )
}

export default App
