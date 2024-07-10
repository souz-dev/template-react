export type MaskType =
  | 'phone'
  | 'zipCode'
  | 'cpf'
  | 'cnpj'
  | 'birthDate'
  | 'brl'

const patternToMask = (value: string, pattern: string) => {
  const currentValue = value.replace(/\D/g, '')
  let position = 0
  return pattern
    .replace(/(#{1,})/g, (element) => {
      const length = element.length
      const result = currentValue.slice(position, position + length)
      position += length
      return result
    })
    .replace(/(\W{1,})$/, '')
}

export function formatNumber(numberValue: number) {
  return `${numberValue.toLocaleString('pt-BR', {
    minimumFractionDigits: 5,
    style: 'currency',
    currency: 'BRL',
  })}`
}

export const applyMask = (value: string, mask: MaskType) => {
  if (!value) return value

  switch (mask) {
    case 'phone':
      return patternToMask(value, '+## (##) #####-####')
    case 'zipCode':
      return patternToMask(value, '#####-###')
    case 'cpf':
      return patternToMask(value, '###.###.###-##')
    case 'cnpj':
      return patternToMask(value, '##.###.###/####-##')
    case 'birthDate':
      return patternToMask(value, '##/##/####')
    case 'brl': {
      const newValue = Number(value.replace(/\D/g, ''))
      if (isNaN(newValue)) return value
      return formatNumber(newValue / 100000)
    }
    default:
      return value
  }
}

export const removeMask = (value: string, maks: MaskType) => {
  if (!value) return value

  const newValue = value.replace(/\D/g, '')

  switch (maks) {
    case 'brl': {
      const brlValue = Number(newValue)
      if (isNaN(brlValue)) return value
      return brlValue / 100000
    }
    default:
      return newValue
  }
}
