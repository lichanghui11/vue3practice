import { beforeAll, afterEach, afterAll } from "vitest"
import { server } from "./mock/node.ts" 

beforeAll(() => {
  // 启动 MSW 服务器并监听 HTTP 请求，在测试开始前，它会拦截所有网络请求
  server.listen()
  console.log('正在监听所有测试。。。')
}) 

afterEach(() => {
  // 每次测试执行后重置所有已设置的请求处理器，以便不影响后续测试
  server.resetHandlers()
  console.log('确保每个测试后都重置 MSW 请求处理器，防止测试间有状态或处理器的干扰')
}) 
afterAll(() => {
// 停止 MSW 服务器，释放资源，防止资源泄漏
  server.close()
})
