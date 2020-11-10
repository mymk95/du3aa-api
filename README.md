<h1 align="center">Du3aaAPI</h1>

![GitHub package.json version](https://img.shields.io/github/package-json/v/mymk95/du3aa-api) 
![GitHub release (latest by date)](https://img.shields.io/github/v/release/mymk95/du3aa-api)

Du3aaAPI is a free API service that provides Islamic prayers

## Usage

| METHOD | PATH        | DESCRIPTION               |
| ------ | ----------- | ------------------------- |
| GET    | /           | Shows a help page         |
| GET    | /random     | Returns one random prayer |
| GET    | /prayer     | Returns all prayers       |
| GET    | /prayer/:id | Returns a specific prayer |
| GET    | /count      | Returns number of prayer  |

> Below routes **requires** authentication

| METHOD | PATH        | DESCRIPTION               |
| ------ | ----------- | ------------------------- |
| POST   | /prayer     | Creates a prayer          |
| PUT    | /prayer/:id | Updates a specific prayer |
| DELETE | /prayer/:id | Deletes a specific prayer |
