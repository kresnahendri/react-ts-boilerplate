import styled, { css } from '../../libs/styled-components'

export interface IButtonProps {
  size: 'xs' | 'sm' | 'md' | 'lg'
  variant: 'primary' | 'outline' | 'nude'
}

const Button = styled('button') <IButtonProps>`
  border-radius: 20px;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.4px;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-in-out;
  outline: none;
  ${(props) => { // Set size
    const lgSize = css`
      padding: 12px 20px;
      min-width: 255px;
      border-radius: 24px;
      font-size: 14px;
      letter-spacing: .4px;
    `
    const mdSize = css`
      padding: 9px 20px;
      min-width: 160px;
      border-radius: 20px;
      font-size: 12px;
      letter-spacing: .2px;
    `
    const smSize = css`
      padding: 7px 16px;
      min-width: 160px;
      border-radius: 24px;
      font-size: 12px;
      letter-spacing: .2px;
    `
    const xsSize = css`
      padding: 4px 12px;
      min-width: 83px;
      border-radius: 12px;
      font-size: 10px;
      letter-spacing: .2px;
    `
    switch (props.size) {
      case 'xs':
        return xsSize
      case 'sm':
        return smSize
      case 'md':
        return mdSize
      case 'lg':
        return lgSize
      default:
        return mdSize
    }
  }}
  ${(props) => { // Set variant
    const primary = css`
    color: ${props.theme.button.color.primary.text};
    background: ${props.theme.button.color.primary.main};
    border: 1px solid ${props.theme.button.color.primary.main};
    ${(props.disabled)
        ? `
          background-color: ${props.theme.button.color.primary.disabled};
          border: 1px solid ${props.theme.button.color.primary.disabled};
        `
        : `
        &:hover {
          background-color: ${props.theme.button.color.primary.hover};
          border: 1px solid ${props.theme.button.color.primary.hover};
          background-image: none;
        }
        &:active {
          background-color: ${props.theme.button.color.primary.active};
          border: 1px solid ${props.theme.button.color.primary.active};
          background-image: none;
          box-shadow: none;
        }
        `
      }
  `
    const outline = css`
    color: ${props.theme.button.color.outline.main};
    background: ${props.theme.color.white};
    border: 1px solid ${props.theme.button.color.outline.main};
    ${(props.disabled)
        ? `
          background: ${props.theme.color.white};
          color: ${props.theme.button.color.outline.disabled};
          border: 1px solid ${props.theme.button.color.outline.disabled};
        `
        : `
        &:hover {
          color: ${ props.theme.button.color.outline.hover};
          border: 1px solid ${props.theme.button.color.outline.hover};
        }
        &:active {
          color: ${props.theme.button.color.outline.active};
          border: 1px solid ${props.theme.button.color.outline.active};
        }
        `
      }
  `
    const nude = css`
    color: ${ props.theme.button.color.nude.main}
    background: transparent
    border: 1px solid transparent;
    ${(props.disabled)
        ? `
        color: ${props.theme.button.color.nude.disabled};
        `
        : `
        &:hover {
          color: ${props.theme.button.color.nude.hover};
        }
        &:active {
          color: ${props.theme.button.color.nude.active};
        }
        `
      }
    `
    switch (props.variant) {
      case 'primary':
        return primary
      case 'outline':
        return outline
      case 'nude':
        return nude
      default:
        return primary
    }
  }}
  ${(props) => { // Set disabled
    return props.disabled && `
      background-image: none;
      box-shadow: none;
      &:hover,
      &:active {
        background-color: none;
        background-image: none;
        box-shadow: none;
      }
    `}
  }
`

export default Button
