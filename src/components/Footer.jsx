import React from 'react'
import { motion } from 'framer-motion'

import { SiDiscord } from 'react-icons/si'
import { FaTwitter } from 'react-icons/fa'

import  { fadeInBottomVariant } from '../utils/Variants'

import rednet from '../assets/redlightnetwork.png'

import {
    PaddingContainer,
    Container,
    FlexContainer,
    ParaText,
    Heading,
    ParaDiv
} from '../styles/Global.styled'

import { 
    FooterContainer,
    FLogo,
    FLink,
    FSocials
} from '../styles/Footer.styled'

const Footer = () => {
  return (
    <FooterContainer>
        <PaddingContainer
            top='1.8rem'
            bottom='1rem'
            responsiveLeft='0.5rem'
            responsiveRight='0.5rem'
        >
            <Container>
                <FlexContainer 
                    gap='2rem'
                    justify='space-around' 
                    responsiveDirection='column'
                    wrap='wrap'
                    as={motion.div}
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                >
                    <PaddingContainer>
                        <FlexContainer direction='column'>
                            <FLogo src={rednet} />
                            <ParaText white>
                                Revolutionizing the Digital Landscape.
                            </ParaText>
                        </FlexContainer>
                    </PaddingContainer>

                    <PaddingContainer responsiveTop='1.5rem'>
                        <FlexContainer direction='column'>
                            <Heading color='white' size='h4' bold>Quick Links</Heading>
                            <ParaText white top='1rem'>
                                <FLink href='https://www.redlight.network/'>Redlight Homepage</FLink>
                            </ParaText>
                            <ParaText white top='1rem' bottom='1rem' responsiveTop='0.5rem'responsiveBottom='0.5rem'>
                                <FLink href='https://www.redlight.network/news'>Redlight News</FLink>
                            </ParaText>
                            <FlexContainer direction='row'>
                                <FSocials
                                    size='1.2rem'
                                    href='https://discord.com/invite/redlightfinance' 
                                    target='_blank'
                                    white
                                >
                                    <SiDiscord />
                                </FSocials>
                                <FSocials
                                    size='1.2rem'
                                    href='https://twitter.com/redlight' 
                                    target='_blank'
                                    white
                                >
                                    <FaTwitter />
                                </FSocials>
                            </FlexContainer>
                        </FlexContainer>
                    </PaddingContainer>

                    <PaddingContainer responsiveTop='1.5rem'>
                        <FlexContainer direction='column'>
                            <Heading size='h4' color='white' bold>
                                Notes
                            </Heading>
                            <ParaText white top='1rem' responsiveTop='0.5rem'>
                                This site is a work in progress.
                            </ParaText>
                            <ParaText white>
                                If you find any bad links or errors,
                            </ParaText>
                            <ParaText white>
                                Or to provide details for a project:
                            </ParaText>
                            <ParaText white top='1rem' responsiveTop='0.5rem'>
                                Email - <FLink href='mailto:info@redlightdirectory.net'>info@redlightdirectory.net</FLink>
                            </ParaText>
                        </FlexContainer>
                    </PaddingContainer>
                </FlexContainer>
                
                <PaddingContainer
                    top='3rem'
                    bottom='1rem'
                >
                    <FlexContainer 
                        justify='center'
                        as={motion.div}
                        variants={fadeInBottomVariant}
                        initial='hidden'
                        whileInView='visible'
                    >
                        <ParaText white>
                            <span>&copy;</span>All rights reserved by REDLIGHT NETWORK 2022
                        </ParaText>
                        <ParaDiv white>
                            -
                        </ParaDiv>
                        <ParaText white>
                            Redlight Directory by <FLink href='https://jamesforeman.info' target='_blank'>jamesforeman.info</FLink> 2023
                        </ParaText>
                    </FlexContainer>
                </PaddingContainer>
                
            </Container>
        </PaddingContainer>
    </FooterContainer>
  )
}

export default Footer