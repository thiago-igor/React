const Events = () => {

    const handleMyEvent = (e) => {
        console.log("Ativou o evento")
        console.log(e)// captura o evento
    }

    const renderSomething = (x) => {
        if(x) {
            return <h1>Rederizando isso!</h1>
        }
        else{
            return <h1>Tambem posso renderizar isso!</h1>
        }
    }

    return(
        <div>
           <div>
                <button onClick={handleMyEvent}>Clique aqui!</button> {/* Ao clicar chama a função handleMyEvent */}
           </div> 

           <div>
                <button onClick={() => console.log("Clicou")}>Clique aqui tambem</button>  {/* Função de uma linha podemos fazer aqui mesmo */}
           </div>

           {renderSomething(true)}
           {renderSomething(false)} {/*Chamado função */}
        </div>
    )
    
}

export default Events;