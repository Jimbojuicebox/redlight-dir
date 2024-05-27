import React from 'react'
import { motion} from 'framer-motion'

import { Exchanges } from '../utils/data/exchange'

import { PaddingContainer, RedText, Heading,FlexContainer } from '../styles/Global.styled'
import ExchangeCard from './ExchangeCard'
import ScrollButton from '../utils/Helpers'

import { fadeInVariant, fadeInBottomVariant } from '../utils/Variants'

const ExchangePage = () => {
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
            Marketplaces, Exchanges that list and trade <RedText>$REDLC</RedText> and Bridges to and from the <RedText>Redlight</RedText> Blockchain.
        </Heading>

        {Exchanges.map((exchange) => (
            <PaddingContainer key={exchange.id} top='1.8rem'>
                <ExchangeCard data={exchange} />
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

export default ExchangePage