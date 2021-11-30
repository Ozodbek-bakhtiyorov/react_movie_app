import styled from 'styled-components';
export default function Header(){
    return (
        <HeaderNav>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Movie</a></li>
                    <li><a href="#">Components</a></li>
                    <li><a href="#">JavaScript</a></li>
                </ul>
            </div>
        </HeaderNav>
    )
}

const HeaderNav = styled.nav`
        padding: 0 20px;
`
