export default class OptionContext {
    stateChangeListeners = new Set();
    valueChangeListeners = new Set();
    _state = {};
    _data = {};
    _options;
    get options() {
        return this._options;
    }
    get state() {
        return this._state;
    }
    constructor(options) {
        this._options = options;
        for (const option of options) {
            this._state[option.key] = {
                key: option.key,
                available: 0,
                options: []
            };
        }
    }
    addStateChangeListener(listener) {
        this.stateChangeListeners.add(listener);
    }
    removeStateChangeListener(listener) {
        this.stateChangeListeners.delete(listener);
    }
    addValueChangeListener(listener) {
        this.valueChangeListeners.add(listener);
    }
    removeValueChangeListener(listener) {
        this.valueChangeListeners.delete(listener);
    }
    optionEnter(key) {
        // TODO:
        const optionState = this.getOptionState(key);
        this.setState({
            [key]: {
                ...optionState,
                available: optionState.available + 1
            }
        });
    }
    optionExit(key) {
        const optionState = this.getOptionState(key);
        this.setState({
            [key]: {
                ...optionState,
                available: optionState.available - 1
            }
        });
    }
    getOptionState(key) {
        return this.state[key] || null;
    }
    getValue(key) {
        const optionState = this.getOptionState(key);
        if (!optionState) {
            return null;
        }
        const value = this._data[key];
        if (value) {
            return value;
        }
        return optionState.defaultValue || null;
    }
    setValue(key, value) {
        for (const listener of Array.from(this.valueChangeListeners)) {
            listener(key, value);
        }
    }
    // set single source of truth
    setData(data) {
        this._data = data;
        this.notifyListener();
    }
    setDefaultValue(key, defaultValue) {
        const optionState = this.getOptionState(key);
        this.setState({
            [key]: {
                ...optionState,
                defaultValue
            }
        });
    }
    setOptions(key, options) {
        this.setState({
            [key]: {
                ...this.state[key],
                key,
                options
            }
        });
    }
    setState(state) {
        this._state = {
            ...this.state,
            ...state
        };
        this.notifyListener();
    }
    notifyListener() {
        for (const listener of Array.from(this.stateChangeListeners)) {
            listener();
        }
    }
}
//# sourceMappingURL=OptionContext.js.map