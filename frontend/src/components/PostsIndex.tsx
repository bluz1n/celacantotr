import { useEffect, useState } from "react";
import { Posts } from "./Posts";


export function PostsIndex() {

    const [object, setObject] = useState<any>([]);

    useEffect(() => {
        fetch('http://localhost:8000/posts/admin', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        })
        .then(response => response.json())
        .then(result => {
            for (let i = 0; i < result.length; i++) {
                setObject((object: any) => [...object, result[i]])
            }
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            {
                object.map((item: { title: string; link: string; }) => {
                    return (
                        <Posts title={item.title} link={item.link} />
                    )
                })
            }
        </div>
    )
}