<h1 align="center">Du3aaAPI</h1>

<p align="center">Du3aaAPI is a free API service that provides Islamic prayers</p>

<p align="center"><img src="https://img.shields.io/github/package-json/v/mymk95/du3aa-api" /> <img src="https://img.shields.io/github/v/release/mymk95/du3aa-api" /></p>

---

## v3
- Du3aaAPI core has been changed from [Node.js, Express.js, MongoDB] to [Cloudflare Workers](https://workers.cloudflare.com/)
- Authorization and API end-points removed
- Du3aaAPI now only returns one random prayer https://api.du3aa.rest
- Supports text content type https://api.du3aa.rest?format=text
- Modify prayers.json (located at prayers branch) to add, update, or/and delete prayers

  > Latest node release [v2.0.1](https://github.com/mymk95/du3aa-api/releases/tag/v2.0.1)


---

## Development
- Sign up for **Workers** account [here](https://dash.cloudflare.com/sign-up/workers)
- Install [Wrangler](https://github.com/cloudflare/wrangler), the **Workers** CLI
- Clone the project
- Initialize a **Workers** project 
  - `$ wrangler init`
- Develop 
  - `$ wrangler preview --watch`

Further documentation for **Wrangler** can be found [here](https://developers.cloudflare.com/workers/tooling/wrangler).

## License
MIT
