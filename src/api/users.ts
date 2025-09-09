import { http } from '../utils/http.ts'

// Login for existing user
export const login = (data: {email: string, password: string}) => http.post('/users/login', data)

// Register a user
export const register = (data: {username: string, email: string, password: string}) => http.post('/users', data)

// Get the currently logged in user
export const getCurrentUser = () => http.get('/user',{AuthRequired: true})

// Update user information for current user
type AtLeastOne<T, Keys extends keyof T = keyof T> = 
  Keys extends keyof T
  ? { [K in Keys]-?: Required<Pick<T, K>> & Partial<T> }
  : never
interface UserInfo {
  email?: string,
  password?: string,
  username?: string,
  bio?: string,
  image?: string
}
interface UserUpdatedInfo {
  user: AtLeastOne<UserInfo>
}
export const updateInfo = (data: UserUpdatedInfo) => http.put('/user', data)
