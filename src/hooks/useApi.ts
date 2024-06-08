import { useState, useEffect } from "react";

const useApi = (url: string) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data);
                setLoading(false)
            })
            .catch(err => {
                setData(err);
                setLoading(false);
            })
    }, [url])

    return [ data, error, loading ];
}

export default useApi;