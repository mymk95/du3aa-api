addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with a random prayer
 * @param {Request} request
 */
async function handleRequest(request) {

  try {
    const prayer = JSON.parse(
      await (await fetch('https://raw.githubusercontent.com/mymk95/du3aa-api/workers/prayers.json')).text()
    )

    const randomPrayer = prayer[Math.floor(Math.random() * prayer.length)];

    return new Response(JSON.stringify({ prayer: randomPrayer }), {
      status: 200,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json' 
      },
    })

  } catch (error) {
    return new Response(JSON.stringify({ 'status': '500', 'error': 'Internal Server Error' }), {
      status: 500,
      headers: { 
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET',
        'Content-Type': 'application/json' 
      },
    })
  }

}
