import React,{useState} from "react";
import * as S from "./style"

//COMPONENTS
import Fome from "../Cards/fome"
import Educa from "../Cards/educacao"
import Life from "../Cards/vida"

//IMAGES

import Fome0 from "./img/fome0.png"
import Educacao from "./img/educação.png"
import Vida from "./img/vidaagua.png"

export default function ODS(){

    const [fome, setFome] = useState(false)
    const [educacao, setEducacao] = useState(false)
    const [vida, setVida] = useState(false)

    const TransformFome =()=>{
        setFome(true)
        setEducacao(false)
        setVida(false)
    }
    const TransformEducacao =()=>{
        setFome(false)
        setEducacao(true)
        setVida(false)
    }
    const TransformSaude =()=>{
        setFome(false)
        setEducacao(false)
        setVida(false)
    }

    const TransformVida =()=>{
        setFome(false)
        setEducacao(false)
        setVida(true)
    }
    const CloseAll =()=>{
        setFome(false)
        setEducacao(false)
        setVida(false)
    }

    return(
        <S.Container>
            <S.SubContainer>
            <S.Img onClick={()=>{TransformFome()}} src={Fome0} alt="imagem ods contra fome"/>
            <S.Img onClick={()=>{TransformEducacao()}} src={Educacao} alt="imagem ods por mais educação"/>
            <S.Img onClick={()=>{TransformVida()}} src={Vida} alt="imagem ods por mais vida na água"/>
            </S.SubContainer>
            {fome && <Fome/>}
            {educacao && <Educa/>}
            {vida && <Life/>}
        </S.Container>
        
    )
}