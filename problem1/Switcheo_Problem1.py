def sum_to_n_a(n: int):
    sum = 0
    for i in range(1, n+1):
        sum += i
    return sum

def sum_to_n_b(n:int):
    return n * (n + 1) // 2

def sum_to_n_c(n:int):
    if n == 0:
        return 0
    else:
        return (n + sum_to_n_c(n-1))
        
print(sum_to_n_a(5))
print(sum_to_n_b(5))
print(sum_to_n_c(5))
