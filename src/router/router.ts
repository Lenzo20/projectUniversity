import { Router } from 'express'

const router = Router()

router.get('/test', (req, res) => {
  res.json({ Hello: 'Welcome the project Universit' })
})

export default router
