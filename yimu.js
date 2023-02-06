
/*  
^https:\/\/yimuapp.com:8082\/bookkeeping\/user\/(getUser) url script-response-body https://raw.githubusercontent.com/dclemon/lemonScripts/main/scripts/yimu.js?token=GHSAT0AAAAAAB5FM3KDLBYV6U37CF67ZED2Y7A7L3A
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
