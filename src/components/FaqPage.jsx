import React from 'react'
import { motion} from 'framer-motion'

import ScrollButton from '../utils/Helpers'

import { PaddingContainer, RedText, Heading, Button, ParaText, FlexContainer } from '../styles/Global.styled'
import { FaqContainer, FaqPageContainer } from '../styles/Faq.styled'
import { FLink } from '../styles/Footer.styled'

import { fadeInVariant, fadeInBottomVariant } from '../utils/Variants'

const FaqPage = () => {
  return (
    <FaqPageContainer>
    <PaddingContainer
        top='5.5rem'
        bottom='3rem'
        responsiveTop='4.5rem'
    >

        <Heading 
            as={motion.h4}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible' 
            size='h4'
        >
            Frequent questions and disclaimer.
        </Heading>

        <FaqContainer 
            top='1rem' bottom='1rem' left='1rem' right='1rem'
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
        >
            <Heading size='h4'>
                REDLC Tokenomics and overview
            </Heading>
            <ParaText top='0.5rem'>
                For a more detailed look at the Redlight Blockchain and its native token $REDLC try visiting<FLink href="https://redlightoverview.info/redlight-chain/" target="_blank" red> https://redlightoverview.info/redlight-chain/</FLink>
            </ParaText>
            <ParaText top='0.5rem'>
                For summaries of AMA's held by the Redlight team on discord try visiting
                <FLink href="https://redlightoverview.info/ama-summaries/" target="_blank" red> https://redlightoverview.info/ama-summaries/</FLink>
            </ParaText>
        </FaqContainer>

        <FaqContainer 
            top='1rem' bottom='1rem' left='1rem' right='1rem'
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
        >
            <Heading size='h4'>
                Why is there a wallet connect button?
            </Heading>
            <ParaText top='0.5rem'>
                The Redlight Directory has the functionality to 'up-vote' and 'down-vote' projects. To avoid bad actors trying to ruin things for everyone else, this functionality will only 
                be available if you connect your wallet and have a balance of $REDLC. The required amount is yet to be determined. We don't want it to be an elitist function for whales but equally 
                it needs to be a meaningful amount to deter bad actors. Once the blockchain is more populated a decision will be made.
            </ParaText>
        </FaqContainer>

        <FaqContainer 
            top='1rem' bottom='1rem' left='1rem' right='1rem'
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
        >
            <Heading size='h4'>
                How do I list my project?
            </Heading>
            <ParaText top='0.5rem'>
                This site is a work in progress. For the time being send relevant details and your web address in an email to: 
            </ParaText>
            <ParaText top='0.5rem'>    
                <FLink href='mailto:info@redlightdirectory.net' red>info@redlightdirectory.net</FLink>
            </ParaText>    
            <ParaText top='0.5rem'>     
                In due course a project entry form will be created and added to the site.
            </ParaText>
        </FaqContainer>

        <FaqContainer 
            top='1rem' bottom='1rem' left='1rem' right='1rem'
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
        >
            <Heading size='h4'>
                I've found a bad link or out-dated information
            </Heading>
            <ParaText top='0.5rem'>
                In due course the will be a bug entry form. For now please make a note of the issues and send an email to: 
            </ParaText>
            <ParaText top='0.5rem'>    
                <FLink href='mailto:info@redlightdirectory.net' red>info@redlightdirectory.net</FLink>
            </ParaText>    
        </FaqContainer>

        <FaqContainer 
            top='1rem' bottom='1rem' left='1rem' right='1rem'
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
        >
            <Heading size='h4'>
                This site has been so helpful, however could I repay your efforts?
            </Heading>
            <ParaText top='0.5rem'>
                Donations can be made in crypto (including and especially $REDLC as it's gas free!). This would be very appreciated as this site and it's upkeep is personally financed. Maybe drop me an email or tag me in discord 
                (Topgun | RLN#4627) so I can keep track of who to pay back when we're all millionaires! 
            </ParaText>
            <ParaText top='0.5rem'>    
                0xe66703A65c769112aE91E6912C4FC2f786Ed8ACe
            </ParaText>    
        </FaqContainer>

        <FaqContainer 
            top='1rem' bottom='1rem' left='1rem' right='1rem'
            as={motion.div}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
        >
            <Heading size='h4'>
                Disclaimer
            </Heading>
            <ParaText top='0.5rem'>
                The projects listed on the Redlight Directory are not affiliated with the Directory or Redlight Network in anyway, unless clearly stated. As such neither the Directory nor 
                Redlight Network hold any responsibility for the operation or functions of these projects. Always do your own research and only connect your wallet to sites you are happy with. 
            </ParaText>
        </FaqContainer>        

        <FlexContainer
            as={motion.div}
            variants={fadeInBottomVariant}
            initial='hidden'
            whileInView='visible'
        >
            <ScrollButton />
        </FlexContainer>

    </PaddingContainer>
    </FaqPageContainer>
  )
}

export default FaqPage