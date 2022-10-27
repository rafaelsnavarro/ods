import React from "react";
import * as S from "./style"

import Saude from "./img/saudebg.png"

export default function Fome() {
    return (
        <S.Container>
            <S.Link href="https://www.novaiguacu.rj.gov.br/2022/08/05/nova-iguacu-inicia-o-projeto-saude-em-acao-a-partir-deste-fim-de-semana/" target="_blanck" title="Saúde de qualidade">
                <S.ImgODS src={Saude} alt="ods 3 saude e bem estar" />

            </S.Link>

        </S.Container>
    )
}