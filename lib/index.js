var moment = require('moment');

module.exports = function( dust ) {

    if (!dust) {
        throw new Error('Parameter "dust" is not defined.');
    }

    dust.helpers = dust.helpers || {};

    dust.helpers.formatDate = function(chunk, context, bodies, params) {

        var date = dust.helpers.tap(params.date, chunk, context);
        var format = dust.helpers.tap(params.format, chunk, context);
        var lan = params.lan || 'en-US';

        moment.lang(lan);

        return chunk.write(moment(date).format(format));

    };

};