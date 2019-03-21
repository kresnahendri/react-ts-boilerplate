import * as React from 'react'
import { connect } from 'react-redux'
import { Alert } from '../../components'
import styled from '../../libs/styled-components'
import { hideToast } from '../../store/actions/toastActions'

interface IProps {
  text: string
  show: boolean
  variant: 'success' | 'warning' | 'info' | 'error'
  hideToast: () => any
}

const Toast = (props: IProps) => {
  const handleClose = () => props.hideToast()
  return (
    <Wrapper>
      <Root show={props.show} variant={props.variant}>
        <div>{props.text}</div>
        <Close onClick={handleClose}>&times;</Close>
      </Root>
    </Wrapper>
  )
}

export default connect(null, { hideToast })(Toast)

const Wrapper = styled('div')`
  display: flex;
  justify-content: center;
`
const Root = styled(Alert) <{ show: boolean }>`
  position: fixed;
  max-width: 300px;
  min-width: 250px;
  width: 20%;
  top: ${(props) => props.show ? '10px' : '-200px'};
  transition: all .2s ease-in-out;
`
const Close = styled('div')`
  cursor: pointer;
`
