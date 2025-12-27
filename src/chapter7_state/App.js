import './App.css';
import Header  from './component/Header';
import Nav     from './component/Nav';
import Article from './component/Article';
import {useState} from "react";

function App() {
    /*
        일반 변수는 값이 바뀌어도 React는 모른다.
        state는 값이 변경되면 React가 감지하고 다시 렌더링한다.
    */
    const [mode, setMode] = useState('WELCOME');
    const [id, setId] = useState(null);
    const topics = [
        {id:1, title: 'html', body: 'html is...'},
        {id:2, title: 'css', body: 'css is...'},
        {id:3, title: 'javascript', body: 'javascript is...'},
    ];

    let content = null;
    if (mode === 'WELCOME') {
        content = <Article title="Welcome" body="Hello, Web"></Article>
    } else if (mode === 'READ') {
        const topic = topics.find(topic => topic.id === id);
        content = <Article title={topic?.title} body={topic?.body}></Article>
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
        </>
    );
}

export default App;
