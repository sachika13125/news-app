import React from 'react';
import styled from 'styled-components';
import mediaGif from '../assets/bubble-gum-social-media.gif';
import heartGif from '../assets/bubble-gum-woman-shoots-an-arrow-with-a-heart-from-a-bow.gif';

export default function Home() {
    const Home = styled.div`
        top: 0;
        left: 0;
        width: 100vw;
        background-color: #fffff;
        z-index: -1;
        background-image:  radial-gradient(#ef4565 2px, transparent 2px), radial-gradient(#90b4ce 2px, #ffffff 2px);
        background-size: 40px 40px;
        background-position: 0 0,20px 20px;

        .wellcome {
            max-width: 1024x;
            margin: 0 auto;
            padding: 110px 20px 110px;
        }

        .message {
            max-width: 450px;
            margin: 20vh auto; 
        }

        .message a {
            display: flex;
            justify-content: center;
            align-items: center;
            width: 100%;
            padding: 2.0em 1.0em;
            border: 1px solid #094067;
            background: linear-gradient(to right, #ffffff 50%, #094067 50%);
            background-size: 200% auto;
            color: #094067;
            font-size: 2rem;
            text-decoration: none;
            text-align: center;
            transition: .3s;
            position: relative;
        }

        .message a:after {
            content: "";
            position: absolute;
            right: -5px;
            bottom: -5px;
            width: 100%;
            height: 100%;
            border-right: 1px solid #222222;
            border-bottom: 1px solid #222222;
        }

        .message a:hover {
            color: #ffffff;
            background-position: -100% 0;
        }

        .woman{
            position: absolute;
            top: 50%;
            left: 10%;
            width: 20vw;
        }

        .media {
            position: absolute;
            top: 25%;
            right: 10%;
            width: 20vw;
        }
    `

    return (
        <Home>
            <div className='wellcome'>
                <div className='message'>
                    <a href='/newsfeeds'>Let's Check the Recent News Here</a>
                </div>
                <img className='woman' src={heartGif} alt='woman shoots an arrow with a heart from a bow' />
                <img className='media' src={mediaGif} alt='social media'/>
            </div>
        </Home>
    )
};