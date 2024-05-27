import React from 'react'
import { motion } from 'framer-motion'

import { SiDiscord, SiCoinmarketcap } from 'react-icons/si'
import { FaTwitter, FaLongArrowAltRight } from 'react-icons/fa'
import { MdAppShortcut } from 'react-icons/md'

import {  
    FlexContainer,  
    Heading, 
    ParaText,
    Button 
} from '../styles/Global.styled'

import { 
    ProjectImageContainer, 
    ProjectImage,
    Socials,
    ProjectCardContainer,
    Arrow
} from '../styles/ProjectCard.styled'

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const DefiCard = ({ data }) => {
  return (
    <ProjectCardContainer>    
        <FlexContainer
            gap='1rem' 
            /* fullWidthChild */
        >

            <FlexContainer 
                as={motion.div}
                variants={fadeInLeftVariant}
                initial='hidden'
                whileInView='visible'
                direction='column'
                justify='center'
                tabletFlex
                tabletDirection='row'
                responsiveFlex
                responsiveDirection='row'     
            >
                <ProjectImageContainer 
                    justify='center'
                >
                    <ProjectImage 
                        src={data.image} 
                        alt={data.name} 
                    />
                </ProjectImageContainer>

            </FlexContainer>
            
            <FlexContainer
                as={motion.div}
                variants={fadeInRightVariant}
                initial='hidden'
                whileInView='visible'
                direction='column'
            >
                <FlexContainer align='center' gap='1rem' responsiveFlex responsiveDirection='column' tabletFlex>
                    <Heading as='h3' size='h3'>
                        {data.name}
                    </Heading>
                </FlexContainer>

                <ParaText top='1rem' bottom='1rem' responsiveTop='0.2rem'>
                    {data.description}
                </ParaText>

                <FlexContainer justify='flex-start' align='center' gap='0.5rem' responsiveFlex responsiveDirection='column' tabletFlex>
                    <Button 
                        href={data.url} 
                        target='_blank'
                    >
                        {data.button}<Arrow><FaLongArrowAltRight /></Arrow>
                    </Button>
                
                    <div>
                        {data.dapp &&
                        <Socials 
                            size='1.5rem'
                            href={data.dapp} 
                            target='_blank'
                        >
                            <MdAppShortcut />
                        </Socials>
                        }
                        {data.discord &&
                        <Socials 
                            size='1.5rem'
                            href={data.discord} 
                            target='_blank'
                        >
                            <SiDiscord />
                        </Socials>
                        }
                        {data.twitter &&
                        <Socials
                            size='1.5rem' 
                            href={data.twitter} 
                            target='_blank'
                        >
                            <FaTwitter />
                        </Socials>
                        }
                        {data.coinmarketcap &&
                        <Socials 
                            size='1.5rem'
                            href={data.coinmarketcap} 
                            target='_blank'
                        >
                            <SiCoinmarketcap />
                        </Socials>
                        }
                    </div>
                </FlexContainer>
            </FlexContainer>

        </FlexContainer>
    </ProjectCardContainer>    
  )
}

export default DefiCard