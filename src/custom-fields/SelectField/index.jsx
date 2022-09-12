import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label } from 'reactstrap';
import Select from "react-select";


SelectField.propTypes = {
    field: PropTypes.object.isRequired,
    form: PropTypes.object.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array
}

SelectField.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: []
}

function SelectField(props) {
    const {
        field,
        label, placeholder, disabled, options
    } = props;
    
    const { name, value } = field;
    const selectOption = options.find(option => option.value === value);
    const handleSelectOptionChange = (selectOption) => {
        const selectValue = selectOption ? selectOption.value : selectOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectValue
            }
        }

        field.onChange(changeEvent);
    }
  return (
    (<FormGroup>
        {label && <Label for={name}>{label}</Label>}
        <Select
          id={name}
          {...field}
          value={selectOption}
          onChange={handleSelectOptionChange}
          placeholder={placeholder}
          isDisabled={disabled}
          options={options}
        />
      </FormGroup>)
  )
}



export default SelectField
