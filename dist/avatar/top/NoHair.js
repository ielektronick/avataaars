import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { uniqueId } from '../../utils';
import FacialHair from './facialHair';
const NoHair = ({ children }) => {
    const filter1 = useRef(uniqueId('react-filter-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    const path1 = useRef(uniqueId('react-path-'));
    return (_jsxs("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd', children: [_jsxs("defs", { children: [_jsx("rect", { id: path1.current, x: '0', y: '0', width: '264', height: '280' }), _jsxs("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1.current, children: [_jsx("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), _jsx("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }), _jsxs("feMerge", { children: [_jsx("feMergeNode", { in: 'shadowMatrixOuter1' }), _jsx("feMergeNode", { in: 'SourceGraphic' })] })] })] }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("g", { id: 'Mask' }), _jsx("g", { id: 'Top/No-Hair', mask: `url(#${mask1.current})`, children: _jsxs("g", { transform: 'translate(-1.000000, 0.000000)', children: [_jsx(FacialHair, {}), children] }) })] }));
};
NoHair.optionValue = NoHair.name;
export default NoHair;
//# sourceMappingURL=NoHair.js.map