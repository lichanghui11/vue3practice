import axios from "axios"


test('get the current user', async () => {
  // Given
  const currentUser = {
    email: "xxx@gmail.com",
    token: "TEST",
    username: "xxx",
    bio: "bio desc",
    image: "img",
  }

  // When
  const res = fetch('http://localhost:5173/user')

  // Then
  await expect((await res).json()).resolves.toEqual(currentUser);
})
interface User {
  email: string;
  password: string;
  username: string;
}

