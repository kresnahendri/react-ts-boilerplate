import styled, { css } from "styled-components"

const background = (props: any) => {
  switch (props.color) {
    case "babu":
      return css`background: ${props.theme.color.BABU};`
    default:
      return css`background: ${props.theme.color.RAUSCH};`
  }
}

const Button = styled.button`
  border: 1px solid #ddd;
  padding: ${props => props.theme.space.TINY}
  ${props => background(props)}
`

export default Button
