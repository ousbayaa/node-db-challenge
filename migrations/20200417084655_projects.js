
exports.up = function(knex) {
  return knex.schema
  .createTable("project", (tbl) => {
      tbl.increments();
      tbl.text("name", 50).notNullable();
      tbl.text("description", 200);
      tbl.boolean("is_completed").defaultTo(false).notNullable();

  })
  .createTable("task", (tbl) => {
      tbl.increments();
      tbl.text("description", 200).notNullable();
      tbl.text("notes", 200);
      tbl.boolean("is_completed").defaultTo(false).notNullable();
      tbl
      .integer("project_id")
      .unsigned()
      .notNullable()
      .references("project.id")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
  })
  .createTable("resource", (tbl) => {
      tbl.increments();
      tbl.text("name", 50).notNullable();
      tbl.text("description", 200);
  })
  .createTable("project_resource", (tbl) => {
      tbl.primary(['project_id','resource_id']);
      tbl.integer('project_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('project')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');
      tbl.integer('resource_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('resource')
      .onDelete('RESTRICT')
      .onUpdate('CASCADE');     
  });
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("resource")
    .dropTableIfExists("task")
    .dropTableIfExists("project");
};
