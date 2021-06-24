# 层叠样式表-Cascading Style Sheets

## CSS如何去用

1. 以属性的方式

   - 通常不会这样写
   - 和html混合在一起，不利于维护
   - 不能重用

2. 在 `<head>` 里用 `<style>` 包裹

   - 测试的时候写方便
   - 项目一般不用，会导致html文件变大，加载变慢

3. CSS独立文件，在html文件中通过 `<link>` 引入

   - 项目中经常使用
   - 好管理，易维护

## CSS语法

```css
选择器{
    样式名:样式值;
    样式名:样式值;
}

#div{
    width: 100px;
    height: 200px;
}
```

## 选择器

### 基础选择器

1. id选择器

   - #id名{ }
   - id是唯一的
   - 一次只能选中一个标签（元素）

2. 标签（元素）选择器

   - 标签名{ }
   - 选中页面所有的这个标签

3. 类（class）选择器

   - 类名{ }
   - 选中有这个类的所有标签

4. 属性选择器

   - [属性=属性值]{ }
   - 选中有这个属性的所有标签
   - 多个属性多个中括号

5. 通配符选择器

   - 选中所有标签

### 复合选择器

1. 子级选择器

   - 选择器 选择器{ }
   - 只要是后代都可以

2. 直接子级选择器

   - 选择器>选择器{ }
   - 第一层子级（亲儿子）

3. 并集选择器

   - 选择器,选择器{ }
   - 两个选择器都被选中

4. 交集选择器

   - div.show{ }
   - 选中类名为show的div标签

### 选择器优先级 

1. 选择器相同的情况下 <a-tag color="#108ee9">面试</a-tag>
   
   - 执行下面的代码。

2. 选择器不同的情况下 <a-tag color="#108ee9">面试</a-tag>

   - 通配符-**0** `<` 标签、伪元素-**1** `<` 类、属性、伪类-**10** `<` id-**100** `<` 行间-**1000** `<` !important-**无限**

::: warning 注意
如果是两种相同优先级 为同一个元素 同一个属性设置 的话，是哪个写在代码靠后 最终就按那个的样式。  
交集选择器的优先级 所有优先级 加起来 运算 然后比较。  
并集的话 就是各算各的。 
:::  

3. 命名

   - 命名要有意义
   - 首字不能为数字或者下划线
   - 不能使用特殊符号
   - 多个单词用驼峰命名或者用`-`分隔
   - 最好使用英文单词

## 字体样式

### 字体大小

`font-size: 16px;`

- 默认16px
- 最小12px

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>
            xx-small<br>
            x-small<br>
            small<br>
            medium<br>
            large<br>
            x-large<br>
            xx-large<br>
            </td>
            <td>
            <p>把字体的尺寸设置为不同的尺寸，从 xx-small 到 xx-large。</p>
            <p>默认值：medium。</p>
            </td>
        </tr>
        <tr>
            <td>smaller</td>
            <td>把 font-size 设置为比父元素更小的尺寸。</td>
        </tr>
        <tr>
            <td>larger</td>
            <td>把 font-size 设置为比父元素更大的尺寸。</td>
        </tr>
        <tr>
            <td><i>length</i></td>
            <td>把 font-size 设置为一个固定的值。</td>
        </tr>
        <tr>
            <td><i>%</i></td>
            <td>把 font-size 设置为基于父元素的一个百分比值。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承字体尺寸。</td>
        </tr>
    </tbody>
</table>


### 字体类型

`font-family: Microsoft YaHei;`

- 默认终端系统当前字体
- 多个字体用 `,` 分隔
- 字体名由多个单词组成用 `''` 包裹

### 字体粗细

`font-weight: bold;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>normal</td>
            <td>默认值。定义标准的字符。</td>
        </tr>
        <tr>
            <td>bold</td>
            <td>定义粗体字符。</td>
        </tr>
        <tr>
            <td>bolder</td>
            <td>定义更粗的字符。</td>
        </tr>
        <tr>
            <td>lighter</td>
            <td>定义更细的字符。</td>
        </tr>
        <tr>
            <td>
                100<br>
                200<br>
                300<br>
                400<br>
                500<br>
                600<br>
                700<br>
                800<br>
                900<br>
            </td>
            <td>定义由粗到细的字符。400 等同于 normal，而 700 等同于 bold。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承字体的粗细。</td>
        </tr>
    </tbody>
</table>

### 字体风格

`font-style: normal;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>normal</td>
            <td>默认值。浏览器显示一个标准的字体样式。</td>
        </tr>
        <tr>
            <td>italic</td>
            <td>浏览器会显示一个斜体的字体样式。</td>
        </tr>
        <tr>
            <td>oblique</td>
            <td>浏览器会显示一个倾斜的字体样式。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承字体样式。</td>
        </tr>
    </tbody>
</table>

### 小型大写字母文本

`font-variant: small-caps;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>normal</td>
            <td>默认值。浏览器会显示一个标准的字体。</td>
        </tr>
        <tr>
            <td>small-caps</td>
            <td>浏览器会显示小型大写字母的字体。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 font-variant 属性的值。</td>
        </tr>
    </tbody>
</table>

### 字体颜色

`color: red;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td><i>color_name</i></td>
            <td>规定颜色值为颜色名称的颜色（比如 red）。</td>
        </tr>
        <tr>
            <td><i>hex_number</i></td>
            <td>规定颜色值为十六进制值的颜色（比如 #ff0000）。</td>
        </tr>
        <tr>
            <td><i>rgb_number</i></td>
            <td>规定颜色值为 rgb 代码的颜色（比如 rgb(255,0,0)）。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承颜色。</td>
        </tr>
    </tbody>
</table>

### 文本样式

#### 1. 文本对齐方式

`text-align: center;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>left</td>
            <td>把文本排列到左边。默认值：由浏览器决定。</td>
        </tr>
        <tr>
            <td>right</td>
            <td>把文本排列到右边。</td>
        </tr>
        <tr>
            <td>center</td>
            <td>把文本排列到中间。</td>
        </tr>
        <tr>
            <td>justify</td>
            <td>实现两端对齐文本效果。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 text-align 属性的值。</td>
        </tr>
    </tbody>
</table>

#### 2. 文本行高

`line-height: 50px;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>normal</td>
            <td>默认。设置合理的行间距。</td>
        </tr>
        <tr>
            <td><i>number</i></td>
            <td>设置数字，此数字会与当前的字体尺寸相乘来设置行间距。</td>
        </tr>
        <tr>
            <td><i>length</i></td>
            <td>设置固定的行间距。</td>
        </tr>
        <tr>
            <td><i>%</i></td>
            <td>基于当前字体尺寸的百分比行间距。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 line-height 属性的值。</td>
        </tr>
    </tbody>
</table>

#### 3. 文本缩进

`text-indent: 50px;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td><i>length</i></td>
            <td>定义固定的缩进。默认值：0。</td>
        </tr>
        <tr>
            <td><i>%</i></td>
            <td>定义基于父元素宽度的百分比的缩进。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 text-indent 属性的值。</td>
        </tr>
    </tbody>
</table>

#### 4. 文本修饰

`text-decoration: none;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>none</td>
            <td>默认。定义标准的文本。</td>
        </tr>
        <tr>
            <td>underline</td>
            <td>定义文本下的一条线。</td>
        </tr>
        <tr>
            <td>overline</td>
            <td>定义文本上的一条线。</td>
        </tr>
        <tr>
            <td>line-through</td>
            <td>定义穿过文本下的一条线。</td>
        </tr>
        <tr>
            <td>blink</td>
            <td>定义闪烁的文本。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 text-decoration 属性的值。</td>
        </tr>
    </tbody>
</table>

### 字体CSS简写

```css
/* 完整写法 */
.font{
    font-style:italic;
    font-variant:small-caps;
    font-weight:bold;
    font-size:12px;
    line-height:1.5em;
    font-family:arial,verdana;
}

/* 简写 */
.font{font:italic small-caps bold 12px/1.5em arial,verdana;}
```

::: warning 注意
简写时，font-size和line-height只能通过斜杠/组成一个值，不能分开写。  
顺序不能改变.这种简写方法只有在同时指定font-size和font-family属性时才起作用。而且，如果你没有设定font-weight, font-style, 以及 font-varient ，他们会使用缺省值。 
:::  

## CSS中的单位

### 绝对长度

绝对长度单位是固定的，用任何一个绝对长度表示的长度都将恰好显示为这个尺寸。

不建议在屏幕上使用绝对长度单位，因为屏幕尺寸变化很大。但是，如果已知输出介质，则可以使用它们，例如用于打印布局（print layout）。

<table>
    <tbody>
        <tr>
            <th style="width: 20%;">单位</th>
            <th>描述</th>
        <tr>
            <td>cm</td>
            <td>厘米</td>
        </tr>
        <tr>
            <td>mm</td>
            <td>毫米</td>
        </tr>
        <tr>
            <td>in</td>
            <td>英寸 (1in = 96px = 2.54cm)</td>
        </tr>
        <tr>
            <td>px *</td>
            <td>像素 (1px = 1/96th of 1in)</td>
        </tr>
        <tr>
            <td>pt</td>
            <td>点 (1pt = 1/72 of 1in)</td>
        </tr>
        <tr>
            <td>pc</td>
            <td>派卡 (1pc = 12 pt)</td>
        </tr>
    </tbody>
</table>

<a-alert message="像素（px）是相对于观看设备的。对于低 dpi 的设备，1px 是显示器的一个设备像素（点）。对于打印机和高分辨率屏幕，1px 表示多个设备像素。" type="info" show-icon />

### 相对长度

相对长度单位规定相对于另一个长度属性的长度。相对长度单位在不同渲染介质之间缩放表现得更好。

<table>
    <tbody>
        <tr>
            <th style="width: 20%;">单位</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>em</td>
            <td>相对于元素的字体大小（font-size）（2em 表示当前字体大小的 2 倍）</td>
        </tr>
        <tr>
            <td>ex</td>
            <td>相对于当前字体的 x-height(极少使用)</td>
        </tr>
        <tr>
            <td>ch</td>
            <td>相对于 "0"（零）的宽度</td>
        </tr>
        <tr>
            <td>rem</td>
            <td>相对于根元素的字体大小（font-size）</td>
        </tr>
        <tr>
            <td>vw</td>
            <td>相对于视口*宽度的 1%</td>
        </tr>
        <tr>
            <td>vh</td>
            <td>相对于视口*高度的 1%</td>
        </tr>
        <tr>
            <td>vmin</td>
            <td>相对于视口*较小尺寸的 1％</td>
        </tr>
        <tr>
            <td>vmax</td>
            <td>相对于视口*较大尺寸的 1％</td>
        </tr>
        <tr>
            <td>%</td>
            <td>相对于父元素</td>
        </tr>
    </tbody>
</table>

<a-alert message="em 和 rem 单元可用于创建完美的可扩展布局！" type="info" show-icon />
<br>
<a-alert message="视口（Viewport）= 浏览器窗口的尺寸。如果视口宽 50 里面，则 1vw = 0.5cm。" type="info" show-icon />

## 宽

设置元素的宽度

`width: 50px;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>auto</td>
            <td>默认值。浏览器可计算出实际的宽度。</td>
        </tr>
        <tr>
            <td><i>length</i></td>
            <td>使用 px、cm 等单位定义宽度。</td>
        </tr>
        <tr>
            <td><i>%</i></td>
            <td>定义基于包含块（父元素）宽度的百分比宽度。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 width 属性的值。</td>
        </tr>
    </tbody>
</table>

## 高

设置元素的高度

`height: 50px;`

<table>
    <tbody>
        <tr>
            <th>值</th>
            <th>描述</th>
        </tr>
        <tr>
            <td>auto</td>
            <td>默认。浏览器会计算出实际的高度。</td>
        </tr>
        <tr>
            <td><i>length</i></td>
            <td>使用 px、cm 等单位定义高度。</td>
        </tr>
        <tr>
            <td><i>%</i></td>
            <td>基于包含它的块级对象的百分比高度。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 height 属性的值。</td>
        </tr>
    </tbody>
</table>

## 边框

### 设置所有的边框

`border: 1px solid red;`（设置所有的边框宽度为1像素，样式为实线，边框颜色为红色）

可以按顺序设置如下属性:

- `border-width` 边框宽度
- `border-style` 边框样式
   - `solid` 实线
   - `dashed` 虚线
   - `dotted` 点
   - `double` 双线
- `border-color` 边框颜色

### 单独设置边框

- `border-left` 设置左边框
- `border-top` 设置上边框
- `border-right` 设置右边框
- `border-bottom` 设置下边框

## 背景

background 简写属性在一个声明中设置所有的背景属性。

### 背景颜色

`background: 色值;`

### 背景图片

`background: url(图片地址) 位置/尺寸 重复方式 定位区域 绘制区域 是否固定;`


### 单独设置：

<table>
    <tbody>
        <tr>
            <th style="width:30%;">值</th>
            <th style="width:65%;">描述</th>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-color.asp">background-color</a></i></td>
            <td>规定要使用的背景颜色。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-position.asp">background-position</a></i></td>
            <td>规定背景图像的位置。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-size.asp" title="CSS3 background-size 属性">background-size</a></i></td>
            <td>规定背景图片的尺寸。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-repeat.asp">background-repeat</a></i></td>
            <td>规定如何重复背景图像。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-origin.asp" title="CSS3 background-origin 属性">background-origin</a></i></td>
            <td>规定背景图片的定位区域。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-clip.asp" title="CSS3 background-clip 属性">background-clip</a></i></td>
            <td>规定背景的绘制区域。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-attachment.asp">background-attachment</a></i></td>
            <td>规定背景图像是否固定或者随着页面的其余部分滚动。</td>
        </tr>
        <tr>
            <td><i><a target="_blank" href="https://www.w3school.com.cn/cssref/pr_background-image.asp">background-image</a></i></td>
            <td>规定要使用的背景图像。</td>
        </tr>
        <tr>
            <td>inherit</td>
            <td>规定应该从父元素继承 background 属性的设置。</td>
        </tr>
    </tbody>
</table>

### 精灵图

网站中会有很多的小图标，一个网站在刚开始加载的时候回加载很多小图标，增加了对服务器的请求次数。

把网站的小图标放在一张图片里，通过背景定位显示指定的图标。

### 优先级

样式名相同下面的代码覆盖上面的代码 <a-tag color="#108ee9">面试</a-tag>

`color` 比 `images` 优先级高

## 盒子模型

标签在页面中位置的构成

内容（Content）+内边距（Padding）+边框（Border）+外边距（Margin）

![盒子模型](https://www.runoob.com/images/box-model.gif)

### Content(内容)

- 盒子的内容，显示文本和图像。

### Padding(内边距)

- 调整内容的位置
- 清除内容周围的区域，内边距是透明的。

### Border(边框)

- 围绕在内边距和内容外的边框。

### Margin(外边距)

- 调整物体的位置
- 清除边框外的区域，外边距是透明的。

### 盒子模型的构成 <a-tag color="#108ee9">面试</a-tag>

内容（Content）+内边距（Padding）+边框（Border）+外边距（Margin）

### 盒子模型的大小 <a-tag color="#108ee9">面试</a-tag>

内容（Content）+内边距（Padding）+边框（Border）

### 样式初始化

```css
 *{
    margin: 0;
    padding: 0;
    }
h1,h2,h3,h4,h5,h6,b,strong{
    font-width: normal;
    font-size: 18px;
    }
em,i{
    font-style: normal;
    }
a{
    text-decoration: none;
    color: #000
    }
li{
    list-style: none;
    }
.clearfix{
    content: '';
    display: block;
    clear: both;
    }
input{
    outline: none;
    }
textarea{
    outline: none;
    resize: none;
    }
.con{
    weight: 1200px;
    margin:0 auto;
    }
```

## 浮动

`float: left;`

float 属性定义元素在哪个方向浮动。以往这个属性总应用于图像，使文本围绕在图像周围，不过在 CSS 中，任何元素都可以浮动。浮动元素会生成一个块级框，而不论它本身是何种元素。

如果浮动非替换元素，则要指定一个明确的宽度；否则，它们会尽可能地窄。

默认情况下，标签的排列遵循，标准文档流。

标签从上到下，从左到右。块元素占满一行，多个行内可以共处一行。

<table>
    <tr>
        <td>值</td>
        <td>描述</td>
    </tr>
    <tr>
        <td>left</td>
        <td>元素向左浮动。</td>
    </tr>
    <tr>
        <td>right</td>
        <td>元素向右浮动。</td>
    </tr>
    <tr>
        <td>none</td>
        <td>默认值。元素不浮动，并会显示在其在文本中出现的位置。</td>
    </tr>
    <tr>
        <td>inherit</td>
        <td>规定应该从父元素继承 float 属性的值。</td>
    </tr>
</table>

### 目的

- 所有的元素变成一行，想让哪些元素变成一行，那些元素必须必须必须全部加浮动。
- 文本环绕给图片加浮动。

### 浮动的特点

- 一旦给一个元素加了浮动，这个元素就会对后面的元素产生影响，后面就半脱离文档流。
- 如果父级宽度不够，会折行。
- 浮动会改变元素的类型，变成类似行内块。

### 缺点

- 子级浮动了，父级没有设置高度，父级会塌陷。
   - 解决方法：
      - 1.给父级设置高度
      - 2.清除浮动

- 布局的时候，让元素在一行，需要给他们全部加浮动，对后面元素产生影响。
   - 解决方法：
      - 清除浮动

注意：加了浮动就要清浮动

### 清除浮动

1. 后面不需要浮动的块元素，加 `clear: both;`
2. 让父级触发BFC（Block Formatting Context-块级格式化上下文）效果。

   如何触发BFC？  
   1. `float: left;`
   2. `display: inline-block;`
   3. `overflow: hidden;`
   4. `position: absolute;`

3. 给父级伪元素清除浮动（）

```css
.clearfix:after{
    content: '';
    display: block;
    clear: both;
}
```

## 伪类

- `:link` 未访问链接的状态
- `:hover` 鼠标移上去的状态
- `:active` 链接被激活的时候（点下去瞬间）
- `:visited` 访问过的链接