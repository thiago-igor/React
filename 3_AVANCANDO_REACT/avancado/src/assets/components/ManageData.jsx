import {useState} from "react";
const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15); // hook
    return(
        <div>
            <div>
            <p>Valor: {someData}</p>
            <button onClick={() => (someData = 30)}>Mudar variavel</button> {/* Nao conseguimos alterar */}
            </div>

            <div>
                <p>Valor: {number}</p>
                <button onClick={()=> setNumber(30)}>Mudar a variavel</button> {/* Conseguimos alterar */}
            </div>
        </div>

        
    )
}

export default ManageData;