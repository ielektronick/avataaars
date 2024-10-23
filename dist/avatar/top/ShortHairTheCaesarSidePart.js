import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { uniqueId } from '../../utils';
import FacialHair from './facialHair';
import HairColor from './HairColor';
const ShortHairTheCaesarSidePart = ({ children, }) => {
    const filter1 = useRef(uniqueId('react-filter-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    const mask2 = useRef(uniqueId('react-mask-'));
    const path1 = useRef(uniqueId('react-path-'));
    const path2 = useRef(uniqueId('react-path-'));
    return (_jsxs("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd', children: [_jsxs("defs", { children: [_jsx("rect", { id: path1.current, x: '0', y: '0', width: '264', height: '280' }), _jsx("path", { d: 'M82.0179468,24.3784638 C74.9860629,23.6847351 66.6573358,23.2514721 58.3126144,23.245568 C39.0082164,23.2319099 19.618222,25.4833872 16,28 C6.29594493,35.2480719 2.53726005,62.445722 3,64 C2.67275588,65.2226722 1.34685629,65.488448 1,64 C0.280821545,53.7019177 1,1.72563718 58,1 C115,0.274362825 115.719178,53.7019177 115,64 C114.653144,65.488448 113.327244,65.2226722 113,64 C113.46274,62.445722 109.704055,35.2480719 100,28 C98.2407122,26.7763475 92.7526689,25.6101897 85.3587425,24.7390449 L89,16 L82.0179468,24.3784638 Z', id: path2.current }), _jsxs("filter", { x: '-0.8%', y: '-2.0%', width: '101.5%', height: '108.0%', filterUnits: 'objectBoundingBox', id: filter1.current, children: [_jsx("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), _jsx("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.16 0', type: 'matrix', in: 'shadowOffsetOuter1', result: 'shadowMatrixOuter1' }), _jsxs("feMerge", { children: [_jsx("feMergeNode", { in: 'shadowMatrixOuter1' }), _jsx("feMergeNode", { in: 'SourceGraphic' })] })] })] }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("g", { id: 'Mask' }), _jsx("g", { id: 'Top/Short-Hair/The-Caesar-+-Side-Part', mask: `url(#${mask1.current})`, children: _jsxs("g", { transform: 'translate(-1.000000, 0.000000)', children: [_jsx(FacialHair, {}), _jsxs("g", { id: 'Hair', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(75.000000, 34.000000)', children: [_jsx("mask", { id: mask2.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path2.current }) }), _jsx("use", { id: 'Caesar', fill: '#28354B', xlinkHref: '#' + path2.current }), _jsx(HairColor, { maskID: mask2.current })] }), children] }) })] }));
};
ShortHairTheCaesarSidePart.optionValue = ShortHairTheCaesarSidePart.name;
export default ShortHairTheCaesarSidePart;
//# sourceMappingURL=ShortHairTheCaesarSidePart.js.map