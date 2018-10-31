'use strict'

const Schema = use('Schema')

class ConfirmationSchema extends Schema {
  up() {
    this.create('confirmations', table => {
      table.increments()
      table
        .integer('player_id')
        .unsigned()
        .references('id')
        .inTable('players')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('pelada_id')
        .unsigned()
        .references('id')
        .inTable('peladas')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('confirmations')
  }
}

module.exports = ConfirmationSchema
