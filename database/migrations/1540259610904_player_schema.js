'use strict'

const Schema = use('Schema')

class PlayerSchema extends Schema {
  up() {
    this.create('players', table => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .string('name', 240)
        .notNullable()
        .unique()
      table.enu('type', ['quest', 'quantum', 'monthly']).defaultTo('quest')
      table.timestamps()
    })
  }

  down() {
    this.drop('players')
  }
}

module.exports = PlayerSchema
