import React from 'react'
import PropTypes from 'prop-types'

import SelectContainer from './styles'

const SelectField = ({ label, value, onChange, children }) => (
  <SelectContainer>
    <div className='select'>
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
      <label className='select-label'>{ label }</label>
    </div>
  </SelectContainer>
)

SelectField.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
  children: PropTypes.node.isRequired
}

SelectField.defaultProps = {
  value: ''
}

export default SelectField
