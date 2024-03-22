import React, {useState} from "react";
import styled from 'styled-components';

function Navbar() {

    const Header = styled.header`
    display: flex;
    justyfy-content: space-between;
    align-items: center;
    background-color: #fffffe
    position: sticky;
    top: 0
    
    ul {
        display: flex;
        justify-content: center;
        align-item: center;
        list-style: none;
    }
    
    li {
        padding: 2rem;
        cursor: pointer;
        transition: .4s;
    }

    li:hover {
        // background-color: #d8eefe;
        height: 100%;
    }

    a {
        display: block;
        height: 100%;
        text-decoration: none;
        color: #094067;
        font-size: 1.2rem;
        font-weight: 600;
    }

    a:hover {
        color: #ef4565;
    }

    button {
        display: none;
    }

    .logo {
        padding-left: 1.5rem;
    }

    @media (max-width: 768px) {
        flex-directon: column;
        align-items: center;


        ul {
            flex-direction: column;
            display: ${({ mobileMenuOpen }) => (mobileMenuOpen ? 'flex' : 'none')};
            position: absolute;
            top: 4rem;
            background-color: #fffffe; 
            width: 100%;
            z-index: 1; 
        }

        li {
            padding: 1rem;
            transition: .4s;
            margin: 0;
        }

        a {
            font-size: 1rem;
            font-weight: 600;
        }

        button {
            display: block;
            cursor: pointer;
            width: 4rem;
            height: 100%;
            font-size: 2rem;
            border: none;
            border-radius: 10px;
            background-color: #fffffe;
            color: #90b4ce;
        }
    }
    `;

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    return (
        <Header mobileMenuOpen={mobileMenuOpen}>
            <div className='logo'>
                <a href='/'><img src={iconImage} alt="icon" /></a>
            </div>
            <nav>
                <ul>
                    <li>
                        <a href='/newsfeeds'>Feeds</a>
                    </li>
                    <li>
                        <a href='/favorites'>Favorites</a>
                    </li>
                    <li>
                        <a href='/login'>LogIn</a>
                    </li>
                </ul>
            </nav>
            <button onClick={toggleMobileMenu}>☰</button>
        </Header> 
    );
}

export default Navbar;