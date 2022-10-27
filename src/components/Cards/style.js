import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    height: 78vh;
    border-radius: 15px; 
    margin: 5vh auto;
    @media screen and (max-width: 500px){
       margin: initial ;
    }
`

export const ImgODS = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 15px;
    @media screen and (max-width: 500px){
      height: 40vh;
      width: 100vw;
    }
   
`


export const Link = styled.a`
    height: 20vh;
   width: 100%;
   height: 100%;
`

