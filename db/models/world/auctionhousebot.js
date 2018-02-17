/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('auctionhousebot', {
    item: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    stack: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    bid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    buyout: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'auctionhousebot'
  });
};
