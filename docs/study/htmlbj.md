# 超文本标记语言-Hyper Text Markup Language

## HTML5模板
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 

</body>
</html>
```

## `<!DOCTYPE html>`是什么意思？ <a-tag color="#108ee9">面试</a-tag>

文档声明，声明文档的类型。  
规范每一种类型的文档在浏览器中的解析方式。
- 什么是doctype?
   - 文档声明 
   - 规范每一种类型的文档在浏览器中的解析方式
- 去掉什么头会发生什么事情? 
   - 浏览器不知道按哪种方式解析。默认像低版本去解析
- 你知道浏览器标准模式和怪异模式的区别吗?
   - 有文档头就是标准模式
   - 怪异模式就是没有文档头、向下兼容的模式
   - 现在项目中用的统一都是html5的文档头
- 你知道有哪些文档头?
   - html4的文档头
   - 过度型
   - 严格型
   - 框架集型 以及废除
   - xhtml的文档头
   - html5的文档头

## `<head>`

头里面的东西都是为浏览器准备的。

```html
<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>标题</title> 
</head> 
```
## `<meta>`

可提供有关页面的元信息，如针对搜索引擎和更新频度的描述和关键词。

## `<title>`

可定义文档的标题，浏览器会以特殊的方式来使用标题，并且通常把它放置在浏览器窗口的标题栏或状态栏上。同样，当把文档加入用户的链接列表或者收藏夹或书签列表时，标题将成为该文档链接的默认名称。

## `<body>`

定义文档的主体。
包含文档的所有内容（比如文本、超链接、图像、表格和列表等等。）

```html
<body>
    文档的内容... ... 
</body>
```

## `<h1>`-`<h6>`

可定义标题。

< h1 > 定义最大的标题。  
< h6 > 定义最小的标题。  
由于 h 元素拥有确切的语义，因此请您慎重地选择恰当的标签层级来构建文档的结构。因此，请不要利用标题标签来改变同一行中的字体大小。相反，我们应当使用层叠样式表定义来达到漂亮的显示效果。

```html
<h1>这是标题 1</h1>
<h2>这是标题 2</h2>
<h3>这是标题 3</h3>
<h4>这是标题 4</h4>
<h5>这是标题 5</h5>
<h6>这是标题 6</h6>
```

## `<p>`

定义段落。  
p 元素会自动在其前后创建一些空白。浏览器会自动添加这些空间，您也可以在样式表中规定。  
在段落里面一个空格，多个空格，回行都只有一个空格。

```html
<p>这是一个段落</p>
```

## `<img>`

向网页中嵌入一幅图像。   
从技术上讲， 标签并不会在网页中插入图像，而是从网页上链接图像。 标签创建的是被引用图像的占位空间。  
标签有两个必需的属性：src 属性 和 alt 属性。  
title鼠标移上去显示的文字。  
路径： | ../上一级 | /下一级 | ./当前目录 | 超链接

```html
<img src="图片地址" alt="描述">
```

## 列表标签

`<ol>` 标签-有序列表标签。  
`<ul>` 标签-无序列表标签。  
`<dl>` `<dt>` `<dd>`描述列表，不常用。

```html
<ol>
    <li>有序列表1</li>
    <li>有序列表2</li>
    <li>有序列表3</li>
</ol>
<ul>
    <li>无序列表1</li>
    <li>无序列表2</li>
    <li>无序列表3</li>
</ul>
```

## `<a>`

`<a>` 标签定义超链接，用于从一张页面链接到另一张页面。  
最重要的属性是 href 属性，它指示链接的目标，可以用相对链接、绝对链接、超链接。  
target属性：_self 本窗口打开 | _blank 新标签页打开。  
锚点 #id  
打电话 tel:xxxxxxxxxx  
发邮件 mailto:xxxxxxxx

```html
<a href="链接地址">超链接</a>
```

## `<div>`

定义文档中的分区或节（division/section）。  
可以把文档分割为独立的、不同的部分。它可以用作严格的组织工具，并且不使用任何格式与其关联。  
如果用 id 或 class 来标记`<div>`，那么该标签的作用会变得更加有效。

```html
<div>
    <p>div块1</p>
</div>
<div>
    <p>div块2</p>
</div>
```

## `<span>`

用来组合文档中的行内元素。  
放在文本里面，把一些特殊的文字包裹起来。  
默认没有任何样式，透明的。

```html
<p>今天
    <span>天气</span>
很好</p>
```

## `<iframe>`

创建包含另外一个文档的内联框架（即行内框架）。  
后台管理系统切换iframe+a链接实现（这种写法写的越来越少了）。  
缺点：不利于SEO，不利于后台请求。

## `<table>`

定义 HTML 表格。  
简单的 HTML 表格由 table 元素以及一个或多个 tr、th 或 td 元素组成。
tr 元素定义表格行，th 元素定义表头，td 元素定义表格单元。  
更复杂的 HTML 表格也可能包括 caption、col、colgroup、thead、tfoot 以及 tbody 元素。  
cellspacing-单元格之间的距离。  
cellpadding-单元格的内边距,单元格距离文字的距离。  
colspan-合并列。  
rowspan-合并行。  

简写：
```html
<table border="1">
    <tr>
        <td>火箭</td>
        <td>卫星</td>
    </tr>
    <tr>
        <td>长征五号</td>
        <td>实践二十号</td>
    </tr>
</table>
```

完整写法：
```html
<table border="1">
    <thead>
         <tr>
             <th>火箭</th>
             <th>卫星</th>
         </tr>
    </thead>
    <tbody>
         <tr>
             <td>长征五号</td>
             <td>实践二十号</td>
         </tr>
    </tbody>
</table>
```

## `<textarea>`
文本域标签。  
多行的文本输入控件。  
文本区中可容纳无限数量的文本，其中的文本的默认字体是等宽字体（通常是 Courier）。  
可以通过 cols（列） 和 rows（行） 属性来规定 textarea 的尺寸，不过更好的办法是使用 CSS 的 height 和 width 属性。  

```html
<textarea id="area" name="area" rows="5" cols="10">
    轻芯空间QCS轻芯空间QCS轻芯空间QCS轻芯空间QCS轻芯空间QCS
</textarea>
```

## `<form>`、`<input>`
表示文档中的一个区域，此区域包含交互控件，用于向Web服务器提交信息。  
表单能够包含 input 元素，比如文本字段、复选框、单选框、提交按钮等等。  
表单还可以包含 menus、textarea、fieldset、legend 和 label 元素。  
表单用于向服务器传输数据。  
action-提交数据的地址。  
method 提交数据的方式。   
get-默认方式，数据在地址栏显示，不安全。  
post-数据不在地址栏显示，相对安全。  
input的type值：text-文本、password-密码、submit-提交按钮、button-普通按钮、reset-重置按钮、radio-单选框、checkbox-多选框、file-文件、value-产生的数据值、disabled-不可使用。

```html
<form action="" method="get">
    <p>姓名: <input type="text" name="fname" /></p>
    <p>电话: <input type="tel" name="tel" /></p>
    <input type="submit" value="提交" />
</form>
```

## `<select>`
提供选项菜单的控件。  
option-定义下拉可用选项。  
optgroup-定义选项的分组。  
size-下拉选项显示的行数。  
multiple-下拉选项支持多选。

```html
<select>
    <option value ="航天科技">航天科技</option>
    <option value ="航天科工">航天科工</option>
    <option value="蓝箭航天">蓝箭航天</option>
    <option value="九州云箭">九州云箭</option>
    <option value ="翎客航天">翎客航天</option>
    <option value ="九天微星">九天微星</option>
    <option value="航天行云">航天行云</option>
    <option value="轻芯空间">轻芯空间</option>
</select>
<!-- 只显示五行选项 -->
<select multiple="multiple" size="5">
    <option value ="航天科技">航天科技</option>
    <option value ="航天科工">航天科工</option>
    <option value="蓝箭航天">蓝箭航天</option>
    <option value="九州云箭">九州云箭</option>
    <option value ="翎客航天">翎客航天</option>
    <option value ="九天微星">九天微星</option>
    <option value="航天行云">航天行云</option>
    <option value="轻芯空间">轻芯空间</option>
</select>
<!-- 分组 -->
<select>
    <optgroup label="央企">
        <option value ="航天科技">航天科技</option>
        <option value ="航天科工">航天科工</option>
    </optgroup>
    <optgroup label="民企">
        <option value="蓝箭航天">蓝箭航天</option>
        <option value="九州云箭">九州云箭</option>
        <option value ="翎客航天">翎客航天</option>
        <option value ="九天微星">九天微星</option>
        <option value="航天行云">航天行云</option>
        <option value="轻芯空间">轻芯空间</option>
    </optgroup>
</select>
```

## `<labe>`

`<label>` 标签为 input 元素定义标注（标记）。  
label 元素不会向用户呈现任何特殊效果。不过，它为鼠标用户改进了可用性。如果您在 label 元素内点击文本，就会触发此控件。就是说，当用户选择该标签时，浏览器就会自动将焦点转到和标签相关的表单控件上。  
`<label>` 标签的 for 属性应当与相关元素的 id 属性相同。

```html
<form>
  <label for="male">Male</label>
  <input type="radio" name="sex" id="male" />
  <br />
  <label for="female">Female</label>
  <input type="radio" name="sex" id="female" />
</form>
```

## `<button>`

`<button>` 标签定义一个按钮。  

在 button 元素内部，您可以放置内容，比如文本或图像。这是该元素与使用 input 元素创建的按钮之间的不同之处。  

`<button>` 控件 与 `<input type="button">` 相比，提供了更为强大的功能和更丰富的内容。`<button>` 与 `</button>` 标签之间的所有内容都是按钮的内容，其中包括任何可接受的正文内容，比如文本或多媒体内容。例如，我们可以在按钮中包括一个图像和相关的文本，用它们在按钮中创建一个吸引人的标记图像。  

唯一禁止使用的元素是图像映射，因为它对鼠标和键盘敏感的动作会干扰表单按钮的行为。  

请始终为按钮规定 type 属性。Internet Explorer 的默认类型是 "button"，而其他浏览器中（包括 W3C 规范）的默认值是 "submit"。

```html
<button type="button">按钮</button>
```

## 空标签

`<br>` 换行。  
`<hr>` 水平分隔符。

## 字符实体-特殊字符

<table>
    <tr>
        <td width="25%">显示结果</td>
        <td width="25%">描述</td>
        <td width="25%">实体名称</td>
        <td width="25%">实体编号</td>
    </tr>
    <tr>
        <td></td>
        <td>空格</td>
        <td>&amp;nbsp;</td>
        <td>&amp;#160;</td>
    </tr>
    <tr>
        <td>&lt;</td>
        <td>小于号</td>
        <td>&amp;lt;</td>
        <td>&amp;#60;</td>
    </tr>
    <tr>
        <td>&gt;</td>
        <td>大于号</td>
        <td>&amp;gt;</td>
        <td>&amp;#62;</td>
    </tr>
    <tr>
        <td>&amp;</td>
        <td>和号</td>
        <td>&amp;amp;</td>
        <td>&amp;#38;</td>
    </tr>
    <tr>
        <td>"</td>
        <td>引号</td>
        <td>&amp;quot;</td>
        <td>&amp;#34;</td>
    </tr>
    <tr>
        <td>'</td>
        <td>撇号</td>
        <td>&amp;apos; (IE不支持)</td>
        <td>&amp;#39;</td>
    </tr>
    <tr>
        <td>￠</td>
        <td>分（cent）</td>
        <td>&amp;cent;</td>
        <td>&amp;#162;</td>
    </tr>
    <tr>
        <td>£</td>
        <td>镑（pound）</td>
        <td>&amp;pound;</td>
        <td>&amp;#163;</td>
    </tr>
    <tr>
        <td>¥</td>
        <td>元（yen）</td>
        <td>&amp;yen;</td>
        <td>&amp;#165;</td>
    </tr>
    <tr>
        <td>€</td>
        <td>欧元（euro）</td>
        <td>&amp;euro;</td>
        <td>&amp;#8364;</td>
    </tr>
    <tr>
        <td>§</td>
        <td>小节</td>
        <td>&amp;sect;</td>
        <td>&amp;#167;</td>
    </tr>
    <tr>
        <td>©</td>
        <td>版权（copyright）</td>
        <td>&amp;copy;</td>
        <td>&amp;#169;</td>
    </tr>
    <tr>
        <td>®</td>
        <td>注册商标</td>
        <td>&amp;reg;</td>
        <td>&amp;#174;</td>
    </tr>
    <tr>
        <td>™</td>
        <td>商标</td>
        <td>&amp;trade;</td>
        <td>&amp;#8482;</td>
    </tr>
    <tr>
        <td>×</td>
        <td>乘号</td>
        <td>&amp;times;</td>
        <td>&amp;#215;</td>
    </tr>
    <tr>
        <td>÷</td>
        <td>除号</td>
        <td>&amp;divide;</td>
        <td>&amp;#247;</td>
    </tr>
</table>

## HTML注释

1. 解释说明代码
2. 把没用的代码可以注释起来，浏览器不会解析了

快捷键 <kbd>ctrl</kbd>+<kbd>/</kbd>

## 语义化

用合适的标签包裹对应的内容  
语义化有什么好处 <a-tag color="#108ee9">面试</a-tag>
1. 对于程序员来说可读性强
2. 增强seo

## HTML5

HTML5是在HTML4的基础上增加了一些新的标签和功能
- 为什么推出HTML5？ <a-tag color="#108ee9">面试</a-tag>
  - 为了移动端。
  - 为了更加语义化。

1. 结构化标签 <a-tag color="#108ee9">面试</a-tag>
   
   - `<header>` 文档或节规定页眉
   - `<nav>` 导航链接集合
   - `<section>` 定义文档中的节
   - `<artcle>` 独立的自包含内容
   - `<footer>` 文档或节规定页脚
   - `<aside>` 主内容之外的某些内容（比如侧栏）
   - ` <figure> `
   - `<figcaption>`

>增强语义化

2. 表单标签属性

- `<input>`
   - date 日期
   - time 时间
   - number 数字
   - email 邮箱
   - url 链接
   - search 搜索

>在移动端去用 ，唤醒的键盘不一样

3. 功能化标签

   - video 视频
   - audio 音频
     - controls 显示控件
   - canvas 画布

>功能化的标签需要配合JS来使用

## 标签的分类

<table>
    <tr>
        <td width="25%"></td>
        <td width="25%">块级标签</td>
        <td width="25%">行内标签</td>
        <td width="25%">行内块标签</td>
    </tr>
    <tr>
        <td>默认宽度</td>
        <td>占满一行</td>
        <td>内容的宽度</td>
        <td>内容的宽度</td>
    </tr>
    <tr>
        <td>宽高</td>
        <td>可以设置</td>
        <td>不能设置</td>
        <td>可以设置</td>
    </tr>
    <tr>
        <td></td>
        <td>独占一行</td>
        <td>可以和其他标签在一行</td>
        <td>可以和其他标签在一行</td>
    </tr>
    <tr>
        <td>Margin</td>
        <td>上下左右</td>
        <td>左右</td>
        <td>上下左右</td>
    </tr>
    <tr>
        <td>用途</td>
        <td>搭建结构</td>
        <td>放在文本中</td>
        <td>放在文本中</td>
    </tr>
    <tr>
        <td>标签</td>
        <td>&lt;div&gt;、&lt;p&gt;、&lt;h1&gt;...&lt;h6&gt;、&lt;ol&gt;、&lt;ul&gt;、&lt;dl&gt;、&lt;address&gt;、&lt;blockquote&gt;、&lt;form&gt;</td>
        <td>&lt;a&gt;、&lt;span&gt;、&lt;i&gt;、&lt;em&gt;、&lt;strong&gt;、&lt;label&gt;、&lt;q&gt;、&lt;var&gt;、&lt;cite&gt;、&lt;code&gt;</td>
        <td>&lt;img&gt;、&lt;input&gt;</td>
    </tr>
</table>

## 标签转换

<table>
    <tr>
        <td width="50%">转换</td>
        <td width="50%">css</td>
    </tr>
    <tr>
        <td>转块级标签</td>
        <td>display: block;</td>
    </tr>
    <tr>
        <td>转行内标签</td>
        <td>display: inline;</td>
    </tr>
    <tr>
        <td>转行内块标签</td>
        <td>display: inline-block</td>
    </tr>
</table>

::: warning 注意
- 行内块标签转换为块级标签  
   - display
   - float
   - position（absolute和fixed）
:::
  