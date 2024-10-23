import Clothe from './clothes'
import Graphics from './clothes/Graphics'
import Accessories from './top/accessories'
import FacialHair from './top/facialHair'
import Top from './top'

import Eyes from './face/eyes'
import Eyebrows from './face/eyebrow'
import Mouth from './face/mouth'
import Nose from './face/nose'
import Skin from './Skin'

export interface PieceProps {
  pieceSize?: string
  pieceType?: string
  style?: React.CSSProperties
  viewBox?: string
}

const PieceComponent = ({
  pieceSize,
  pieceType,
  style,
  viewBox,
}: PieceProps) => (
  <svg
    style={style}
    width={`${pieceSize}px`}
    height={`${pieceSize}px`}
    viewBox={viewBox || '0 0 264 280'}
    version='1.1'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'>
    {pieceType === 'top' && <Top />}
    {pieceType === 'clothe' && <Clothe />}
    {pieceType === 'graphics' && <Graphics maskID='1234' />}
    {pieceType === 'accessories' && <Accessories />}
    {pieceType === 'facialHair' && <FacialHair />}
    {pieceType === 'eyes' && <Eyes />}
    {pieceType === 'eyebrows' && <Eyebrows />}
    {pieceType === 'mouth' && <Mouth />}
    {pieceType === 'nose' && <Nose />}
    {pieceType === 'skin' && <Skin maskID='5678' />}
  </svg>
)

export default PieceComponent
