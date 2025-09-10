import { http, HttpResponse } from 'msw'
interface User {
  email: string;
  password: string;
  username: string;
}
// simulate the register workflow.
export const handlers = [
  http.get('http://localhost:5173/user', async () => {
    return HttpResponse.json({
      email: 'xxx@gmail.com', 
      token: 'TEST',
      username: 'xxx',
      bio: 'bio desc',
      image: 'img'
    })
  })
]