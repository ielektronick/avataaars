import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef } from 'react';
import { uniqueId } from '../../utils';
import FacialHair from './facialHair';
import HairColor from './HairColor';
const LongHairBob = ({ children }) => {
    const mask1 = useRef(uniqueId('react-mask-'));
    const mask2 = useRef(uniqueId('react-mask-'));
    const path1 = useRef(uniqueId('react-path-'));
    const path2 = useRef(uniqueId('react-path-'));
    return (_jsxs("g", { id: 'Top', strokeWidth: '1', fillRule: 'evenodd', children: [_jsxs("defs", { children: [_jsx("rect", { id: path1.current, x: '0', y: '0', width: '264', height: '280' }), _jsx("path", { d: 'M38,79.3595521 L38,111 C38,133.339168 51.0804213,152.623239 70,161.610951 L70,174.74565 C50.3625813,177.434228 34.6409914,182.163507 23.3845374,181.000327 C9.16164761,179.530612 1.49623627,150.795665 1,126 C0.382878875,95.1640258 29.3189583,30.7950013 40,18 C47.9231015,8.50878211 69.6952966,0.550643437 94.0001685,1 C118.30504,1.44935656 140.861928,6.81215989 149.000169,17 C161.324059,32.4276364 186.868727,91.0786423 187.000169,126 C187.093514,150.800049 177.46255,175.65995 164.000169,177 C152.920532,178.102871 137.475571,175.511343 118,173.997342 L118,161.610951 C136.919579,152.623239 150,133.339168 150,111 L150,82.9882378 C140.478735,78.1305678 131.863294,72.248172 124.153679,65.3410505 C127.362309,70.6368571 130.848786,75.1475352 134.61311,78.8730846 C107.596314,71.2928169 86.1055278,58.4501118 70.1407506,40.3449693 C62.1597317,56.8095313 51.4461487,69.8143919 38.0000014,79.3595511 Z', id: path2.current })] }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("g", { id: 'Mask' }), _jsx("g", { id: 'Top/Long-Hair/Bob', mask: `url(#${mask1.current})`, children: _jsxs("g", { transform: 'translate(-1.000000, 0.000000)', children: [_jsxs("g", { id: 'Hair', strokeWidth: '1', fillRule: 'evenodd', transform: 'translate(39.000000, 19.000000)', children: [_jsx("mask", { id: mask2.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path2.current }) }), _jsx("use", { id: 'Combined-Shape', fill: '#E6E6E6', xlinkHref: '#' + path2.current }), _jsx(HairColor, { maskID: mask2.current })] }), _jsx(FacialHair, {}), children] }) })] }));
};
LongHairBob.optionValue = LongHairBob.name;
export default LongHairBob;
//# sourceMappingURL=LongHairBob.js.map