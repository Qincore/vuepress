# 面试题 DAY1

2020-06-21 <a-tag color="#f50">7</a-tag> <a-tag color="#87d068">3</a-tag>

### 1. 下面这个JS程序的输出是什么：

```js
function Foo() {
    var i = 0;
    return function() {
        console.log(i++);
    }
}
 
var f1 = Foo(),
    f2 = Foo();
f1();
f1();
f2();
```

<template>
  <a-card>
    <p>A：0 1 0</p>
    <p>B：0 1 2</p>
    <p>C：0 0 0</p>
    <p>D：0 0 2</p>
  </a-card>
</template>

::: details 查看答案
**A**  

这道题考察闭包和引用类型对象的知识点：  
1.一般来说函数执行完后它的局部变量就会随着函数调用结束被销毁，但是此题foo函数返回了一个匿名函数的引用（即一个闭包），它可以访问到foo()被调用产生的环境，而局部变量i一直处在这个环境中，只要一个环境有可能被访问到，它就不会被销毁，所以说闭包有延续变量作用域的功能。这就好理解为什么：
```js
f1();//0
f1();//1
```
:::

### 2. 下面这段JS程序的执行结果是： <a-badge status="error" />

```js
var user = {
 count : 1,
 getCount: function(){
  return this.count;
 }
}
var func = user.getCount
console.log(func())
```

<template>
  <a-card>
    <p>A：this.count</p>
    <p>B：1</p>
    <p>C：报错</p>
    <p>D：undefined</p>
  </a-card>
</template>

::: details 查看答案
**D**  

1. 调用对象未声明的属性会 `undifned`

```js
var user={};
console.log(user.name);//undifned
``` 

2. 使用未赋值只声明的基本数据类型会 `undifned`

```js
var one;
console.log(one);//undifned
```
    
3. 使用未声明的变量会报错

```js
console.log(two);//new_file.html:15 Uncaught ReferenceError: two is not defined
``` 

在本题中，`this` 指向的是 `window`,`window` 对象已经自动被浏览器声明了，只是还没有声明count属性，所以也是 `undifned`
:::

### 3. 有以下ES6代码下面选项描述正确的是哪个？ <a-badge status="error" />

```js
function * gen() {
    yield 1;
    yield 2;
    yield 3;
}
```

<template>
  <a-card>
    <p>A：gen()执行后返回2</p>
    <p>B：gen()执行后返回undefined</p>
    <p>C：gen()执行后返回一个Generator对象</p>
    <p>D：gen()执行后返回1</p>
  </a-card>
</template>

::: details 查看答案
**C**  

ES6的新feature， function 后面带  * 的叫做Generator 函数。函数运行时，返回一个Generator 对象
:::

### 4. 下面得到的结果分别是什么？（） <a-badge status="error" />

```js
console.log(([])?true:false); 
console.log(([]==false?true:false)); 
console.log(({}==false)?true:false) 
```

<template>
  <a-card>
    <p>A：false true true</p>
    <p>B：true true true</p>
    <p>C：true false true</p>
    <p>D：true true false</p>
  </a-card>
</template>

::: details 查看答案
**D**  

第一题
```js
//第一题
Boolean([]) //true
//布尔类型里只有这几参数个返回false，其它都为true
Boolean(undefined) // false
Boolean(null) // false 
Boolean(0) // false 
Boolean(NaN) // false 
Boolean('') // false
```

第二题

布尔类型与其它任何类型进行比较，布尔类型将会转换为 `Number` 类型。  
Number([])返回0所以第二题为true。

第三题

`Number`转换类型的参数如果为对象返回的就是 `NaN`,那么Number({})返回的就是 `NaN`。  
通过Object.prototype.toString.call({})来判断类型，0与NaN相比为false  
所以 true  true false
:::

### 5. 关于 javascript 模块化，下列描述错误的是  <a-badge status="error" />

<template>
  <a-card>
    <p>A：模块化有利于管理模块间的依赖，更依赖模块的维护</p>
    <p>B：主流的模块化包括CommonJS,AMD,CMD等</p>
    <p>C：Sea.js遵循AMD规范，RequireJS遵循CMD规范</p>
    <p>D：AMD推崇依赖前置，CMD推崇依赖就近</p>
  </a-card>
</template>

::: details 查看答案
**C**  

AMD 是 RequireJS 在推广过程中对模块定义的规范化产出。  
CMD 是 SeaJS 在推广过程中对模块定义的规范化产出。
:::

### 6. 以下符合 ES6 写法的有：（）

<template>
  <a-card>
    <p>A：<pre>class Foo
{
	constructor() {return Object.create(null);}
}
Foo()</pre></p>
    <p>B：<pre>var m=1;
export m;</pre></p>
    <p>C：<pre>export var firstName=’Michael’;</pre></p>
    <p>D：在A模块中export{readFile}后，在B模块中import readFile from ‘A’可以获取到readFile</p>
  </a-card>
</template>

::: details 查看答案
**C**  

A：类必须使用new调用，否则会报错。这是它跟普通构造函数的一个主要区别，后者不用new也可以执行。   
B：export命令规定的是对外的接口，必须与模块内部的变量建立一一对应关系。
```js
// 报错
export 1;
// 报错
var m = 1;
export m;
```
上面两种写法都会报错，因为没有提供对外的接口。第一种写法直接输出 1，第二种写法通过变量m，还是直接输出 1。1只是一个值，不是接口。正确的写法是下面这样。  
```js
// 写法一
export var m = 1;
// 写法二
var m = 1;
export {m};
// 写法三
var n = 1;
export {n as m};
```
D：A模块对外暴露了一个对象，引入的时候需要使用解构赋值 
```js
import {readFile} from 'A'
```
:::

### 7. 以下代码执行后，array 的结果是？ <a-badge status="error" />

```js
let array = [,1,,2,,3];
array = array.map((i) => ++i)
```

<template>
  <a-card>
    <p>A：[,2,,3,,4]</p>
    <p>B：[NaN,2,NaN,3,NaN,4]</p>
    <p>C：[1,2,1,3,1,4]</p>
    <p>D：[null,2,null,3,null,4]</p>
  </a-card>
</template>

::: details 查看答案
**A** 

ES5  
orEach(), filter(), reduce(), every() 和some()都会跳过空位。  
map()会跳过空位，但会保留这个值  
join()和toString()会将空位视为 `undefined`，而 `undefined` 和 `null` 会被处理成空字符串。  
ES6 中都会将空位当做 `undefined`  
:::

### 8. 以下哪个语句打印出来的结果时false？ <a-badge status="error" />


<template>
  <a-card>
    <p>A：alert(3==true)</p>
    <p>B：alert(2=="2")</p>
    <p>C：alert(null == undefined)</p>
    <p>D：alert(isNaN("true"))</p>
  </a-card>
</template>

::: details 查看答案
**A**   
A：
```js
1 == true   // 布尔值会转成number true即为1 所以结果是true
2 == true   // 布尔值会转成number true即为1 所以结果是false
3 == true   // 布尔值会转成number true即为1 所以结果是false
1 == false  // 布尔值会转成number false即为0 所以结果是false
0 == false  // 布尔值会转成number false即为0 所以结果是true
```
B：数字字符串2会转换成数字2在和数字2进行比较，js会优先选择将字符串转成数字。  
C：JavaScript规范中提到，要比较相等性之前，不能将 `null` 和 `undefined` 转换成其他任何值，并且规定 `null` 和 `undefined` 是相等的，`null` 和 `undefined` 都代表着无效的值。  
D：isNaN() 函数用于检查其参数是否是非数字值，如果参数值为 `NaN` 或字符串、对象、`undefined` 等非数字值则返回 true, 否则返回 false。
:::

### 9. this对象的理解正确的是 () <a-tag color="purple">多选</a-tag> <a-badge status="error" />

<template>
  <a-card>
    <p>A：在不改变this指向的前提下，this总是指向函数的直接调用者</p>
    <p>B：如果有new关键字，this指向new出来的那个对象</p>
    <p>C：this总是指向函数的非间接调用者</p>
    <p>D：IE中attachEvent中的this总是指向全局对象Window</p>
  </a-card>
</template>

::: details 查看答案
**A B D**   

:::

### 10. 有var d = new Date('2018-05-09')，可以设置为6月份的操作是？（） <a-tag color="purple">多选</a-tag>

<template>
  <a-card>
    <p>A：d.setMonth(7);</p>
    <p>B：d.setMonth(6);</p>
    <p>C：d.setMonth(5);</p>
    <p>D：d.setDate(40);</p>
  </a-card>
</template>

::: details 查看答案
**C D**   

:::

