'use strict'

const Schema = use('Schema')

class PeladaSchema extends Schema {
  up() {
    this.create('peladas', table => {
      table.increments()
      table
        .string('title', 240)
        .notNullable()
        .unique()
      table.string('info', 600)
      table.timestamp('date').notNullable()
      table.integer('seats').notNullable()
      table.string('location', 240)
      table
        .enu('status', ['initiated', 'finalized', 'scheduled', 'canceled'])
        .defaultTo('scheduled')
      table
        .integer('period_id')
        .unsigned()
        .references('id')
        .inTable('periods')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down() {
    this.drop('peladas')
  }
}

module.exports = PeladaSchema
