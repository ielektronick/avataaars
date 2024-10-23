import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Clothe from './clothes';
import Graphics from './clothes/Graphics';
import Accessories from './top/accessories';
import FacialHair from './top/facialHair';
import Top from './top';
import Eyes from './face/eyes';
import Eyebrows from './face/eyebrow';
import Mouth from './face/mouth';
import Nose from './face/nose';
import Skin from './Skin';
const PieceComponent = ({ pieceSize, pieceType, style, viewBox, }) => (_jsxs("svg", { style: style, width: `${pieceSize}px`, height: `${pieceSize}px`, viewBox: viewBox || '0 0 264 280', version: '1.1', xmlns: 'http://www.w3.org/2000/svg', xmlnsXlink: 'http://www.w3.org/1999/xlink', children: [pieceType === 'top' && _jsx(Top, {}), pieceType === 'clothe' && _jsx(Clothe, {}), pieceType === 'graphics' && _jsx(Graphics, { maskID: '1234' }), pieceType === 'accessories' && _jsx(Accessories, {}), pieceType === 'facialHair' && _jsx(FacialHair, {}), pieceType === 'eyes' && _jsx(Eyes, {}), pieceType === 'eyebrows' && _jsx(Eyebrows, {}), pieceType === 'mouth' && _jsx(Mouth, {}), pieceType === 'nose' && _jsx(Nose, {}), pieceType === 'skin' && _jsx(Skin, { maskID: '5678' })] }));
export default PieceComponent;
//# sourceMappingURL=piece.js.map