import './App.css';
import Header  from './component/Header';
import Nav     from './component/Nav';
import Article from './component/Article';
import Create  from './component/Create';
import {useState} from "react";

function App() {
    /*
        일반 변수는 값이 바뀌어도 React는 모른다.
        state는 값이 변경되면 React가 감지하고 다시 렌더링한다.
    */
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    let [nextId, setNextId] = useState(4);
    const [topics, setTopics] = useState([
        {id:1, title: 'html', body: 'html is...'},
        {id:2, title: 'css', body: 'css is...'},
        {id:3, title: 'javascript', body: 'javascript is...'},
    ]);

    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, Web"></Article>
    } else if (mode === 'READ') {
        const topic = topics.find(topic => topic.id === id);
        content = <Article title={topic?.title} body={topic?.body}></Article>
    } else if (mode === 'CREATE') {
        content = <Create onCreate={(title, body) => {
            setNextId(prev => prev + 1); //
            const topic = {id : nextId, title : title, body : body}

            /* 
                React는 state의 참조 변경 여부로 리렌더링을 판단하기 때문에
                배열을 직접 수정하는 push 방식은 사용하지 않음 
            */
            setTopics([...topics, topic]);
        }}></Create>
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
            <a href="/create" onClick={event => {
                event.preventDefault();
                setMode('CREATE');
            }}>Create</a>
        </>
    );
}

export default App;
