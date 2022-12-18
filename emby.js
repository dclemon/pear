

var body = '{"cacheExpirationDays":999,"resultCode":"GOOD","message":"Device Valid"}';
var url = $request.url;
var obj = JSON.parse(body);


body = JSON.stringify(obj);

$done({body});
