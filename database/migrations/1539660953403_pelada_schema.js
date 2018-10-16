'use strict'

const Schema = use('Schema')

class PeladaSchema extends Schema {
  up() {
    this.create('peladas', (table) => {
      table.increments()
      table.string('name', 240).notNullable().unique()
      table.string('info', 600).notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('peladas')
  }
}

module.exports = PeladaSchema
