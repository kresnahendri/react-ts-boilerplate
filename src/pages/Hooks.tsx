import * as React from 'react'

const Hooks = () => {
  const [username, setUsername] = React.useState('Your Name')
  const [password, setPassword] = React.useState('')

  React.useEffect(() => {
    // tslint:disable-next-line:no-console
    console.log('Username changed')
  }, [username])

  React.useEffect(() => {
    // tslint:disable-next-line:no-console
    console.log('Password changed')
  }, [password])

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setUsername(e.target.value)
  }
  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    setPassword(e.target.value)
  }

  return (
    <>
      <p>My name is {username}</p>
      <input type="text" defaultValue={username} onChange={handleChangeName} />
      <input type="password" defaultValue={password} onChange={handleChangePassword} />
    </>
  )
}

export default Hooks
