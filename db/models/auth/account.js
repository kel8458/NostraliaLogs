/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('account', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(32),
      allowNull: false,
      unique: true
    },
    sha_pass_hash: {
      type: DataTypes.STRING(40),
      allowNull: false
    },
    gmlevel: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    sessionkey: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    v: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    s: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    reg_mail: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    token_key: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    joindate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    last_ip: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '0.0.0.0'
    },
    last_attempt_ip: {
      type: DataTypes.STRING(15),
      allowNull: false,
      defaultValue: '127.0.0.1'
    },
    last_local_ip: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: '127.0.0.1'
    },
    failed_logins: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    locked: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    lock_country: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: '00'
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    last_pwd_reset: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    online: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    expansion: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mutetime: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: '0'
    },
    mutereason: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    muteby: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    locale: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    os: {
      type: DataTypes.STRING(4),
      allowNull: false,
      defaultValue: ''
    },
    recruiter: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    current_realm: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    banned: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    mail_verif: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    remember_token: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: ''
    },
    flags: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    security: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    pass_verif: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    email_verif: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    email_check: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nostalrius_token: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    nostalrius_token_enabled: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    nostalrius_email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    nostalrius_reason: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    geolock_pin: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'account'
  });
};
