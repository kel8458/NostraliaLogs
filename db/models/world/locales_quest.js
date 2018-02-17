/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locales_quest', {
    entry: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false,
      defaultValue: '0',
      primaryKey: true
    },
    Title_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Title_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Details_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Objectives_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    OfferRewardText_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    RequestItemsText_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    EndText_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText1_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText2_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText3_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc1: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc3: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc4: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc5: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc6: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ObjectiveText4_loc8: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'locales_quest'
  });
};
