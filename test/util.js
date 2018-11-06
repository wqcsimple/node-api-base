/**
 * Created by dd on 7/26/16.
 */
var Util = require('../lib/util');
var Log = require('../lib/log');

function parseApiKey() {
    console.log(Util.parseApiKey('name, dd'));
    console.log(Util.parseApiKey('name , dd'));
    console.log(Util.parseApiKey('name ,dd'));
    console.log(Util.parseApiKey('name'));
}

// parseApiKey();

let obk = {
    name: "whis",
    age: "whis"
};

// Log.i(obk);
// Log.d(obk);
// Log.i('whis')

Log.i('whis' + 192);
