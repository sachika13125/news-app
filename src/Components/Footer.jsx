import React from 'react';
import styled from 'styled-components';

export default function () {
    const Footer = styled.footer`
        background-color: #094067;
        height: 8vh;

        p {
            padding: 1.5rem;
            color: #fffffe;
            font-size: 1rem;
            font-weight: 400;
            text-align: center;
        }
    `

  return (
    <Footer>
        <p>&copy; 2024 Sachika Kato All Rights Reserved.</p>
    </Footer>
  )
}