import {useState} from "react";

const Update = (props) => {
    const [title, setTitle] = useState(props.title);
    const [body, setBody] = useState(props.body);

    return (
        <article>
            <h2>Update</h2>
            <form onSubmit={event => {
                event.preventDefault();
                props.onUpdate(title, body);
            }}>
                <p><input type="text" name="title" placeholder="title" onChange={event => {
                   setTitle(event.target.value);
                }} value={title}/></p>
                <p><textarea name="body" placeholder="body" onChange={event => {
                    setBody(event.target.value);
                }} value={body}></textarea></p>
                <p><input type="submit" value="Update" /></p>
            </form>
        </article>
    )
}

export default Update;