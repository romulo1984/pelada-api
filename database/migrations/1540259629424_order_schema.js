'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {
  up() {
    this.create('orders', table => {
      table.increments()
      table
        .integer('player_id')
        .unsigned()
        .references('id')
        .inTable('players')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('period_id')
        .unsigned()
        .references('id')
        .inTable('periods')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.enu('status', ['paid', 'pending']).defaultTo('pending')
      table.timestamp('pay_day')
      table.timestamps()
    })
  }

  down() {
    this.drop('orders')
  }
}

module.exports = OrderSchema
