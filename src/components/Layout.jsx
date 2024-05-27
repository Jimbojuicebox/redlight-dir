import React, { useState, useEffect } from 'react'
import { ThemeProvider } from "styled-components"
import { theme } from "../utils/Theme"

import { MainBody, Container, PaddingContainer, FlexContainer } from '../styles/Global.styled'

import { useAddress } from "@thirdweb-dev/react";
import { useBalance } from "@thirdweb-dev/react";
import { NATIVE_TOKEN_ADDRESS } from "@thirdweb-dev/sdk";

import Navbar from './Navbar'
import Footer from './Footer'


const Layout = ({ children, openMenu, setOpenMenu }) => {

    const address = useAddress();
    const balanceQuery = useBalance(NATIVE_TOKEN_ADDRESS);

    const [balance, setBalance] = useState(0);

    useEffect(() => {
        const fetchBalance = () => {
        if (typeof balanceQuery.data?.displayValue === "undefined") {
            setBalance(0);
        } else {
            const tokenBalance = balanceQuery.data.displayValue;
            setBalance(parseInt(tokenBalance));
        }
        };
        fetchBalance();
    }, [address, balanceQuery]);

    console.log(balance);

    return (
        <ThemeProvider theme={theme}>
            <MainBody>
                <Navbar address={address} openMenu={openMenu} setOpenMenu={setOpenMenu}/>
                <Container>
                    <PaddingContainer
                        top='1rem'
                        bottom='2rem'
                        left='1rem'
                        right='1rem'
                    >
                        <FlexContainer>
                            {children}
                        </FlexContainer>
                    </PaddingContainer>
                </Container>
                <Footer />   
            </MainBody>      
        </ThemeProvider>
    )
}


export default Layout