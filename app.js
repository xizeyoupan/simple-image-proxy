import { Hono } from 'hono'
import { cors } from 'hono/cors'

const app = new Hono()

app.use('*', cors())

app.get('/', (c) => {
    return c.redirect('https://github.com/xizeyoupan/simple-image-proxy')
})

app.get('/api', async (c) => {
    const { url } = c.req.query()

    if (url) {
        let r
        try {
            r = await fetch(url, {
                headers: {
                    "Accept": "image",
                },
            })
        } catch (e) {
            return c.text(e)
        }

        const newResponse = new Response(r.body, r)
        return newResponse

    } else {
        return c.text(`empty url`)
    }
})

export default app
