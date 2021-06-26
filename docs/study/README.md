## 自定义容器

::: tip 提示
这是一个提示
:::

::: warning 警告
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个详情块，在 IE / Edge 中不生效
:::

## 代码演示


::: demo [vanilla]
```html
<html>
  <form action="" method="get">
    <p>姓名: <input type="text" name="fname" /></p>
    <p>电话: <input type="tel" name="tel" /></p>
    <input type="submit" value="提交" />
</form>
</html>
```
:::

## VUE组件

### alert

``` html
<a-alert message="Success Tips" type="success" show-icon />
    <a-alert message="Informational Notes" type="info" show-icon />
    <a-alert message="Warning" type="warning" show-icon />
    <a-alert message="Error" type="error" show-icon />
    <a-alert
      message="Success Tips"
      description="Detailed description and advices about successful copywriting."
      type="success"
      show-icon
    />
    <a-alert
      message="Informational Notes"
      description="Additional description and informations about copywriting."
      type="info"
      show-icon
    />
    <a-alert
      message="Warning"
      description="This is a warning notice about copywriting."
      type="warning"
      show-icon
    />
    <a-alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      show-icon
    />
```

### 标签

``` html
<a-tag color="pink">
        pink
      </a-tag>
      <a-tag color="red">
        red
      </a-tag>
      <a-tag color="orange">
        orange
      </a-tag>
      <a-tag color="green">
        green
      </a-tag>
      <a-tag color="cyan">
        cyan
      </a-tag>
      <a-tag color="blue">
        blue
      </a-tag>
      <a-tag color="purple">
        purple
      </a-tag>
```

::: details 查看答案
:::

::: demo [vanilla]
```html
<html>
  <button title="aaa" onclick="alert('你干嘛点我！')">点击</button>
</html>
```
:::

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
