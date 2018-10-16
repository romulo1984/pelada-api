'use strict'

const Pelada = use('App/Models/Pelada')

/**
 * Resourceful controller for interacting with peladas
 */
class PeladaController {
  /**
   * Show a list of all peladas.
   * GET peladas
   */
  async index({ request, response }) {
    return await Pelada.all()
  }

  /**
   * Create/save a new pelada.
   * POST peladas
   */
  async store({ request }) {
    const data = request.only(['name', 'info'])
    return await Pelada.create(data)
  }

  /**
   * Display a single pelada.
   * GET peladas/:id
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Update pelada details.
   * PUT or PATCH peladas/:id
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a pelada with id.
   * DELETE peladas/:id
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = PeladaController
