import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'

import { SelectField, Option } from '.'

const stories = storiesOf('React Select Field', module)

stories
  .add('Simple usage', () => {
    const ExampleUsage = () => (
      <SelectField label='Example usage'>
        <Option>Item 1</Option>
        <Option>Item 2</Option>
        <Option>Item 3</Option>
      </SelectField>
    )

    return <ExampleUsage />
  })

  .add('Handle changes', () => {
    class HandleChanges extends PureComponent {
      state = {
        selectedItem: ''
      }

      handleChange = (value) => {
        this.setState({
          selectedItem: value
        })
      }

      render () {
        const { selectedItem } = this.state

        return (
          <div>
            <span>Selected item: { selectedItem }</span>

            <hr/>

            <SelectField
              label='Example usage'
              value={selectedItem}
              onChange={this.handleChange}
            >
              <Option value='Item 1'>Item 1</Option>
              <Option value='Item 2'>Item 2</Option>
              <Option value='Item 3'>Item 3</Option>
            </SelectField>
          </div>
        )
      }
    }

    return <HandleChanges />
  })

  .add('Error message', () => {
    class ErrorMessage extends PureComponent {
      state = {
        selectedItem: ''
      }

      handleChange = (value) => {
        this.setState({
          selectedItem: value
        })
      }

      render () {
        const { selectedItem } = this.state

        return (
          <div>
            <span>Selected item: { selectedItem }</span>

            <hr/>

            <SelectField
              label='Example usage'
              value={selectedItem}
              onChange={this.handleChange}
              error='This value is wrong'
            >
              <Option value='Item 1'>Item 1</Option>
              <Option value='Item 2'>Item 2</Option>
              <Option value='Item 3'>Item 3</Option>
            </SelectField>
          </div>
        )
      }
    }

    return <ErrorMessage />
  })

  .add('Multiple selects', () => {
    class Selects extends PureComponent {
      constructor (props) {
        super(props)
        this.state = {
          selectOne: '',
          selectTwo: '',
          selectThree: ''
        }
      }

      handleChange = (key, value) => {
        this.setState({
          [key]: value
        })
      }

      render () {
        const { selectOne, selectTwo, selectThree } = this.state

        return (
          <React.Fragment>
            <SelectField
              label='Select One'
              value={selectOne}
              onChange={value => this.handleChange('selectOne', value)}
            >
              <Option value='Item 1'>Item 1</Option>
              <Option value='Item 2'>Item 2</Option>
              <Option value='Item 3'>Item 3</Option>
            </SelectField>

            <SelectField
              label='Select Two'
              value={selectTwo}
              onChange={value => this.handleChange('selectTwo', value)}
              error='Error example'
            >
              <Option value='Item 1'>Item 1</Option>
              <Option value='Item 2'>Item 2</Option>
              <Option value='Item 3'>Item 3</Option>
            </SelectField>

            <SelectField
              label='Select Three'
              value={selectThree}
              onChange={value => this.handleChange('selectThree', value)}
            >
              <Option value='Item 1'>Item 1</Option>
              <Option value='Item 2'>Item 2</Option>
              <Option value='Item 3'>Item 3</Option>
            </SelectField>
          </React.Fragment>
        )
      }
    }

    return <Selects />
  })
