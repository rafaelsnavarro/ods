import React from "react";
import { createGlobalStyle } from "styled-components";

//COMPONENTS
import Text from "./components/Main/Main"
import ODS from "./components/ods/Ods"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    background-color: #fff;
  }
  body{
   
    background-image: linear-gradient(315deg, #0093E9 0%, #80D0C7 100%);
  }
`

export default function App(){
  return(
    <>
      <GlobalStyle/>
      <Text/>
      <ODS/>
    </>
  )
}