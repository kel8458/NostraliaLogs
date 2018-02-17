/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('spell_effect_mod', {
    Id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    EffectIndex: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Effect: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectDieSides: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectBaseDice: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectDicePerLevel: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    EffectRealPointsPerLevel: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    EffectBasePoints: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectAmplitude: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectPointsPerComboPoint: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    EffectChainTarget: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectMultipleValue: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '-1'
    },
    EffectMechanic: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectImplicitTargetA: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectImplicitTargetB: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectRadiusIndex: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectApplyAuraName: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectItemType: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectMiscValue: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    EffectTriggerSpell: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      defaultValue: '-1'
    },
    Comment: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'spell_effect_mod'
  });
};
