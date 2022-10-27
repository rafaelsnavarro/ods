import React from "react";
import * as S from "./style"
import Onu from "../Cards/img/Onu.png"

export default function Text() {
    return (
        <S.Container>
            <S.Logo href="https://brasil.un.org/pt-br/sdgs" target="_blank" title="Logo marca da Onu">
                <img src={Onu} alt=""/>
            </S.Logo>
            <S.Title>Os Objetivos de Desenvolvimento Sustentável em Santarém-PA</S.Title>
            <p>Os Objetivos de Desenvolvimento Sustentável são um apelo global à ação para acabar com a pobreza, proteger o meio ambiente e o clima e garantir que as pessoas, em todos os lugares, possam desfrutar de paz e de prosperidade. Estes são alguns dos avanços dos ODS em Santarém .</p>
        </S.Container>
    )
}