import styled from "styled-components";
import { PaddingContainer } from "./Global.styled";

export const FaqPageContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin: auto;
    justify-content: ${({ justify }) => justify};
`

export const FaqContainer = styled(PaddingContainer)`
    margin-top: 1rem;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(222,26,36,0.2) 0%, rgba(222,26,36,0.020045518207282953) 40%, rgba(222,26,36,0.020045518207282953) 60%, rgba(222,26,36,0.2) 100%);
    word-wrap: break-word;
`