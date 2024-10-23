import { HairColorOption, Selector } from '../../options';

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

const HairColor = ({ maskID }: MakeColorProps) => (
    <Selector option={HairColorOption} defaultOption={BrownDark}>
        <Auburn maskID={maskID} />
        <Black maskID={maskID} />
        <Blonde maskID={maskID} />
        <BlondeGolden maskID={maskID} />
        <Brown maskID={maskID} />
        <BrownDark maskID={maskID} />
        <PastelPink maskID={maskID} />
        <Blue maskID={maskID} />
        <Platinum maskID={maskID} />
        <Red maskID={maskID} />
        <SilverGray maskID={maskID} />
    </Selector>
);

export default HairColor;
