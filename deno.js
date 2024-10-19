import app from './app.js'
import { serve } from 'https://deno.land/std@0.224.0/http/server.ts'

const PORT = globalThis?.Deno?.env?.get("PORT") || globalThis?.process?.env?.PORT || 3000

serve(app.fetch, { port: PORT })
