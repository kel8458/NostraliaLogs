/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheat_sanctions', {
    flag: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tick_max: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    tick_action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    total_max: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    total_action: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'cheat_sanctions'
  });
};
