print('----------')

name = 'Yuki'
age = 30

# contact
# print('Hello, my name is ' + name + ' and I am ' + age) # -->  error
print('Hello, my name is ' + name + ' and I am ' + str(age))

# string formatting - arguments by position
print("My name is {name} and I am {age}". format(name=name, age=age))

#string formatting - F-strings ^3.6 
print(f"Hello, my name is {name} and I am {age}!")

print('----------')
# ---

# string methods
s = 'helloworld'

# capitalize string
print(s.capitalize())

# make all uppercase
print(s.upper())

# make all lower
print(s.lower())

# swap case
print(s.swapcase())

print('----------')

# get length
print(len(s))

# replace
print(s.replace('world', 'everyone'))

# count
sub = 'l'
print(s.count(sub))

print('----------')

# starts with
print(s.startswith('ello'))

# ends with
print(s.endswith('e'))

print('----------')

# split into a list
print(s.split())

# find position
print(s.find('l'))

print('----------')

# is all alphanumeric
print(s.isalnum())

# is all alpha
print(s.isalpha())

# is all numeric
print(s.isnumeric())