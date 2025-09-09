import { http } from '../utils/http.ts'

// 获得你 follow 的用户的最近帖文，query 为获取数量
interface FollowedFeed {offset?: number, limit?: number}
export const getFollowedFeed = (query?: FollowedFeed) => http.get('/articles/feed', {params: query, AuthRequired: true})

// 获得最近的全局帖文
interface GlobalFeed {tag?: string, author?: string, favorited?: string, offset?: number, limit?: number}
export const getGlobalFeed = (query?: GlobalFeed) => http.get('/articles', {params: query })

// 创建帖文
interface Article {
    "title": "string",
    "description": "string",
    "body": "string",
    "tagList": [
      "string"
    ]
  }
export const createArticle = (data: Article) => http.post('/articles', { article: data }, { AuthRequired: true });

// 获取一篇帖文
export const getArticle = (slug: string) => http.get('/articles/' + slug);

// 更新帖文
interface UpdatedArticle {
  "title": "string",
  "description": "string",
  "body": "string"
}
export const updateArticle = (slug: string, data: UpdatedArticle) => http.put('/articles/' + slug, { article: data }, { AuthRequired: true });

// 删除帖文
export const deleteArticle = (slug: string) => http.delete('/delete' + slug, { AuthRequired: true });
