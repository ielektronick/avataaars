import { Selector, SkinOption } from '../options';

export interface MakeColorProps {
    maskID: string;
}

const makeColor = (name: string, color: string) => {
    const ColorComponent = ({ maskID }: MakeColorProps) => (
        <g id='Skin/👶🏽-03-Brown' mask={`url(#${maskID})`} fill={color}>
            <g transform='translate(0.000000, 0.000000)' id='Color'>
                <rect x='0' y='0' width='264' height='280' />
            </g>
        </g>
    );

    ColorComponent.displayName = name;
    (ColorComponent as any).optionValue = name;

    return ColorComponent;
};

const Tanned = makeColor('Tanned', '#FD9841');
const Yellow = makeColor('Yellow', '#F8D25C');
const Pale = makeColor('Pale', '#FFDBB4');
const Light = makeColor('Light', '#EDB98A');
const Brown = makeColor('Brown', '#D08B5B');
const DarkBrown = makeColor('DarkBrown', '#AE5D29');
const Black = makeColor('Black', '#614335');

const Skin = ({ maskID }: MakeColorProps) => (
    <Selector option={SkinOption} defaultOption={Light}>
        <Tanned maskID={maskID} />
        <Yellow maskID={maskID} />
        <Pale maskID={maskID} />
        <Light maskID={maskID} />
        <Brown maskID={maskID} />
        <DarkBrown maskID={maskID} />
        <Black maskID={maskID} />
    </Selector>
);

export default Skin;
