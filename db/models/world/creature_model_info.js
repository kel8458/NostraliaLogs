/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('creature_model_info', {
    modelid: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    bounding_radius: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    combat_reach: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    gender: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '2'
    },
    modelid_other_gender: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    modelid_other_team: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'creature_model_info'
  });
};
