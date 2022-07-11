class Voos:
    
    def __init__(self, flight, from_, to, seats, ticket):
        self.flight = flight
        self.from_ = from_
        self.to = to
        self.seats = seats
        self.ticket = ticket
        self.reservas = [ x + 1 for x in range(self.seats) ]

a = Voos(777, 'Curitiba', 'São paulo', 100, 250)
print(a.reservas)
