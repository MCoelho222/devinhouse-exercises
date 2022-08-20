def validNumInput(input_type, question, error_msg):
    print(f'\n{question}')
    while True:
        try:
            ans = input_type(input('R: '))
            if ans < 0:
                print("Use positive numbers only")
                continue
            else:
                break
        except ValueError:
            print(error_msg)
            continue
    return ans

def validStrInput(question, error_msg) -> str:
    print(f'{question}')
    while True:
        try:
            name = input('R: ')
            int(name)
            print(error_msg)
            continue
        except ValueError:
            break
    return name