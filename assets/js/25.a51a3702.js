(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{312:function(a,t,s){"use strict";s.r(t);var r=s(14),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"_1-int类型的二进制码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-int类型的二进制码"}},[a._v("#")]),a._v(" 1.int类型的二进制码")]),a._v(" "),t("h2",{attrs:{id:"int类型数字a在底层的二进制对应的是什么呢"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#int类型数字a在底层的二进制对应的是什么呢"}},[a._v("#")]),a._v(" int类型数字a在底层的二进制对应的是什么呢？")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230318231253705.png",alt:"image-20230318231253705"}})]),a._v(" "),t("p",[a._v("需求：将整形a对应的二进制表示打印输出到控制台，其实就是确定每一位上是0还是1。")]),a._v(" "),t("p",[a._v("我们知道 golang 的 int 类型跟随计算机的系统位数适配，目前大家一般使用的都是64位的系统，所以使用64位进行说明。")]),a._v(" "),t("p",[a._v("那我们在代码中使用的a，底层的二进制具体是什么样子的呢？由于计算式是由二进制来表达数据的，而且我们也知道了，int 类型是 64 位，那么int类型每一位的具体值我们可以怎么知道呢？10 进制的 1， 我们很容易推算出1的二进制码，实际上1的二进制码确实如下图，最后一个位置为1，其余都是0：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230318231540177.png",alt:"image-20230318231540177"}})]),a._v(" "),t("h2",{attrs:{id:"位运算的基本符号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算的基本符号"}},[a._v("#")]),a._v(" 位运算的基本符号")]),a._v(" "),t("h3",{attrs:{id:"位运算-与"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算-与"}},[a._v("#")]),a._v(" 位运算 &（与）")]),a._v(" "),t("p",[a._v("如下图所示，以下展示 a & c 的二进制运算结果：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230318233056615.png",alt:"image-20230318233056615"}})]),a._v(" "),t("p",[a._v("我们可以看出，相同位置下，a,b同时为1，则c该位置也为1。但凡一个位置不为1则当前位置为0。")]),a._v(" "),t("h3",{attrs:{id:"位运算-或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算-或"}},[a._v("#")]),a._v(" 位运算  |（或）")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230318233552382.png",alt:"image-20230318233552382"}})]),a._v(" "),t("p",[a._v("我们可以看出，相同位置下，a,b同时为0，则c该位置也为0。但凡一个位置不为0则当前位置为1。")]),a._v(" "),t("h3",{attrs:{id:"位运算-左移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算-左移"}},[a._v("#")]),a._v(" 位运算  >> （左移）")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230319001007179.png",alt:"image-20230319001007179"}})]),a._v(" "),t("p",[a._v("golang 的 >> 为带符号位左移，如图中所示，a 的最高位为符号位，如果该位为1，则a整体右移后，最高位补上符号位的值。所以a >> 1 后的具体值位为b，如果a最高位为0，则为下图所示：")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230319001319042.png",alt:"image-20230319001319042"}})]),a._v(" "),t("h3",{attrs:{id:"位运算-右移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算-右移"}},[a._v("#")]),a._v(" 位运算  <<（右移）")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230319000646452.png",alt:"image-20230319000646452"}})]),a._v(" "),t("p",[a._v("整形 a 左移1位后为b，具体为 a 整体向左边移动1位，最后1位补零，左移1位后的具体值为b。")]),a._v(" "),t("h3",{attrs:{id:"位运算-异或"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算-异或"}},[a._v("#")]),a._v(" 位运算  ^ （异或）")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230319001641487.png",alt:"image-20230319001641487"}})]),a._v(" "),t("p",[a._v("三者关系： a ^ b = c")]),a._v(" "),t("p",[a._v("a 与 b 异或时，当两者相同位置的值相同时，异或后的值则为0，当两者的位置值不同是，异或后的结果值为1。")]),a._v(" "),t("h3",{attrs:{id:"位运算-非"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#位运算-非"}},[a._v("#")]),a._v(" 位运算  ^ （非）")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230319002053328.png",alt:"image-20230319002053328"}})]),a._v(" "),t("p",[a._v("非运算如图所示，每一位的值如果是0则取反后为1，如果是1则取反后为0。")]),a._v(" "),t("blockquote",[t("p",[a._v("注意：\ngolang 中 非(^) 与异或(^) 使用的是同一个符号，如何区分？\n如果^在两数之间则是异或，如果^在变量开头，则^表示非运算")])]),a._v(" "),t("h2",{attrs:{id:"打印a的二进制"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#打印a的二进制"}},[a._v("#")]),a._v(" 打印a的二进制")]),a._v(" "),t("p",[a._v("我们知道a有64位，所以我们需要循环64次，去判断每一个位置下，到底是0还是1，判断完毕后则可以知道，该数的二进制表达。")]),a._v(" "),t("p",[t("img",{attrs:{src:"/gte_binary.assets/image-20230319003651197.png",alt:"image-20230319003651197"}})]),a._v(" "),t("p",[a._v("如上图，其中示例我们如何取到最高位，我们将1左移63位，移动到最高位后，与 a 相与，结果位0，则证明该位置位0，所以答案的最高位为0，同理取次高位直到取完，即可得到a的二进制表达。")]),a._v(" "),t("p",[a._v("具体代码如下：")]),a._v(" "),t("div",{staticClass:"language-golang line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v('func GetBinary(val int) string {\n\tres := ""\n\tfor i:=63; i>=0; i-- {\n\t\tif val & (1<<i ) == 0 {\n\t\t\tres += "0"\n\t\t} else {\n\t\t\tres += "1"\n\t\t}\n\t}\n\treturn res\n}\n')])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);