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

const guessesQty = 3 // quantidade de chances

function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList);

  const [pickedWord, setPickedWord] = useState(""); // A Palavra
  const [pickedCategory, setPickedCategory] = useState(""); // A Categoria onde estar a palavra
  const [letters, setLetters] = useState([]); // Array de letras da palavra

  const [guessedLetters, setGuessedLetters] = useState([]); // Palavras acertadas
  const [wrongLetters, setWrongLetters] = useState([]);// Letras erradas
  const [guesses, setGuesses] = useState(guessesQty); // tentativas para acertar
  const [score, setScore] = useState(0) // pontuação a cada acerto

  const pickWordAndCategory = useCallback( () => {
    //Categoria Aleatoria:
    const categories = Object.keys(words) //As chaves do objeto word (Categorias)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)] // pegando categoria aleatoriamente

    // Palavra aleatoria:
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    return {word, category}
  }, [words])

  //start the secret word game
  const startGame = useCallback(() => {
    //clear all letter
    clearLettrStates();

    //pick word and pick category
    const {word, category} = pickWordAndCategory();

    
    // Create palavras em letras
    let wordLetters = word.split("");
    
    wordLetters = wordLetters.map((I) => I.toLowerCase())
    
    console.log(word, category)
    console.log(wordLetters);

    //Finalizando:
    setPickedWord(word);
    setPickedCategory(category);
    setLetters(wordLetters);

    //start jogo
    setGameStage(stages[1].name)
  }, [pickWordAndCategory]);

  // process the latter input
  const verifyLetter = (letter) => {
    const normalLizedLetter = letter.toLowerCase(); //Transformando tudo em maiusculo

    //Validar se a letra ja foi utilizada tanto as que acertaram como as que erraram:
    if(guessedLetters.includes(normalLizedLetter) || // letras usadas e acertadas
    wrongLetters.includes(normalLizedLetter) // letras usadas e erradas
    ){
      return;
    }

    //Incluindo letras acertadas
    if(letters.includes(normalLizedLetter)){
      setGuessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters, // copia do array
        normalLizedLetter, // adiciona a letra no final do array
      ])
    } else{
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalLizedLetter,
      ])

      setGuesses((actualGuesses) => actualGuesses - 1)
    }
  };

  const clearLettrStates = () => {
    setGuessedLetters([]);
    setWrongLetters([])
  }

  // check a derrota
  useEffect(() => { // useEffect monitora um dado
    if(guesses <= 0 ){
      //restarts the game
      clearLettrStates();
      setGameStage(stages[2].name) // finaliza o jogo
    }
  }, [guesses])

  //check a vitoria:
  useEffect(() => {
    const uniqueLetters = [...new Set(letters)] // retira as letras repetidas do array

    //win condition:
    if(guessedLetters.length === uniqueLetters.length){
      //ad score
      setScore((actualScore) => (actualScore += 100));

      //restart game with new word
      startGame();
    }

    console.log(uniqueLetters)
  }, [guessedLetters, letters, startGame])

  //restarts the game:
  const retry = () => {
    setScore(0);
    setGuesses(guessesQty);
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game
       verifyLetter={verifyLetter}
       pickedCategory={pickedCategory}
       letters = {letters}
       guessedLetters={guessedLetters}
       wrongLetters={wrongLetters}
       guesses={guesses}
       score={score}
       />}
      {gameStage === 'end' && <GameOver retry={retry} score={score}/>}
    </div>
  )
}

export default App
