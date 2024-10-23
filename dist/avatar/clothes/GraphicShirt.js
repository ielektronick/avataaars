import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { uniqueId } from '../../utils';
import { useRef } from 'react';
import Colors from './Colors';
import Graphics from './Graphics';
const GraphicShirt = () => {
    const path1 = useRef(uniqueId('react-path-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    return (_jsxs("g", { id: 'Clothing/Graphic-Shirt', transform: 'translate(0.000000, 170.000000)', children: [_jsx("defs", { children: _jsx("path", { d: 'M165.624032,29.2681342 C202.760022,32.1373245 232,63.1798426 232,101.051724 L232,110 L32,110 L32,101.051724 C32,62.8348009 61.7752018,31.5722494 99.3929298,29.1967444 C99.1342224,30.2735458 99,31.3767131 99,32.5 C99,44.3741221 113.998461,54 132.5,54 C151.001539,54 166,44.3741221 166,32.5 C166,31.4015235 165.871641,30.3222877 165.624025,29.2681336 Z', id: path1.current }) }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1.current }), _jsx(Colors, { maskID: mask1.current }), _jsx(Graphics, { maskID: mask1.current })] }));
};
GraphicShirt.optionValue = GraphicShirt.name;
export default GraphicShirt;
//# sourceMappingURL=GraphicShirt.js.map