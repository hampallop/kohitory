import React from 'react'
import styled from '@emotion/styled'

const summarizeSectionHeight = '6rem'

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  left: 0;
  bottom: 0;
  padding: 1rem 2rem;
  border-top: 1px solid #eaeaea;
  width: 100%;
  background: #fbfbfb;
  min-height: ${summarizeSectionHeight};
`

const SummarizeItemWrapper = styled.div`
  text-align: right;
  line-height: 1;
`
const SummarizeItemTitle = styled.span`
  font-size: 1rem;
  font-weight: 800;
  color: #999;
  display: block;
`
const SummarizeItemAmount = styled.span`
  font-size: 2.5rem;
  font-weight: 800;
`
const SummarizeItemUnit = styled.span`
  font-size: 1.25rem;
  font-weight: 800;
`
const SummarizeItem = ({label, amount, unit}) => (
  <SummarizeItemWrapper>
    <SummarizeItemTitle>{label}</SummarizeItemTitle>
    <SummarizeItemAmount>{amount}</SummarizeItemAmount>
    <SummarizeItemUnit>{unit}</SummarizeItemUnit>
  </SummarizeItemWrapper>
)

const SpareSpace = styled.div`
  margin-top: ${summarizeSectionHeight};
`
export default ({beanAmount}) => (
  <>
    <SpareSpace />
    <Wrapper>
      <SummarizeItem label="Coffee Bean" amount={beanAmount} unit="g" />
    </Wrapper>
  </>
)
