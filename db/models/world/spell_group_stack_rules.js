/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_group_stack_rules', {
    group_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    stack_rule: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'spell_group_stack_rules'
  });
};
