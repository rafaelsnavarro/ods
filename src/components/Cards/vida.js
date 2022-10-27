import React from "react";
import * as S from "./style"

import Vida from "./img/vidabg.png"

export default function Fome() {
    return (
        <S.Container>
            <S.Link href="https://santarem.pa.gov.br/noticias/meio-ambiente/prefeito-assina-carta-compromisso-com-programa-cidades-sustentaveis-outf3g" target="_blanck" title="Água potável e saneamento">

            <S.ImgODS src={Vida} alt="ods 14 vida na agua" />
                </S.Link>
        
        </S.Container>
    )
}