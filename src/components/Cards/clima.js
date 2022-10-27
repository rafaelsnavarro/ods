import React from "react";
import * as S from "./style"
import Clima from "./img/clima.jpg"

export default function Fome() {
    return (
        <S.Container>
            <S.Link href="https://saudeealegria.org.br/redemocoronga/oficina-forma-liderancas-da-realidade-climatica-e-reforca-luta-contra-destruicao-da-amazonia/" target="_blank" title="Ação climática">
                <S.ImgODS src={Clima} alt="ação climática"/>
            </S.Link>    

        </S.Container>
    )
}