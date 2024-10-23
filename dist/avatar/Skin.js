import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Selector, SkinOption } from '../options';
const makeColor = (name, color) => {
    const ColorComponent = ({ maskID }) => (_jsx("g", { id: 'Skin/\uD83D\uDC76\uD83C\uDFFD-03-Brown', mask: `url(#${maskID})`, fill: color, children: _jsx("g", { transform: 'translate(0.000000, 0.000000)', id: 'Color', children: _jsx("rect", { x: '0', y: '0', width: '264', height: '280' }) }) }));
    ColorComponent.displayName = name;
    ColorComponent.optionValue = name;
    return ColorComponent;
};
const Tanned = makeColor('Tanned', '#FD9841');
const Yellow = makeColor('Yellow', '#F8D25C');
const Pale = makeColor('Pale', '#FFDBB4');
const Light = makeColor('Light', '#EDB98A');
const Brown = makeColor('Brown', '#D08B5B');
const DarkBrown = makeColor('DarkBrown', '#AE5D29');
const Black = makeColor('Black', '#614335');
const Skin = ({ maskID }) => (_jsxs(Selector, { option: SkinOption, defaultOption: Light, children: [_jsx(Tanned, { maskID: maskID }), _jsx(Yellow, { maskID: maskID }), _jsx(Pale, { maskID: maskID }), _jsx(Light, { maskID: maskID }), _jsx(Brown, { maskID: maskID }), _jsx(DarkBrown, { maskID: maskID }), _jsx(Black, { maskID: maskID })] }));
export default Skin;
//# sourceMappingURL=Skin.js.map