import React from 'react'
import { motion } from 'framer-motion'

import { SiCoinmarketcap, SiDiscord } from 'react-icons/si'
import { FaTwitter, FaLongArrowAltRight } from 'react-icons/fa'

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
    Arrow,
    Tag
} from '../styles/ProjectCard.styled'

import { fadeInLeftVariant, fadeInRightVariant } from '../utils/Variants'

const ExchangeCard = ({ data }) => {
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
                <FlexContainer align='center' gap='0.5rem' responsiveFlex responsiveDirection='column' tabletFlex>
                    <Heading as='h3' size='h3'>
                        {data.name}
                    </Heading>

                    <FlexContainer tabletFlex responsiveFlex>
                        {data.nokyc &&
                            <Tag>Non-KYC</Tag>
                        }
                        {data.highvol &&
                            <Tag>High Volume</Tag>
                        }
                    </FlexContainer>
                </FlexContainer>

                <ParaText top='1rem' bottom='1rem' responsiveTop='0.2rem'>
                    {data.description}
                </ParaText>

                <FlexContainer justify='flex-start' align='center' gap='0.5rem' responsiveFlex responsiveDirection='column' tabletFlex>
                    {data.signup &&
                        <Button 
                            href={data.signup} 
                            target='_blank'
                        >
                            Sign Up<Arrow><FaLongArrowAltRight /></Arrow>
                        </Button>
                    }
                    
                    {data.button &&
                        <Button 
                            href={data.url} 
                            target='_blank'
                        >
                            {data.button}<Arrow><FaLongArrowAltRight /></Arrow>
                        </Button>
                    }
                
                    <div>
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

export default ExchangeCard