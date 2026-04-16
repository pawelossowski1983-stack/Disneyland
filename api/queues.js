export const config = { runtime: 'edge' };

export default async function handler(req) {
  // Only allow GET
  if (req.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const res = await fetch('https://queue-times.com/parks/4/queue_times.json', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; DLPNavigator/1.0)',
        'Accept': 'application/json',
        'Referer': 'https://queue-times.com/',
      },
      cf: { cacheTtl: 60 }, // cache 60s on Cloudflare edge if available
    });

    if (!res.ok) {
      return new Response(
        JSON.stringify({ error: 'upstream_error', status: res.status }),
        { status: 502, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Cache-Control': 'public, max-age=60, stale-while-revalidate=120',
      },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: 'fetch_failed', message: err.message }),
      {
        status: 503,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}
