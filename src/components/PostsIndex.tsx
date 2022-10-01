import { useEffect, useState } from "react";
import { Posts } from "./Posts";


export function PostsIndex() {

    const [object, setObject] = useState<any>([]);

    useEffect(() => {
        callPost()
    }, [])

    const callPost = () => {
        fetch('http://localhost:8000/posts/admin', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(result => {
                for (let i = 0; i < result.length; i++) {
                    setObject((object: any) => [...object, result[i]])
                }
            })
            .catch(error => console.log(error))
    }

    const createPost = () => {
        const posts = []

        for (let i = 0; i < object.length; i++) {
            posts.push(
                <Posts title={object[i].title} link={object[i].link} key={i} />
            )
        }

        return posts

    }

    // useEffect(() => {
    //     fetch('http://localhost:8000/posts/admin', {
    //         method: 'GET',
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //     .then(response => response.json())
    //     .then(result => {
    //         for (let i = 0; i < result.length; i++) {
    //             setObject((object: any) => [...object, result[i]])
    //         }
    //     })
    //     .catch(error => console.log(error))
    // }, [])

    return (
        <div>
            {
                createPost()
            }
        </div>
    )
}