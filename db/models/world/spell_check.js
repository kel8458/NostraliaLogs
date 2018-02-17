/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_check', {
    spellid: {
      type: DataTypes.INTEGER(7).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    SpellFamilyName: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    },
    SpellFamilyMask: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    },
    SpellIcon: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    },
    SpellVisual: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    },
    SpellCategory: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1',
      primaryKey: true
    },
    EffectType: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectAura: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectIdx: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '-1'
    },
    Name: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: ''
    },
    Code: {
      type: DataTypes.STRING(40),
      allowNull: false,
      defaultValue: '',
      primaryKey: true
    }
  }, {
    tableName: 'spell_check'
  });
};
