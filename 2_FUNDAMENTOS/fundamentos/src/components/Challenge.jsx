const Challenge = () => {

    const num1 = 10;
    const num2 = 15;

    return(
        <div>
            <h1>Soma de numeros: {num1} + {num2}</h1>
            <button onClick={() => console.log(num1 + num2)}>Somar numeros </button>
        </div>
    )
}

export default Challenge;