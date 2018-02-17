/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_area', {
    Entry: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    NameLoc1: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc2: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc3: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc4: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc5: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc6: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc7: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    NameLoc8: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    }
  }, {
    tableName: 'locales_area'
  });
};
