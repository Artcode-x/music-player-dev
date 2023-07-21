import { createGlobalStyle, styled } from 'styled-components'

export const GlobalStyle = createGlobalStyle`


@font-face {
    font-family: "StratosSkyeng";
    src: url("../fonts/Stratos-Regular.woff2") format("woff2"),
        url("../fonts/Stratos-Regular.woff") format("woff");
    font-weight: normal;
    font-style: normal;
    font-display: swap;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

*:before,
*:after {
    box-sizing: border-box;
    
}

a,
a:visited {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
}



ul li {
    list-style: none;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: 'StratosSkyeng', sans-serif;
    color: #FFFFFF;

}

.wrapper {
    width: 100%;
    min-height: 100%;
    overflow: hidden;
    background-color: #383838;

}


`
export const StyleForMaxim = styled.div``
