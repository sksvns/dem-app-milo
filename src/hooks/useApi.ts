import { useState, useEffect } from "react";

type ApiResponse<T> = {
    data: T | null;
    error: any;
    loading: boolean;
};

const useApi = <T>(url: string): ApiResponse<T> => {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

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
                setError(err)
            })
    }, [url])

    return { data, error, loading };
}

export default useApi;