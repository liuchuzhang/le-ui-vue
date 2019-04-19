/**
 * 校验浏览器
 */
function getBrowserInfo(){
  var Sys = {};
  var ua = navigator.userAgent.toLowerCase();
  var re =/(msie|firefox|chrome|opera|version).*?([\d.]+)/;
  var m = ua.match(re);
  Sys.browser = m[1].replace(/version/, "'safari");
  Sys.ver = m[2];
  return Sys;
 }

export function checkUserAgent () {
  const sys = getBrowserInfo();
  return sys;
}