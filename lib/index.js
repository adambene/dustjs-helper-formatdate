(function (dust, moment) {

    dust.helpers = dust.helpers || {};

    dust.helpers.formatDate = function(chunk, context, bodies, params) {
        var date    = dust.helpers.tap(params.date,   chunk, context),
            format  = dust.helpers.tap(params.format, chunk, context),
            lan     = dust.helpers.tap(params.lan,    chunk, context) || 'en-US';

        date = +date || date;

        moment.locale(lan);
        return chunk.write(moment(date).format(format));
    };

    if (typeof exports !== 'undefined') {
        module.exports = dust;
    }

}(
    typeof exports !== 'undefined' ? require('dustjs-linkedin') : dust,
    typeof exports !== 'undefined' ? require('moment')          : moment
));
