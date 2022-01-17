import { createGlobalStyle } from "styled-components"


export const lightTheme = {}

export const darkTheme = {
    gradient: 'linear-gradient(to left, #281429, #1b1528, #0f132e)',
    fontColor: '#fff'
}

export const GlobalStyles = createGlobalStyle `

    body {
        background:${props => props.theme.gradient} ;
    }





`