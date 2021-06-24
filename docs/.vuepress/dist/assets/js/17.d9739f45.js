(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{702:function(_,t,v){"use strict";v.r(t);var e=v(96),a=Object(e.a)({},(function(){var _=this,t=_.$createElement,v=_._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h1",{attrs:{id:"条件查询"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#条件查询"}},[_._v("#")]),_._v(" 条件查询")]),_._v(" "),v("h2",{attrs:{id:"where"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#where"}},[_._v("#")]),_._v(" WHERE")]),_._v(" "),v("p",[_._v("条件查询需要用到WHERE语句，WHERE必须放到FROM语句表的后面,它限制的是查询这张表里面符合特殊条件的数据，\n此特殊条件就是表达式运算结果为true。")]),_._v(" "),v("p",[_._v("支持的运算符：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("运算符")]),_._v(" "),v("th",[_._v("描述")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("=")]),_._v(" "),v("td",[_._v("等于")])]),_._v(" "),v("tr",[v("td",[_._v("<>")]),_._v(" "),v("td",[_._v("不等于")])]),_._v(" "),v("tr",[v("td",[_._v(">")]),_._v(" "),v("td",[_._v("大于")])]),_._v(" "),v("tr",[v("td",[_._v("<")]),_._v(" "),v("td",[_._v("小于")])]),_._v(" "),v("tr",[v("td",[_._v(">=")]),_._v(" "),v("td",[_._v("大于等于")])]),_._v(" "),v("tr",[v("td",[_._v("<=")]),_._v(" "),v("td",[_._v("小于等于")])]),_._v(" "),v("tr",[v("td",[_._v("BETWEEN")]),_._v(" "),v("td",[_._v("在某个范围内")])]),_._v(" "),v("tr",[v("td",[_._v("LIKE")]),_._v(" "),v("td",[_._v("搜索某种模式")])]),_._v(" "),v("tr",[v("td",[_._v("IS NULL")]),_._v(" "),v("td",[_._v("为NULL")])]),_._v(" "),v("tr",[v("td",[_._v("AND")]),_._v(" "),v("td",[_._v("并且")])]),_._v(" "),v("tr",[v("td",[_._v("OR")]),_._v(" "),v("td",[_._v("或者")])]),_._v(" "),v("tr",[v("td",[_._v("IN")]),_._v(" "),v("td",[_._v("包含，相当于多个OR")])]),_._v(" "),v("tr",[v("td",[_._v("NOT")]),_._v(" "),v("td",[_._v("NOT可以取非，用在IS、IN中")])])])]),_._v(" "),v("p",[_._v("语法：")]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT 字段名 FROM 表名 WHERE 字段名 运算符 值\n")])])]),v("p",[_._v("示例 t_emp 员工表：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("e_id")]),_._v(" "),v("th",[_._v("e_name")]),_._v(" "),v("th",[_._v("e_age")]),_._v(" "),v("th",[_._v("e_add")]),_._v(" "),v("th",[_._v("e_year")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("1")]),_._v(" "),v("td",[_._v("小明")]),_._v(" "),v("td",[_._v("20")]),_._v(" "),v("td",[_._v("四川成都")]),_._v(" "),v("td",[_._v("2001")])]),_._v(" "),v("tr",[v("td",[_._v("2")]),_._v(" "),v("td",[_._v("小军")]),_._v(" "),v("td",[_._v("22")]),_._v(" "),v("td",[_._v("四川自贡")]),_._v(" "),v("td",[_._v("1999")])]),_._v(" "),v("tr",[v("td",[_._v("3")]),_._v(" "),v("td",[_._v("小红")]),_._v(" "),v("td",[_._v("19")]),_._v(" "),v("td",[_._v("四川雅安")]),_._v(" "),v("td",[_._v("2002")])]),_._v(" "),v("tr",[v("td",[_._v("4")]),_._v(" "),v("td",[_._v("小萌")]),_._v(" "),v("td",[_._v("20")]),_._v(" "),v("td",[_._v("四川自贡")]),_._v(" "),v("td",[_._v("2001")])])])]),_._v(" "),v("h2",{attrs:{id:"运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[_._v("#")]),_._v(" "),v("code",[_._v("=")]),_._v(" 运算符")]),_._v(" "),v("ol",[v("li",[_._v("查询家庭地址在“四川自贡”的员工信息")])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT * FROM t_emp WHERE e_add = '四川自贡';\n")])])]),v("p",[_._v("结果：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("e_id")]),_._v(" "),v("th",[_._v("e_name")]),_._v(" "),v("th",[_._v("e_age")]),_._v(" "),v("th",[_._v("e_add")]),_._v(" "),v("th",[_._v("e_year")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("2")]),_._v(" "),v("td",[_._v("小军")]),_._v(" "),v("td",[_._v("22")]),_._v(" "),v("td",[_._v("四川自贡")]),_._v(" "),v("td",[_._v("1999")])]),_._v(" "),v("tr",[v("td",[_._v("4")]),_._v(" "),v("td",[_._v("小萌")]),_._v(" "),v("td",[_._v("20")]),_._v(" "),v("td",[_._v("四川自贡")]),_._v(" "),v("td",[_._v("2001")])])])]),_._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[_._v("查询家庭地址在“四川自贡”的员工名字")])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT e_name FROM t_emp WHERE e_add = '四川自贡';\n")])])]),v("p",[_._v("结果：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("e_name")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("小军")])]),_._v(" "),v("tr",[v("td",[_._v("小萌")])])])]),_._v(" "),v("h2",{attrs:{id:"运算符-2"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#运算符-2"}},[_._v("#")]),_._v(" "),v("code",[_._v("<>")]),_._v(" 运算符")]),_._v(" "),v("ol",[v("li",[_._v("查询出生年不是2001的员工姓名、家庭地址、出生年")])]),_._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[_._v("SELECT e_name,e_add FROM t_emp WHERE e_year <> '2001';\n")])])]),v("p",[_._v("结果：")]),_._v(" "),v("table",[v("thead",[v("tr",[v("th",[_._v("e_name")]),_._v(" "),v("th",[_._v("e_add")]),_._v(" "),v("th",[_._v("e_year")])])]),_._v(" "),v("tbody",[v("tr",[v("td",[_._v("小军")]),_._v(" "),v("td",[_._v("四川自贡")]),_._v(" "),v("td",[_._v("1999")])]),_._v(" "),v("tr",[v("td",[_._v("小红")]),_._v(" "),v("td",[_._v("四川雅安")]),_._v(" "),v("td",[_._v("2002")])])])]),_._v(" "),v("h2",{attrs:{id:"between-运算符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#between-运算符"}},[_._v("#")]),_._v(" "),v("code",[_._v("BETWEEN")]),_._v(" 运算符")])])}),[],!1,null,null,null);t.default=a.exports}}]);