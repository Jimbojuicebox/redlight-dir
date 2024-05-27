import React from 'react'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion'

import ScrollButton from '../utils/Helpers'

import { PaddingContainer, RedText, Heading, ParaText, FlexContainer } from '../styles/Global.styled'
import { Himage, HimageContainer, VideoContainer, RedlcImg, RLink } from '../styles/Home.styled'
import { ProjectCardContainer } from '../styles/ProjectCard.styled'

import { fadeInVariant, fadeInLeftVariant, fadeInRightVariant, fadeInBottomVariant } from '../utils/Variants'

import redlc from '../assets/redlc.png'
import robo from '../assets/robored.png'

const HomePage = () => {
  return (
    <PaddingContainer
        top='6.5rem'
        responsiveTop='5rem'
    >

        <script type="text/javascript" src="https://files.coinmarketcap.com/static/widget/coinMarquee.js"></script><div id="coinmarketcap-widget-marquee" coins="1,21505" currency="USD" theme="light" transparent="false" show-symbol-logo="true"></div>

        <ProjectCardContainer top='1rem' left='2rem' right='2rem' bottom='1rem' mbottom='1rem'>
            <FlexContainer justify='space-between' tabletFlex tabletsFlex>
                <RedlcImg src={redlc} />
                <Heading 
                    as={motion.h4}
                    variants={fadeInVariant}
                    initial='hidden'
                    whileInView='visible'
                    size='h4'
                >
                    Pinnacle Staking calculator <RLink to='/staking'><RedText bold>here</RedText></RLink>
                </Heading>
                <RedlcImg src={redlc} />
            </FlexContainer>
        </ProjectCardContainer>

        {/* <Heading 
            as={motion.h3}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible' 
            size='h3'
        >
            Welcome to the <RedText size='2rem'>Redlight</RedText> directory.
        </Heading> */}

        <FlexContainer gap='1.5rem' align='center' justify='space-between'>
            <FlexContainer
                as={motion.div}
                variants={fadeInLeftVariant}
                initial='hidden'
                whileInView='visible' 
                direction='column' 
                basis='0' 
                shrink='1' 
                grow='1'
            >
                <Heading size='h3'>
                    Welcome to the <RedText size='2rem'>Redlight</RedText> directory.
                </Heading>
                <ParaText top='1rem'>
                    To get started pick a <b>category</b> from the top menu!
                </ParaText>
                <ParaText top='1rem'>
                    The purpose of this site is to create a listing of available projects and useful information on the Redlight Blockchain.  Redlight is at an exciting stage in it's development
                    and things are just being set in motion to allow the onboarding and continued expansion of the ecosystem.<br /><br />
                </ParaText>

                <ParaText>
                    As new collaborations and projects built on Redlight are released we will endeavour to add any relevant information in our database.
                </ParaText>
            </FlexContainer>

            <FlexContainer
                as={motion.div}
                variants={fadeInRightVariant}
                initial='hidden'
                whileInView='visible' 
                basis='0' 
                shrink='1' 
                grow='1'
            >
                <HimageContainer 
                    justify='center'
                    top='1rem'
                >
                    <Himage 
                        src={robo} 
                        alt='Robot reading directory' 
                    />
                </HimageContainer>
            </FlexContainer>
        </FlexContainer>

        {/* <FlexContainer justify='center'>
            <PaddingContainer top='2.5rem'>
                <Heading
                    as={motion.h4}
                    variants={fadeInVariant}
                    initial='hidden'
                    whileInView='visible'  
                    size='h4'
                >
                    To get started pick a <b>category</b> from the top menu!
                </Heading>
            </PaddingContainer>
        </FlexContainer> */}

        <FlexContainer>
            <PaddingContainer top='3rem'>
                <ProjectCardContainer top='1rem' left='2rem' right='2rem' bottom='2rem'>
                    {/* <Heading
                        as={motion.h3}
                        variants={fadeInLeftVariant}
                        initial='hidden'
                        whileInView='visible' 
                        size='h3'
                    >
                        Setting up <RedText>Redlight</RedText>
                    </Heading> */}

                    <FlexContainer gap='3rem'>
                        <FlexContainer
                            as={motion.div}
                            variants={fadeInLeftVariant}
                            initial='hidden'
                            whileInView='visible' 
                            direction='column' 
                            mwidth='230px'
                            basis='0' 
                            shrink='1' 
                            grow='1'
                        >
                            <Heading size='h3'>
                                Setting up <RedText>Redlight</RedText>
                            </Heading>
                            <ParaText top='1rem'>
                                Redlight is a layer 1 EVM (Ethereum Virtual Machine) compatible blockchain. Unlike popular layer 2 solutions (think Polygon, IMX, Arbitrum etc) it has no reliance
                                on the Ethereum network and is completely independant. Being EVM compatible allows easier bridging and compatibility of token standards across all EVM networks. 
                            </ParaText>
                            <ParaText top='1rem'>
                                Add the Redlight network to your MetaMask using these details.  
                            </ParaText>
                        </FlexContainer>
                        <FlexContainer
                            as={motion.div}
                            variants={fadeInRightVariant}
                            initial='hidden'
                            whileInView='visible'  
                            basis='0' 
                            shrink='0.5' 
                            grow='1'
                        >
                            <PaddingContainer top='1rem' left='2rem' responsiveLeft='0rem' responsiveTop='1.5rem'>
                                <Heading size='h4'>
                                    <b>Redlight Network Details:</b>
                                </Heading>
                                <ParaText top='1rem'>
                                    <b>Network Name:</b>  Redlight Chain
                                </ParaText>
                                <ParaText top='0.5rem'>
                                    <b>ChainID:</b>  2611
                                </ParaText>
                                <ParaText top='0.5rem'>
                                    <b>Symbol:</b>  REDLC
                                </ParaText>
                                <ParaText top='0.5rem'>
                                    <b>RPC URL:</b>  https://dataseed2.redlightscan.finance
                                </ParaText>
                                <ParaText top='0.5rem'>
                                    <b>Explorer:</b>  https://redlightscan.finance
                                </ParaText>
                                <ParaText top='2rem'>
                                    Grab MetaMask from <a href='https://metamask.io/' target='_blank'><RedText>metamask.io</RedText></a>
                                </ParaText>
                                <ParaText top='0.5rem'>
                                    <b>USDT-r (Dollar pegged Stablecoin):</b>  0x73E84bFD35C3f1537A72180D1481E1eABf64B70b
                                </ParaText>
                            </PaddingContainer>
                        </FlexContainer>
                    </FlexContainer>
                </ProjectCardContainer>
            </PaddingContainer>
        </FlexContainer>

        <FlexContainer 
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
            justify='center' 
            tabletFlex
            responsiveFlex
        >
            <PaddingContainer top ='3rem'>
                <VideoContainer>
                    <iframe 
                        width="100%" 
                        height="100%" 
                        src="https://www.youtube.com/embed/NneyRsVlPP4" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen>
                    </iframe>
                </VideoContainer>
            </PaddingContainer>
        </FlexContainer>

        <FlexContainer
            as={motion.div}
            variants={fadeInBottomVariant}
            initial='hidden'
            whileInView='visible'    
        >
            <ScrollButton />
        </FlexContainer>

    </PaddingContainer>
  )
}

export default HomePage