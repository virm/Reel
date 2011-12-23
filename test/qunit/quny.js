/*
 QUny for QUnit.
 Copyright (c) 2011 Petr Vostrel (http://petr.vostrel.cz/)
 Dual licensed under the MIT (MIT-LICENSE.txt)
 and GPL (GPL-LICENSE.txt) licenses.

 Version: 0.3
 Updated: 2011-12-23
*/
(function(){function f(a,b){for(var d in b)a[d]=b[d];return a}var c=QUny={API:{equiv:function(a,b,d,e){return equal(css(a),css(b),d,e)},css:function(a){return c.cache(a)||c.cache(a,c.conversion(c.pattern(a)))}},patterns:{COLOR_HEX:/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/gi,COLOR_HEX_SHORT:/^#([0-9a-f])([0-9a-f])([0-9a-f])$/gi,COLOR_RGB:/^rgb\( *(\d{1,3}%?) *, *(\d{1,3}%?) *, *(\d{1,3}%?) *\)$/gi,COLOR_RGBA:/^rgba\( *(\d{1,3}%?) *, *(\d{1,3}%?) *, *(\d{1,3}%?) *, *(\d{1,3}%?) *\)$/gi,COLOR_LITERAL:/^([a-z]+)$/gi,
SIZE_BG_SHIFT:/^(-?[.0-9]+)(%|em|px|pt|) (-?[.0-9]+)(%|em|px|pt|)/gi,SIZE:/^(-?[.0-9]+)(%|em|px|pt|)$/gi,SIZE_ZERO:/^0(%|em|px|pt|)$/gi,URL:/^url\(.+\)$/g},conversions:{COLOR_HEX:function(a,b,d){return c.base.RGBa([c.hex(a),c.hex(b),c.hex(d),1])},COLOR_HEX_SHORT:function(a,b,d){return c.base.RGBa([c.hex(a+a),c.hex(b+b),c.hex(d+d),1])},COLOR_RGB:function(a,b,d){return c.base.RGBa([a,b,d,1])},COLOR_RGBA:function(a,b,d,e){return c.base.RGBa([a,b,d,e])},COLOR_LITERAL:function(a){return c.color(a.toLowerCase())},
SIZE_BG_SHIFT:function(a,b,d){return c.base.px(+a)+" "+c.base.px(+d)},SIZE:function(a){return c.base.px(+a)},SIZE_ZERO:function(){return c.base.px(0)},URL:function(a){return c.base.url(a)}},colors:{transparent:"rgba(0,0,0,0)",black:"#000000",white:"#FFFFFF"},messages:{UNPROCESSED:"CSS value pattern matched correctly, but conversion to base failed.",UNSUPPORTED:"Either malformed or unsupported CSS value. Bouncing back."},base:{RGBa:function(a){for(var b=0;b<4;b++){var d=(""+a[b]).match(/^(.+)%$/);
a[b]=!d?+a[b]:b<3?Math.round(+d[1]*2.55):+d[1]*0.01}return"rgba("+a.join(", ")+")"},px:function(a){return a+"px"},url:function(a){return"url("+(a||"").replace(/['"]/g,"")+")"}},caches:{},pattern:function(a){for(var b in c.patterns){c.patterns[b].lastIndex=0;var d=c.patterns[b].exec(""+a);if(d){d[0]=b;return d}}return a},conversion:function(a){return c.conversions[a[0]].apply(this,a.slice(1))},color:function(a){return c.colors[a]?c.API.css(c.colors[a]):a},message:function(a){return c.messages[a]},
format:function(a){return c.formats[a]},cache:function(a,b){return b===undefined?c.caches[a]:(c.caches[a]=b)},hex:function(a){return parseInt(a,16)},console:window.console||{error:function(){},warn:function(){},log:function(){}}};f(window,QUny.API);QUny.colors=function a(b,d){a=QUny.colors;for(var e=0;e<b.length;e++)a[b[e]]="#"+d[e];return a}("aliceblue antiquewhite aqua aquamarine azure beige bisque black blanchedalmond blue blueviolet brown burlywood cadetblue chartreuse chocolate coral cornflowerblue cornsilk crimson cyan darkblue darkcyan darkgoldenrod darkgray darkgreen darkgrey darkkhaki darkmagenta darkolivegreen darkorange darkorchid darkred darksalmon darkseagreen darkslateblue darkslategray darkslategrey darkturquoise darkviolet deeppink deepskyblue dimgray dimgrey dodgerblue firebrick floralwhite forestgreen fuchsia gainsboro ghostwhite gold goldenrod gray green greenyellow grey honeydew hotpink indianred indigo ivory khaki lavender lavenderblush lawngreen lemonchiffon lightblue lightcoral lightcyan lightgoldenrodyellow lightgray lightgreen lightgrey lightpink lightsalmon lightseagreen lightskyblue lightslategray lightslategrey lightsteelblue lightyellow lime limegreen linen magenta maroon mediumaquamarine mediumblue mediumorchid mediumpurple mediumseagreen mediumslateblue mediumspringgreen mediumturquoise mediumvioletred midnightblue mintcream mistyrose moccasin navajowhite navy oldlace olive olivedrab orange orangered orchid palegoldenrod palegreen paleturquoise palevioletred papayawhip peachpuff peru pink plum powderblue purple red rosybrown royalblue saddlebrown salmon sandybrown seagreen seashell sienna silver skyblue slateblue slategray slategrey snow springgreen steelblue tan teal thistle tomato turquoise violet wheat white whitesmoke yellow yellowgreen".split(/ /),
"F0F8FF FAEBD7 00FFFF 7FFFD4 F0FFFF F5F5DC FFE4C4 000000 FFEBCD 0000FF 8A2BE2 A52A2A DEB887 5F9EA0 7FFF00 D2691E FF7F50 6495ED FFF8DC DC143C 00FFFF 00008B 008B8B B8860B A9A9A9 006400 A9A9A9 BDB76B 8B008B 556B2F FF8C00 9932CC 8B0000 E9967A 8FBC8F 483D8B 2F4F4F 2F4F4F 00CED1 9400D3 FF1493 00BFFF 696969 696969 1E90FF B22222 FFFAF0 228B22 FF00FF DCDCDC F8F8FF FFD700 DAA520 808080 008000 ADFF2F 808080 F0FFF0 FF69B4 CD5C5C 4B0082 FFFFF0 F0E68C E6E6FA FFF0F5 7CFC00 FFFACD ADD8E6 F08080 E0FFFF FAFAD2 D3D3D3 90EE90 D3D3D3 FFB6C1 FFA07A 20B2AA 87CEFA 778899 778899 B0C4DE FFFFE0 00FF00 32CD32 FAF0E6 FF00FF 800000 66CDAA 0000CD BA55D3 9370DB 3CB371 7B68EE 00FA9A 48D1CC C71585 191970 F5FFFA FFE4E1 FFE4B5 FFDEAD 000080 FDF5E6 808000 6B8E23 FFA500 FF4500 DA70D6 EEE8AA 98FB98 AFEEEE DB7093 FFEFD5 FFDAB9 CD853F FFC0CB DDA0DD B0E0E6 800080 FF0000 BC8F8F 4169E1 8B4513 FA8072 F4A460 2E8B57 FFF5EE A0522D C0C0C0 87CEEB 6A5ACD 708090 708090 FFFAFA 00FF7F 4682B4 D2B48C 008080 D8BFD8 FF6347 40E0D0 EE82EE F5DEB3 FFFFFF F5F5F5 FFFF00 9ACD32".split(/ /))})();
