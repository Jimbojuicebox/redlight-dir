import React, { useState } from 'react'
import { motion} from 'framer-motion'

import { PaddingContainer, RedText, Heading, Button, ParaText, FlexContainer } from '../styles/Global.styled'
import { StakingTable, StakingTableHeader, StakingTableDivision, StakingTableRow, StakingTableBody, StakeInput, PeakInput, RllInput, SButton } from '../styles/StakingCalcPage.styled'

import { FaqPageContainer, FaqContainer } from '../styles/Faq.styled'

import { fadeInVariant, fadeInBottomVariant, fadeInLeftVariant } from '../utils/Variants'

import { phaseOne, phasePinnacle } from '../utils/data/staking'


const StakingCalcPage = () => {
    const [ stakeAmount, setStakeAmount ] = useState()
    const [ selectRll, setSelectRll ] = useState('no')
    const [ showUnstake, setShowUnstake ] = useState(false)
    const [ showMoveToPinnacle, setShowMoveToPinnacle ] = useState(false)
    const [ phaseOneAmount, setPhaseOneAmount ] = useState(0)
    const [ showPercError, setShowPercError] = useState(false)
    const [ showPercTotActError, setShowPercTotActError ] = useState(false)
    const [ showPercTotError, setShowPercTotError ] = useState(false)
    const [ peakPercAmounts, setPeakPercAmounts ] = useState([0,0,0,0,0,0,0,0])
    const [ peak1Unlock, setPeak1Unlock ] = useState(0)
    const [ peak2Unlock, setPeak2Unlock ] = useState(0)
    const [ peak3Unlock, setPeak3Unlock ] = useState(0)
    const [ peak4Unlock, setPeak4Unlock ] = useState(0)
    const [ peak5Unlock, setPeak5Unlock ] = useState(0)
    const [ peak6Unlock, setPeak6Unlock ] = useState(0)
    const [ peak7Unlock, setPeak7Unlock ] = useState(0)
    const [ peak8Unlock, setPeak8Unlock ] = useState(0)
    const [ peak1Init, setPeak1Init ] = useState(0)
    const [ peak1Res, setPeak1Res ] = useState(0)
    const [ peak2Init, setPeak2Init ] = useState(0)
    const [ peak2Res, setPeak2Res ] = useState(0)
    const [ peak3Init, setPeak3Init ] = useState(0)
    const [ peak3Res, setPeak3Res ] = useState(0)
    const [ peak4Init, setPeak4Init ] = useState(0)
    const [ peak4Res, setPeak4Res ] = useState(0)
    const [ peak5Init, setPeak5Init ] = useState(0)
    const [ peak5Res, setPeak5Res ] = useState(0)
    const [ peak6Init, setPeak6Init ] = useState(0)
    const [ peak6Res, setPeak6Res ] = useState(0)
    const [ peak7Init, setPeak7Init ] = useState(0)
    const [ peak7Res, setPeak7Res ] = useState(0)
    const [ peak8Init, setPeak8Init ] = useState(0)
    const [ peak8Res, setPeak8Res ] = useState(0)
    const [ lastSelPeak, setLastSelPeak] = useState(0)
    const [ wishAmount, setWishAmount ] = useState(0)

    const phaseOneData = phaseOne
    const pinnacleData = phasePinnacle

    console.log("peaks: " + peakPercAmounts)

    const handleInputChange = (event) => {
        setStakeAmount(event.target.value)
    }

    const handleWishChange = (event) => {
        setWishAmount(event.target.value)
    }

    const handlePeak1Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[0] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak2Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[1] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak3Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[2] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak4Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[3] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak5Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[4] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak6Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[5] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak7Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[6] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }
    const handlePeak8Change = (event) => {
        setPeakPercAmounts(prevPeakPercAmounts => {
            const updatedPeakPercAmounts = [...prevPeakPercAmounts]
            updatedPeakPercAmounts[7] = (event.target.value)
            return updatedPeakPercAmounts
        })
    }

    const handleRllChange = (event) => {
        setSelectRll(event.target.value)
    }

    const handleUnstakeClick = () => {
        if (peakPercAmounts[0] > 0 && (peakPercAmounts[0] > 35 || peakPercAmounts[0] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[1] > 0 && (peakPercAmounts[1] > 35 || peakPercAmounts[1] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[2] > 0 && (peakPercAmounts[2] > 35 || peakPercAmounts[2] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[3] > 0 && (peakPercAmounts[3] > 35 || peakPercAmounts[3] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[4] > 0 && (peakPercAmounts[4] > 35 || peakPercAmounts[4] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[5] > 0 && (peakPercAmounts[5] > 35 || peakPercAmounts[5] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[6] > 0 && (peakPercAmounts[6] > 35 || peakPercAmounts[6] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else if (peakPercAmounts[7] > 0 && (peakPercAmounts[7] > 35 || peakPercAmounts[7] < 15)) {
            setShowPercError(true)
            setShowPercTotError(false)
            setShowPercTotActError(false)
            setShowUnstake(false)
        }
        else {
            let peakPercTotAct = 0
            for (let i = 0; i < peakPercAmounts.length; i++) {
                if (peakPercAmounts[i] > 0) {
                    peakPercTotAct++
                } 
            }
            
            const peakPercTot = Number(peakPercAmounts[0]) + Number(peakPercAmounts[1]) + Number(peakPercAmounts[2]) + Number(peakPercAmounts[3]) + Number(peakPercAmounts[4]) + Number(peakPercAmounts[5]) + Number(peakPercAmounts[6]) + Number(peakPercAmounts[7])
            console.log("peakpercTot: " + peakPercTot)

            if (peakPercTotAct < 4 || peakPercTotAct > 4) {
                setShowPercError(false)
                setShowPercTotError(false)
                setShowPercTotActError(true)
                setShowUnstake(false)
            }
            else if (peakPercTot != 100){
                setShowPercError(false)
                setShowPercTotError(true)
                setShowPercTotActError(false)
                setShowUnstake(false)
            }
            else {
                phaseOneUnstake()
                setShowPercError(false)
                setShowPercTotError(false)
                setShowPercTotActError(false)
                setShowMoveToPinnacle(false)
                setShowUnstake(true)
            }
        }
    }

    const handleMoveToPinnacle = () => {
        setShowUnstake(false)
        setShowMoveToPinnacle(true)
    }

    console.log(stakeAmount)
    console.log(selectRll)

    const phaseOneUnstake = () => {
        if (stakeAmount) {

            // figure assuming sell as each peak unlocks


            // figure assuming hold redlc until last selected peak unlocks
            let lastSelectedPeak = 0
            for (let i = peakPercAmounts.length - 1; i >= 0; i--) {
                if (peakPercAmounts[i] !== 0) {
                  lastSelectedPeak = i;
                  break;
                }
              }

            setLastSelPeak(lastSelectedPeak)
            console.log("last peak: " + lastSelectedPeak)

            // breakdown for each peak
            const init1 = ((peakPercAmounts[0]/100) * stakeAmount) * phaseOneData[0].commitMulti
            setPeak1Init(init1)
            const res1 = init1 * phaseOneData[0].unstakeMultiplier * phaseOneData[0].unlockMultiRes
            setPeak1Res(res1)
            const init2 = ((peakPercAmounts[1]/100) * stakeAmount) * phaseOneData[1].commitMulti
            setPeak2Init(init2)
            const res2 = init2 * phaseOneData[1].unstakeMultiplier * phaseOneData[1].unlockMultiRes
            setPeak2Res(res2)
            const init3 = ((peakPercAmounts[2]/100) * stakeAmount) * phaseOneData[2].commitMulti
            setPeak3Init(init3)
            const res3 = init3 * phaseOneData[2].unstakeMultiplier * phaseOneData[2].unlockMultiRes
            setPeak3Res(res3)
            const init4 = ((peakPercAmounts[3]/100) * stakeAmount) * phaseOneData[3].commitMulti
            setPeak4Init(init4)
            const res4 = init4 * phaseOneData[3].unstakeMultiplier * phaseOneData[3].unlockMultiRes
            setPeak4Res(res4)
            const init5 = ((peakPercAmounts[4]/100) * stakeAmount) * phaseOneData[4].commitMulti
            setPeak5Init(init5)
            const res5 = init5 * phaseOneData[4].unstakeMultiplier * phaseOneData[4].unlockMultiRes
            setPeak5Res(res5)
            const init6 = ((peakPercAmounts[5]/100) * stakeAmount) * phaseOneData[5].commitMulti
            setPeak6Init(init6)
            const res6 = init6 * phaseOneData[5].unstakeMultiplier * phaseOneData[5].unlockMultiRes
            setPeak6Res(res6)
            const init7 = ((peakPercAmounts[6]/100) * stakeAmount) * phaseOneData[6].commitMulti
            setPeak7Init(init7)
            const res7 = init7 * phaseOneData[6].unstakeMultiplier * phaseOneData[6].unlockMultiRes
            setPeak7Res(res7)
            const init8 = ((peakPercAmounts[7]/100) * stakeAmount) * phaseOneData[7].commitMulti
            setPeak8Init(init8)
            const res8 = init8 * phaseOneData[7].unstakeMultiplier * phaseOneData[7].unlockMultiRes
            setPeak8Res(res8)



            const res = stakeAmount * 1
            setPhaseOneAmount(res)
        }
    }

  return (
    <FaqPageContainer>
    <PaddingContainer
        top='5.5rem'
        bottom='5.5rem'
        responsiveTop='4rem'
    >
        <Heading 
            as={motion.h4}
            variants={fadeInVariant}
            initial='hidden'
            whileInView='visible'
            size='h4' 
            bold
        >
            Pinnacle Staking by <RedText>Redlight</RedText>    
        </Heading>

        <FlexContainer
            as={motion.div}
            variants={fadeInLeftVariant}
            initial='hidden'
            whileInView='visible'
            direction='column'
        >
            <ParaText top='1.5rem'>
                The first staking season will be for the rebate. <b>Current</b> working data shown below (subject to change depending on price of REDLC).
            </ParaText>
            <ParaText top='0.5rem' bottom='1.5rem'>
                For full details see Rebate-Pinnacle-Staking Whitepaper.
            </ParaText>
        </FlexContainer>

        <FlexContainer justify='center'>
            <PaddingContainer>
                <Heading size='h4'>Phase 1 Pool</Heading>
                <FaqContainer top='0.5rem' bottom='0.5rem' left='0.5rem' right='0.5rem'>
                    <StakingTable>
                        <StakingTableBody>
                            <StakingTableRow>
                                <StakingTableHeader>Peak</StakingTableHeader>
                                <StakingTableHeader>Unlock Price</StakingTableHeader>
                                <StakingTableHeader>Commit Boost</StakingTableHeader>
                                <StakingTableHeader>Unstake Fee</StakingTableHeader>
                                <StakingTableHeader>Unlock Multiplier</StakingTableHeader>
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[0].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[0].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[0].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[0].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[0].unlockMultiplier}%</StakingTableDivision>
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[1].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[1].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[1].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[1].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[1].unlockMultiplier}%</StakingTableDivision>
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[2].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[2].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[2].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[2].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[2].unlockMultiplier}%</StakingTableDivision>
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[3].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[3].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[3].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[3].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[3].unlockMultiplier}%</StakingTableDivision>
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[4].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[4].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[4].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[4].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[4].unlockMultiplier}%</StakingTableDivision> 
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[5].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[5].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[5].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[5].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[5].unlockMultiplier}%</StakingTableDivision> 
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[6].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[6].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[6].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[6].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[6].unlockMultiplier}%</StakingTableDivision> 
                            </StakingTableRow>
                            <StakingTableRow>
                                <StakingTableDivision>{phaseOneData[7].name}</StakingTableDivision>
                                <StakingTableDivision>${phaseOneData[7].unlockPrice.toFixed(2)}</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[7].commitBoost}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[7].unstakeFee}%</StakingTableDivision>
                                <StakingTableDivision>{phaseOneData[7].unlockMultiplier}%</StakingTableDivision> 
                            </StakingTableRow>
                        </StakingTableBody>
                    </StakingTable>
                </FaqContainer>

                <ParaText top='1.5rem'>
                    <label>How much of your rebate to stake: </label>
                    <StakeInput 
                        type="number"
                        id="stake-input"
                        placeholder='$0.00'
                        /* value={stakeAmount} */
                        onChange={handleInputChange}
                    />
                </ParaText>

                <ParaText top='1rem'>
                    Choose 4 Peaks with a percentage of your total, min 15%, max 35% (eg. 30,30,20,20 or 35,25,25,15):
                </ParaText>
                <ParaText>
                    <FlexContainer wrap='wrap' responsiveFlex>
                        <div>
                            <label>1st&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc1"
                                placeholder='0'
                                onChange={handlePeak1Change}
                            />
                        </div>

                        <div>
                            <label>2nd&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc2"
                                placeholder='0'
                                onChange={handlePeak2Change}
                            />
                        </div>

                        <div>
                            <label>3rd&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc3"
                                placeholder='0'
                                onChange={handlePeak3Change}
                            />
                        </div>

                        <div>
                            <label>4th&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc4"
                                placeholder='0'
                                onChange={handlePeak4Change}
                            />
                        </div>

                        <div>
                            <label>5th&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc5"
                                placeholder='0'
                                onChange={handlePeak5Change}
                            />
                        </div>

                        <div>
                            <label>6th&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc6"
                                placeholder='0'
                                onChange={handlePeak6Change}
                            />
                        </div>

                        <div>
                            <label>7th&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc7"
                                placeholder='0'
                                onChange={handlePeak7Change}
                            />
                        </div>

                        <div>
                            <label>8th&nbsp;</label>
                            <PeakInput
                                type="number"
                                name="peakPerc8"
                                placeholder='0'
                                onChange={handlePeak8Change}
                            />
                        </div>
                    </FlexContainer>           
                </ParaText>

                <ParaText top='1rem'>
                    Do you hold a Redlight Link NFT?
                </ParaText>
                <ParaText>
                    <label>
                    <RllInput
                        type="radio"
                        name="rllOption"
                        value='no'
                        checked={selectRll === 'no'}
                        onChange={handleRllChange}
                    />
                        No
                    </label>
                    <label>
                    <RllInput
                        type="radio"
                        name="rllOption"
                        value='yes'
                        checked={selectRll === 'yes'}
                        onChange={handleRllChange}
                    />
                        Yes
                    </label>                 
                </ParaText>

                <SButton onClick={handleUnstakeClick}>Calculate Result</SButton>
                {showPercError && (
                    <FlexContainer
                    as={motion.div}
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                    >
                        <PaddingContainer top='1rem'>
                            <ParaText>
                                <RedText>One of your selected Peaks has either less than 15 or more than 35 entered!</RedText>
                            </ParaText>
                        </PaddingContainer>
                    </FlexContainer>
                )}

                {showPercTotError && (
                    <FlexContainer
                    as={motion.div}
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                    >
                        <PaddingContainer top='1rem'>
                            <ParaText>
                                <RedText>Your 4 allotted percentages do not add up to 100!</RedText>
                            </ParaText>
                        </PaddingContainer>
                    </FlexContainer>
                )}

                {showPercTotActError && (
                    <FlexContainer
                    as={motion.div}
                    variants={fadeInBottomVariant}
                    initial='hidden'
                    whileInView='visible'
                    >
                        <PaddingContainer top='1rem'>
                            <ParaText>
                                <RedText>You either have less or more than 4 Peaks selected!</RedText>
                            </ParaText>
                        </PaddingContainer>
                    </FlexContainer>
                )}

                {showUnstake && (
                    <FlexContainer
                        as={motion.div}
                        variants={fadeInBottomVariant}
                        initial='hidden'
                        whileInView='visible'
                    >
                        <PaddingContainer top='2rem'>
                            <Heading size='h4'>Results of Phase 1</Heading>

                            <ParaText top='0.5rem' bottom='1rem'>
                                Assuming all price points reached and sold upon unlock, your ${Number(stakeAmount).toFixed(2)} would yield <b>${(peak1Res + peak2Res + peak3Res + peak4Res + peak5Res + peak6Res + peak7Res + peak8Res).toFixed(2)}</b>
                            </ParaText>

                            <ParaText top='0.5rem' bottom='1rem'>
                                Assuming all price points reached and tokens held until last unlock, your ${Number(stakeAmount).toFixed(2)} would yield <b>${
                                    (((peak1Res / phaseOneData[0].unlockPrice) +
                                    (peak2Res / phaseOneData[1].unlockPrice) +
                                    (peak3Res / phaseOneData[2].unlockPrice) +
                                    (peak4Res / phaseOneData[3].unlockPrice) +
                                    (peak5Res / phaseOneData[4].unlockPrice) +
                                    (peak6Res / phaseOneData[5].unlockPrice) +
                                    (peak7Res / phaseOneData[6].unlockPrice) +
                                    (peak8Res / phaseOneData[7].unlockPrice)) * phaseOneData[lastSelPeak].unlockPrice).toFixed(2)
                                }</b> when REDLC is at ${phaseOneData[lastSelPeak].unlockPrice.toFixed(2)}
                            </ParaText>

                            <ParaText>
                                <label>If you were to hodl unlocked tokens until REDLC is worth&nbsp;</label>
                                <StakeInput
                                    type="number"
                                    name="wish"
                                    placeholder='$0.00'
                                    onChange={handleWishChange}
                                />
                                ,&nbsp;Your staked rebate of ${Number(stakeAmount).toFixed(2)} would be worth <b>${
                                    (((peak1Res / phaseOneData[0].unlockPrice) +
                                    (peak2Res / phaseOneData[1].unlockPrice) +
                                    (peak3Res / phaseOneData[2].unlockPrice) +
                                    (peak4Res / phaseOneData[3].unlockPrice) +
                                    (peak5Res / phaseOneData[4].unlockPrice) +
                                    (peak6Res / phaseOneData[5].unlockPrice) +
                                    (peak7Res / phaseOneData[6].unlockPrice) +
                                    (peak8Res / phaseOneData[7].unlockPrice)) * wishAmount).toFixed(2)
                                }</b> - OMG that's crazy.
                            </ParaText>

                            <ParaText top='2.5rem'>
                                Breakdown...
                            </ParaText>

                            <FlexContainer direction='column'>
                                {peak1Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 1:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[0]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak1Init / phaseOneData[0].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak1Res / phaseOneData[0].unlockPrice).toFixed(2)} REDLC worth ${peak1Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak2Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 2:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[1]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak2Init / phaseOneData[1].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak2Res / phaseOneData[1].unlockPrice).toFixed(2)} REDLC worth ${peak2Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak3Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 3:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[2]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak3Init / phaseOneData[2].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak3Res / phaseOneData[2].unlockPrice).toFixed(2)} REDLC worth ${peak3Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak4Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 4:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[3]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak4Init / phaseOneData[3].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak4Res / phaseOneData[3].unlockPrice).toFixed(2)} REDLC worth ${peak4Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak5Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 5:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[4]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak5Init / phaseOneData[4].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak5Res / phaseOneData[4].unlockPrice).toFixed(2)} REDLC worth ${peak5Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak6Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 6:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[5]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak6Init / phaseOneData[5].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak6Res / phaseOneData[5].unlockPrice).toFixed(2)} REDLC worth ${peak6Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak7Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 7:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[6]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak7Init / phaseOneData[6].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak7Res / phaseOneData[6].unlockPrice).toFixed(2)} REDLC worth ${peak7Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                {peak8Init > 0 && (
                                    <FlexContainer direction='column'>
                                        <ParaText top='1rem'>
                                            <b>Peak 8:</b>
                                        </ParaText>
                                        <ParaText>
                                            Rebate committed = ${((peakPercAmounts[7]/100) * stakeAmount).toFixed(2)}
                                        </ParaText>
                                        <ParaText>
                                            Allocation inc Commit Boost = {(peak8Init / phaseOneData[7].unlockPrice).toFixed(2)} REDLC
                                        </ParaText>
                                        <ParaText>
                                            When unlocked you can receive {(peak8Res / phaseOneData[7].unlockPrice).toFixed(2)} REDLC worth ${peak8Res.toFixed(2)}
                                        </ParaText>
                                    </FlexContainer>
                                )}

                                <ParaText top='4rem'>
                                    Rough guide and breakdown to the Pinnacle Pool to follow shortly....
                                </ParaText>
                            </FlexContainer>
                            </PaddingContainer>
                    </FlexContainer>
                )}

                {/* <ParaText top='1.5rem'>
                    Once the price of $REDLC has reached the unlock price and held it for the pre-stated length of time (eg. 10days) you then have two options:
                </ParaText>
                <ParaText top='0.5rem'>
                    Please choose for results
                </ParaText> */}

                {/* <SButton onClick={handleMoveToPinnacle}>Move to Pinnacle Pool</SButton>
                {showMoveToPinnacle && (
                    <FlexContainer
                        as={motion.div}
                        variants={fadeInBottomVariant}
                        initial='hidden'
                        whileInView='visible'
                    >
                        <PaddingContainer top='2rem'>
                            <Heading size='h4'>Pinnacle Pool</Heading>
                            <FaqContainer top='0.5rem' bottom='0.5rem' left='0.5rem' right='0.5rem'>
                                <StakingTable>
                                    <StakingTableBody>
                                        <StakingTableRow>
                                            <StakingTableHeader>Peak</StakingTableHeader>
                                            <StakingTableHeader>Unlock Price</StakingTableHeader>
                                            <StakingTableHeader>Pool Multiplier</StakingTableHeader>
                                        </StakingTableRow>
                                        <StakingTableRow>
                                            <StakingTableDivision>{pinnacleData[0].name}</StakingTableDivision>
                                            <StakingTableDivision>${pinnacleData[0].unlockPrice.toFixed(2)}</StakingTableDivision>
                                            <StakingTableDivision>{pinnacleData[0].poolMultiplier}</StakingTableDivision>
                                        </StakingTableRow>
                                        <StakingTableRow>
                                            <StakingTableDivision>{pinnacleData[1].name}</StakingTableDivision>
                                            <StakingTableDivision>${pinnacleData[1].unlockPrice.toFixed(2)}</StakingTableDivision>
                                            <StakingTableDivision>{pinnacleData[1].poolMultiplier}</StakingTableDivision>
                                        </StakingTableRow>
                                        <StakingTableRow>
                                            <StakingTableDivision>{pinnacleData[2].name}</StakingTableDivision>
                                            <StakingTableDivision>${pinnacleData[2].unlockPrice.toFixed(2)}</StakingTableDivision>
                                            <StakingTableDivision>{pinnacleData[2].poolMultiplier}</StakingTableDivision>
                                        </StakingTableRow>
                                        <StakingTableRow>
                                            <StakingTableDivision>{pinnacleData[3].name}</StakingTableDivision>
                                            <StakingTableDivision>${pinnacleData[3].unlockPrice.toFixed(2)}</StakingTableDivision>
                                            <StakingTableDivision>{pinnacleData[3].poolMultiplier}</StakingTableDivision>
                                        </StakingTableRow>
                                        <StakingTableRow>
                                            <StakingTableDivision>{pinnacleData[4].name}</StakingTableDivision>
                                            <StakingTableDivision>${pinnacleData[4].unlockPrice.toFixed(2)}</StakingTableDivision>
                                            <StakingTableDivision>{pinnacleData[4].poolMultiplier}</StakingTableDivision>
                                        </StakingTableRow>
                                        
                                    </StakingTableBody>
                                </StakingTable>
                            </FaqContainer>

                            <ParaText top='1.5rem'>
                                You have now staked your tokens inc Phase1 bonus (Total of <b>{(stakeAmount * phaseOneData[Number(selectedPeak)].unlockMultiRes).toFixed(0)}</b> REDLC) in the Pinnacle Pool.
                            </ParaText>
                            <ParaText top='0.5rem'>
                                You will now start earning <b>daily rewards!</b>
                            </ParaText>
                            <ParaText top='0.5rem'>
                                Based on your selected Peak, your current <b>{(stakeAmount * phaseOneData[Number(selectedPeak)].unlockMultiRes).toFixed(0)}</b> REDLC would carry a weight of&nbsp;
                                <b>{selectRll === 'yes' ? (stakeAmount * phaseOneData[Number(selectedPeak)].unlockMultiRes).toFixed(0) * ((pinnacleData[Number(selectedPeak)].poolMultiplier).toFixed(0) * 1.1) : ((stakeAmount * phaseOneData[Number(selectedPeak)].unlockMultiRes).toFixed(0) * pinnacleData[Number(selectedPeak)].poolMultiplier).toFixed(0)}</b> 
                                &nbsp;REDLC within the rewards pool<b>{selectRll === 'yes' ? ', including your Redlight Link Bonus of 10%' : ''}</b>.  
                                The exact APR received would be set by the protocol prior to the start of the given staking season. 
                            </ParaText>
                            <ParaText top='0.5rem'>
                                Once the price of REDLC reaches <b>${pinnacleData[Number(selectedPeak)].unlockPrice.toFixed(2)}</b> you are free to unstake, with no penalty, and claim your <b>{(stakeAmount * phaseOneData[Number(selectedPeak)].unlockMultiRes).toFixed(0)}</b> REDLC tokens, worth &nbsp;
                                <b>${(stakeAmount * phaseOneData[Number(selectedPeak)].unlockMultiRes * pinnacleData[Number(selectedPeak)].unlockPrice).toFixed(2)}</b>, but your daily rewards will stop generating (if they are still generating).
                            </ParaText>
                            <ParaText top='0.5rem'>
                                The bulk of your return (on top of price action) would come from the <b>daily rewards</b> achieved in the Pinnacle Pool plus the <b>{phaseOneData[Number(selectedPeak)].unlockMultiplier}%</b> from Phase1 migration.
                            </ParaText>

                        </PaddingContainer>
                    </FlexContainer>
                )} */}

            </PaddingContainer>
        </FlexContainer>
    </PaddingContainer>
    </FaqPageContainer>
  )
}

export default StakingCalcPage