/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cheats_raw', {
    account: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    guid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    posx: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    posy: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    posz: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    map: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    desyncMs: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    desyncDist: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cheats_raw'
  });
};
