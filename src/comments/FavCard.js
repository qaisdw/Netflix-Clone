import { useRef } from 'react';

export default function FavCard(props) {
    const comment = useRef();
    async function submitHandler(id,title) {
        let myComment = await comment.current.value;
        props.update(id,title,myComment);
    }
    return (
        <article>
            <img src={`https://image.tmdb.org/t/p/w300${props.data.poster_path}`} alt="poster" />
            <div className="content">
                <h2>{props.data.title}</h2>
                <fieldset>
                    <legend>My Comment</legend>
                    <p>{props.data.comment}</p>
                </fieldset>
                <fieldset>
                    <legend>Update My Comment</legend>
                    <textarea ref={comment} name="comment" placeholder="comment"></textarea>
                </fieldset>
                <div>
                    <button className="remove" onClick={(e) => { props.delete(props.data.id) }} >Remove</button>
                    <button className="update" onClick={(e) => { submitHandler(props.data.id,props.data.title) }} >Update</button>
                </div>
            </div>
        </article>
    )
}