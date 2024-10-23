import { useRef, type PropsWithChildren } from 'react'
import { uniqueId } from '@utils'

import FacialHair from './facialHair'
import HairColor from './HairColor'

const ShortHairFrizzle = ({ children }: PropsWithChildren<unknown>) => {
  const filter1 = useRef(uniqueId('react-filter-'))
  const mask1 = useRef(uniqueId('react-mask-'))
  const mask2 = useRef(uniqueId('react-mask-'))
  const path1 = useRef(uniqueId('react-path-'))
  const path2 = useRef(uniqueId('react-path-'))

  return (
    <g id='Top' strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path2.current} x='0' y='0' width='264' height='280' />
        <path
          d='M90.9102919,55.3613196 L175.085702,55.3613196 C193.333279,44.8338001 196.759397,26.1510357 183.849606,9.92600089 C180.635746,5.88682054 175.085702,21.6755614 158.028596,22.6504878 C140.97149,23.6254143 142.608865,16.3498661 124.45759,19.0739248 C106.306316,21.7979835 108.311575,36.37843 96.4671989,39.8768239 C88.5709482,42.2090865 86.7186458,47.370585 90.9102919,55.3613196 Z'
          id={path1.current}
        />
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
      <mask id={mask2.current} fill='white'>
        <use xlinkHref={'#' + path2.current} />
      </mask>
      <g id='Mask' />
      <g id='Top/Short-Hair/Frizzle' mask={`url(#${mask2.current})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          <FacialHair />
          <mask id={mask1.current} fill='white'>
            <use xlinkHref={'#' + path1.current} />
          </mask>
          <use
            id='Hair-Maks'
            stroke='none'
            fill='#252E32'
            fillRule='evenodd'
            xlinkHref={'#' + path1.current}
          />
          <HairColor maskID={mask1.current} />
          {children}
        </g>
      </g>
    </g>
  )
}

ShortHairFrizzle.optionValue = ShortHairFrizzle.name

export default ShortHairFrizzle
