import { useState, useEffect } from "react";
import type { ApodData } from "../types";

export default function NasaFetch() {

    const [data, setData] = useState<ApodData | null>(null); //typescript need a type for state
    const [loading, setLoading] = useState(false);
    const API_URL: string = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'


    useEffect(() => {
        setLoading(true)
        fetch(API_URL)
        .then(response => {
            if (!response.ok)
                throw new Error("Error in fetch" + response.statusText)
            return response.json();
        })
        .then(responseData => setData(responseData))
        .catch(err => console.error(err))
        .finally(() => setLoading(false))
    }, []);

    if (loading) {
        return <p>Loading....</p>
    }
    else {
        if (data?.media_type === "image") {
            return (
            <>
                <p>Explanation: {data.explanation}</p>
                <img alt="APOD image" src={data.url}></img>
            </>
            )
        }
        else {
            return(
            <>
                <p>Explanation: {data?.explanation}</p>
                <iframe width="520" height="415" src={data?.url}></iframe>
            </>
            )
        }
    }

}