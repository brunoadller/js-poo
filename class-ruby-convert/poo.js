export  class Transaction{

    constructor(amount, created_at, from, to){
        this.amount = amount
        this.created_at = created_at,
        this.from = from
        this.to = to

        if(this.from){
            this.from.to = this
        }
    }
}


const transaction1 = new Transaction(100, "oct 9", null, null)
const transaction2 = new Transaction(200, "Oct 10", transaction1, null)
const transaction3 = new Transaction(100, 'oct 11', transaction2, null)

console.log(transaction3.from.from.amount)