import { type CSSProperties } from 'react';
export declare enum AvatarStyle {
    Circle = "Circle",
    Transparent = "Transparent"
}
export interface AvatarProps {
    avatarStyle: AvatarStyle;
    className?: string;
    style?: CSSProperties;
}
declare const Avatar: ({ avatarStyle, className, style }: AvatarProps) => import("react/jsx-runtime").JSX.Element;
export default Avatar;
