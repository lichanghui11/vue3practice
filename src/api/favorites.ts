import { http } from '../utils/http.ts'

// Favorite an article 
export const likeArticle = (slug: string) => http.post(`/articles/${slug}/favorite`, {AuthRequired: true});

// Unfavorite an article
export const dislikeArticle = (slug: string) => http.delete(`/articles/${slug}/favorite`, {AuthRequired: true})

