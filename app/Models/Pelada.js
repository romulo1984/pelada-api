'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Pelada extends Model {
  period() {
    return this.belongsTo('App/Models/Period')
  }

  confirmations() {
    return this.hasMany('App/Models/Confirmation')
  }
}

module.exports = Pelada
