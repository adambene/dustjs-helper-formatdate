(function (dust, moment) {

    dust.helpers = dust.helpers || {};

    dust.helpers.formatDate = function(chunk, context, bodies, params) {
        var date        = dust.helpers.tap(params.date,   chunk, context);
        var format      = dust.helpers.tap(params.format, chunk, context);
        var lan         = dust.helpers.tap(params.lan,    chunk, context) || 'en-US';
        var timestamp   = +date;

        if (timestamp) {
            date = timestamp;
        }

        moment.locale(lan);
        return chunk.write(date ? moment(date).format(format) : '');
    };

    if (typeof exports !== 'undefined') {
        module.exports = dust;
    }

}(
    typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust,
    typeof exports !== 'undefined' ? require('moment')          : moment
));
