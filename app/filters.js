var moment = require('moment')

module.exports = {
  toDesc: function(value) {
    return value.replace(/<[^>]+>/g, '').substring(0, 300) + ' ... ...'
  },
  toNormalTime: function(value) {
    return moment(value).format('YYYY-MM-DD')
  }
}
