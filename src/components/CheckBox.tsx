import { ReactNode } from 'react';
import { clsx } from 'clsx';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react';

export interface CheckBoxProps extends CheckboxPrimitive.CheckboxProps {
}

export function CheckBox(props: CheckBoxProps){
  return(
    <CheckboxPrimitive.Root className="w-6 h-6 p-[2px] rounded bg-gray-800" {...props}>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight='bold' className='h-5 w-5 text-cyan-500' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
} 