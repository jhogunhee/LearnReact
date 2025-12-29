/*
    React 컴포넌트는 props를 받을때 구조분해 할당을 사용하며,
    필요하다면 기본값(Default)도 함께 지정할 수 있다.
 */
const Header = ({title = "DEFAULT TITLE", onChangeMode }) => {
    return (
        <header>
            <h1>
                <a href="/public" onClick={(event) => {
                    event.preventDefault(); // 링크 이동 막기
                    onChangeMode();
                }}>{title}</a>
            </h1>
        </header>
    )
}

export default Header;