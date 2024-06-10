"use strict";

class Bank {
    static nextNumber = 1;
    constructor() {
        this.accounts= [];
    }

    getAccounts() {
        return this.accounts;
    }

    getAccount(number) {
        return this.accounts.find(account => account.getNumber() === number);
    }

    addAccount() {
        const account = new Account(Bank.nextNumber++);
        this.accounts.push(account);
        return account.getNumber();
    }

    addSavingsAccount(interest) {
        const account = new SavingsAccount(Bank.nextNumber++, interest);
        this.accounts.push(account);
        return account.getNumber();
    }

    addCheckingAccount(overdraft) {
        const account = new CheckingAccount(Bank.nextNumber++, overdraft);
        this.accounts.push(account);
        return account.getNumber();
    }

    closeAccount(number) {
        const index = this.accounts.findIndex(account => account.getNumber() === number);
        if (index === -1) {
            throw Error("Account not found");
        }
        this.accounts.splice(index, 1);
    }

    accountReport() {
        return this.accounts.map(account => account.toString()).join("\n");
    }

    endOfMonth() {
        return this.accounts.map(account => account.endOfMonth()).join("\n");
    }
}