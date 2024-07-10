import { RefObject } from 'react'

export type HTMLInputType =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week'

export type LocationStateType = {
  from: {
    pathname: string
    search: string
    hash: string
    key: string
  }
}

export const exitElement =
  (ref: RefObject<HTMLElement>, callback?: () => void) => (e: Event) => {
    if (
      e.target !== ref?.current &&
      !ref?.current?.contains(e.target as Node)
    ) {
      callback?.()
    }
  }
