import { useRef, type PropsWithChildren } from 'react'
import { uniqueId } from '@utils'

import FacialHair from './facialHair'
import HairColor from './HairColor'

const ShortHairTheCaesar = ({ children }: PropsWithChildren<unknown>) => {
  const filter1 = useRef(uniqueId('react-filter-'))
  const mask1 = useRef(uniqueId('react-mask-'))
  const mask2 = useRef(uniqueId('react-mask-'))
  const path1 = useRef(uniqueId('react-path-'))
  const path2 = useRef(uniqueId('react-path-'))

  return (
    <g id='Top' strokeWidth='1' fillRule='evenodd'>
      <defs>
        <rect id={path1.current} x='0' y='0' width='264' height='280' />
        <path
          d='M1,64 C1.34685629,65.488448 2.67275588,65.2226722 3,64 C2.53726005,62.445722 6.29594493,35.2480719 16,28 C19.618222,25.4833872 39.0082164,23.2319099 58.3126144,23.245568 C77.4086061,23.2590787 96.4208396,25.5105561 100,28 C109.704055,35.2480719 113.46274,62.445722 113,64 C113.327244,65.2226722 114.653144,65.488448 115,64 C115.719178,53.7019177 115,0.274362825 58,1 C1,1.72563718 0.280821545,53.7019177 1,64 Z'
          id={path2.current}
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
      <mask id={mask1.current} fill='white'>
        <use xlinkHref={'#' + path1.current} />
      </mask>
      <g id='Mask' />
      <g id='Top/Short-Hair/The-Caesar' mask={`url(#${mask1.current})`}>
        <g transform='translate(-1.000000, 0.000000)'>
          <FacialHair />
          <g
            id='Hair'
            strokeWidth='1'
            fillRule='evenodd'
            transform='translate(75.000000, 34.000000)'>
            <mask id={mask2.current} fill='white'>
              <use xlinkHref={'#' + path2.current} />
            </mask>
            <use id='Caesar' fill='#28354B' xlinkHref={'#' + path2.current} />
            <HairColor maskID={mask2.current} />
          </g>
          {children}
        </g>
      </g>
    </g>
  )
}

ShortHairTheCaesar.optionValue = ShortHairTheCaesar.name

export default ShortHairTheCaesar
