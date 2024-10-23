import { jsx as _jsx } from "react/jsx-runtime";
import { Children, Fragment, useContext, useMemo, } from 'react';
import { AvatarContext } from './AvatarContext';
function getComponentOptionValue(component) {
    const optionValue = component.optionValue;
    if (!optionValue) {
        throw new Error(`optionValue should be provided for ${component}`);
    }
    return optionValue;
}
const Selector = ({ defaultOption, option, children }) => {
    const avatarContext = useContext(AvatarContext);
    const getSelectedOption = () => {
        const selectedOptionType = avatarContext[option.key] ?? (typeof defaultOption === 'string' ? defaultOption : defaultOption.name);
        let result;
        Children.forEach(children, (child) => {
            if (getComponentOptionValue(child.type) === selectedOptionType) {
                result = child;
            }
        });
        return result ?? _jsx(Fragment, {});
    };
    const selectedOption = useMemo(() => getSelectedOption(), [avatarContext]);
    return selectedOption;
};
export default Selector;
//# sourceMappingURL=Selector.js.map