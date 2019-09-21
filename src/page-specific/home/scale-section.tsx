import React from 'react'
import styled from '@emotion/styled'
import {mediaQuery} from '../../components/pattern'

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

export default ({portion}) => {
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
