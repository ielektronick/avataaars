import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { uniqueId } from '../../utils';
import FacialHair from './facialHair';
import HatColor from './HatColor';
const WinterHat3 = ({ children }) => {
    const filter1 = useRef(uniqueId('react-filter-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    const mask2 = useRef(uniqueId('react-mask-'));
    const path1 = useRef(uniqueId('react-path-'));
    const path2 = useRef(uniqueId('react-path-'));
    const path3 = useRef(uniqueId('react-path-'));
    return (_jsxs("g", { id: 'Top', children: [_jsxs("defs", { children: [_jsx("rect", { id: path3.current, x: '0', y: '0', width: '264', height: '280' }), _jsx("path", { d: 'M66,0 L66,0 C102.450793,-6.69590214e-15 132,29.5492065 132,66 L132,71 L0,71 L0,66 C-4.46393476e-15,29.5492065 29.5492065,6.69590214e-15 66,0 Z', id: path1.current }), _jsxs("filter", { x: '-0.7%', y: '-1.7%', width: '101.4%', height: '106.8%', filterUnits: 'objectBoundingBox', id: filter1.current, children: [_jsx("feOffset", { dx: '0', dy: '2', in: 'SourceAlpha', result: 'shadowOffsetOuter1' }), _jsx("feColorMatrix", { values: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0', type: 'matrix', in: 'shadowOffsetOuter1' })] }), _jsx("path", { d: 'M67.2846026,61.4514246 C83.229708,49.8171415 105.159178,44 133.073012,44 C160.985408,44 182.871592,49.8165424 198.731564,61.4496271 L198.731562,61.4496305 C200.786183,62.956669 202.000006,65.3523289 202.000006,67.900394 L202.000004,98.3697692 C202.000004,100.578907 200.209144,102.369768 198.000006,102.369768 C197.244444,102.369768 196.504332,102.155773 195.865355,101.752558 C179.223261,91.2508526 158.536251,86 133.804323,86 C108.883259,86 87.640395,91.3314713 70.0757313,101.994414 L70.0757317,101.994414 C68.1873241,103.140806 65.7271332,102.539283 64.5807417,100.650875 C64.2008775,100.02514 64.0000054,99.3071624 64.0000054,98.5751499 L64,67.914014 C64,65.358892 65.2205159,62.9574773 67.2846026,61.4514246 Z', id: path2.current })] }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path3.current }) }), _jsx("g", { id: 'Mask' }), _jsxs("g", { id: 'Top/Accessories/Winter-Hat-3', transform: 'translate(-1.000000, 0.000000)', children: [_jsxs("g", { id: 'hat', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(67.000000, 12.000000)', children: [_jsx("circle", { id: 'puff', fill: '#F4F4F4', cx: '66', cy: '8', r: '20' }), _jsx("mask", { id: mask2.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("use", { id: 'hat-mask', fill: '#D8D8D8', xlinkHref: '#' + path1.current }), _jsx(HatColor, { maskID: mask2.current, defaultColor: 'Red' })] }), _jsxs("g", { id: 'hat-front', children: [_jsx("use", { fill: 'black', fillOpacity: '1', filter: `url(#${path2.current})`, xlinkHref: '#' + path2.current }), _jsx("use", { fill: '#F4F4F4', fillRule: 'evenodd', xlinkHref: '#' + path2.current })] }), _jsx(FacialHair, {}), children] })] }));
};
WinterHat3.optionValue = WinterHat3.name;
export default WinterHat3;
//# sourceMappingURL=WinterHat3.js.map