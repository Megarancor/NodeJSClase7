const bills = [50, 20, 10, 5]

class atm
{
    getChange(amount) {
        if (amount < 0) {
            return null
        }
        if ((amount % 5) !== 0) {
            return null
        }
        let result = []
        bills.reduce((initial, current) => {
            result.push(Math.trunc(initial / current))
            return initial % current
        }, amount)
        return result
    }
}

let instance = new atm()

module.exports = instance