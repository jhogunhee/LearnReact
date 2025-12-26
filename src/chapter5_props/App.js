import './App.css';
import Article from './component/Article';
import Header  from './component/Header';
import Nav     from './component/Nav';

function App() {
    const topics = [
        {id:1, title: 'html', body: 'html is...'},
        {id:2, title: 'css', body: 'css is...'},
        {id:3, title: 'javascript', body: 'javascript is...'},
    ];

    return (
        <>
            <Header />
            <Nav topics={topics}/>
            <Article title="Hi" body="Hello, React"/>
        </>
    );
}

export default App;
