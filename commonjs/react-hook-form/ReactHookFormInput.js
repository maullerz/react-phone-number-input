"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _reactHookForm = require("react-hook-form");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let ReactHookFormInput = (_ref, ref) => {
  let {
    Component,
    name,
    defaultValue,
    shouldUnregister,
    control,
    rules,
    onChange: onChange_,
    onBlur: onBlur_,
    ...rest
  } = _ref;
  const internalRef = (0, _react.useRef)();
  const setRef = (0, _react.useCallback)(instance => {
    internalRef.current = instance;

    if (ref) {
      if (typeof ref === 'function') {
        ref(instance);
      } else {
        ref.current = instance;
      }
    }
  }, [ref]); // `feact-hook-form` doesn't know how to properly handle `undefined` values.
  // https://github.com/react-hook-form/react-hook-form/issues/2990

  defaultValue = defaultValue === undefined ? null : defaultValue;

  const renderInputComponent = _ref2 => {
    let {
      ref,
      onChange,
      onBlur,
      // `restReactHookFormControlledFieldProps` contain properties like `name` and `value`.
      // https://github.com/react-hook-form/react-hook-form/blob/b0e6c3057ac12a7b12d5616aecf3791acb7d7204/src/types/controller.ts#L21-L30
      ...restReactHookFormControlledFieldProps
    } = _ref2;
    // Setting `ref` passed by `react-hook-form` results in a bug:
    // when an initial value is defined (example: "+78005553535")
    // it seems to be set directly on the `ref`d `<input/>`
    // by `react-hook-form` and the result is a non-formatted
    // "+78005553535" initial value in the `<input/>`.
    //
    // To work around that bug, a fake `ref` is assigned,
    // so that it could only `.focus()` it and no more.
    //
    // `useImperativeHandle()` hook seems to allow `ref` being `undefined`.
    //
    // if (ref) {
    (0, _react.useImperativeHandle)(ref, () => ({
      focus() {
        internalRef.current.focus();
      }

    })); // }

    const setComponentRef = (0, _react.useCallback)(instance => {
      setRef(instance); // if (ref) {
      //   if (typeof ref === 'function') {
      //     ref(instance)
      //   } else {
      //     ref.current = instance
      //   }
      // }
    }, [ref, setRef]);
    const onChangeCombined = (0, _react.useCallback)(value => {
      // `feact-hook-form` doesn't know how to properly handle `undefined` values.
      // https://github.com/react-hook-form/react-hook-form/issues/2990
      if (value === undefined) {
        value = null;
      }

      onChange(value);

      if (onChange_) {
        onChange_(value);
      }
    }, [onChange, onChange_]);
    const onBlurCombined = (0, _react.useCallback)(event => {
      onBlur(event);

      if (onBlur_) {
        onBlur_(event);
      }
    }, [onBlur, onBlur_]);
    return /*#__PURE__*/_react.default.createElement(Component, _extends({}, rest, restReactHookFormControlledFieldProps, {
      ref: setComponentRef,
      onChange: onChangeCombined,
      onBlur: onBlurCombined
    }));
  }; // `react-hook-form@7` no longer accepts `onFocus` property.
  // Since this component can be used with both `v6` and `v7`,
  // the `onFocus` property is left here.


  const onFocus = (0, _react.useCallback)(() => {
    // internalRef.current.disabled = false
    internalRef.current.focus();
  }, []);
  return /*#__PURE__*/_react.default.createElement(_reactHookForm.Controller, {
    control: control,
    name: name,
    defaultValue: defaultValue,
    shouldUnregister: shouldUnregister,
    rules: rules,
    onFocus: onFocus,
    render: props => {
      // Differentiate between `react-hook-form@6` and `react-hook-form@7`.
      // https://react-hook-form.com/migrate-v6-to-v7/
      // https://gitlab.com/catamphetamine/react-phone-number-input/-/issues/57
      // `props` (before v7) and `props.fields` (in v7) contain properties like:
      // `ref`, `name`, `value`, `onChange`, `onBlur`.
      // https://github.com/react-hook-form/react-hook-form/blob/b0e6c3057ac12a7b12d5616aecf3791acb7d7204/src/types/controller.ts#L21-L30
      return renderInputComponent(props.field || props);
    }
  });
};

ReactHookFormInput = /*#__PURE__*/_react.default.forwardRef(ReactHookFormInput);
ReactHookFormInput.propTypes = {
  Component: _propTypes.default.elementType.isRequired,
  name: _propTypes.default.string.isRequired,
  defaultValue: _propTypes.default.string,
  // A quote from `react-hook-form`:
  // Without `shouldUnregister: true`, an input value would be retained when input is removed.
  // Setting `shouldUnregister: true` makes the form behave more closer to native.
  shouldUnregister: _propTypes.default.bool,
  control: _propTypes.default.object.isRequired,
  rules: _propTypes.default.object,
  onChange: _propTypes.default.func,
  onBlur: _propTypes.default.func
};
var _default = ReactHookFormInput;
exports.default = _default;
//# sourceMappingURL=ReactHookFormInput.js.map