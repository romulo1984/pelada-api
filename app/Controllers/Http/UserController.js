'use strict'

const User = use('App/Models/User')

/**
 * Resourceful controller for interacting with players
 */
class UserController {
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
    const data = request.only(['username', 'email', 'password'])
    return await User.create(data)
  }

  /**
   * Display a single player.
   * GET players/:id
   */
  async show({ params, request, response, view }) {
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

module.exports = UserController
