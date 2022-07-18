from os.path import abspath, dirname, join
import json

ROOT_PATH = dirname(dirname(dirname(abspath(__file__))))
print(ROOT_PATH)
JSON_PATH = join(ROOT_PATH, 'JSON1.txt')
NEWJSON_PATH = join(ROOT_PATH, 'NEWJSON.txt')

oldJson = open(JSON_PATH, 'r')

json1lines = json.loads(oldJson.readlines()[0])

oldJson.close()

json1lines['firstname'] = 'Marilia'
json1lines['lastname'] = 'Rudolf'
json1lines['age'] = '36'

newJson = open(NEWJSON_PATH, 'w')
newJson.writelines(json.dumps(json1lines))
newJson.close()

