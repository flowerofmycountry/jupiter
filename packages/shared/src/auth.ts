const TOKEN_KEY = 'token'

const isLogin = () => {
  return !!localStorage.getItem(TOKEN_KEY)
}

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

const clearToken = () => {
  localStorage.removeItem(TOKEN_KEY)
}

const redirectToLogin = (loginPage: string) => {
  window.location.href = `${loginPage}?redirect=${window.location.href}`
}

export { isLogin, getToken, setToken, clearToken, redirectToLogin }
