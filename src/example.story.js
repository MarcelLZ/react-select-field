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
