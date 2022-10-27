import React from "react";
import * as S from "./style"

import Educabg from "./img/educabg.png"

export default function Education() {
    return (
        <S.Container>
            <S.Link href="https://g1.globo.com/pa/santarem-regiao/noticia/programa-da-onu-vai-fortalecer-politicas-publicas-em-cidades-do-oeste-e-sudoeste-do-para.ghtml" target="_blank" title="Educação de qualidade" >
            <S.ImgODS src={Educabg} alt="um desenho de um livro e uma caneta aberta"/>
            </S.Link>
          
         

        </S.Container>
    )
}