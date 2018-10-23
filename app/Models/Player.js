'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Player extends Model {
  static boot() {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('afterFind', async (playerInstance) => {
      const orders = await playerInstance
        .orders()
        .where('status', 'pending')
        .fetch()

      const totalOrders = await orders.toJSON()
      playerInstance.debit = totalOrders.length
    })
  }

  user() {
    return this.belongsTo('App/Models/User')
  }

  confirmations() {
    return this.hasMany('App/Models/Confirmation')
  }

  orders() {
    return this.hasMany('App/Models/Order')
  }

}

module.exports = Player
