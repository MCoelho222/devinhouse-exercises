def centralizar():
    chr1 = input('Qual o caracter esquerdo? ')
    chr2 = input('Qual o caracter direito? ')
    texto = input('Qual o texto? ')
    print(f'{chr1 * 20}{texto}{chr2 * 20}')

centralizar()
