import React from 'react';
import TextField from 'material-ui/TextField';

const TextFieldComponent = (
  {
    fullWidth,
    type,
    value,
    hintText,
    style,
    inputStyle,
    floatingLabelText,
    errorText,
    onChange
  }
) => (
  <TextField
    fullWidth={fullWidth}
    type={type}
    value={value}
    hintText={hintText}
    style={style}
    inputStyle={inputStyle}
    floatingLabelText={floatingLabelText}
    errorText={errorText}
    onChange={(e, newValue) => onChange(newValue)}
  />
);

TextFieldComponent.defaultProps = {
  fullWidth: true,
  type: 'text',
  value: '',
  hintText: '',
  style: {},
  inputStyle: {},
  floatingLabelText: '',
  errorText: null,
  onChange: () => {}
};

export default TextFieldComponent;
