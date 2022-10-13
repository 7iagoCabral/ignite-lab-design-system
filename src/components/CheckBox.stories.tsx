import { Meta, StoryObj } from '@storybook/react'
import { CheckBox, CheckBoxProps } from './CheckBox'
import { Text } from './Text'

export default {
  title: 'components/CheckBox',
  component: CheckBox,
  args: {},
  argTypes: {},
  decorators: [
    (story) => (
      <div className='flex items-center gap-2'>
        {story()}
        <Text size='sm'>Lembrar-me de mim por 30 dias</Text>
      </div>
    )
  ],
} as Meta<CheckBoxProps>

export const Default: StoryObj<CheckBoxProps> = {}
