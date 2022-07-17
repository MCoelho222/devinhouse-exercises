
class Voos:
    
    def __init__(self, flight: int, from_: str, to: str, seats: int, ticket: float):

        self.flight = flight
        self.from_ = from_
        self.to = to
        self.allseats = seats
        self.seats = [x + 1 for x in range(seats)]
        self.ticket = ticket
        self.curr_seats = [x for x in self.seats]
        self.reservas = [] # confirmadas
        self.curr_reservas = []
        self.cart = {}
        self.curr_cart = {}

    def showPrice(self) -> float:
        checksize = len(self.reservas) + len(self.curr_reservas)
        if checksize <= 10:
            price = self.ticket * (1 - 0.25)
            return price
        if checksize > 10 and checksize <= 15:
            price = self.ticket * (1 - 0.10)
            return price
        if checksize > 15 and checksize <= 20:
            price = self.ticket * (1 - 0.05)
            return price
            
        else:
            return 1.0 * self.ticket
    
    def reserva(self, seat: int) -> None:
        self.curr_reservas.append(seat)
        seat_index = self.seats.index(seat)
        self.curr_seats.remove(self.seats[seat_index])
        if seat < 10:
            self.curr_cart[f'0{seat}'] = self.showPrice()
        else:
            self.curr_cart[f'{seat}'] = self.showPrice()

    def toPay(self):
        total = 0.00
        for item in list(self.curr_cart.keys()):
            total += float(self.curr_cart[item])
        return total

    def payTicket(self) -> None:
        self.seats = [x for x in self.curr_seats]
        self.reservas.extend(self.curr_reservas)
        self.curr_reservas = []
        for item in list(self.curr_cart.keys()):
            self.cart[item] = self.curr_cart[item]
        self.curr_cart = {}
        
    def incomes(self) -> float:
        total = 0.00
        for item in list(self.cart.keys()):
            total += float(self.cart[item])
        return total
    
    def cancelar(self) -> None:
        self.curr_seats = [x for x in self.seats]
        self.curr_reservas = []
        self.curr_cart = {}


if __name__ == "__main__":
    
    import os
    from plot4seatsfunc import plot4seats
 
    flightOne = Voos(777, 'Curitiba', 'São Paulo', 20, 1150.00)

    #------------------------------------WELCOME-----------------------------------------------------------
    traces = 40 * '-'
    firsttitle = f'\n\n\n{traces}MCOELHO AIRLINES{traces}\n'
    print(firsttitle)
    print('Olá, seja bem-vindo!\n\n')

    #------------------------------------FLIGHT INFO-------------------------------------------------------
    print('DADOS DO VÔO\n')
    print(f'Vôo: {flightOne.flight}')
    print(f'Origem: {flightOne.from_}')
    print(f'Destino: {flightOne.to}')
    print(f'Preço inteiro: {flightOne.ticket}')
    print('--\n\n')

    #------------------------------------SUPPORT FUNCTIONS-------------------------------------------------
    def cls():
        os.system('cls' if os.name=='nt' else 'clear')

    def section(title):
        titlesize = (len(firsttitle) - 4)
        right = (titlesize - len(traces) - len(title)) *  '-'
        print(f'{traces}{title}{right}')

    #------------------------------------MAIN LOOP-----------------------------------------------------------
    while True:

        #--------------------------------AVAILABLE SEATS-----------------------------------------------------
        print('Por favor, ESCOLHA SEU(s) ACENTO(s)\n')
        price = flightOne.showPrice()
        allseats = flightOne.seats
        curr_reserv = flightOne.curr_reservas
        available = [item for item in allseats if item not in curr_reserv]
        plot4seats(allseats, available)
        print('\n')

        #--------------------------------CHOOSE DISCOUNT-----------------------------------------------------
        nreservas = len(flightOne.reservas) + len(flightOne.curr_reservas)
        if nreservas <= 10:
            discount = '25%'
        if nreservas > 10 and nreservas <= 15:
            discount = '10%'
        if nreservas > 15 and nreservas <= 20:
            discount = '5%'
        elif nreservas > 20:
            discount = '0%'

        #--------------------------------SHOW PRICE---------------------------------------------------------
        price = str(price).replace('.', ',')
        print(f'PREÇO ATUAL => R$ {price}   (Desc. {discount})\n')
        print('Para cancelar a navegação digite SAIR')
        print('--\n\n')

        #--------------------------------VALIDATION LOOP FOR CHOSEN SEAT------------------------------------
        exit = False # Controla o loop maior
        while True:
            seatraw = input('ACENTO(s): ')
            seatraw_ = seatraw.split(',')
            if len(seatraw_) != 0:
                seat = [] # Acentos escolhidos
                for item in seatraw_:
                    if item[0] == ' ':
                        seat.append(item[1:])
                    else:
                        seat.append(item)
            else:
                seat = [seatraw] #lista com o input original
            print('\n')
            try:
                again = False # Controla o loop maior, se True, reinicia
                for acento in seat:
                    param = int(acento) # ValueError se acento é str, ex.: 'sair'
                    if param in available and param not in flightOne.curr_reservas and param not in flightOne.reservas:
                        flightOne.reserva(param) # Faz a reserva
                    if param in allseats and param not in available: # Se o acento existe, porém não está disponível
                        print(f'O acento {param} já foi selecionado, tente outra opção')
                        print('--')
                        again = True
                        break
                    if param not in allseats:
                        print(f'O acento {param} não existe, tente outra opção')
                        again = True
                        break
                if again:
                    continue   
                break
            except ValueError:
                if seatraw.lower() == 'sair':
                    section('GOODBYE, COMEBACK SOON')
                    print('\n\nSincerely,')
                    print('MCOELHO AIRLINES \n\n')
                    exit = True
                    flightOne.cancelar()
                    break
                else:
                    print('Utilize apenas números, por favor tente outra vez...')
                    continue
        if exit:
            break

        #-------------------------------------WHATS NEXT------------------------------------------------------------
        if len(flightOne.reservas) + len(flightOne.curr_reservas) < flightOne.allseats:
            print('Deseja escolher mais um acento? [s/n]')
            onemore = input('R: ')
            print('\n')
            if onemore != 's':
                print('O que você deseja fazer?\n')
                print('[1] Concluir reserva')
                print('[2] Reiniciar vôo\n')
                while True:
                    try:
                        ans = int(input('R: '))
                        if ans == 1 or ans == 2:
                            break
                        else:
                            print('Utilize 1 ou 2')
                            continue
                    except ValueError:
                        print('Utilize 1 ou 2')
                        continue
                print('\n')

                if ans == 1:
                    #-------------------------------DETALHES DA COMPRA---------------------------------------------
                    section('DETALHES DA COMPRA')
                    print('\nDADOS DO VÔO\n')
                    print(f'Número: {flightOne.flight}')
                    print(f'Origem: {flightOne.from_}')
                    print(f'Destino: {flightOne.to}')
                    cart = flightOne.curr_cart
                    total = flightOne.toPay()
                    flightOne.payTicket()
                    print('\n')
                    print('-----------------')
                    print('ACENTO(s)      R$')
                    print('-----------------')
                    for item in list(cart.keys()):
                        fill = (11 - len(item)) * ' '
                        print(f'{item}{fill}{cart[item]}')
                    print('-----------------')
                    print(f'TOTAL      {total}\n\n')
                    continue

                if ans == 2:
                    #---------------------------------------GOODBYE-------------------------------------------------
                    section('GOODBYE')
                    print('\nTchau, aguardamos seu retorno!')
                    print('\n\nSincerely,')
                    print('MCOELHO AIRLINES\n\n')
                    flightOne.cancelar()
                    break
            if onemore == 's':
                cls()
                continue

        if len(flightOne.reservas) + len(flightOne.curr_reservas) == flightOne.allseats:
            section('RESUMO DO VÔO')
            print('\nDADOS DO VÔO\n')
            print(f'Número: {flightOne.flight}')
            print(f'Origem: {flightOne.from_}')
            print(f'Destino: {flightOne.to}')
            cart = flightOne.cart
            flightOne.payTicket()
            total = flightOne.incomes()
            print('\n')
            print('-----------------')
            print('ACENTO(s)      R$')
            print('-----------------')
            for item in list(cart.keys()):
                fill = (11 - len(item)) * ' '
                print(f'{item}{fill}{cart[item]}')
            print('-----------------')
            print(f'TOTAL      {total}\n\n')
            section('GOODBYE')
            print('\nTchau, aguardamos seu retorno!')
            print('\n\nSincerely,')
            print('MCOELHO AIRLINES\n\n')
            flightOne.cancelar()
            break





