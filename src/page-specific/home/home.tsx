import React from 'react'
import styled from '@emotion/styled'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MoodSelectionSection from './mood-selection-section'
import ScaleSection from './scale-section'
import SummarizeSection from './summarize-section'

const InputWrapper = styled.div`
  display: inline;
  margin-left: 1rem;

  :first-of-type {
    margin: 0;
  }
  input[type='radio'] {
    margin-right: 0.25rem;
  }
`

enum Ratio {
  fifteen = 15,
  tweleve = 12,
}
enum CoffeeBeanSelection {
  ten = 10,
  fifteen = 15,
  twenty = 20,
}

const ratioes = [Ratio.fifteen, Ratio.tweleve]

const possibleMoods = [
  {label: 'just a sip', value: CoffeeBeanSelection.ten},
  {label: 'chill', value: CoffeeBeanSelection.fifteen},
  {label: 'rock it', value: CoffeeBeanSelection.twenty},
]

const IndexPage = () => {
  const [beansAmount, setBeansAmount] = React.useState(null)
  const [selectedRatio, setRatio] = React.useState(Ratio.fifteen)

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <h2>Ratio:</h2>
        {ratioes.map(ratio => (
          <InputWrapper>
            <input
              type="radio"
              id={`ratio-${ratio}`}
              name="ratio"
              value={ratio}
              checked={`${ratio}` === `${selectedRatio}`}
              onChange={e => setRatio(Number(e.target.value))}
            />
            <label htmlFor={`ratio-${ratio}`}>1:{ratio}</label>
          </InputWrapper>
        ))}
        <MoodSelectionSection
          selected={beansAmount}
          onSelect={setBeansAmount}
          possibleMoods={possibleMoods}
        />
        <ScaleSection portion={beansAmount * selectedRatio} />
      </Layout>
      {beansAmount && (
        <SummarizeSection beanAmount={beansAmount * selectedRatio} />
      )}
    </>
  )
}

export default IndexPage
