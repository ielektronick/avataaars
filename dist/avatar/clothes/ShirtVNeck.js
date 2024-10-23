import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { uniqueId } from '../../utils';
import { useRef } from 'react';
import Colors from './Colors';
const ShirtVNeck = () => {
    const path1 = useRef(uniqueId('react-path-'));
    const mask1 = useRef(uniqueId('react-mask-'));
    return (_jsxs("g", { id: 'Clothing/Shirt-V-Neck', transform: 'translate(0.000000, 170.000000)', children: [_jsx("defs", { children: _jsx("path", { d: 'M171.319631,29.9364358 C205.706337,35.3665707 232,65.13854 232,101.051724 L232,110 L32,110 L32,101.051724 C32,65.1380521 58.2943778,35.3657617 92.6817711,29.9362145 C93.5835973,35.0053598 96.116393,39.8238432 100.236125,43.5389794 L100.236125,43.5389794 L129.321203,69.7676333 C130.843316,71.1402598 133.156684,71.1402598 134.678797,69.7676333 L134.678797,69.7676333 L163.763875,43.5389794 C164.189462,43.1551884 164.601167,42.7562772 164.998197,42.3430127 C168.414164,38.7873666 170.517305,34.4520434 171.319628,29.9364354 Z', id: path1.current }) }), _jsx("mask", { id: mask1.current, fill: 'white', children: _jsx("use", { xlinkHref: '#' + path1.current }) }), _jsx("use", { id: 'Clothes', fill: '#E6E6E6', fillRule: 'evenodd', xlinkHref: '#' + path1.current }), _jsx(Colors, { maskID: mask1.current })] }));
};
ShirtVNeck.optionValue = ShirtVNeck.name;
export default ShirtVNeck;
//# sourceMappingURL=ShirtVNeck.js.map