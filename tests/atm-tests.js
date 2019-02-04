const expect = require('chai').expect
const atm = require('../lib/atm.js')

describe('ATM', () => {
    it('function getChange exists', () => {
        let result = atm.getChange
        expect(result).to.be.a('function')
    }),
    it('negative argument', () => {
        let result = atm.getChange(-500)
        expect(result).to.be.null
    }),
    it('non multiple-5 argument', () => {
        let result = atm.getChange(19)
        expect(result).to.be.null
    }),
    it('efficient change', () => {
        let result5 = atm.getChange(5)
        expect(result5, 'fail with 5').to.eql([0, 0, 0, 1])
        let result10 = atm.getChange(10)
        expect(result10, 'fail with 10').to.eql([0, 0, 1, 0])
        let result20 = atm.getChange(20)
        expect(result20, 'fail with 20').to.eql([0, 1, 0, 0])
        let result50 = atm.getChange(50)
        expect(result50, 'fail with 50').to.eql([1, 0, 0, 0])
        let result35 = atm.getChange(35)
        expect(result35, 'fail with 35').to.eql([0, 1, 1, 1])
        let result165 = atm.getChange(165)
        expect(result165, 'fail with 165').to.eql([3, 0, 1, 1])
    })
})