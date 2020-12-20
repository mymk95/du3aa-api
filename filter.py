import json

with open('prayers.json') as f:
  data = json.load(f)

filtered = list(dict.fromkeys(data))

with open('prayers.json', 'w', encoding='utf-8') as json_file:
  json.dump(filtered, json_file, ensure_ascii = False, indent = 2)
