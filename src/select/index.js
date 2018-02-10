import React from 'react'
import PropTypes from 'prop-types'

import SelectContainer from './styles'

const SelectField = ({ label, value, onChange, error, children }) => (
  <SelectContainer>
    <div className={`select ${ error && 'has-error' }`}>
      <select
        onChange={e => onChange(e.target.value)}
        value={value}
        className='select-text'
        required
      >
        <option value='' disabled />
        { children }
      </select>

      <span className='select-highlight' />
      <span className='select-bar' />
      <span className="select-error">{ error }</span>
      <label className='select-label'>{ label }</label>
    </div>
  </SelectContainer>
)

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.node.isRequired
}

SelectField.defaultProps = {
  value: ''
}

export default SelectField
