import { http } from '../utils/http.ts'

// Get tags
export const getTags = () => http.get('/tags');