const TemplateExpressions = () => {

    const name = "Thiago"
    const data = {
        age: 31,
        job: "Programador",
    };

    return(
        <div>
            <h1>Olá {name}, tudo bem? </h1> {/*Tudo dentro de { } é JS */}
            <p>Você atua como: {data.job}</p>
            <p>Voce tem {data.age} anos</p>
        </div>
    )
}

export default TemplateExpressions;