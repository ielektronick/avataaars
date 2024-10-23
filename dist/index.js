import { jsx as _jsx } from "react/jsx-runtime";
import Avatar from './avatar';
export { default as Avatar, AvatarStyle } from './avatar';
export { Option, allOptions } from './options';
import { default as PieceComponent } from './avatar/piece';
import { AvatarContext } from './options';
export const AvatarComponent = (props) => {
    const { avatarStyle, style, className } = props;
    return (_jsx(AvatarContext.Provider, { value: props, children: _jsx(Avatar, { avatarStyle: avatarStyle, style: style, className: className }) }));
};
export const Piece = (props) => {
    const { style, pieceSize, pieceType, viewBox } = props;
    return (_jsx(AvatarContext.Provider, { value: props, children: _jsx(PieceComponent, { style: style, pieceType: pieceType, pieceSize: pieceSize, viewBox: viewBox }) }));
};
export default AvatarComponent;
//# sourceMappingURL=index.js.map