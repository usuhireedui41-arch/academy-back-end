class Bankaccount {
    constructor(owner, balacne) {
        this.owner = owner;
        this.balance = balance;
    }
    deposit(amount) { this.balance += amount; }
    withdraw(amount) {
        if (amount > this.balance) return "Not enough balance!";
        this.balance -= amount;
    }
    getblance() { return this.balance; }
    }
    function updateBalance() {
        const owner = document.getElementById('owner').value;
        const balance = parseFloat(document.getElementById('balance').value);
        const deposit = parseFloat(document.getElementById('deposit').value);
        const withdraw = parseFloat(document.getElementById('withdraw').value);
        const account = new Bankaccount(owner, balance);

        account.deposit(deposit);
        const msg= account.withdraw(withdraw);
        document.getElementById('output').innerText = msg ? msg : 'balance: ' + account.getblance();
        
        
        

    }  