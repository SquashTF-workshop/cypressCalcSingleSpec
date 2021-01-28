describe('reverseCalculator', () => {
  it('testFailure', () => {
    var a = 10
    var p1 = a / 2
    var p2 = a - p1
    expect(p1).to.equal(4)
    expect(p2).to.equal(2)
  })
})
