'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  player() {
    return this.belongsTo('App/Models/Player')
  }

  period() {
    return this.belongsTo('App/Models/Period')
  }
}

module.exports = Order
