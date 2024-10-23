import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { uniqueId } from '../../utils';
import { useRef } from 'react';
import Colors from './Colors';
const Overall = () => {
    const path1 = useRef(uniqueId('react-path-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    return (_jsxs("g", { id: 'Clothing/Overall', transform: 'translate(0.000000, 170.000000)', children: [_jsx("defs", { children: _jsx("path", { d: 'M94,29.6883435 L94,74 L170,74 L170,29.6883435 C179.362956,30.9893126 188.149952,34.0907916 196.00002,38.6318143 L196,110 L187,110 L77,110 L68,110 L68,38.6318027 C75.8500482,34.0907916 84.6370437,30.9893126 94,29.6883435 Z', id: path1.current }) }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("use", { id: 'Overall', fill: '#B7C1DB', fillRule: 'evenodd', xlinkHref: '#' + path1.current }), _jsx(Colors, { maskID: mask1.current }), _jsx("circle", { id: 'Button', fill: '#F4F4F4', fillRule: 'evenodd', cx: '81', cy: '83', r: '5' }), _jsx("circle", { id: 'Button', fill: '#F4F4F4', fillRule: 'evenodd', cx: '183', cy: '83', r: '5' })] }));
};
Overall.optionValue = Overall.name;
export default Overall;
//# sourceMappingURL=Overall.js.map