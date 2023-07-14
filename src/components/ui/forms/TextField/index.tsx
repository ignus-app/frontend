'use client'

import { FormEvent, forwardRef, ReactNode, InputHTMLAttributes } from 'react'

import { cn } from '@/lib/utils'

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: ReactNode
  label?: string
  rightIcon?: ReactNode
  error?: string
  assistiveText?: string | ReactNode
  bgColor?: string
  mask?:
    | 'cel'
    | 'fixo'
    | 'kw'
    | 'decimal'
    | 'coords'
    | 'cep'
    | 'date'
    | 'isoDateHour'
    | 'defaultDateHour'
    | 'justNumbers'
    | 'noSpecialChars'
  maxChars?: number
  toFixed?: number
  type?: string
  standard?: boolean
  validation?:
    | 'success'
    | 'warning'
    | 'info'
    | 'error'
    | 'default'
    | 'none'
    | string
}

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  (
    {
      error,
      assistiveText,
      leftIcon,
      rightIcon,
      label,
      bgColor = '#fff',
      mask,
      maxChars,
      toFixed = 2,
      type,
      standard,
      validation,
      ...props
    },
    ref,
  ) => {
    function applyMask(event: FormEvent, type: string) {
      const input = event.target as HTMLInputElement
      input.value =
        type === 'kw' || type === 'decimal'
          ? decimalMask(input.value, type, toFixed)
          : type === 'coords'
          ? coordsMask(input.value, type)
          : type === 'cep'
          ? cepMask(input.value, type)
          : type === 'date'
          ? dateMask(input.value, type)
          : type === 'isoDateHour' || type === 'defaultDateHour'
          ? dateHourMask(input.value, type)
          : type === 'justNumbers'
          ? justNumbers(input.value, type)
          : type === 'noSpecialChars'
          ? noSpecialChars(input.value, type)
          : phoneMask(input.value, type)
    }

    function phoneMask(value: string, type: string) {
      if (!value) return ''
      value = value?.replace(/\D/g, '')

      if (type === 'cel') {
        value = value
          ?.replace(/(\d{2})(\d)/, '($1) $2')
          .replace(/(\d)(\d{2})/, '$1 $2')
      } else if (type === 'fixo') {
        value = value?.replace(/(\d{2})(\d)/, '($1) $2')
      }
      value = value?.replace(/(\d)(\d{4})$/, '$1-$2')

      return value
    }

    function decimalMask(value: string, type: string, toFixed: number) {
      if (!value) return ''

      const pattern =
        toFixed === 2
          ? /(\d)(\d{2})$/
          : toFixed === 3
          ? /(\d)(\d{3})$/
          : toFixed === 4
          ? /(\d)(\d{4})$/
          : toFixed === 5
          ? /(\d)(\d{5})$/
          : toFixed === 6
          ? /(\d)(\d{6})$/
          : /(\d)(\d{2})$/
      value = value?.replace(/\D/g, '').replace(pattern, '$1,$2')

      return value
    }

    function coordsMask(value: string, type: string) {
      if (!value) return ''
      value = value?.replace(/[^\d\s+-]/g, '').replace(/(\d)(\d{6})$/, '$1.$2')

      return value
    }

    function cepMask(value: string, type: string) {
      if (!value) return ''
      value = value?.replace(/\D/g, '').replace(/(\d)(\d{3})$/, '$1-$2')

      return value
    }

    function dateMask(value: string, type: string) {
      if (!value) return ''
      value = value
        ?.replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})(\d)/, '$1')

      return value
    }

    function justNumbers(value: string, type: string) {
      if (!value) return ''
      value = value?.replace(/\D/g, '')

      return value
    }

    function noSpecialChars(value: string, type: string) {
      if (!value) return ''

      value = value?.replace(/[^a-zA-Z0-9" "]/g, '')

      return value
    }

    function dateHourMask(value: string, type: string) {
      if (!value) return ''

      if (type === 'isoDateHour') {
        value = value
          ?.replace(/\D/g, '')
          .replace(
            /(\d{4})(\d{2})(\d{2})(\d{2})(\d{2})(\d{1})/,
            '$1-$2-$3 $4:$5:$6',
          )
      } else if (type === 'defaultDateHour') {
        value = value
          ?.replace(/\D/g, '')
          .replace(
            /(\d{2})(\d{2})(\d{4})(\d{2})(\d{2})(\d{1})/,
            '$1/$2/$3 $4:$5:$6',
          )
      }

      return value
    }

    return (
      <div className="flex w-full flex-col gap-1">
        <div
          data-validation={validation}
          className={cn(
            `relative flex h-11 rounded-md border border-gray-100 px-4 py-3
            transition-colors duration-150 ease-linear hover:border-brand-secondary`,
            {
              'border-red-600': error || validation === 'error',
              'hover:border-red-600': error || validation === 'error',
            },
          )}
        >
          {leftIcon && (
            <span className="flex items-center justify-center">{leftIcon}</span>
          )}
          <input
            ref={ref}
            id={label}
            className={cn(
              `w-full border-none bg-transparent placeholder-gray-200/50
            outline-none focus:ring-0`,
              {
                'placeholder-red-600/50': error || validation === 'error',
              },
            )}
            type={mask === 'cel' || mask === 'fixo' ? 'tel' : type}
            onInput={(e) => mask && applyMask(e, mask)}
            maxLength={
              mask === 'cel'
                ? 16
                : mask === 'fixo'
                ? 14
                : mask === 'cep'
                ? 9
                : mask === 'date'
                ? 10
                : mask === 'isoDateHour' || mask === 'defaultDateHour'
                ? 19
                : maxChars ?? 999999999999999
            }
            {...props}
          />
          {rightIcon && (
            <span className="flex items-center justify-center">
              {rightIcon}
            </span>
          )}
        </div>
        <div className="flex items-center justify-between px-2">
          {error ? (
            <span className="flex items-center text-xs text-red-600">
              {error}
            </span>
          ) : (
            <span className="flex items-center text-xs text-gray-800">
              {assistiveText}
            </span>
          )}
        </div>
      </div>
    )
  },
)

TextField.displayName = 'TextField'
