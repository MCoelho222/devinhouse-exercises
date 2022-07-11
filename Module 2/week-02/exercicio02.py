def strsize():
    x = input('Digite alguma coisa: ')
    y = input('Digite outra coisa: ')
    z = x + y
    i = 0
    while i < 3:
        print(x)
        i += 1
    if x in z:
        print(f'{x} está em {z}')
    else:
        print(f'{x} não está contido em {z}')
    print(x[-1], y[-1])
    return [len(x), len(y), z, x]

strsize()

