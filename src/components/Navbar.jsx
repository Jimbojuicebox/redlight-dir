import React from 'react'
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from 'framer-motion'

import { TbLogout } from 'react-icons/tb'
import { GiHamburgerMenu } from 'react-icons/gi'

import { useMetamask, useDisconnect } from "@thirdweb-dev/react"

import NavMenu from './NavMenu'

import {
    PaddingContainer,
    FlexContainer,
    Container,
} from '../styles/Global.styled'

import {
    NavbarContainer,
    Logo,
    LogoPic,
    ConnectButton,
    ExitIcon,
    MenuItems,
    MenuItem,
    MenuLink,
    MenuIcon
} from '../styles/Navbar.styled'

import { fadeInTopVariant } from '../utils/Variants'

import rlog from '../assets/redlightlogo.png'


const Navbar = ({ address, openMenu, setOpenMenu }) => {

  const connectWithMetamask = useMetamask();
  const disconnect = useDisconnect();

  const location = useLocation();
  
  return (
    <NavbarContainer>
        <PaddingContainer
            top='0.8rem'
            bottom='0.8rem'
            responsiveLeft='0.5rem'
            responsiveRight='0.5rem'
        >
            <Container>
                <FlexContainer 
                    justify='space-between' 
                    responsiveFlex
                    tabletFlex
                    as={motion.div}
                    variants={fadeInTopVariant}
                    initial='hidden'
                    whileInView='visible'
                >

                    <Logo>
                        <Link to='/'>
                            <LogoPic src={rlog} />
                        </Link>
                    </Logo>

                    <MenuItems>
                        <MenuItem><MenuLink to='/defi' active={location.pathname === '/defi'}>DEFI</MenuLink></MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem><MenuLink to='/gaming' active={location.pathname === '/gaming'}>GAMING</MenuLink></MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem><MenuLink to='/exchange' active={location.pathname === '/exchange'}>UTILITY</MenuLink></MenuItem>
                        <MenuItem>-</MenuItem>
                        <MenuItem><MenuLink to='/faq' active={location.pathname === '/faq'}>FAQ</MenuLink></MenuItem>
                    </MenuItems>

                    <FlexContainer align='center' responsiveFlex tabletFlex>

                        <FlexContainer>
                            {address? <ExitIcon><TbLogout onClick={() => disconnect()} /></ExitIcon> : null}

                            <ConnectButton onClick={() => {
                                if (address) {
                                    disconnect();
                                } else {
                                    connectWithMetamask();
                                }
                            }}>
                                {address ? `${address.slice(0, 4)}...${address.slice(-4)}` : 'Connect'}
                            </ConnectButton>
                        </FlexContainer>

                        <MenuIcon
                            as={motion.a}
                            whileHover={{scale: 1.2}}
                            onClick={() => { setOpenMenu(true)}}
                        >
                            <GiHamburgerMenu />
                        </MenuIcon>

                    </FlexContainer>

                </FlexContainer>
            </Container>
            
        </PaddingContainer>

        <AnimatePresence>
            {openMenu && <NavMenu setOpenMenu={setOpenMenu} address={address} />}
        </AnimatePresence>

    </NavbarContainer>
  )
}

export default Navbar