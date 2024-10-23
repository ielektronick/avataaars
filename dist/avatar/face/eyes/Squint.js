import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { uniqueId } from '../../../utils';
import { useRef } from 'react';
const Squint = () => {
    const path1 = useRef(uniqueId('react-path-'));
    const path2 = useRef(uniqueId('react-path-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    const mask2 = useRef(uniqueId('react-mask-'));
    return (_jsxs("g", { id: 'Eyes/Squint-\uD83D\uDE0A', transform: 'translate(0.000000, 8.000000)', children: [_jsxs("defs", { children: [_jsx("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path1.current }), _jsx("path", { d: 'M14,14.0481187 C23.6099827,14.0481187 28,18.4994466 28,11.5617716 C28,4.62409673 21.7319865,0 14,0 C6.2680135,0 0,4.62409673 0,11.5617716 C0,18.4994466 4.39001726,14.0481187 14,14.0481187 Z', id: path2.current })] }), _jsxs("g", { id: 'Eye', transform: 'translate(16.000000, 13.000000)', children: [_jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("use", { id: 'The-white-stuff', fill: '#FFFFFF', xlinkHref: '#' + path1.current }), _jsx("circle", { fillOpacity: '0.699999988', fill: '#000000', mask: `url(#${mask1.current})`, cx: '14', cy: '10', r: '6' })] }), _jsxs("g", { id: 'Eye', transform: 'translate(68.000000, 13.000000)', children: [_jsx("mask", { id: mask2.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path2.current }) }), _jsx("use", { id: 'Eyeball-Mask', fill: '#FFFFFF', xlinkHref: '#' + path2.current }), _jsx("circle", { fillOpacity: '0.699999988', fill: '#000000', mask: `url(#${mask2.current})`, cx: '14', cy: '10', r: '6' })] })] }));
};
Squint.optionValue = Squint.name;
export default Squint;
//# sourceMappingURL=Squint.js.map