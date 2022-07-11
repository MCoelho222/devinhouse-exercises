import json


f = open('JSON1.txt', 'w')

userinfos = dict(firstname="", lastname="", age="")

json1 = json.dumps(userinfos)

f.writelines(json1)
f.close()

f1 = open('JSON1.txt', 'r')

json2 = json.loads(f1.readlines()[0])
print(json2)
f1.close()

f2 = open('JSON1.txt', 'w')

json2['firstname'] = 'Marcelo'
json2['lastname'] = 'Coelho'
json2['age'] = '41'
print(json2)
f2.writelines(json.dumps(json2))
f2.close()





