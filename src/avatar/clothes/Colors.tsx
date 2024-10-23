import { ClotheColorOption, Selector } from '../../options';

export interface MakeColorProps {
    maskID: string;
}

const makeColor = (name: string, color: string) => {
    const ColorComponent = ({ maskID }: MakeColorProps) => (
        <g id='Color/Palette/Gray-01' mask={`url(#${maskID})`} fillRule='evenodd' fill={color}>
            <rect id='🖍Color' x='0' y='0' width='264' height='110' />
        </g>
    );

    ColorComponent.displayName = name;
    (ColorComponent as any).optionValue = name;

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

const Colors = ({ maskID }: MakeColorProps) => (
    <Selector option={ClotheColorOption} defaultOption={Gray01}>
        <Black maskID={maskID} />
        <Blue01 maskID={maskID} />
        <Blue02 maskID={maskID} />
        <Blue03 maskID={maskID} />
        <Gray01 maskID={maskID} />
        <Gray02 maskID={maskID} />
        <Heather maskID={maskID} />
        <PastelBlue maskID={maskID} />
        <PastelGreen maskID={maskID} />
        <PastelOrange maskID={maskID} />
        <PastelRed maskID={maskID} />
        <PastelYellow maskID={maskID} />
        <Pink maskID={maskID} />
        <Red maskID={maskID} />
        <White maskID={maskID} />
    </Selector>
);

export default Colors;
