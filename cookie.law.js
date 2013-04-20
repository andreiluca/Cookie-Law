/**
 * Small Cookie Law Script
 */

var eu_cookie_law_slug = 'eu-cookie-law';
var eu_cookie_law_custom_message = 'Acest site foloseste cookies. Navigand in continuare va exprimati acordul asupra folosirii cookie-urilor.';

document.body.insertAdjacentHTML('beforeEnd', '<div id="'+eu_cookie_law_slug+'" style="display:none;z-index:91234567;position:fixed;bottom:0px;width:100%;left:0;height:30px;line-height:30px;border:none;background-color:#F5DD88;color:#000;overflow:hidden;text-align:left;font-size:12px;font-family:arial;padding:0px 15px">'+eu_cookie_law_custom_message+'<a onclick="cookieLaw_hide()" style="cursor:pointer;text-decoration:none;background:red;color:#FFF;padding:3px 15px;margin-left:5px;">OK</a></div>' );


if(!cookieLaw_get(eu_cookie_law_slug)){
    document.getElementById(eu_cookie_law_slug).style.display='block';
}

function cookieLaw_hide() {
    var date = new Date();
    date.setTime(date.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "; expires=" + date.toGMTString();
    document.cookie = eu_cookie_law_slug + "=" + 'true' + expires + "; path=/";
    document.getElementById(eu_cookie_law_slug).style.display='none';
}
function cookieLaw_get(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}