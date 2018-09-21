(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{167:function(r,t,a){"use strict";a.r(t);var n=a(0),e=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("div",{staticClass:"content"},[a("h2",{attrs:{id:"js-颜色rgb与16进制转换核心"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-颜色rgb与16进制转换核心","aria-hidden":"true"}},[r._v("#")]),r._v(" JS 颜色RGB与16进制转换核心")]),r._v(" "),a("blockquote",[a("p",[r._v("JavaScript颜色转换的核心就是进制间的转换。RGB格式其实就是十进制表示法，所以，>十六进制颜色与RGB颜色的转换就是十六进制与十进制之间的转换。")]),r._v(" "),a("p",[r._v('十六进制转换为十进制相对容易些，核心代码如下示例：parseInt("0xFF")，其结果就是>255，”0x”就表明当前是16进制，由于parseInt后面无参数，默认就是转换为10进制了。')]),r._v(" "),a("p",[r._v("十进制转换为16进制，核心代码如下：var num=255; num.toString(16);，其结果是>FF。”16″表示数值转换为16进制字符串。")])]),r._v(" "),a("h3",{attrs:{id:"转换代码如下，首先是rgb颜色转换为十六进制表示："}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换代码如下，首先是rgb颜色转换为十六进制表示：","aria-hidden":"true"}},[r._v("#")]),r._v(" 转换代码如下，首先是RGB颜色转换为十六进制表示：")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('String.prototype.colorHex = function(){\n    var that = this;\n    //十六进制颜色值的正则表达式\n    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n    // 如果是rgb颜色表示\n    if (/^(rgb|RGB)/.test(that)) {\n        var aColor = that.replace(/(?:\\(|\\)|rgb|RGB)*/g, "").split(",");\n        var strHex = "#";\n        for (var i=0; i<aColor.length; i++) {\n            var hex = Number(aColor[i]).toString(16);\n            if (hex === "0") {\n                hex += hex;    \n            }\n            strHex += hex;\n        }\n        if (strHex.length !== 7) {\n            strHex = that;    \n        }\n        return strHex;\n    } else if (reg.test(that)) {\n        var aNum = that.replace(/#/,"").split("");\n        if (aNum.length === 6) {\n            return that;    \n        } else if(aNum.length === 3) {\n            var numHex = "#";\n            for (var i=0; i<aNum.length; i+=1) {\n                numHex += (aNum[i] + aNum[i]);\n            }\n            return numHex;\n        }\n    }\n    return that;\n};\n')])])]),a("h3",{attrs:{id:"十六进制颜色转为rgb格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#十六进制颜色转为rgb格式","aria-hidden":"true"}},[r._v("#")]),r._v(" 十六进制颜色转为RGB格式:")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('String.prototype.colorRgb = function(){\n    var sColor = this.toLowerCase();\n    //十六进制颜色值的正则表达式\n    var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;\n    // 如果是16进制颜色\n    if (sColor && reg.test(sColor)) {\n        if (sColor.length === 4) {\n            var sColorNew = "#";\n            for (var i=1; i<4; i+=1) {\n                sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    \n            }\n            sColor = sColorNew;\n        }\n        //处理六位的颜色值\n        var sColorChange = [];\n        for (var i=1; i<7; i+=2) {\n            sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    \n        }\n        return "RGB(" + sColorChange.join(",") + ")";\n    }\n    return sColor;\n};\n')])])]),a("h3",{attrs:{id:"使用方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用方式","aria-hidden":"true"}},[r._v("#")]),r._v(" 使用方式")]),r._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[r._v('var sRgb = "RGB(23, 245, 56)" , sHex = "#34538b";\nvar sHexColor = sRgb.colorHex();\nvar sRgbColor = sHex.colorRgb();\n')])])])])}],!1,null,null,null);e.options.__file="RGB-16.md";t.default=e.exports}}]);