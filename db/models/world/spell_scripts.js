/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_scripts', {
    _id: {
      field: 'id',
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    delay: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    command: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    datalong: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    datalong2: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    datalong3: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    datalong4: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    data_flags: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    dataint: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    dataint2: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    dataint3: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    dataint4: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    x: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    y: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    z: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    o: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    comments: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'spell_scripts'
  });
};
