import styled from "styled-components";
import { Link } from 'react-router-dom';


export const NavbarContainer = styled.div`
    z-index: 99;
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    transition: all 0.3s ease-in;
    background-color: ${({ theme }) => theme.colors.primary};
`

export const Logo = styled.div`
    a {
        text-decoration: none;
        color: ${({ theme }) => theme.colors.white};
    }
`
export const LogoPic = styled.img`
    height: 3rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        height: 2rem;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablets}){
        height: 2rem;
    };
`

export const MenuIcon = styled.a`
    color: ${({ theme }) => theme.colors.white};
    padding-left: 0.5rem;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: none;
    align-items: center;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: flex;
    };

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        display: flex;
        padding-left: 1.5rem;
    };
`

export const ExitIcon = styled.a`
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.6rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    padding-right: 0.5rem;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        display: none;
    };
`

export const ConnectButton = styled.button`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    background: ${({ theme }) => theme.colors.white};
    padding: 0.25rem 1rem;
    border: solid 1px white;
    border-radius: 0.5rem;
    cursor: pointer;
    height: 2rem;
`

export const ConnectButtonR = styled.button`
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    background: ${({ theme }) => theme.colors.white};
    padding: 0.25rem 1rem;
    border: solid 1px white;
    border-radius: 0.5rem;
    cursor: pointer;
    height: 2rem;
`

export const MenuItems = styled.ul`
    display: flex;
    list-style: none;

    @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
        display: none;
    };
`

export const MenuItem = styled.li`
    margin: auto;
    display: flex;
    padding: 0 0.3rem;
    color: white;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
        padding: 0 1.5rem;
    };
`

export const MenuLink = styled(Link).attrs(props => ({active: props.active ? 'true' : undefined}))`
    transition: all 0.2s ease;
    color: white;
    text-decoration: none;
    font-weight: ${props => props.active ? 700 : 400};
    transform: ${props => props.active ? 'scale(1.2)' : 'scale(0.8)'};

    &:hover {
        transform: scale(1.2);
    }
`

export const NavMenuContainer = styled.div`
    position: fixed;
    display: block;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 100;
`

export const MenuItemR = styled.a`
    display: block;
    transition: all 0.2s ease;
    color: white;
    text-decoration: none;
    padding-top: 1rem;
    font-size: 2rem;
    font-weight: ${props => props.active ? 700 : 400};
    transform: ${props => props.active ? 'scale(1.2)' : 'scale(0.8)'};
`

export const DivMT = styled.div`
    display: block;
    text-align:  right;
`

export const MenuIconC = styled.a`
    color: ${({ theme }) => theme.colors.white};
    padding-left: 0.5rem;
    font-size: 2rem;
    cursor: pointer;
    transition: all 0.2s ease;
    display: block;
`

export const DivMC = styled.div`
    display: block;
    text-align:  center;
`

export const MLink = styled(Link)`
    transition: all 0.2s ease;
    color: white;
    text-decoration: none;

    &:hover {
        transform: scale(1.2);
    }
`