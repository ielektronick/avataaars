import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HairColorOption, Selector } from '../../options';
const makeColor = (name, color) => {
    const ColorComponent = ({ maskID }) => (_jsx("g", { id: 'Skin/\uD83D\uDC76\uD83C\uDFFD-03-Brown', mask: `url(#${maskID})`, fill: color, children: _jsx("g", { transform: 'translate(0.000000, 0.000000)', id: 'Color', children: _jsx("rect", { x: '0', y: '0', width: '264', height: '280' }) }) }));
    ColorComponent.displayName = name;
    ColorComponent.optionValue = name;
    return ColorComponent;
};
const Auburn = makeColor('Auburn', '#A55728');
const Black = makeColor('Black', '#2C1B18');
const Blonde = makeColor('Blonde', '#B58143');
const BlondeGolden = makeColor('BlondeGolden', '#D6B370');
const Brown = makeColor('Brown', '#724133');
const BrownDark = makeColor('BrownDark', '#4A312C');
const PastelPink = makeColor('PastelPink', '#F59797');
const Blue = makeColor('Blue', '#000fdb');
const Platinum = makeColor('Platinum', '#ECDCBF');
const Red = makeColor('Red', '#C93305');
const SilverGray = makeColor('SilverGray', '#E8E1E1');
const HairColor = ({ maskID }) => (_jsxs(Selector, { option: HairColorOption, defaultOption: BrownDark, children: [_jsx(Auburn, { maskID: maskID }), _jsx(Black, { maskID: maskID }), _jsx(Blonde, { maskID: maskID }), _jsx(BlondeGolden, { maskID: maskID }), _jsx(Brown, { maskID: maskID }), _jsx(BrownDark, { maskID: maskID }), _jsx(PastelPink, { maskID: maskID }), _jsx(Blue, { maskID: maskID }), _jsx(Platinum, { maskID: maskID }), _jsx(Red, { maskID: maskID }), _jsx(SilverGray, { maskID: maskID })] }));
export default HairColor;
//# sourceMappingURL=HairColor.js.map