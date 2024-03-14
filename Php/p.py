T = int(input())

for t in range(T):
    N = int(input())
    S = input()
    count = 0
    count1 = 0
    count2 = []
    a = 0
    for n in S:
        if n == '1':
            count+=1
            count2.append(count1)
            a+=1
            count1 = 0
        else:
            count1+=1
    if len(count2) < N:
        count2.append(count1)
    max1 = max(count2)
    print(max1+count)