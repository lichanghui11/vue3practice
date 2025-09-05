describe('smoke test', () => {
  it('简单测试1+1=2', () => {
    expect(1+1).toBe(2)
  }) 

  it('简单测试字符串相加', () => {
    expect('hello ' + 'world').toBe('hello world')
  })
})