import './App.css';
import Article from './component/Article';
import Header  from './component/Header';
import Nav     from './component/Nav';

function App() {
  /*
      JSX 컴포넌트 규칙
      컴포넌트 이름은 대문자로 시작한다
      컴포넌트는 보통 함수로 만들고 JSX를 return 한다
      JSX는 하나의 루트 요소로 감싸서 반환해야 한다.
  */
  return (
      <>
         <Header />
         <Article />
         <Nav />
      </>
  );
}

export default App;
