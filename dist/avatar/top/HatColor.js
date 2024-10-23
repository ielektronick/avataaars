import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { HatColorOption, Selector } from '../../options';
const makeColor = (name, color) => {
    const ColorComponent = ({ maskID }) => (_jsx("g", { id: 'Color/Palette/Gray-01', mask: `url(#${maskID})`, fillRule: 'evenodd', fill: color, children: _jsx("rect", { id: '\uD83D\uDD8DColor', x: '0', y: '0', width: '264', height: '280' }) }));
    ColorComponent.displayName = name;
    ColorComponent.optionValue = name;
    return ColorComponent;
};
const Black = makeColor('Black', '#262E33');
const Blue01 = makeColor('Blue01', '#65C9FF');
const Blue02 = makeColor('Blue02', '#5199E4');
const Blue03 = makeColor('Blue03', '#25557C');
const Gray01 = makeColor('Gray01', '#E6E6E6');
const Gray02 = makeColor('Gray02', '#929598');
const Heather = makeColor('Heather', '#3C4F5C');
const PastelBlue = makeColor('PastelBlue', '#B1E2FF');
const PastelGreen = makeColor('PastelGreen', '#A7FFC4');
const PastelOrange = makeColor('PastelOrange', '#FFDEB5');
const PastelRed = makeColor('PastelRed', '#FFAFB9');
const PastelYellow = makeColor('PastelYellow', '#FFFFB1');
const Pink = makeColor('Pink', '#FF488E');
const Red = makeColor('Red', '#FF5C5C');
const White = makeColor('White', '#FFFFFF');
const Colors = ({ maskID, defaultColor }) => (_jsxs(Selector, { option: HatColorOption, defaultOption: defaultColor || Gray01, children: [_jsx(Black, { maskID: maskID }), _jsx(Blue01, { maskID: maskID }), _jsx(Blue02, { maskID: maskID }), _jsx(Blue03, { maskID: maskID }), _jsx(Gray01, { maskID: maskID }), _jsx(Gray02, { maskID: maskID }), _jsx(Heather, { maskID: maskID }), _jsx(PastelBlue, { maskID: maskID }), _jsx(PastelGreen, { maskID: maskID }), _jsx(PastelOrange, { maskID: maskID }), _jsx(PastelRed, { maskID: maskID }), _jsx(PastelYellow, { maskID: maskID }), _jsx(Pink, { maskID: maskID }), _jsx(Red, { maskID: maskID }), _jsx(White, { maskID: maskID })] }));
export default Colors;
//# sourceMappingURL=HatColor.js.map