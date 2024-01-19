import { useState, useEffect } from "react";

// 4 - custom hook

export const useEffect = (url) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const fetchData =async () => { // busca dados na API
            const res = await fetch(url);
            /* 'fetch' é utilizada para fazer uma requisição HTTP para a URL especificada. O 'await' é utilizado para esperar a conclusão da requisição antes de prosseguir. */

            const json = await res.json();
            // A resposta da requisição é convertida para JSON

            setData(json); // setando o valor para "data"
        
        };

        fetchData();
    }, [url]) // executa sempre que a url mudar

    return {data};
}
