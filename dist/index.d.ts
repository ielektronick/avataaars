export { default as Avatar, AvatarStyle } from './avatar';
export { Option, allOptions } from './options';
export interface AvatarComponentProps {
    avatarStyle: string;
    className?: string;
    style?: React.CSSProperties;
    topType?: string;
    accessoriesType?: string;
    hairColor?: string;
    facialHairType?: string;
    facialHairColor?: string;
    clotheType?: string;
    clotheColor?: string;
    graphicType?: string;
    eyeType?: string;
    eyebrowType?: string;
    mouthType?: string;
    skinColor?: string;
    pieceType?: string;
    pieceSize?: string;
    viewBox?: string;
}
export declare const AvatarComponent: (props: AvatarComponentProps) => import("react/jsx-runtime").JSX.Element;
export declare const Piece: (props: AvatarComponentProps) => import("react/jsx-runtime").JSX.Element;
export default AvatarComponent;
