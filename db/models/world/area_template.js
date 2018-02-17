/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('area_template', {
    Entry: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    MapId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    ZoneId: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    ExploreFlag: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    Flags: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    AreaLevel: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0'
    },
    Name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    Team: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    LiquidTypeId: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'area_template'
  });
};
