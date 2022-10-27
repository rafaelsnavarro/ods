import styled from "styled-components";

export const Container = styled.section`
    width: 80%;
    font-family: 'Poppins', sans-serif;
    text-align: center;
    margin:2vh auto;
    @media screen and (max-width: 500px){
      
    }
    
`

export const Title = styled.h1`
    font-size: 2rem;
    
  
`

export const SubTitle = styled.h3`
    font-size: 1.5rem;
    margin:2vh 0 1vh 0;
`

export const Text = styled.p`
    font-size: 1.1rem;
    font-weight: 200;
    text-align: justify;
`
export const Logo = styled.a`
  img{
    width: 10vw;
  }
  @media screen and (max-width: 500px){
      img{
        width: 22vw;
      }
    }
`
