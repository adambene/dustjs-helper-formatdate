var assert = require('assert');
var dust = require('dustjs-linkedin');
require('dustjs-helpers');
require('../index');

(function () {

    function testCase (name, template, params, expectation) {
        dust.loadSource(dust.compile(template, 'test'));
        dust.render('test', params, function (error, output) {
            describe(name, function () {
                it('rendering should not pass error', function () {
                    assert(!error);
                });
                it('should pass an expected output', function () {
                    assert.equal(output, expectation);
                });
            });
        });
    }

    // 0 should not be passed (deprecated - https://github.com/moment/moment/issues/1407)

    testCase('the date formatting in English', '{@formatDate date="{date}" format="YYYY MMMM Do HH:mm" lan="{lan}"/}', {date: '2015-10-06T12:16:46.168Z', lan: 'en-US'}, '2015 October 6th 14:16');
    
    testCase('the date formatting in Hungarian', '{@formatDate date="{date}" format="YYYY MMMM Do HH:mm" lan="{lan}"/}', {date: '2015-10-06T12:16:46.168Z', lan: 'hu-HU'}, '2015 október 6. 14:16');
    
    testCase('1970-01-01 should not be 0', '{@formatDate date="{date}" format="YYYY MMMM Do" lan="{lan}"/}', {date: '1970-01-01', lan: 'en-US'}, '1970 January 1st');
    
    testCase('false should be invalid date', '{@formatDate date="{date}" format="YYYY MMMM Do" lan="{lan}"/}', {date: false, lan: 'en-US'}, 'Invalid date');

    testCase('null should be invalid date', '{@formatDate date="{date}" format="YYYY MMMM Do" lan="{lan}"/}', {date: null, lan: 'en-US'}, 'Invalid date');

    var now = new Date();
    var expectedNow = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-');
    testCase('omitted date sould mean now', '{@formatDate format="YYYY-M-D" lan="{lan}"/}', {lan: 'en-US'}, expectedNow);

} ());
