import { useAuth, useLogout } from "@faustwp/core";

export default function Login() {
  const { isAuthenticated, isReady, loginUrl } = useAuth()
  const { logout } = useLogout()

  if (!isReady) {
    return <>Loading...</>
  }

  if (isAuthenticated === true) {
    return (
      <>
        <p>Authenticated</p>
        <button
        onClick={() => logout()}
        >Logout</button>
      </>
    );
  }

  return (
    <>
      <p>Welcome</p>
      <a href={loginUrl}>login</a>
    </>
  )
}