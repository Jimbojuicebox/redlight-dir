import React from 'react'
import { motion} from 'framer-motion'

import ScrollButton from '../utils/Helpers'

import { Sites } from '../utils/data/defi'

import { PaddingContainer, RedText, Heading, FlexContainer } from '../styles/Global.styled'
import DefiCard from './DefiCard'

import { fadeInVariant, fadeInBottomVariant } from '../utils/Variants'

const DefiPage = () => {
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
            Decentralised Finance projects either supporting or built on the <RedText>Redlight</RedText> Blockchain.
        </Heading>

        {Sites.map((site) => (
            <PaddingContainer key={site.id} top='1.8rem'>
                <DefiCard data={site} />
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

export default DefiPage