import React, { useContext } from 'react'

export const UserContext = React.createContext({
  user: null,
  toggleUser: () => {},
  toggleLogout: () => {},
})

export const useUserContext = () => {
  const user = useContext(UserContext)

  return user
}
