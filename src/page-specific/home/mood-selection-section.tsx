import React from 'react'
import styled from '@emotion/styled'

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

export default ({possibleMoods, selected, onSelect}) => (
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
