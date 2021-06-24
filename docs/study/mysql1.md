
# MySQL常用命令

## 查看MySQL版本

- 长选项，由单词之前加两个减号组成

```
mysql --version
```

- 短选项，由单个字母之前加一个减号组成 <a-tag color="red">V要大写</a-tag>


```
mysql -V
```

## 创建数据库

- 创建数据库

```
CREATE DATABASE 数据库名称;
```

- 选择数据库

```
USE 数据库名称;
```

::: warning 注意
要在数据库中建立表，创建表的时候必须要先选择数据库。  
WIN版本的MySQL 默认人情况下是不区分大小写。  
但是在Linux下默认是区分大小写。
:::

## 查询当前使用的数据库

- 查询当前使用的数据库

```
SELECT DATABASE();
```

- 查询数据库版本

```
SELECT VERSION();
```

## 终止一条语句

如果想要终止一条正在编写的语句，可键入 `\c`。

## 退出MySQL

可使用 `\q`、`QUIT` 或 `EXIT`  
如：

```
mysql> \q (ctrl+c)
```