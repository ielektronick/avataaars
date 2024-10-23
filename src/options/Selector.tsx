import {
    Children,
    Fragment,
    type ReactNode,
    useContext,
    useMemo,
    type PropsWithChildren,
    type ComponentType,
} from 'react';
import Option from './Option';
import { AvatarContext } from './AvatarContext';

function getComponentOptionValue(component: React.ComponentClass) {
    const optionValue = (component as any).optionValue;
    if (!optionValue) {
        throw new Error(`optionValue should be provided for ${component}`);
    }
    return optionValue;
}

export interface SelectorProps {
    option: Option;
    defaultOption: ComponentType | string;
}

const Selector = ({ defaultOption, option, children }: PropsWithChildren<SelectorProps>) => {
    const avatarContext = useContext(AvatarContext);
    const getSelectedOption = (): ReactNode => {
        const selectedOptionType =
            avatarContext[option.key] ?? (typeof defaultOption === 'string' ? defaultOption : defaultOption.name);
        let result: ReactNode;

        Children.forEach(children, (child) => {
            if (getComponentOptionValue((child as any).type) === selectedOptionType) {
                result = child;
            }
        });

        return result ?? <Fragment />;
    };

    const selectedOption = useMemo(() => getSelectedOption(), [avatarContext]);

    return selectedOption;
};

export default Selector;
