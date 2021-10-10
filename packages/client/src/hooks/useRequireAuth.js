import { useEffect } from 'react'
import { useAuth } from 'hooks/useAuth'
import useRouter from 'hooks/useRouter'

export function useRequireAuth(redirectUrl = '/') {
  const auth = useAuth()
  const router = useRouter()

  // If auth.user is false that means we're not
  // logged in and should redirect.
  useEffect(() => {
    if (auth.state.isAuthenticated === false) {
      //router.push(redirectUrl)
    }
  }, [auth, router, redirectUrl])

  return auth
}
