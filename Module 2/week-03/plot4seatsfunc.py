def plot4seats(fulllist, currlist) -> None:
    iternum = int(len(fulllist)/4) + 1
    
    def testseat(list, step, incr):
        x = list[step + incr]
        if x not in currlist:
            return '  '
        elif x < 10:
            return f'0{x}'
        else:
            return x
    for i in range(iternum):
        try:
            step = i * 4
            a = testseat(fulllist, step, 0)
            b = testseat(fulllist, step, 1)
            c = testseat(fulllist, step, 2)
            d = testseat(fulllist, step, 3)
            print(f'[{a}][{b}] [{c}][{d}]')
        except IndexError:
            left = fulllist[step:]
            if len(left) == 1:
                e = testseat(left, 0, 0)
                print(f'[{e}]')
            if len(left) == 2:
                e = testseat(left, 0, 0)
                f = testseat(left, 0, 1)
                print(f'[{e}][{f}]')
            if len(left) == 3:
                e = testseat(left, 0, 0)
                f = testseat(left, 0, 1)
                g = testseat(left, 0, 2)
                print(f'[{e}][{f}] [{g}]')
            break