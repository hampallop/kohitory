import React from 'react'
import styled from '@emotion/styled'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MoodSelectionSection from './mood-selection-section'
import ScaleSection from './scale-section'
import SummarizeSection from './summarize-section'

enum Proportion {
  fifteen = 15,
  tweleve = 12,
}
enum CoffeeBeanSelection {
  ten = 10,
  fifteen = 15,
  twenty = 20,
}

const proportions = [Proportion.fifteen, Proportion.tweleve]

const possibleMoods = [
  {label: 'just a sip', value: CoffeeBeanSelection.ten},
  {label: 'chill', value: CoffeeBeanSelection.fifteen},
  {label: 'rock it', value: CoffeeBeanSelection.twenty},
]

const IndexPage = () => {
  const [beansAmount, setBeansAmount] = React.useState(null)
  const [selectedProportion, setProportion] = React.useState(Proportion.fifteen)

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <MoodSelectionSection
          selected={beansAmount}
          onSelect={setBeansAmount}
          possibleMoods={possibleMoods}
        />
        <ScaleSection portion={beansAmount * selectedProportion} />
      </Layout>
      {beansAmount && (
        <SummarizeSection beanAmount={beansAmount * selectedProportion} />
      )}
    </>
  )
}

export default IndexPage
