/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reputation_reward_rate', {
    faction: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    quest_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1'
    },
    creature_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1'
    },
    spell_rate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'reputation_reward_rate'
  });
};
