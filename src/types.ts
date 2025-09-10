export interface Article {
  id: number;
  author: {
    username: string;
    avatar: string;
  };
  createdAt: string;
  title: string;
  description: string;
  tags: string[];
  favoritesCount: number;
  favorited: boolean;
}
