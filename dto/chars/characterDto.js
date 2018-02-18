const { BaseDTO, BaseListDTO, fields } = require('dtox');

const characterDto_MAP = {
  guid: fields.number(),
  name: fields.string()
};

class characterDto extends BaseDTO {
  constructor(data) {
    super(data, characterDto_MAP);
  }
}

class characterListDto extends BaseListDTO {
  constructor (data) {
    super(data, characterDto);
  }
}

module.exports = { characterDto, characterListDto };
