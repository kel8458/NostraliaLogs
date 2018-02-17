/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('reputation_spillover_template', {
    faction: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    faction1: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    rate_1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rank_1: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    faction2: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    rate_2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rank_2: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    faction3: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    rate_3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rank_3: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    faction4: {
      type: DataTypes.INTEGER(6).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    rate_4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    rank_4: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'reputation_spillover_template'
  });
};
