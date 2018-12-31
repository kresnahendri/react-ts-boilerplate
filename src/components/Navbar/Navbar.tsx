import * as React from "react"
import styled from "styled-components"

const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 10px;
  border-bottom: 1px solid grey;
  padding: 15px;
  ul {
    li {
      display: inline-block;
      padding: 10px;
      a {
        text-decoration: none;
      }
    }
  }
`

export default Navbar
