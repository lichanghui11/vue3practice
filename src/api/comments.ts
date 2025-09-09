import { http } from '../utils/http.ts'

// Get comments for a specific article
export const getComment = (slug: string) => http.get(`/articles/${slug}/comments`);

// Create a comment for an article
interface Comment {body: string}
export const createComment = (slug: string, data: Comment) => http.post(`/articles/${slug}/comments`, { comment: data }, { AuthRequired: true });

// Delete a specific comment for an article
export const deleteComment = (slug: string, id: number) => http.delete(`/articles/${slug}/comments/${id}`);