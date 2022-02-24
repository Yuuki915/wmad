# A tuple is a collection which is ordered and unchangeable
# Allows duplicate members

fruits = ('Apples', 'Oranges', 'Grapes')

# using a constructor
fruits2 = tuple(('Apples', 'Oranges', 'Grapes'))

fruits3 = ('Apples')
fruits4 = ('Apples',) #needs a trailing comma to ba a tuple for single member

print(type(fruits))
print(type(fruits2))
print(type(fruits3))
print(type(fruits4))


print(fruits[1])

# fruits[0] = 'Pears' #cant change value

# del fruits
# print(fruits)

print(len(fruits))