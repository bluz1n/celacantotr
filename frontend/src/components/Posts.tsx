
interface postsProps {
    title: string,
    link: string
}

export function Posts(props: any) {
    return (
        <a className="posts-anchor" href={props.link} target="_blank">
            <div className="posts-container">
                    <h3>{props.title}</h3>
            </div>
        </a>

    )
}