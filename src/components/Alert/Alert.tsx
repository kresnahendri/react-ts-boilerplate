import styled from '../../libs/styled-components'

interface IProps {
  variant: 'success' | 'warning' | 'info' | 'error'
}
const Alert = styled('div') <IProps>`
  padding: 15px;
  display: flex;
  justify-content: space-between;
  color: white;
  background: ${(props) => {
    if (props.variant === 'success') {
      return props.theme.color.kiwi01
    }
    if (props.variant === 'info') {
      return props.theme.color.blueberry01
    }
    return 'red'
  }};
`

export default Alert
