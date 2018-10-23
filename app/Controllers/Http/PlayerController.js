'use strict'

const Player = use('App/Models/Player')

/**
 * Resourceful controller for interacting with players
 */
class PlayerController {
  /**
   * Show a list of all players.
   * GET players
   */
  async index({ request, response, view }) {
  }

  /**
   * Create/save a new player.
   * POST players
   */
  async store({ request }) {
    const data = request.only(['name', 'user_id', 'type'])
    return await Player.create(data)
  }

  /**
   * Display a single player.
   * GET players/:id
   */
  async show({ params }) {
    const player = await Player.find(params.id)

    return player
  }

  /**
   * Update player details.
   * PUT or PATCH players/:id
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a player with id.
   * DELETE players/:id
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = PlayerController
