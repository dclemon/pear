
/*  
^https:\/\/yimuapp.com:8082\/bookkeeping\/user\/(getUser) url script-response-body https://raw.githubusercontent.com/dclemon/pear/main/yimu.js
MITM = yimuapp.com
*/
var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

const vip = '/getUser';



if (url.indexOf(vip) != -1) {
	obj["result"]["vipType"] = 1;
	body = JSON.stringify(obj);
 }



$done({body});
