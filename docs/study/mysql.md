# 数据库

## 什么是数据库

数据库，通常是一个或一组文件，保存了一些符合特定规格的数据,数据库对应的英语单词是DataBase,简称:DB,数据库软件称为数据库管理系统（DBMS），全称为DataBase Management System，如：Oracle、SQL Server、MySql、Sybase、informix、DB2、interbase、PostgreSql。

数据的仓库。

## SQL的分类

- 数据查询语言(DQL-Data Query Language)

   - 代表关键字:select 作用：用来获取数据库表中的数据

- 数据操纵语言(DML-Data Manipulation Language)

   - 代表关键字:insert,delete,update 作用：对数据表中的数据进行更新操作包括：添加数据 删除数据 修改数据

- 数据定义语言(DDL-Data Definition Language)

   - 代表关键字:create ,drop,alter,

- 事务控制语言(TCL-Transactional Control Language)

   - 代表关键字:commit ,rollback;

- 数据控制语言(DCL-Data Control Language)

   - 代表关键字:grant,revoke.


## 为什么要用数据库

专门管理数据的软件 <a-tag color="green">
        增删改查
      </a-tag>

1. 网页写死数据/假数据 <a-tag color="orange">
        页面常年不更新
      </a-tag>
2. 数据存在数组、JSON里 <a-tag color="orange">
        刷新页面就没有了
      </a-tag>
3. 数据存放在浏览器里 <a-tag color="orange">
        换浏览器数据又没了
      </a-tag>
4. 存在硬盘里 <a-tag color="orange">
        操作管理比较麻烦
      </a-tag>

## 数据库的发展类型

- 层次模型
- 网状模型

### 现在常用数据库

- 关系型数据库

   - 类似Excel表，所有的数据以表的形式存储
      - 如 <a-tag color="blue">MySQL</a-tag> <a-tag color="blue">Oracle</a-tag>
   - 表与表之间存在着关系

      - <a-tag color="green">优点：数据库稳定、数据的有效高</a-tag>
      - <a-tag color="red">缺点：为了存放关系、浪费了数据库空间</a-tag>

- 非关系型数据库（对象型数据库）


