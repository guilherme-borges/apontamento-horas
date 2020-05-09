const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        try {
            const clients = await connection('clients').select('*')

            return res.json(clients)
        } catch (error) {
            return res.status(500).json({ error })
        }
    },

    async create(req, res) {
        const { name, email, phone } = req.body

        try {
            const client = await connection
                .select()
                .from('clients')
                .where('name', name)
                .first()

            if (client) {
                return res.status(400).json({ error: 'Client already exists' })
            }

            const [id] = await connection('clients').insert({
                name,
                email,
                phone
            })

            return res.status(201).json({ id })

        } catch (error) {
            return res.status(500).json({ error })
        }
    }
}