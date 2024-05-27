import styled from "styled-components";
import { theme } from "../utils/Theme";

export const ProjectCardContainer = styled.div`
    padding: 0.8rem;
    border-radius: 20px;
    background: linear-gradient(90deg, rgba(222,26,36,0.2) 0%, rgba(222,26,36,0.020045518207282953) 40%, rgba(222,26,36,0.020045518207282953) 60%, rgba(222,26,36,0.2) 100%);
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right}; 
    margin-bottom: ${({ mbottom }) => mbottom};   

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
       justify-content: flex-start;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}){
       justify-content: flex-start;
    };
`

export const ProjectImageContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
`

export const ProjectImage = styled.img`
    width: 300px;
    height: 150px;
    object-fit: fill;
    border-radius: 10px;
    object-fit: contain;
    background: radial-gradient(circle, rgba(0,0,0,0.7) 50%, rgba(0,0,0,1) 100%);

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: 150px;
        height: 75px;
    };
`

export const Socials = styled.a`
    display: ${({ display }) => display};
    font-size: ${({ size }) => size};
    text-decoration: none;
    cursor: pointer;
    color: ${props => props.white ? theme.colors.white : theme.colors.primary};
    margin: 0 0.5rem;
    transition: all 0.3s ease;

    &:hover {
        color: ${({ theme }) => theme.colors.back_dark};
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 1.5rem;
    };
`

export const Arrow = styled.p`
    display: inline-flex;
    padding-left: 0.2rem;
    transform: translateY(2px);
`

export const Tag = styled.p`
    background: ${({ theme }) => theme.colors.back_dark};
    padding: 0.3rem 0.8rem;
    border-radius: 5px;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: bold;
    margin:  0.5rem;
    font-size: 0.8rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        font-size: 0.6rem;
    };
`