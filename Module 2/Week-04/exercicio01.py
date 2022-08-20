
class SetBalanceError(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)

class AmountError(Exception):
    def __init__(self, message) -> None:
        super().__init__(message)

class Conta:
    def __init__(self, name: str, ag: str, acc: str, limit: int, balance: int) -> None:
        self.name = name
        self.agency = ag
        self.account = acc
        self.limit = limit
        self.__balance = balance


    def validation(f):
        def validate(self, value, acc=0):
            try:
                int(value)
            except:
                raise AmountError("Use numbers only")
            if value > self.balance + self.limit:
                raise AmountError("Sorry, you don't have limit for this operation")
            if value < 0:
                raise AmountError("Use positive numbers only")
            else:
                try:
                    return f(self, value)
                except:
                    return f(self, acc, value)
        return validate

    @property
    def balance(self):
        return self.__balance
    
    @balance.setter 
    @validation
    def balance(self, value):
        # if value < 0:
        #     raise SetBalanceError("Use positive integer values only")
        self.__balance = value
    
    def deposit(self, value) -> None:
        self.__balance += value
    
    @validation
    def withdrawal(self, value):
        self.__balance -= value
        print('The operation was a success!!')
    
    @validation
    def transfer(self, value: float, acc: object) -> None:
        self.withdrawal(value)
        acc.deposit(value)

if __name__ == "__main__":

    from printtext import sectionTitle, printMenu
    from validations import validNumInput, validStrInput
    import datetime as dt

    while True:

        sectionTitle('MCOELHO BANK', 80)
        user = validStrInput("Hello, what's your name?", 'Use letters only')
        print(f'\nWelcome, {user}!\n')
        print('What do you want to do?\n')
        options = ['Withdrawal', 'Deposit', 'Transfer', 'Balance']
        ans = printMenu(options)

        if ans == options[0]:

            while True:

                question = f'How much, {user}?'
                howmuch = validNumInput(float, question, "Use numbers only, and '.' for decimals")
                print('--')
                ag = validNumInput(int, 'Your agency number', "Use integers only")
                print('--')
                acc = validNumInput(int, 'Your account number', "Use integers only")
                print('--')
                useracc = Conta(user, ag, acc, 10000, 10000)
                print(f'=> {user}, you have U$ {useracc.balance},00 available\n')

                try:
                    useracc.withdrawal(howmuch)
                    sectionTitle('Resume', 30)
                    print(f'Name: {user}')
                    print(f'Agency: {ag}')
                    print(f'Account: {acc}')
                    print(f'Withdrawal: U$ {howmuch}')
                    print(f'Date: {dt.datetime.now()}')
                    print('--')
                    break

                except AmountError:
                    print('Something went wrong :-( => Please, check your balance and try again.')
                    continue
                
        break
    