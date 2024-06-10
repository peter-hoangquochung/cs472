// a) Create a test.js file, and write Mocha / Chai test for each of the methods to test that everything works as expected.

describe('Account class', function() {
    it('Deposit', function() {
        let acc = new Account(123);
        acc.deposit(100);
        assert.equal(acc.getBalance(), 100);
    });

    it('Withdraw', function() {
        let acc = new Account(123);
        acc.deposit(100);
        acc.withdraw(50);
        assert.equal(acc.getBalance(), 50);
    });

    it('Convert to test', function() {
        let acc = new Account(999);
        acc.deposit(10);
        assert.equal(acc.toString(), "Account 999: balance 10");
    });
});

describe('SavingsAccount class', function() {
    it('Add Interest', function() {
        let acc = new SavingsAccount(999, 10);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.getBalance(), 110);
    });

    it('Test toString method', function() {
        let acc = new SavingsAccount(999, 10);
        acc.deposit(100);
        acc.addInterest();
        assert.equal(acc.toString(), "Savings Account 999: balance 110: interest 10");
    });
});

describe('CheckingAccount', function() {
    it('Withdraw', function() {
        let acc = new CheckingAccount(999, 100);
        acc.deposit(100);
        acc.withdraw(50);
        assert.equal(acc.getBalance(), 50);
    });

    it('Convert to test', function() {
        let acc = new CheckingAccount(999, 100);
        acc.deposit(100);
        acc.withdraw(50);
        console.log(acc.toString());
        assert.equal(acc.toString(), "Checking Account 999: balance 50: overdraft limit 100");
    });
});

describe('Bank', function() {
    it('Add Account', function() {
        let bank = new Bank();
        bank.addAccount();
        assert.equal(bank.getAccounts().length, 1);
    });

    it('Add Savings Account', function() {
        let bank = new Bank();
        bank.addSavingsAccount(10);
        assert.equal(bank.getAccounts().length, 1);
    });

    it('Add Checking Account', function() {
        let bank = new Bank();
        bank.addCheckingAccount(100);
        assert.equal(bank.getAccounts().length, 1);
    });

    it('Close Account', function() {
        let bank = new Bank();
        const accountNumber = bank.addAccount();
        bank.closeAccount(accountNumber);
        assert.equal(bank.getAccounts().length, 0);
    });

    it('Account Report', function() {
        let bank = new Bank();
        const accountNumber = bank.addAccount();
        const savingsAccountNumber = bank.addSavingsAccount(10);
        const checkingAccountNumber = bank.addCheckingAccount(50);
        assert.equal(bank.accountReport(), `Account ${accountNumber}: balance 0\nSavings Account ${savingsAccountNumber}: balance 0: interest 10\nChecking Account ${checkingAccountNumber}: balance 0: overdraft limit 50`);
    });
});

describe('Bank class for end of month', function() {
    it('Test endOfMonth method', function() {
        let bank = new Bank();
        bank.addAccount();

        const savingsAccountNumber = bank.addSavingsAccount(10);
        const savingsAccount = bank.getAccount(savingsAccountNumber);
        savingsAccount.deposit(100);

        const checkingAccountNumber = bank.addCheckingAccount(50);
        const checkingAccount = bank.getAccount(checkingAccountNumber);
        checkingAccount.deposit(100);
        checkingAccount.withdraw(150);

        const endOfMonthResult = bank.endOfMonth();
        console.log(endOfMonthResult);
        assert.equal(endOfMonthResult, "\nInterest added SavingsAccount 9: balance: 110 interest: 10\nWarning, low balance CheckingAccount 10: balance: -50 overdraft limit: 50");
    });
});