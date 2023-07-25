import { useNavigate } from 'react-router-dom'

export default function Login({ setLogin }) {
  const navigate = useNavigate()

  const onButtonClick = () => {
    setLogin(true)
    navigate('/main', { replace: true })
  }
  return (
    <div>
      <h1>Login Page</h1>

      <button type="button" onClick={onButtonClick}>
        Login
      </button>
    </div>
  )
}
