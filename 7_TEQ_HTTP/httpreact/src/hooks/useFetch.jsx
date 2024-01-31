import { useState, useEffect } from "react";

// 4 - custom hook

export const useFetch = (url) => {
    const [data, setData] = useState(null)

    // 6 - Loading...
    const [loading, setLoading] = useState(false)

    //7 - Error:
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => { // busca dados na API
            // 6 - loading:
            setLoading(true); // enquanto carrega os dados
            // 7 - Error
            try {
                const res = await fetch(url);
            /* 'fetch' é utilizada para fazer uma requisição HTTP para a URL especificada. O 'await' é utilizado para esperar a conclusão da requisição antes de prosseguir. */

            const json = await res.json();
            // A resposta da requisição é convertida para JSON

            setData(json); // setando o valor para "data"
            } catch (error) {
                console.log(error.message)
                setError("Houve algum erro ao carregar os dados!")
            }
            // 6 - loading
            setLoading(false) // depois que carrega os dados

        };

        fetchData();
    }, [url]) // executa sempre que a url mudar


    return {data, loading, error};
}
