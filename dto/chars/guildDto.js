const { BaseDTO, BaseListDTO, fields } = require('dtox');

const guildDto_MAP = {
  name: fields.string()
};

class guildDto extends BaseDTO {
  constructor(data) {
    super(data, guildDto_MAP);
  }
}

class guildListDto extends BaseListDTO {
  constructor (data) {
    super(data, guildDto);
  }
}

module.exports = { guildDto, guildListDto };
