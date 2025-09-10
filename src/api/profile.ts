import { http } from '../utils/http.ts'

// Get a profile of a user
export const getProfile = (username: string) => http.get(`/profiles/${username}`)

// Follow a user by username
export const followUser = (username: string) => http.post(`/profiles/${username}/follow`, { AuthRequired: true });

// Unfollow a user by username
export const unfollowUser = (username: string) => http.delete(`/profiles/${username}/follow`, { AuthRequired: true });