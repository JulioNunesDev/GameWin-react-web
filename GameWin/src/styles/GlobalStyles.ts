import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    a, li {
        list-style: none;
        text-decoration: none;
    }

    :root{
        --font-bebas: 'Bebas Neue', cursive;
        --font-fira: 'Fira Sans', sans-serif;
        --font-mont: 'Montserrat', sans-serif;
        --font-noto: 'Noto Sans', sans-serif;
        --font-popis: 'Poppins', sans-serif;
        --font-secular: 'Secular One', sans-serif;
    }

}


`