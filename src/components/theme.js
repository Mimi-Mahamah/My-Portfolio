import { createGlobalStyle } from "styled-components"


export const lightTheme = {}

export const darkTheme = {
    gradient: '#34301f',
    fontColor: '#6B633E'
}

export const GlobalStyles = createGlobalStyle `

    body {
        background:${props => props.theme.gradient} ;
    }





`