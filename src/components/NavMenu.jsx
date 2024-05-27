import React from 'react'
import { motion } from 'framer-motion'

import {
    PaddingContainer,
} from '../styles/Global.styled'

import { 
    MenuIconC, 
    NavMenuContainer,
    MenuItemR, 
    DivMT,
    DivMC,
    MLink
} from '../styles/Navbar.styled'

import { AiOutlineClose } from 'react-icons/ai'

import { slideInLeft } from '../utils/Variants'


const NavMenu = ({ setOpenMenu }) => {

  return (
    <NavMenuContainer
        as={motion.div}
        variants={slideInLeft}
        initial='hidden'
        animate='visible'
        exit='exit'
    >

        {/* closing button */}
        <DivMT>
            <PaddingContainer right='2rem' top='2rem'>           
                <MenuIconC
                    as={motion.a}
                    onClick={() => setOpenMenu(false)}
                >
                    <AiOutlineClose />
                </MenuIconC>           
            </PaddingContainer>
        </DivMT>

        {/* nav menu items */}
        <PaddingContainer top='10%'>
            <DivMC>
                
                <MenuItemR 
                    onClick={() => setOpenMenu(false)}    
                >
                    <MLink to='/defi'>
                        DEFI
                    </MLink>
                </MenuItemR>
                
                <MenuItemR 
                    onClick={() => setOpenMenu(false)}    
                >
                    <MLink to='/gaming'>
                        GAMING
                    </MLink>
                </MenuItemR>

                <MenuItemR 
                    onClick={() => setOpenMenu(false)}    
                >
                    <MLink to='/exchange'>
                        UTILITY
                    </MLink>
                </MenuItemR>

                <MenuItemR 
                    onClick={() => setOpenMenu(false)}    
                >
                    <MLink to='/staking'>
                        STAKING CALCULATOR
                    </MLink>
                </MenuItemR>

                <MenuItemR 
                    onClick={() => setOpenMenu(false)}    
                >
                    <MLink to='/faq'>
                        FAQ
                    </MLink>
                </MenuItemR>

            </DivMC>
        </PaddingContainer>
    </NavMenuContainer>
  )
}

export default NavMenu