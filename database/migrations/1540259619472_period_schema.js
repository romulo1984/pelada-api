'use strict'

const Schema = use('Schema')

class PeriodSchema extends Schema {
  up() {
    this.create('periods', (table) => {
      table.increments()
      table.timestamp('begin').notNullable()
      table.timestamp('end').notNullable()
      table.enu('status', ['finished', 'current', 'pending']).defaultTo('pending')
      table.float('value')
      table.timestamps()
    })
  }

  down() {
    this.drop('periods')
  }
}

module.exports = PeriodSchema
