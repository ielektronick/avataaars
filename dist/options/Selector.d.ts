import { type ReactNode, type PropsWithChildren, type ComponentType } from 'react';
import Option from './Option';
export interface SelectorProps {
    option: Option;
    defaultOption: ComponentType | string;
}
declare const Selector: ({ defaultOption, option, children }: PropsWithChildren<SelectorProps>) => ReactNode;
export default Selector;
