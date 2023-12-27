import MyComponent from "./MyComponent";

const FristComponent = () => {
    // Comentario dentro do JS

    /*
    Comentario dentro do JS
    */

       return(
        <div>
            {/*Comentario dentro do return*/}
            <h1>Meu primeiro Component</h1>
            <p className="teste">Meu texto</p>
            <MyComponent />
        </div>
    )
}

export default FristComponent;