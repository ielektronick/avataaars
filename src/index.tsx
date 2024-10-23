import Avatar, { AvatarStyle } from './avatar'

export { default as Avatar, AvatarStyle } from './avatar'
export { Option, allOptions } from './options'

import { default as PieceComponent } from './avatar/piece'
import { AvatarContext } from './options'

export interface AvatarComponentProps {
  avatarStyle: string
  className?: string
  style?: React.CSSProperties
  topType?: string
  accessoriesType?: string
  hairColor?: string
  facialHairType?: string
  facialHairColor?: string
  clotheType?: string
  clotheColor?: string
  graphicType?: string
  eyeType?: string
  eyebrowType?: string
  mouthType?: string
  skinColor?: string
  pieceType?: string
  pieceSize?: string
  viewBox?: string
}

export const AvatarComponent = (props: AvatarComponentProps) => {
  const { avatarStyle, style, className } = props

  return (
    <AvatarContext.Provider value={props}>
      <Avatar
        avatarStyle={avatarStyle as AvatarStyle}
        style={style}
        className={className}
      />
    </AvatarContext.Provider>
  )
}

export const Piece = (props: AvatarComponentProps) => {
  const { style, pieceSize, pieceType, viewBox } = props

  return (
    <AvatarContext.Provider value={props}>
      <PieceComponent
        style={style}
        pieceType={pieceType}
        pieceSize={pieceSize}
        viewBox={viewBox}
      />
    </AvatarContext.Provider>
  )
}

export default AvatarComponent
