import numpy as np

numbers = np.random.randint(0, 100, 20)
print(numbers)

n = list(numbers)
n_copy = [x for x in n]
n.sort()

print(f'O menor valor é {n[0]} e está na posição {n_copy.index(n[0])}')
# print(n.index(ordered[0]))