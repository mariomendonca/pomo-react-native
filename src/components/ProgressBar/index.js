import React from 'react'

import {
  Bar,
  PercentText,
  PercentBar
} from './styles';

export default function ProgressBar({ BarPercent }) {
  return (
    <Bar>
      <PercentText>
        {BarPercent}
      </PercentText>
      <PercentBar width={BarPercent} />
    </Bar>
  )
}
