/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('transfer_spells', {
    id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    race: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    class: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    spell: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: true
    },
    active: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    disabled: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'transfer_spells'
  });
};
