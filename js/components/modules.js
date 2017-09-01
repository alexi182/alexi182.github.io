var req = require.context("./plugins", true, /^(.*\.(js$))[^.]*$/igm);
var req2 = require.context("./scripts", true, /^(.*\.(js$))[^.]*$/igm);

req.keys().forEach(function(key){
    req(key);
});

req2.keys().forEach(function(key){
    req2(key);
});