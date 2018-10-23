'use strict'

const Order = use('App/Models/Order')

/**
 * Resourceful controller for interacting with orders
 */
class OrderController {
  /**
   * Show a list of all orders.
   * GET orders
   */
  async index() {
    return await Order.all()
  }

  /**
   * Create/save a new order.
   * POST orders
   */
  async store({ request }) {
    const data = request.only(['player_id', 'period_id', 'status', 'pay_day'])
    return await Order.create(data)
  }

  /**
   * Display a single order.
   * GET orders/:id
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Update order details.
   * PUT or PATCH orders/:id
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a order with id.
   * DELETE orders/:id
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = OrderController
