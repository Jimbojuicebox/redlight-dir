import styled from "styled-components";

export const FooterContainer = styled.div`
    z-index: 99;
    position: relative;
    width: 100%;
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const FLogo = styled.img`
    padding: 1rem;
    width: 240px;
`

export const FLink = styled.a`
    text-decoration: none;
    color: ${({ red }) => red ? '#bc0016' : 'white'};
    font-size: 1rem;
    transition: all 0.3s ease-in; 
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 0.8rem;
    };   
`

export const FSocials = styled.a`
    display: ${({ display }) => display};
    font-size: ${({ size }) => size};
    cursor: pointer;
    color: white;
    margin: 0 1rem;
    transition: all 0.3s ease;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.5rem;
    };
`