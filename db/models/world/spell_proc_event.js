/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_proc_event', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    SchoolMask: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    SpellFamilyName: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    SpellFamilyMask0: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    SpellFamilyMask1: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    SpellFamilyMask2: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    procFlags: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    procEx: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ppmRate: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    CustomChance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '0'
    },
    Cooldown: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'spell_proc_event'
  });
};
