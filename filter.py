import json

def filter():
  '''
  Removes duplicated prayers and whitespaces in prayers.json
  '''

  with open('prayers.json') as f:
    data = json.load(f)

  filtered = list(dict.fromkeys(data))
  filtered_ws = list()

  for f in filtered:
    f = " ".join(f.split())
    filtered_ws.append(f)

  with open('prayers.json', 'w', encoding='utf-8') as json_file:
    json.dump(filtered_ws, json_file, ensure_ascii = False, indent = 2)

def add(prayer):
  '''
  Add a new prayer to prayers.json
  '''

  with open('prayers.json') as f:
    data = json.load(f)
  
  data.append(prayer)

  with open('prayers.json', 'w', encoding='utf-8') as json_file:
    json.dump(data, json_file, ensure_ascii = False, indent = 2)

if __name__ == "__main__":
  try:
    choice = input('please choose an option:\n1- Filter prayers.json\n2- Add a prayer\nUser choice: ')
    if choice == '1':
      print('Filtering ...')
      filter()
      print('Done')

    elif choice == '2':
      print('Adding...')
      prayer = input('Prayer: ')
      add(prayer)
      print('done')

    else:
      print('Choose wisely :)')

  except Exception as e:
    print(e)
