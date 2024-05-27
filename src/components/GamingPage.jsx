import React from 'react'
import { motion} from 'framer-motion'

import { Games } from '../utils/data/gaming'

import { PaddingContainer, RedText, Heading, FlexContainer } from '../styles/Global.styled'
import GameCard from './GameCard'
import ScrollButton from '../utils/Helpers'

import { fadeInVariant, fadeInBottomVariant } from '../utils/Variants'

const GamingPage = () => {
  return (
    <PaddingContainer
      top='5.5rem'
      responsiveTop='4rem'
    >

<Heading 
            as={motion.h4}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible' 
            size='h4'
        >
            Web3.0 games and supporting services utilising the <RedText>Redlight</RedText> Blockchain for super fast and gas free NFT technology.
        </Heading>

        {Games.map((game) => (
            <PaddingContainer key={game.id} top='1.8rem'>
                <GameCard data={game} />
            </PaddingContainer>
        ))}

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

export default GamingPage