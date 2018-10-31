'use strict'

const Confirmation = use('App/Models/Confirmation')
const Player = use('App/Models/Player')
const Pelada = use('App/Models/Pelada')

/**
 * Resourceful controller for interacting with confirmations
 */
class ConfirmationController {
  /**
   * Show a list of all confirmations.
   * GET confirmations
   */
  async index({ request, response, view }) {}

  /**
   * Create/save a new confirmation.
   * POST confirmations
   */
  async store({ request }) {
    const data = request.only(['player_id', 'pelada_id'])

    const pelada = await Pelada.find(data.pelada_id)
    const player = await Player.find(data.player_id)

    const confirmation = { pelada_id: pelada.id, player_id: player.id }

    return await Confirmation.create(confirmation)
  }

  /**
   * Display a single confirmation.
   * GET confirmations/:id
   */
  async show({ params, request, response, view }) {}

  /**
   * Update confirmation details.
   * PUT or PATCH confirmations/:id
   */
  async update({ params, request, response }) {}

  /**
   * Delete a confirmation with id.
   * DELETE confirmations/:id
   */
  async destroy({ params, request, response }) {}
}

module.exports = ConfirmationController
