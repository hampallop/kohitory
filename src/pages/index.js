import React from 'react'
import styled from '@emotion/styled'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Logo from '../assets/logo.svg'
import {mediaQuery} from '../components/pattern'

const LogoWrapper = styled.section`
  text-align: center;
`
const LogoSection = () => (
  <LogoWrapper>
    <Logo />
  </LogoWrapper>
)

const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  width: 100%;
  cursor: pointer;

  border: 3px solid #111;
  padding: 0.75rem;

  border-left-width: 0;
  &:first-of-type {
    border-left-width: 3px;
  }
`

const MoodTitle = styled.span`
  font-size: 2rem;
  font-weight: 800;
`
const MoodDescription = styled.span``
const MoodSelectionWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  justify-items: center;
  align-items: stretch;
  align-content: center;
  max-width: 40rem;
  margin: 0 auto;

  input[type='radio'] {
    display: none;
  }
  input[type='radio']:checked + ${Label} {
    background: #111;
    color: #f1f1f1;
  }

  margin-top: 3rem;
  margin-bottom: 4.5rem;
`

const MoodSelectionSection = ({possibleMoods, selected, onSelect}) => (
  <>
    <h2 style={{textAlign: 'center', marginTop: 60}}>
      What’s your mood today?
    </h2>
    <MoodSelectionWrapper>
      {possibleMoods.map(mood => (
        <>
          <input
            type="radio"
            id={`mood-${mood.value}`}
            name="mood"
            value={mood.value}
            checked={`${selected}` === `${mood.value}`}
            onChange={e => onSelect(e.target.value)}
          />
          <Label htmlFor={`mood-${mood.value}`}>
            <MoodTitle>{mood.label}</MoodTitle>
            <MoodDescription>{mood.value}ml</MoodDescription>
          </Label>
        </>
      ))}
    </MoodSelectionWrapper>
  </>
)

const PourScaleWrapper = styled.div`
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: end;

  margin-top: 3rem;
  margin-bottom: 6rem;

  transition: opacity 0.4s ease;
  visibility: ${props => (props.show ? 'visible' : 'hidden')};
  opacity: ${props => (props.show ? '1' : '0')};
`
const PourTasteBatchWrapper = styled.div`
  display: grid;
  grid-template-columns: 40fr 80fr;
`
const PourStrongBatchWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`
const Box = styled.div`
  background: ${props => props.color};
  height: 60px;
  margin: 1rem 0;
`
const PourWrapper = styled.div``
const PourAmount = styled.p`
  font-weight: 800;
  text-align: center;

  font-size: 0.75rem;
  ${mediaQuery('tablet')} {
    font-size: 1rem;
  }
`
const PourTitle = styled.p`
  font-weight: 800;
  text-align: ${props => props.align || 'left'};

  font-size: 0.75rem;
  ${mediaQuery('tablet')} {
    font-size: 1rem;
  }
`
const ScaleSection = ({portion}) => {
  const firstBatch = portion * 0.4
  const secondBatch = portion * 0.6

  const pours = [
    firstBatch / 3,
    (firstBatch / 3) * 2,
    secondBatch / 3,
    secondBatch / 3,
    secondBatch / 3,
  ]

  return (
    <PourScaleWrapper show={!!portion}>
      <PourTasteBatchWrapper>
        <PourWrapper>
          <PourTitle>Sweetness</PourTitle>
          <Box color="#111" />
          <PourAmount>{pours[0]}ml</PourAmount>
        </PourWrapper>
        <PourWrapper>
          <PourTitle align="right">Acidity</PourTitle>
          <Box color="#555" />
          <PourAmount>{pours[1]}ml</PourAmount>
        </PourWrapper>
      </PourTasteBatchWrapper>
      <PourStrongBatchWrapper>
        <PourWrapper>
          <Box color="#999" />
          <PourAmount>{pours[2]}ml</PourAmount>
        </PourWrapper>
        <PourWrapper>
          <Box color="#aaa" />
          <PourAmount>{pours[3]}ml</PourAmount>
        </PourWrapper>
        <PourWrapper>
          <Box color="#ccc" />
          <PourAmount>{pours[4]}ml</PourAmount>
        </PourWrapper>
      </PourStrongBatchWrapper>
    </PourScaleWrapper>
  )
}
const IndexPage = () => {
  const [mood, setMood] = React.useState(null)
  const possibleMoods = [
    {label: 'just a cup', value: 150},
    {label: 'a bit chill', value: 225},
    {label: 'let’s rock it', value: 300},
  ]

  return (
    <Layout>
      <SEO title="Home" />
      <LogoSection />
      <MoodSelectionSection
        selected={mood}
        onSelect={setMood}
        possibleMoods={possibleMoods}
      />
      <ScaleSection portion={mood} />
    </Layout>
  )
}

export default IndexPage
