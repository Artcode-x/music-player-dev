import { useNavigate } from 'react-router-dom'

export default function Login({ input, setInput }) {
  const navigate = useNavigate()

  const onButtonClick = () => {
    // setLogin(true)

    navigate('/main', { replace: true })
  }
  return (
    <div>
      <h1>Login Page</h1>
      <input
        value={input}
        onChange={(event) => {
          setInput(event.target.value)
        }}
      />
      <button type="button" onClick={onButtonClick}>
        Login
      </button>
    </div>
  )
}
