import dbConnect from '../../../dbConnect'
import Order from '../../../models/product'

export default async function handler(req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'GET':
      try {
        const orders = await Order.find({}) 
        res.status(200).json({ success: true, data: orders })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    case 'POST':
      try {
        const order = await Order.create(
          req.body
        ) 
        res.status(201).json({ success: true, data: order })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}


