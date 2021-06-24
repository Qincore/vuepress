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