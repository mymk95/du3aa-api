addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with a random prayer
 * @param {Request} request
 */
async function handleRequest(request) {
  try {
    const headers = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET',
    }
    const url = new URL(request.url)
    var formatParameter = null

    if (url.searchParams.get('format')) {
      formatParameter = url.searchParams.get('format').toLocaleLowerCase().split('/')[0]

      if (formatParameter !== 'json' && formatParameter !== 'text') {
        return new Response('Invalid format parameter. Expected formats are json (default) or text.', {
          status: 400,
          headers: {
            ...headers,
            'Content-Type': 'text/plain; charset=utf-8'
          }
        })
      }
    }

    const prayer = JSON.parse(
      await (await fetch('https://cdn.jsdelivr.net/gh/mymk95/du3aa-api@prayers/prayers.json')).text()
    )
    const randomPrayer = prayer[Math.floor(Math.random() * prayer.length)]

    if (formatParameter === 'text') {
      return new Response(randomPrayer, {
        status: 200,
        headers: {
          ...headers,
          'Content-Type': 'text/plain; charset=utf-8'
        }
      })
    } else {
      return new Response(JSON.stringify({ prayer: randomPrayer }), {
        status: 200,
        headers: { 
          ...headers,
          'Content-Type': 'application/json; charset=utf-8'
        },
      })
    }

  } catch (error) {
    return new Response(JSON.stringify({ status: 500, error: 'Internal Server Error' }), {
      status: 500,
      headers: { 
        ...headers,
        'Content-Type': 'application/json'
      },
    })
  }
}
