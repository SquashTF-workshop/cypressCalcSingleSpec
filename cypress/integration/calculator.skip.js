describe('CalculatorSkip', () => {
  beforeEach(() => {
      cy.visit('/errorInBeforeEach')
    })

  it('shouldFail', () => {
    var a = 5
    var b = 12
    expect(a + b).to.equal(17)
  })

  it('shouldSkip', () => {
      var a = 5
      var b = 12
      expect(a + b).to.equal(17)
    })
})