import styled from "styled-components"
import { Link } from 'react-router-dom'


export const HimageContainer = styled.div`
    display: flex;
    justify-content: ${({ justify }) => justify};
    padding-top: ${({ top }) => top};
    padding-bottom: ${({ bottom }) => bottom};
    padding-left: ${({ left }) => left};
    padding-right: ${({ right }) => right};
`

export const Himage = styled.img`
    /* border: 1px solid ${({ theme }) => theme.colors.primary}; */
    display: flex;
    max-width: 100%;
    /* max-height: 302px; */
    object-fit: fill;
    border-radius: 15px;
    /* object-fit: contain; */

    /* @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        width: 150px;
        height: 75px;
    }; */
`

export const VideoContainer = styled.div`
    aspect-ratio: 16/9;
    width: 520px;
    border-radius: 20px;
    overflow: hidden;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        position: relative;
        width: 300px;
        padding-bottom: 56.25%; 
        height: 0;
        border-radius: 20px;
        overflow: hidden;

        iframe {
            position: absolute;
            top:0;
            left: 0;
            width: 100%;
            height: 100%;
        }
    };
`

export const RedlcImg = styled.img`
    height: 1.7rem;
    width: 1.7rem;

    /* @media(max-width: ${({ theme }) => theme.breakpoints.tablets}){
        display: none;
    }; */

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    };
`

export const RLink = styled(Link)`
    text-decoration: none;
    /* background: ${({ theme }) => theme.colors.back_dark};
    padding: 0.2rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.colors.primary};;
    border-radius: 6px; */
`
