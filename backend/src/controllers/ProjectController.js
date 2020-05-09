const connection = require('../database/connection')

module.exports = {
    async index(req, res) {
        try {
            const projects = await connection('projects').select('*')

            return res.json(projects)
        } catch (error) {
            return res.status(500).json({ error })
        }
    },

    async create(req, res) {
        const { name, status, client_id } = req.body

        const [id] = await connection('projects').insert({
            name,
            status,
            client_id
        })

        return res.status(201).json({ id })
    }
}