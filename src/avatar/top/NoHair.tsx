import { useRef, type PropsWithChildren } from 'react'
import { uniqueId } from '@utils'

import FacialHair from './facialHair'

const NoHair = ({ children }: PropsWithChildren<unknown>) => {
  const filter1 = useRef(uniqueId('react-filter-'))
  const mask1 = useRef(uniqueId('react-mask-'))
  const path1 = useRef(uniqueId('react-path-'))

  return (
    <g id='Top' strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path1.current} x='0' y='0' width='264' height='280' />
        <filter
          x='-0.8%'
          y='-2.0%'
          width='101.5%'
          height='108.0%'
          filterUnits='objectBoundingBox'
          id={filter1.current}>
          <feOffset
            dx='0'
            dy='2'
            in='SourceAlpha'
            result='shadowOffsetOuter1'
          />
          <feColorMatrix
            values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0'
            type='matrix'
            in='shadowOffsetOuter1'
            result='shadowMatrixOuter1'
          />
          <feMerge>
            <feMergeNode in='shadowMatrixOuter1' />
            <feMergeNode in='SourceGraphic' />
          </feMerge>
        </filter>
      </defs>
      <mask id={mask1.current} fill='white'>
        <use xlinkHref={'#' + path1.current} />
      </mask>
      <g id='Mask' />
      <g id='Top/No-Hair' mask={`url(#${mask1.current})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          <FacialHair />
          {children}
        </g>
      </g>
    </g>
  )
}

NoHair.optionValue = NoHair.name

export default NoHair
