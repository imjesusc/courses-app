import { cn } from '@/utilities'
import { cva, type VariantProps } from 'class-variance-authority'
import * as React from 'react'

const titleVariants = cva('text-xl text-start font-normal leading-tight tracking-tighter', {
  variants: {
    size: {
      default: 'text-sm tablet:text-base',
      lg: 'text-sm tablet:text-base laptop:text-lg',
      sm: 'text-xs tablet:text-sm',
      '6xl': 'text-3xl mobile:text-4xl tablet:text-5xl laptop:text-6xl',
      xs: 'text-xs',
      '4xl': 'text-2xl tablet:text-3xl laptop:text-4xl',
      '5xl': 'text-2xl mobile:text-3xl tablet:text-4xl laptop:text-5xl',
      '3xl': 'xl tablet:text-2xl laptop:text-3xl',
      '2xl': 'text-xl tablet:text-2xl laptop:text-2xl',
      base: 'text-sm tablet:text-base',
      '7xl': 'text-5xl tablet:text-6xl laptop:text-7xl',
      '8xl': 'text-6xl tablet:text-7xl laptop:text-8xl'
    },
    animation: {
      fadeUp: 'tablet:motion-safe:animate-fade-up tablet:motion-safe:opacity-0'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof titleVariants> {
  as?: React.ElementType
  clampSize?: string
}

export const Typography: React.FC<TitleProps> = ({ as: Component = 'p', className, animation, size, ...props }) => {
  return <Component className={cn(titleVariants({ size, animation, className }))} {...props} />
}
