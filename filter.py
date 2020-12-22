'''
fliter.py
Removes duplicated prayers and whitespaces in prayers.json
'''

import json

with open('prayers.json') as f:
  data = json.load(f)

filtered = list(dict.fromkeys(data))
filtered_ws = list()

for f in filtered:
  f = " ".join(f.split())
  filtered_ws.append(f)

with open('prayers.json', 'w', encoding='utf-8') as json_file:
  json.dump(filtered_ws, json_file, ensure_ascii = False, indent = 2)
