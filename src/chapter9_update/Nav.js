/*
    const Nav = (props) => {
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(<li>
            <a href={`/read/${t.id}`}>{t.title}</a>
        </li>);
    }

    return (<nav>
            <ol>
                {lis}
            </ol>
        </nav>)
}
*/

/* 
  자바스크립트 구조분해 및 map 함수 활용한 재구성
*/
const Nav = ({topics, onChangeMode}) => {
    const lis = topics.map(topic => {
        return <li key={topic.id}>
            <a href={`/read/${topic.id}`} onClick={(event) => {
                event.preventDefault();
                onChangeMode(topic.id);
            }}>{topic.title}</a>
        </li>
    })
    return (
        <nav>
            <ol>
                {lis}
            </ol>
        </nav>
    )
};

export default Nav;