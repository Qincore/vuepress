# 语法基础

## 函数

函数是一个JavaScript代码块或者说是一个代码容器，定义之后，可以被执行或着被调用，函数可以被多次调用，执行任意次。

### 声明函数

使用 `function` 关键字定义/声明函数。

``` js
function 函数名(){
    //执行代码
};
```

调用函数

``` js
function 函数名(){
    //执行代码
};
//调用函数
函数名();
```

---

## 变量

ECMAscript变量是松散类型的，意思是变量可以保存任何类型的数据，每个变量只不过是任意值的别名。

### 定义变量

定义变量，可以使用 `var` 关键字/操作符，后面跟变量名(标识符)。

``` js
var str = "你好！"
```
<a-alert message="上面代码定义了一个名为 str 的变量,把字符串 你好！ 保存在了变量 str 中。" type="info" show-icon />

---

### 变量的命名

1. 必须有意义。
2. js里面多个单词必须用驼峰命名法/匈牙利命名法。
3. 首字母必须是字母或者_或者$。
4. 字母大小写区分。

驼峰命名法：
``` js
//第一个单词首字母小写，后面单词首字母大写
var addUp = 100;
```

::: warning 注意
变量名或者标识符不能用关键字和保留字。
:::

---

## JavaScript 输出

### `alert()` 方法

在浏览器中弹出一个对话框,然后把要输出的内容展示出来   

**实例：**

::: demo [vanilla]
```html {6}
<html>
    <button id="ktDemoAlert">试一下</button>
</html>
<script>
    document.querySelector("#ktDemoAlert").onclick = function(){
        alert('点什么点！');
    };
</script>
```
:::

::: warning 注意
`alert` 都是把要输出的内容首先转换为字符串然后在输出的。
:::

---

### `prompt()` 方法

用于显示可提示用户进行输入的对话框

**实例：**

::: demo [vanilla]
```html {6}
<html>
    <button id="ktDemoPrompt">再试试</button>
</html>
<script>
    document.querySelector("#ktDemoPrompt").onclick = function(){
        prompt('今天天气好吗？');
    };
</script>
```
:::

<br>
<a-alert message="prompt()方法平时较少使用" type="warning" show-icon />

---

### `confirm()` 方法

用于显示一个带有指定消息和确定及取消按钮的对话框

**实例：**

::: demo [vanilla]
```html {6}
<html>
    <button id="ktDemoConfirm">再点</button>
</html>
<script>
    document.querySelector("#ktDemoConfirm").onclick = function(){
        confirm('确实删除吗？');
    };
</script>
```
:::

---

### `console.log()` 方法

在控制台上输出信息

**实例：**

::: demo [vanilla]
```html {6}
<html>
    <button id="ktDemoConsole">点我输出</button>
</html>
<script>
    document.querySelector("#ktDemoConsole").onclick = function(){
        console.log('F12控制台，看到我了吗？');
    };
</script>
```
:::

---

### `write()` 方法

直接的在页面中输出的内容

```html {7}
<html>
    <button id="ktDemoWrite">直接输出</button>

</html>
<script>
    document.querySelector("#ktDemoWrite").onclick = function(){
        document.write('自己返回！');
    };
</script>
```

---

## JavaScript 注释

用于解释 JavaScript 代码，增强其可读性

### 单行注释

单行注释以 `//` 开头

``` js
//这是个单行注释
```

::: warning 注意
任何位于 `//` 与行末之间的文本都会被 JavaScript 忽略（不会执行）。
:::

---

### 多行注释

多行注释以 `/*` 开头，以 `*/` 结尾

``` js
/*这是个多行注释
  第二行
  第三行
*/
```

::: warning 注意
任何位于 `/*` 和 `*/` 之间的文本都会被 JavaScript 忽略。
:::

---

## 运算符

### 算数运算符

算数运算符用于对数字执行算数运算。

**加法运算：**


::: demo [vanilla]
```html {7}
<html>
    <button id="ktDemoPlus">查看结果</button>
</html>
<script>
var a = 4;      //把数字 4 赋值给变量 a
var b = 5;      //把数字 5 赋值给变量 b
var c = a + b;  //将计算结果赋值给变量 c

document.querySelector("#ktDemoPlus").onclick = function(){
        alert(c);
    };
</script>
```
:::

**乘法运算：**

::: demo [vanilla]
```html {7}
<html>
    <button id="ktDemoMultiplication">查看结果</button>
</html>
<script>
var a = 4;      //把数字 4 赋值给变量 a
var b = 5;      //把数字 5 赋值给变量 b
var c = a * b;  //将计算结果赋值给变量 c

document.querySelector("#ktDemoMultiplication").onclick = function(){
        alert(c);
    };
</script>
```
:::

| 运算符 | 描述 |
|-----|----|
| +   | 加法 |
| -   | 减法 |
| *   | 乘法 |
| /   | 除法 |
| %   | 系数 |
| ++  | 递加 |
| --  | 递减 |

---

### 赋值运算符

赋值运算符向 JavaScript 变量赋值。



| 运算符 | 例子     | 等同于       |
|-----|--------|-----------|
| =   | x = y  | x = y     |
| +=  | x += y | x = x + y |
| -=  | x -= y | x = x - y |
| *=  | x *= y | x = x * y |
| /=  | x /= y | x = x / y |
| %=  | x %= y | x = x % y |

---

### 字符串运算符

`+` 运算符也可用于对字符串进行拼接（concatenate，级联）。

**实例：**

::: demo [vanilla]
```html {7}
<html>
    <button id="ktDemoCharacterString">查看结果</button>
</html>
<script>
var str1 = '你好';        //把 你好 赋值给变量 str1
var str2 = '世界！';      //把 世界！ 赋值给变量 str2
var str3 = str1 + str2;   //将拼接结果赋值给变量 str3

document.querySelector("#ktDemoCharacterString").onclick = function(){
        alert(str3);
    };
</script>
```
:::

::: warning 注意
在用于字符串时，`+` 运算符被称为级联运算符。
:::

---

### 字符串和数字的相加

相加两个数字，将返回和，但对一个数字和一个字符串相加将返回一个字符串。

**实例：**

::: demo [vanilla]
```html {5-7}
<html>
    <button id="ktDemoStringNumber">查看结果</button>
</html>
<script>
var a = 4 + 8;      //两个数字相加
var b = '4' + 8;    //字符串加数字
var c = '四' + 8;   //字符串加数字

document.querySelector("#ktDemoStringNumber").onclick = function(){
        alert(a);
        alert(b);
        alert(c);
    };
</script>
```
:::

::: warning 注意
数字和字符串相加，结果是字符串！
:::

---

### 比较运算符

| 运算符 | 描述      |
|-----|---------|
| ==  | 等于      |
| === | 等值等型    |
| !=  | 不相等     |
| !== | 不等值或不等型 |
| >   | 大于      |
| <   | 小于      |
| >=  | 大于或等于   |
| <=  | 小于或等于   |
| ?   | 三元运算符   |

**等于：**

::: demo [vanilla]
```html {9}
<html>
    <button id="ktDemoBeEqualTo">查看结果</button>
</html>
<script>
var a = 8;
var b = 8;

document.querySelector("#ktDemoBeEqualTo").onclick = function(){
        alert(a == b); //a 等于 b 吗？
    };
</script>
```
:::

**不等于：**

::: demo [vanilla]
```html {9}
<html>
    <button id="ktDemoNotEqualTo">查看结果</button>
</html>
<script>
var a = 8;
var b = 8;

document.querySelector("#ktDemoNotEqualTo").onclick = function(){
        alert(a != b); //a 不等于 b 吗？
    };
</script>
```
:::

---

### 逻辑运算符

<table>
    <tr>
        <td>运算符</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>&amp;&amp;</td>
        <td>与</td>
    </tr>
    <tr>
        <td>||</td>
        <td>或</td>
    </tr>
    <tr>
        <td>!</td>
        <td>非</td>
    </tr>
</table>

---

### 类型运算符

| 运算符        | 描述                    |
|------------|-----------------------|
| typeof     | 返回变量的类型。              |

**`typeof`**

**实例：**

::: demo [vanilla]
```html {9}
<html>
    <button id="ktDemoTypeOf">查看结果</button>
</html>
<script>

typeof "Bill";                 // 返回 "string"
typeof 3.14;                   // 返回 "number"
typeof NaN;                    // 返回 "number"
typeof false;                 // 返回 "boolean"
typeof [1,2,3,4];              // 返回 "object"
typeof {name:'Bill', age:62};  // 返回 "object"
typeof new Date();             // 返回 "object"
typeof function () {};         // 返回 "function"
typeof myCar;                 // 返回 "undefined" *
typeof null;                   // 返回 "object"

document.querySelector("#ktDemoTypeOf").onclick = function(){
        console.log(typeof "Bill",typeof 3.14,typeof NaN,typeof false,typeof [1,2,3,4],typeof {name:'Bill', age:62},typeof new Date(),typeof function () {},typeof myCar,typeof null);
    };
</script>
```
:::

---


## 数据类型

JavaScript 类型可以分为两类，原始数据类型（基本类型）和复杂数据类型（对象类型），在ECMAscript6之前的原始数据类型有 `Number`、`String`、`Boolean`、`Null`、`Undefined`。复杂数据类型有 `Object`、`Array`、`Function`。

### 数值（数字）

`Number`

数值类型用于表示整数和浮点值。JavaScript使用IEEE 754标准定义64位浮点格式表示数值，最大整数可以表示±1.797 693 134 862 315 7×10³⁰⁸，最小整数可表示±5×10⁻³²⁴。

```js
var a = 3;          //整数
var b = 3.1415926;  //浮点数
```

`NaN`

1. `NaN`是数字类型。  
2. `NaN`不等于`NaN`。  
3. not a number 不是一个数字。  

检测是否是非数字值：

**实例：**

::: demo [vanilla]
```html {7-9}
<html>
    <button id="ktDemoNaN">查看结果</button>
</html>
<script>

document.querySelector("#ktDemoNaN").onclick = function(){
        alert(isNaN(123));      //false
        alert(isNaN(1.23));     //false
        alert(isNaN('123'));    //false 可以转换为数值
        alert(isNaN('哈哈'));   //true
    };
</script>
```
:::

::: warning 注意
`NaN` 属于数字类型，但是 `NaN` 不等于 `NaN` 。
:::

**数值转换**

将非数值转换为数值类型可以使用 `Number()`、`parseInt()`、`parseFloat()`。`Number()` 可以用于任何数据类型，后两个主要用于将字符串转换为数值。

1. `Number()`

- 布尔值
   - `true` -> 1
   - `false` -> 0

- 数值
   - 直接返回数值

- 空
   - `null` -> 0

- 未定义
   - `undefined` -> `NaN`

- 字符串
   - 如果字符串包含数值字符，包括数值前面带加、减号的情况，则转换为一个十进制数值（忽略前面的0）
   - 如果字符串包含有效的浮点值，则转换为对应的浮点值（忽略前面的0）
   - 如果字符串包含有效的十六进制值，则转换为对应的十进制整数值。
   - 如果是空字符串，则返回数值 0
   - 如果字符串包含除上述情况外的字符，则返回 `NaN`

**实例：**

::: demo [vanilla]
```html {7-11}
<html>
    <button id="ktDemoNumber1">查看结果</button>
</html>
<script>

document.querySelector("#ktDemoNumber1").onclick = function(){
        alert(Number('你好世界！'));      // NaN
        alert(Number('你好123'));         // NaN
        alert(Number(''));               // 0
        alert(Number('000123'));         // 123
        alert(Number(true));             // 1
    };
</script>
```
:::

<br>

2. `parseInt()`

转换一个字符串，并返回一个整数（显式转换）。

**语法：**

```js
parseInt('字符串',基数);
```

- 只有字符串中的第一个数字会被返回
- 开头和结尾的空格是允许的
- 如果字符串的第一个字符不能被转换为数字，返回 `NaN`
- 没有传入基数或基数传入0，则 `parseInt()` 自行判断
- 0x 开头解析解析为十六进制

**实例：**

::: demo [vanilla]
```html {7-12}
<html>
    <button id="ktDemoParseInt">查看结果</button>
</html>
<script>

document.querySelector("#ktDemoParseInt").onclick = function(){
        alert(parseInt('123abc'));      // 123
        alert(parseInt(''));            // NaN
        alert(parseInt('15.3'));        // 15
        alert(parseInt('15.6'));        // 15
        alert(parseInt('0xa'));         // 解析为十六进制 返回 10      
        alert(parseInt('015xA',10));    // 基数传入10表示按十进制转换 返回 15
    };
</script>
```
:::

3. `parseFloat()`

转换一个字符串，并返回一个浮点数（显式转换）。

**语法：**

```js
parseFloat('字符串')
```

- 第一次出现小数点有效，第二次出现无效，此时剩余字符都被忽略
- 始终忽略开头的0
- 十六进制数始终返回0
- 字符串中只有整数，返回整数
- 只解析十进制数

**实例：**

::: demo [vanilla]
```html {7-12}
<html>
    <button id="ktDemoParseFloat">查看结果</button>
</html>
<script>

document.querySelector("#ktDemoParseFloat").onclick = function(){
        alert(parseFloat('123abc'));      // 123
        alert(parseFloat(''));            // NaN
        alert(parseFloat('15.3'));        // 15.3
        alert(parseFloat('15.3.6'));      // 15.3
        alert(parseFloat('0xa'));         // 0
        alert(parseFloat('015xA'));       // 15
    };
</script>
```
:::

---

### 字符串

`String`

字符串数据类型表示零或多个16为Unicode字符序列。字符串可以使用双引号、单引号或反引号标示。




### 布尔

### 空

### 未定义