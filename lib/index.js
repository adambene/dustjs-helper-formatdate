(function (dust, moment) {
    dust.helpers.formatDate = function(chunk, context, bodies, params) {
        var date   = dust.helpers.tap(params.date,   chunk, context);
        var format = dust.helpers.tap(params.format, chunk, context);
        var lan    = dust.helpers.tap(params.lan,    chunk, context) || 'en-US';
        moment.lang(lan);
        return chunk.write(moment(date).format(format));
    };
}(
    typeof exports !== 'undefined' ? module.exports = require('dustjs-linkedin') : dust),
    moment ? moment : require('moment')
);
