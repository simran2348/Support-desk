import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

export const UseAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false)
  const [checking, setChecking] = useState(true)

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {
    if (user) {
      setLoggedIn(true)
    } else {
      setLoggedIn(false)
    }
    setChecking(false)
  }, [user])

  return { loggedIn, checking }
}
