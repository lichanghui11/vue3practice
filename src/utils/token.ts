const KEY = 'userToken'

export const setToken = (token: string): void => {
  localStorage.setItem(KEY, token)
}

export const removeToken = (): void => {
  localStorage.removeItem(KEY)
}

export const getToken = (): string | null => {
  return localStorage.getItem(KEY)
}