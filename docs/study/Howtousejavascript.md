# 如何使用JavaScript

## HTML标签属性

通过标签属性添加js代码  

给 `botton` 按钮添加 `onclick` 事件，并提示“你干嘛点我”。

::: demo [vanilla]
```html
<html>
  <button title="aaa" onclick="alert('你干嘛点我！')">点击</button>
</html>
```
:::

## `<script>` 标签

在HTML文档里用 `<script>` 标签包裹js代码  

如：

``` html {10-12}
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
</head> 
<body> 
<script>
这里写js代码
</script>
</body> 
</html>
```

## 外部引入

在HTML文档的 `head` 标签里使用 `script` 标签的 `src` 属性引入外部js文件， `src` 属性的值为外部js文件的地址。

``` html {8}
<!DOCTYPE html> 
<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <title>Document</title> 
    <script src="js文件地址"></script>
</head> 
<body>

</body> 
</html>
```

## `<a>` 标签

当我们不希望在点击 `a` 标签的时候刷新页面时，可以在 `a` 标签 `href` 属性赋上 `javascript:;` 值。  

如：
``` html
<a href="javascript:;"></a>
```