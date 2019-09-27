import React from 'react'
import styled from '@emotion/styled'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import MoodSelectionSection from './mood-selection-section'
import ScaleSection from './scale-section'
import SummarizeSection from './summarize-section'

const IndexPage = () => {
  const [mood, setMood] = React.useState(null)
  const possibleMoods = [
    {label: 'just a cup', value: 150},
    {label: 'a bit chill', value: 225},
    {label: 'let’s rock it', value: 300},
  ]

  return (
    <>
      <Layout>
        <SEO title="Home" />
        <MoodSelectionSection
          selected={mood}
          onSelect={setMood}
          possibleMoods={possibleMoods}
        />
        <ScaleSection portion={mood} />
      </Layout>
      {mood && <SummarizeSection beanAmount={mood / 15} />}
    </>
  )
}

export default IndexPage
