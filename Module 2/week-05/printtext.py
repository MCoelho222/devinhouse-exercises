def sectionTitle(text: str, nchr: int) -> None:
    size = len(text)
    empties = int((nchr - size)/2) * ' '
    print(nchr * '-')
    print(f'{empties}{text}{empties}')
    print(nchr * '-')

def printMenu(options: list):
    for i in range(len(options)):
        print(f'[{i + 1}] {options[i]}')
    print('\n')
    while True:
        try:
            ans = input('R: ')
            break
        except ValueError:
            if ans == 'exit':
                break
            print('Please, choose an option number')
            continue
    if ans == 'exit':
        return ans
    else:
        return options[int(ans) - 1]