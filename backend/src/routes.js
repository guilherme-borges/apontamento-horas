const express = require('express')
const routes = express.Router()
const authMiddleware = require('./middlewares/auth')

const UserController = require('./controllers/UserController')
const SessionController = require('./controllers/SessionController')
const ClientController = require('./controllers/ClientController')
const ProjectController = require('./controllers/ProjectController')

routes.post('/sessions', SessionController.create)

routes.post('/users', UserController.create)

routes.use(authMiddleware)

routes.get('/users', UserController.index)

routes.post('/clients', ClientController.create)
routes.get('/clients', ClientController.index)

routes.post('/projects', ProjectController.create)
routes.get('/projects', ProjectController.index)

module.exports = routes