import './App.css';
import Header  from './component/Header';
import Nav     from './component/Nav';
import Article from './component/Article';
import Create  from './component/Create';
import Update  from './component/Update';
import {useState} from "react";

function App() {
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);

    let [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        {id:1, title: 'html', body: 'html is...'},
        {id:2, title: 'css', body: 'css is...'},
        {id:3, title: 'javascript', body: 'javascript is...'},
    ]);

    let content= null;
    let contextControl = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, Web"></Article>
    } else if (mode === 'READ') {
        const topic = topics.find(topic => topic.id === id);
        content = <Article title={topic?.title} body={topic?.body}></Article>;
        contextControl =
            <div>
            <li><a href={`/update${id}`} onClick={event => {
                event.preventDefault();
                setMode('UPDATE');
            }}>Update</a></li>
            <li><input type="button" value="Delete" onClick={() => {
                setTopics(topics.filter(topic => topic.id !== id));
                setMode('READ');
            }}/></li></div>;
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(title, body) => {
            setNextId(prev => prev + 1); //
            const topic = {id : nextId, title : title, body : body}
            setTopics([...topics, topic]);
        }}></Create>
    } else if (mode === 'UPDATE') {
        const topic = topics.find(topic => topic.id === id);
        content = <Update title={topic?.title} body={topic?.body} onUpdate={(title, body) => {
            setTopics(topics.map(t => {
                return t.id === topic.id ? {...t, title : title, body : body} : t
            }));
            setMode('READ');
        }}/>
    }

    return (
        <>
            <Header title="WEB" onChangeMode={() => {
                setMode('WELCOME');
            }}></Header>
            <Nav topics={topics} onChangeMode={(id) => {
                setId(id);
                setMode('READ');
            }}/>
            {content}
            <ul>
                <li><a href="/create" onClick={event => {
                    event.preventDefault();
                    setMode('CREATE');
                }}>Create</a></li>
                {contextControl}
            </ul>
        </>
    );
}

export default App;
