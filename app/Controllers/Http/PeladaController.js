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
  async index() {
    return await Pelada.all()
  }

  /**
   * Create/save a new pelada.
   * POST peladas
   */
  async store({ request }) {
    const data = request.only([
      'title',
      'info',
      'date',
      'seats',
      'location',
      'status',
      'period_id',
    ])
    return await Pelada.create(data)
  }

  /**
   * Display a single pelada.
   * GET peladas/:id
   */
  async show({ params }) {
    const pelada = await Pelada.query()
      .where('id', params.id)
      .with('confirmations', builder => {
        builder.with('player').orderBy('updated_at', 'desc')
      })
      .fetch()

    return pelada
  }

  /**
   * Update pelada details.
   * PUT or PATCH peladas/:id
   */
  async update({ params, request }) {
    const pelada = await Pelada.findOrFail(params.id)
    pelada.merge(
      request.only([
        'title',
        'info',
        'date',
        'seats',
        'location',
        'status',
        'period_id',
      ])
    )

    await pelada.save()
    return pelada
  }

  /**
   * Delete a pelada with id.
   * DELETE peladas/:id
   */
  async destroy({ params }) {
    const pelada = await Pelada.findOrFail(params.id)

    await pelada.delete()
    return { deleted: true }
  }
}

module.exports = PeladaController
