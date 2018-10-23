'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Confirmation extends Model {
  player() {
    return this.belongsTo('App/Models/Player')
  }

  pelada() {
    return this.belongsTo('App/Models/Pelada')
  }
}

module.exports = Confirmation
