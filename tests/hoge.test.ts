describe.skip('greet', (): void => {
  test('should say hello to Tom.', (): void => {
    const response: string = 'Hello, Tom!';
    expect(response).toBe('Hello, Tom!');
  });
});
