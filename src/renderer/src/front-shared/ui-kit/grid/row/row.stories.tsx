import React from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Story } from '@storybook/react'

import { Container, Row, RowProps, Col } from '@grid'

import { Text, H1 } from '@typography'
import { bgColors } from '../const'
import { getStyledComponentPropsForDisable } from '@story-book-utilities'

export default {
  title: 'UI-kit/Grid/Row',
  component: Row,
  argTypes: {
    ...getStyledComponentPropsForDisable(),
    bgColor: {
      options: bgColors,
      control: { type: 'radio' }
    }
  },
  args: {
    debug: true
  }
} as Meta

const Template: Story<RowProps> = ({ bgColor, ...args }) => {
  return (
    <div style={{ background: bgColor }}>
      <Container debug={args.debug}>
        <Row {...args}>
          {new Array(12).fill('').map(() => (
            <Col mobileSize={12} tabletSize={4} desktopSize={3}>
              <Text>col</Text>
            </Col>
          ))}
        </Row>
        <H1 textAlign={'center'} style={{ backgroundColor: 'silver' }}>
          Bottom Sibling
        </H1>
      </Container>
    </div>
  )
}

export const row = Template.bind({})
row.args = {
  mobile: { offsetY: 20 },
  tablet: { offsetX: 30, offsetY: 0, col: 4 },
  desktop: { offsetY: 0 },
  bgColors: bgColors[0]
}
