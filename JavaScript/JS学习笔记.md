# 一、什么是JavaScript

## 1.历史

## 2.JS的实现

完整的 JavaScript 实现包含以下几个部分

* 核心ECMAScript
* 文档对象模型DOM
* 浏览器对象模型BOM

### 2.1ECMAScript

### 2.2DOM

<img src="/Users/pigcharid/Library/Application Support/typora-user-images/image-20230819234154243.png" alt="image-20230819234154243" style="zoom:20%;" />

​		DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。

​		DOM 并非只能通过 JavaScript 访问，而且确实被其他很多语言实现了。不过对于浏览器来说，DOM 就是使用 ECMAScript 实现的，如今已经成为 JavaScript 语言的一大组成部分。

### 2.3BOM

BOM 主要针对浏览器窗口和子窗口（frame），不过人们通常会把任何特定于浏览器的扩展都归在 BOM 的范畴内

* 浏览器窗口
* 操作浏览器窗口的能力
* navigator 对象，提供关于浏览器的详尽信息
* location 对象，提供浏览器加载页面的详尽信息
* screen 对象，提供关于用户屏幕分辨率的详尽信息
* performance 对象，提供浏览器内存占用、导航行为和时间统计的详尽信息
* 对 cookie 的支持

## 3.ES5和ES6

**ES5**指的是ECMScript的第五个版本，发布于2009年，是目前最广泛使用的JavaScript版本。

**ES6**是ECMScript的第六个版本，也成为ES2015，发布于2015年，引入了许多新的语言特性和



# 二、HTML中的JavaScript

## 1.script元素

script元素有下列8个属性

* async：可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其他脚本加载。只对外部脚本文件有效。
* charset：可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。

* crossorigin：可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin= "anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。

* defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。在 IE7 及更早的版本中，对行内脚本也可以指定这个属性。

* integrity：可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性（SRI，Subresource Integrity）。如果接收到的资源的签名与这个属性指定的签名不匹配，则页面会报错，脚本不会执行。这个属性可以用于确保内容分发网络（CDN，Content Delivery Network）不会提供恶意内容。

* language：废弃。最初用于表示代码块中的脚本语言（如"JavaScript"、"JavaScript 1.2"或"VBScript"）。大多数浏览器都会忽略这个属性，不应该再使用它。

* src：可选。表示包含要执行的代码的外部文件。

* type：可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。按照惯例，这个值始终是"text/javascript"，尽管"text/javascript"和"text/ecmascript"都已经废弃了。JavaScript 文件的 MIME 类型通常是"application/x-javascript"，不过给

  type 属性这个值有可能导致脚本被忽略。在非 IE 的浏览器中有效的其他值有"application/javascript"和"application/ecmascript"。如果这个值是 module，则代码会被当成 ES6 模块，而且只有这时候代码中才能出现 import 和 export 关键字。

## 2.使用script标签的两种方式

### 2.1嵌入 JavaScript 代码

* 包含在<script>内的代码会被从上到下解释

* 在<script>元素中的代码被计算完成之前，页面的其余内容不会被加载，也不会被显示

* 在使用行内 JavaScript 代码时，要注意代码中不能出现字符串</script>，想避免这个问题，只需要转义字符“\”即可

```
console.log("<\/script>")
```

### 2.2外部 JavaScript 文件

* 必须使用 src 属性

这个属性的值可以是一个 URL，也可以是指向包含JavaScript 代码的文件

与解释行内 JavaScript 一样，在解释外部 JavaScript 文件时，页面也会阻塞。（阻塞时间也包含下载文件的时间。）

```
<script src="example.js"></script>
<script src="http://www.somewhere.com/afile.js"></script>
```

* 按照惯例，外部 JavaScript 文件的扩展名是.js。这不是必需的，因为浏览器不会检查所包含 JavaScript 文件的扩展名。这就为使用服务器端脚本语言动态生成 JavaScript 代码，或者在浏览器中将 JavaScript扩展语言（如TypeScript，或React的 JSX）转译为JavaScript提供了可能性。不过要注意，服务器经常会根据文件扩展来确定响应的正确 MIME 类型。如果不打算使用.js 扩展名，一定要确保服务器能返回正确的 MIME 类型。
* 使用了 src 属性的<script>元素不应该再在<script>和</script>标签中再包含其他JavaScript 代码。如果两者都提供的话，则浏览器只会下载并执行脚本文件，从而忽略行内代码。
* 引用了放在别人服务器上的 JavaScript 文件时要格外小心，因为恶意的程序员随时可能替换这个文件。在包含外部域的 JavaScript 文件时，要确保该域是自己所有的，或者该域是一个可信的来源。<script>标签的 integrity 属性是防范这种问题的一个武器，但这个属性也不是所有浏览器都支持。
* 不管包含的是什么代码，浏览器都会按照<script>在页面中出现的顺序依次解释它们，前提是它们没有使用 defer 和 async 属性。第二个<script>元素的代码必须在第一个<script>元素的代码解释完毕才能开始解释，第三个则必须等第二个解释完，以此类推。

## 3.标签位置

### 3.1放在Head

* 把所有 JavaScript文件都放在<head>里，也就意味着必须把所有 JavaScript 代码都下载、解析和解释完成后，才能开始渲染页面（页面在浏览器解析到<body>的起始标签时开始渲染）。对于需要很多 JavaScript 的页面，这会导致页面渲染的明显延迟，在此期间浏览器窗口完全空白。
* 为解决这个问题，现代 Web 应用程序通常将所有 JavaScript 引用放在<body>元素中的页面内容后面

### 3.2推迟执行脚本

* defer 属性。这个属性表示脚本在执行的时候不会改变页面的结构。也就是说，脚本会被延迟到整个页面都解析完毕后再运行。因此，在<script>元素上设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行。

* HTML5 规范要求脚本应该按照它们出现的顺序执行，因此第一个推迟的脚本会在第二个推迟的脚本之前执行，而且两者都会在 DOMContentLoaded 事件之前执行（关于事件，请参考第 17 章）。不过在实际当中，推迟执行的脚本不一定总会按顺序执行或者在 DOMContentLoaded事件之前执行，因此最好只包含一个这样的脚本。
* 对于 XHTML 文档，指定 defer 属性时应该写成 defer="defer"。

### 3.3异步执行脚本

*  async 属性。从改变脚本处理方式上看，async 属性与 defer 类似。当然，它们两者也都只适用于外部脚本，都会告诉浏览器立即开始下载。不过，与 defer 不同的是，标记为 async 的脚本并不保证能按照它们出现的次序执行。

* 添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。
* 异步脚本保证会在页面的 load 事件前执行，但可能会在 DOMContentLoaded（参见第 17 章）之前或之后。
* 对于 XHTML 文档，指定 async 属性时应该写成 async="async"

### 3.4动态加载脚本

没看懂

## 5.noscript元素

​		noscript元素出现，被用于给不支持 JavaScript 的浏览器提供替代内容。虽然如今的浏览器已经 100%支持JavaScript，但对于禁用 JavaScript 的浏览器来说，这个元素仍然有它的用处。

# 三、语言基础

## 1.语法

### 1.1区分大小写

### 1.2标识符

* 第一个字符必须是一个字母、下划线（_）或美元符号（$）
* 按照惯例，ECMAScript 标识符使用驼峰大小写形式

### 1.3注释

### 1.4严格模式

### 1.5语句

​		js中有很多的简写方式，目前自己学习的阶段建议不是要简写的方式，同时没个语句记得加上封号

## 2.保留关键字

## 3.变量

### 3.1var

#### A.var申明的作用域

#### B. **var** 声明提升

​		使用var声明的变量会存在变量提升的问题，所有可以直接不再使用var

```js
// var声明变量提升
function foo() {
  console.log(a);
}
var a = 10;
foo();
// 在局部的提升
function foo() {
  console.log(age);
  var age = 26;
}
foo(); // undefined  //变成了先定义
```

​		具体形成这种情况的原因，可以在了解到js的编译的时候可以详细了解

### 3.2let

​		正常的变量声明关键字，不会产生变量提升的问题

### 3.3**const** 声明

​		常量的声明，声明的时候需要进行赋值，基础类型在赋值完以后常量的值就不能再修改了，但是如果 const 变量引用的是一个对象，那么修改这个对象内部的属性并不违反 const 的限制。

```js
// const
const c = 1;
// c = 2; //报错 Assignment to constant variable
const p = {};
// 可以正常使用
p.name = "Test";
console.log(p);
```

## 4.数据类型

简单数据类型：Number、String、Undefine、Null、Symbol、Boolean

复杂数据类型：Object

很多其他复杂的数据类型都是根据Object扩展而来的

### 4.1**typeof** 操作符

* typeof关键字可以判断简单数据类型，还有function
* typeof null = object 
* 还有其他的类型判定的方式，等学完一起整理一下



### 4.2Undefined类型

* 默认情况下，任何未经初始化的变量都会取得 undefined 值

* 包含 undefined 值的变量跟未定义变量是有区别的。请看下面的例子

```js
let message; // 这个变量被声明了，只是值为 undefined 
// 确保没有声明过这个变量
// let age 
console.log(message); // "undefined" 
console.log(age); // 报错 age is not define
```

* 对未声明的变量，只能执行一个有用的操作，就是对它调用 typeof，返回的结果是"undefined"，所以不要用typeof来判断这个变量是否赋值了
* 如果变量undefine，在if判断的时候为false，有值的话，根据隐式转化进行判断

```js
let message; // 这个变量被声明了，只是值为 undefined 
// age 没有声明 
if (message) { 
 // 这个块不会执行
} 
if (!message) { 
 // 这个块会执行
} 
if (age) { 
 // 这里会报错
}
```

### 4.3**Null** 类型

* Null 类型同样只有一个值，即特殊值 null。逻辑上讲，null 值表示一个空对象指针，这也是给typeof 传一个 null 会返回"object"的原因。
* 在定义将来要保存对象值的变量时，建议使用 null 来初始化，不要使用其他值。这样，只要检查这个变量的值是不是 null 就可以知道这个变量是否在后来被重新赋予了一个对象的引用。
* undefined 值是由 null 值派生而来的，因此 ECMA-262 将它们定义为表面上相等，如下面的例子所示

```js
console.log(null == undefined); // true
```

* null 是一个假值。因此，如果需要，可以用更简洁的方式检测它。不过要记住，也有很多其他可能的值同样是假值。所以一定要明确自己想检测的就是 null 这个字面值，而不仅仅是假值。也就是说检测的话就判断是否是null，不要用以下的方式
* null在if判断下也为false

```js
let message = null; 
let age; 
if (message) { 
 // 这个块不会执行
} 
if (!message) { 
 // 这个块会执行
}
if (age) { 
 // 这个块不会执行
} 
if (!age) { 
 // 这个块会执行
}
```

### 4.4**Boolean** 类型

* Boolean()转型函数可以在任意类型的数据上调用，而且始终返回一个布尔值。什么值能转换为 true或 false 的规则取决于数据类型和实际的值。下表总结了不同类型与布尔值之间的转换规则。
* 注意，布尔值字面量 true 和 false 是区分大小写的，因此 True 和 False（及其他大小混写形式）是有效的标识符，但不是布尔值。

<img src="/Users/pigcharid/Library/Application Support/typora-user-images/image-20230820005320083.png" alt="image-20230820005320083" style="zoom:50%;" />	

```js
//显示转化规则
console.log(true == Boolean("not null"))
console.log(false == Boolean(""))
console.log(true == Boolean("true"))
console.log(true == Boolean("false"))

console.log(true == Boolean(1))
console.log(true == Boolean(12))
console.log(false == Boolean(0))

console.log(true == Boolean({}))
console.log(true == Boolean({name:"Charid"}))
console.log(false == Boolean(null))
console.log(false == Boolean(undefined))
```

### 4.5**Number** 类型

* Number 类型使用 IEEE 754 格式表示整数和浮点值（在某些语言中也叫双精度值）。不同的数值类型相应地也有不同的数值字面量格式。

#### A.浮点值

​		js没有转么标识浮点数的类型，Number类型下，具有小数点的数字都是浮点数，因为存储浮点值使用的内存空间是存储整数值的两倍，所以 ECMAScript 总是想方设法把值转换为整数。在小数点后面没有数字的情况下，数值就会变成整数。

* 科学计数法

```js
// Number
let n1 = 3.14e2
console.log(n1)
let n2 = 314e-2
console.log(n2)
```

* 精度问题，js纯在精度不准确的情况，这个还需要研究一下

```js
console.log(0.2+0.1)
//0.30000000000000004
```

#### B.值的范围

* 值的范围：数值结果超出了 JavaScript 可以表示的范围，那么这个数值会被自动转换为一个特殊的 Infinity（无穷）值。任何无法表示的负数以-Infinity（负无穷大）表示，任何无法表示的正数以 Infinity（正无穷大）表示。
* 判断一个值是否为无穷大，可以使用isFinite判断，无穷大的情况很少会碰到，了解即可

```js
let n1 = Number.MAX_VALUE
console.log(n1)
console.log(n1+1000000000000000)
console.log(n1+1000000000000000 == n1)
console.log(isFinite(n1+1))
console.log(5/0)
console.log(-5/0)
```

#### C.NaN

​		NaN 有几个独特的属性。首先，任何涉及 NaN 的操作始终返回 NaN（如 NaN/10），在连续多步计算时这可能是个问题。其次，NaN 不等于包括 NaN 在内的任何值。

​		ECMAScript 提供了 isNaN()函数。该函数接收一个参数，可以是任意数据类型，然后判断这个参数是否“不是数值”。

```js
console.log(0/0)
console.log(0/0+0)
console.log(NaN == NaN)
console.log(isNaN(0/0))
```

#### D.数值转化

Number()、parseInt()和 parseFloat()是将其他类型转化成数值类型的工具

* Number转化
  * Boolearn：true>>1 false>>0
  * null：0
  * undefine：NaN
  * String：纯数字字符串>>数字  空串>>0   0xa>>按16进制转化成数字
  * Object：调用 valueOf()方法，并按照上述规则转换返回的值。如果转换结果是 NaN，则调用toString()方法，再按照转换字符串的规则转换。几乎用不上的

```js
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(Number(undefined))

console.log(Number("a"))
console.log(Number("1"))
console.log(Number("a12"))
console.log(Number("0xa"))
console.log(Number(""))

let o = {name:"Chaird"}
console.log(o.valueOf())
console.log(o.toString())
console.log(Number(o))
```

* parseInt
  * 关注于字符串转化成Number，其他类型转化成NaN
  * 以数字开头的字符串，后面有非数字的话，也能截取
  * 忽略小数点
  * 第二个参数接受指定进制类型，从几进制转化成10进制

```js
console.log(parseInt("a12"))
console.log(parseInt("12a"))
console.log(parseInt("12a"))
console.log(parseInt("123"))
console.log(parseInt("123"))
console.log(parseInt("12.3"))
console.log(parseInt(true))
console.log(parseInt(null))

console.log(parseInt("10",2))
```

* parseFloat()
  * 和parseInt类似，但是是转化成浮点数




### 4.6**String** 类型

#### A.字符字面量

​		一些转义字符，用的也不多，转义字符在用length求长度的时候，是按照长度1去处理的

```js
console.log("a\u03a3b")
console.log("a\u03a3b".length)
```

#### B.字符串的特点

​		字符串是不可变的（immutable），意思是一旦创建，它们的值就不能变了。要修改某个变量中的字符串值，必须先销毁原始的字符串，然后将包含新值的另一个字符串保存到该变量。了解即可。

#### C.转换为字符串

*  toString()

这个方法唯一的用途就是返回当前值的字符串等价物，null 和 undefined 值没有 toString()方法

```js
let n = 1;
let t = true;
let arr = [1,2]
console.log(n.toString());
console.log(t.toString());
// console.log(u.toString());
let o = {name:"Chaird"}
console.log(o.toString())
console.log( arr.toString())
```

toString()不接收任何参数。不过，在对数值调用这个方法时，toString()可以接收一个底数参数，即以什么底数来输出数值的字符串表示。

* String()

不确定一个值是不是 null 或 undefined，可以使用 String()转型函数，它始终会返回表示相应类型值的字符串。

```js
let n = 1;
let u;
let nu = null;
let nan = NaN
console.log(String(n));
console.log(String(u));
console.log(String(nu));
console.log(String(nan));
```

#### D.模版字面量

可以动态的引入变量，同时保留了换行符

#### E.模板字面量标签函数

### 4.7**Symbol** 类型    这一节都没看懂

符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

符号就是用来创建唯一记号，进而用作非字符串形式的对象属性

* 符号的基本用法

  * 符号需要使用 Symbol()函数初始化。因为符号本身是原始类型，所以 typeof 操作符对符号返回symb


### 4.8Object类型

ECMAScript 中的对象其实就是一组数据和功能的集合

每个 Object 实例都有如下属性和方法

* constructor：用于创建当前对象的函数。
* hasOwnProperty(*propertyName*)：用于判断当前对象实例（不是原型）上是否存在给定的属性。
* isPrototypeOf(*object*)：用于判断当前对象是否为另一个对象的原型。
* propertyIsEnumerable(*propertyName*)：用于判断给定的属性是否可以使用for-in 语句枚举。
* toLocaleString()：返回对象的字符串表示，该字符串反映对象所在的本地化执行环境。
* toString()：返回对象的字符串表示。
* valueOf()：返回对象对应的字符串、数值或布尔值表示。通常与 toString()的返回值相同。

## 5.操作符

### 3.4.1一元操作符

递增/递减操作符

```
-- ++ 放在变量前就会出现先运算的副作用
let age = 29; 
let anotherAge = --age + 2; 
console.log(age); // 28 
console.log(anotherAge); // 30

-- ++ 放在变量后就是正常的运算完以后数值改变
let age = 29; 
let anotherAge = --age + 2; 
console.log(age); // 28 
console.log(anotherAge); // 30

这4 个操作符可以作用于任何值，意思是不限于整数——字符串、布尔值、浮点值，甚至对象都可以。递增和递减操作符遵循如下规则
 	对于字符串，如果是有效的数值形式，则转换为数值再应用改变。变量类型从字符串变成数值
 	对于字符串，如果不是有效的数值形式，则将变量的值设置为 NaN 。变量类型从字符串变成数值
 	对于布尔值，如果是 false，则转换为 0 再应用改变。变量类型从布尔值变成数值
 	对于布尔值，如果是 true，则转换为 1 再应用改变。变量类型从布尔值变成数值
 	对于浮点值，加 1 或减 1
 	如果是对象，则调用其（第 5 章会详细介绍的）valueOf()方法取得可以操作的值。对得到的值应用上述规则。如果是 NaN，则调用toString()	并再次应用其他规则。变量类型从对象变成数值。
let o = { 
 valueOf() { 
 return -1; 
 } 
}; 
s1++; // 值变成数值 3 
s2++; // 值变成 NaN 
b++; // 值变成数值 1 
f--; // 值变成 0.100
o--; // 值变成-2
```

### 3.4.2 一元加和减

```
一元加由一个加号（+）表示，放在变量前头，对数值没有任何影响
let num = 25; 
num = +num; 
console.log(num); // 25

如果将一元加应用到非数值，则会执行与使用 Number()转型函数一样的类型转换：布尔值 false和 true 转换为 0 和 1，字符串根据特殊规则进行解析，对象会调用它们的 valueOf()和/或 toString()方法以得到可以转换的值
let s1 = "01"; 
let s2 = "1.1";
let s3 = "z"; 
let b = false; 
let f = 1.1; 
let o = { 
 valueOf() { 
 return -1; 
 } 
}; 
s1 = +s1; // 值变成数值 1 
s2 = +s2; // 值变成数值 1.1 
s3 = +s3; // 值变成 NaN 
b = +b; // 值变成数值 0 
f = +f; // 不变，还是 1.1 
o = +o; // 值变成数值-1
一元减和加的规则一样

一元加和减除了具有运算功能，在js里面还能用来类型转化
```

### 3.4.3位操作符    也需要深入

ECMAScript中的所有数值都以 IEEE 754 64 位格式存储，但位操作并不直接应用到 64 位表示，而是先把值转换为32 位整数，再进行位操作，之后再把结果转换为 64 位。对开发者而言，就好像只有 32 位整数一样，因为 64 位整数存储格式是不可见的。既然知道了这些，就只需要考虑 32 位整数即可。

```
按位非 ~
let num1 = 25; // 二进制 00000000000000000000000000011001 
let num2 = ~num1; // 二进制 11111111111111111111111111100110 
console.log(num2); // -26
这里，按位非操作符作用到了数值 25，得到的结果是26。由此可以看出，按位非的最终效果是对数值取反并减 1，就像执行如下操作的结果一样
let num1 = 25; 
let num2 = -num1 - 1; 
console.log(num2); // "-26" 
实际上，尽管两者返回的结果一样，但位操作的速度快得多。这是因为位操作是在数值的底层表示上完成的。
 
按位与 &

按位或 |

按位异或 ^

左移 <<

有符号右移 >>

无符号右移 >>
```

### 3.4.4布尔操作符

* 逻辑非操作符会遵循如下规则

```
如果操作数是对象，则返回 false
如果操作数是空字符串，则返回 true
如果操作数是非空字符串，则返回 false
如果操作数是数值 0，则返回 true
如果操作数是非 0 数值（包括 Infinity），则返回 false
如果操作数是 null，则返回 true
如果操作数是 NaN，则返回 true
如果操作数是 undefined，则返回 true
```

* 逻辑非操作符也可以用于把任意值转换为布尔值。同时使用两个叹号（!!），相当于调用了转型函数 Boolean()。无论操作数是什么类型，第一个叹号总会返回布尔值。第二个叹号对该布尔值取反。
* 逻辑与操作符可用于任何类型的操作数，不限于布尔值。如果有操作数不是布尔值，则逻辑与并不一定会返回布尔值，而是遵循如下规则。

```
如果第一个操作数是对象，则返回第二个操作数。
如果第二个操作数是对象，则只有第一个操作数求值为 true 才会返回该对象。
如果两个操作数都是对象，则返回第二个操作数。
如果有一个操作数是 null，则返回 null。
如果有一个操作数是 NaN，则返回 NaN。
如果有一个操作数是 undefined，则返回 undefined。

逻辑与操作符是一种短路操作符，意思就是如果第一个操作数决定了结果，那么永远不会对第二个操作数求值。
let found = true; 
let result = (found && someUndeclaredVariable); // 这里会出错
console.log(result); // 不会执行这一行
let found = false; 
let result = (found && someUndeclaredVariable); // 不会出错
console.log(result); // 会执行
```

* 如果有一个操作数不是布尔值，那么逻辑或操作符也不一定返回布尔值。它遵循如下规则。

```
如果第一个操作数是对象，则返回第一个操作数。
如果第一个操作数求值为 false，则返回第二个操作数。
如果两个操作数都是对象，则返回第一个操作数。
果两个操作数都是 null，则返回 null。
如果两个操作数都是 NaN，则返回 NaN。
如果两个操作数都是 undefined，则返回 undefined。

逻辑或操作符也具有短路的特性。只不过对逻辑或而言，第一个操作数求值为true，第二个操作数就不会再被求值了。
let found = true; 
let result = (found || someUndeclaredVariable); // 不会出错
console.log(result); // 会执行
let found = false; 
let result = (found || someUndeclaredVariable); // 这里会出错
console.log(result); // 不会执行这一行

利用这个行为，可以避免给变量赋值 null 或 undefined。比如：
let myObject = preferredObject || backupObject; 
在这个例子中，变量 myObject 会被赋予两个值中的一个。其中，preferredObject 变量包含首选的值，backupObject 变量包含备用的值。如果 preferredObject 不是 null，则它的值就会赋给myObject；如果 preferredObject 是 null，则 backupObject 的值就会赋给 myObject。这种模式在 ECMAScript 代码中经常用于变量赋值，本书后面的代码示例中也会经常用到。
```

### 3.4.5乘性操作符

* 如果乘性操作符有不是数值的操作数，则该操作数会在后台被使用 Number()转型函数转换为数值。这意味着空字符串会被当成 0，而布尔值 true 会被当成 1。

*  乘法操作符
  * 如果操作数都是数值，则执行常规的乘法运算，即两个正值相乘是正值，两个负值相乘也是正值，正负符号不同的值相乘得到负值。如果 ECMAScript 不能表示乘积，则返回 Infinity 或-Infinity。
  * 如果有任一操作数是 NaN，则返回 NaN。
  * 如果是 Infinity 乘以 0，则返回 NaN。
  * 如果是 Infinity 乘以非 0的有限数值，则根据第二个操作数的符号返回 Infinity 或-Infinity。
  * 如果是 Infinity 乘以 Infinity，则返回 Infinity。
  * 如果有不是数值的操作数，则先在后台用 Number()将其转换为数值，然后再应用上述规则。

* 除法操作符
  * 如果操作数都是数值，则执行常规的除法运算，即两个正值相除是正值，两个负值相除也是正值，符号不同的值相除得到负值。如果ECMAScript不能表示商，则返回Infinity或-Infinity。 
  * 如果有任一操作数是 NaN，则返回 NaN。
  * 如果是 Infinity 除以 Infinity，则返回 NaN。
  * 如果是 0 除以 0，则返回 NaN。
  * 如果是非 0 的有限值除以 0，则根据第一个操作数的符号返回 Infinity 或-Infinity。
  * 如果是 Infinity 除以任何数值，则根据第二个操作数的符号返回 Infinity 或-Infinity。
  * 如果有不是数值的操作数，则先在后台用 Number()函数将其转换为数值，然后再应用上述规则。
*  取模操作符
  * 如果操作数是数值，则执行常规除法运算，返回余数。
  * 如果被除数是无限值，除数是有限值，则返回 NaN
  * 如果被除数是有限值，除数是 0，则返回 NaN。 
  * 如果是 Infinity 除以 Infinity，则返回 NaN。
  * 如果被除数是有限值，除数是无限值，则返回被除数。
  * 如果被除数是 0，除数不是 0，则返回 0。
  * 如果有不是数值的操作数，则先在后台用 Number()函数将其转换为数值，然后再应用上述规则。

### 3.4.6指数操作符

* ECMAScript 7 新增了指数操作符，Math.pow()现在有了自己的操作符**，结果是一样的

### 3.4.7加性操作符

* 加法操作符

```
如果有任一操作数是 NaN，则返回 NaN；
如果是 Infinity 加 Infinity，则返回 Infinity；
如果是-Infinity 加-Infinity，则返回-Infinity； 
如果是 Infinity 加-Infinity，则返回 NaN； 
如果是+0 加+0，则返回+0； 
如果是-0 加+0，则返回+0； 
如果是-0 加-0，则返回-0。

如果有一个操作数是字符串，则要应用如下规则：
如果两个操作数都是字符串，则将第二个字符串拼接到第一个字符串后面；
如果只有一个操作数是字符串，则将另一个操作数转换为字符串，再将两个字符串拼接在一起。

如果有任一操作数是对象、数值或布尔值，则调用它们的 toString()方法以获取字符串，然后再应用前面的关于字符串的规则。对于 undefined 和 null，则调用 String()函数，分别获取"undefined"和"null"。
```

* 减法操作符

```
如果两个操作数都是数值，则执行数学减法运算并返回结果。
如果有任一操作数是 NaN，则返回 NaN。
如果是 Infinity 减 Infinity，则返回 NaN。
如果是-Infinity 减-Infinity，则返回 NaN。
如果是 Infinity 减-Infinity，则返回 Infinity。
如果是-Infinity 减 Infinity，则返回-Infinity。 
如果是+0 减+0，则返回+0。
如果是+0 减-0，则返回-0。
如果是-0 减-0，则返回+0。
如果有任一操作数是字符串、布尔值、null 或 undefined，则先在后台使用 Number()将其转换为数值，然后再根据前面的规则执行数学运算。如果转换结果是 NaN，则减法计算的结果是NaN。
如果有任一操作数是对象，则调用其 valueOf()方法取得表示它的数值。如果该值是 NaN，则减法计算的结果是 NaN。如果对象没有 valueOf()方法，则调用其 toString()方法，然后再将得到的字符串转换为数值。
```

### 3.4.8关系操作符

* 它们应用到不同数据类型时也会发生类型转换和其他行为

```
如果操作数都是数值，则执行数值比较。
如果操作数都是字符串，则逐个比较字符串中对应字符的编码。
如果有任一操作数是数值，则将另一个操作数转换为数值，执行数值比较。
如果有任一操作数是对象，则调用其 valueOf()方法，取得结果后再根据前面的规则执行比较。如果没有 valueOf()操作符，则调用 toString()方法，取得结果后再根据前面的规则执行比较。
如果有任一操作数是布尔值，则将其转换为数值再执行比较。
```

* 对字符串而言，关系操作符会比较字符串中对应字符的编码，而这些编码是数值。

```
let result = "Brick" < "alphabet"; // true
let result = "Brick".toLowerCase() < "alphabet".toLowerCase(); // false
let result = "23" < "3"; // true
let result = "23" < 3; // false

let result = "a" < 3; // 因为"a"会转换为 NaN，所以结果是 false 
因为字符"a"不能转换成任何有意义的数值，所以只能转换为 NaN。这里有一个规则，即任何关系操作符在涉及比较 NaN 时都返回 false。这样一来，下面的例子有趣了：
let result1 = NaN < 3; // false 
let result2 = NaN >= 3; // false 
在大多数比较的场景中，如果一个值不小于另一个值，那就一定大于或等于它。但在比较 NaN 时，无论是小于还是大于等于，比较的结果都会返回 false。
```

### 3.4.9相等操作符

## 6.语句





# 四、变量、作用域和内存

## 1.原始值和引用值

​		在把一个值赋给变量时，JavaScript 引擎必须确定这个值是原始值还是引用值。原始值就是基础的六中类型，引用值则由多个值构成的对象。要理解引用值其实是变量保存了引用值的地址指针。

### 1.1动态属性

​		引用值可以动态添加属性，原始值不行

### 1.2复制值

​		引用值在复制的时候，是多了一个指针指向实际的变量，而原始值是直接将值复制，所以要注意，引用值在复制以后，会出现内存共享的情况。

```js
let o1 = new Object();
o1.name = "Chaird";
let o2 = o1;
o2.name = "Pig";
console.log(o1);
```

### 1.3传递参数

​		官方解释参数传递是按照值进行传递的，但是涉及到了引用值作为参数的话，也会按照引用值传递进行处理，这一块先不用理解了，按照实际的情况去处理。

### 1.4确定类型

​		typeof 虽然对原始值很有用，但它对引用值的用处不大。并且null和所有的对象都是返回Object	

​		通过instanceof可以根据原型来确定对象的类型

## 2.执行上下文和作用域

## 3.垃圾回收机制

### 3.1标记清理

### 3.2引用计数

### 3.3性能

### 3.4内存管理

#### A.通过 **const** 和 **let** 声明提升性能

#### B. 隐藏类和删除操作

#### C.内存泄露

​		没有通过任何关键字声明的变量会被挂到window对象上

​		定时器引用外部变量，导致外部变量不会释放

​		闭包导致局部变量不会清理

#### D.静态分配与对象池



# 五、基本引用类型

## 1.Date

​		Date()，不传参数，则返回当前的值，传入参数则返回对应的日期对象，一把都是按照xxxx-xx-xx的标准化格式传入

​		要创建确切的时间对象的，要在构造函数中提供毫秒值

```js
// 创建时间对象 保存为当前时间
let d1 = new Date()
console.log(typeof d1)

let d2 = new Date(Date.parse("2023-12-05"))
let d3 = new Date("2023-12-05")
// 下面的几乎不用
let d4 = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));
let d5 = new Date(2005, 4, 5, 17, 55, 55);
console.log(d2)
console.log(d3)
console.log(d4)
console.log(d5)
```

### 1.1继承的方法

### 1.2日期格式化方法

### 1.3日期/时间组件方法

## 2.RegExp

### 2.1**RegExp** 实例属性

### 2.2**RegExp** 实例方法

### 2.3**RegExp** 构造函数属性

### 2.4模式局限

## 3.原始值包装类型

​		为了方便操作原始值，ECMAScript 提供了 3 种特殊的引用类型：Boolean、Number 和 String。

```js
let s1 = "Test"
let s2 = new String("Test")
console.log(typeof s1)
console.log(typeof s2)
console.log(s1 instanceof String)
console.log(s2 instanceof String)

let n1 = 2
let n2 = new Number(2)
console.log(typeof n1)
console.log(typeof n2)
console.log(n1 instanceof Number)
console.log(n2 instanceof Number)
```

​		按照定义来看，原始值是没有一些方法的，比如string的subStr等方法，具有原始值的变量，可以使用对应的方法，是因为js内部帮我们用包装值进行了转化。

### 3.1Boolean

#### API整理

### 3.2Number

#### API整理

### 3.3String

#### API整理

## 4.单例内置对象

### 4.1Global

#### API整理

### 4.2Math

#### API整理



# 六、集合引用类型

## 1.Object

## 2.Array

### 一堆操作

## 3.定型数组

## 4.Map

## 5.WeakMap

## 6.Set

## 7.WeakSet



# 七、迭代器和生成器

## 1.理解迭代器

​		迭代器，重在理解是什么，以及背后的逻辑即可

​		遍历就是最直观迭代，迭代之前需要事先知道如何使用数据结构，遍历顺序并不是数据结构固有的。ES5 新增了 Array.prototype.forEach()方法，向通用迭代需求迈进了一步

```js
let arr = [1,2,3]
arr.forEach((item)=>{console.log(item)})
```

## 2.迭代器模式

### 2.1可迭代协议

很多内置类型都实现了 Iterable 接口

* 字符串
* 数组
* 映射
* 集合
* arguments对象
* NodeList 等 DOM 集合类型

实际写代码过程中，不需要显式调用这个工厂函数来生成迭代器。实现可迭代协议的所有类型都会自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括





# 8、对象、类与面向对象编程

## 理解对象

### 属性的类型

* 数据属性
* 访问器属性

### 定义多个属性

### 读取属性的特性

### 合并对象

### 对象标识及相等判定

### 增强的对象语法

*  属性值简写
* 可计算属性
* 简写方法名

### 对象解构

* 嵌套解构
* 部分解构
* 参数上下文匹配

## 创建对象

### 概述

### 工厂模式

### 构造函数模式

*  构造函数也是函数
* 构造函数的问题

### 原型模式

* 理解原型
*  原型层级
*  原型和 **in** 操作符
* 属性枚举顺序

### 对象迭代

* 其他原型语法
* 原型的动态性
* 原生对象原型
* 原型的问题

## 继承

### 原型链

*  默认原型
* 原型与继承关系
* 关于方法
*  原型链的问题

### 盗用构造函数

*  传递参数
* 盗用构造函数的问题

### 组合继承

### 原型式继承

### 寄生式继承





# 9、代理与反射

# 10、函数

## 箭头函数



# 11、Promise与异步函数

## 1.异步编程

### 1.1同步和异步

### 1.2回调地狱

## 2.Promise

### 2.1Promise的概述

### 2.2Promise基础

#### A.状态

Promise具有三种状态

* 待定（pending）
* 兑现（fulfilled，有时候也称为“解决”，resolved） 
* 拒绝（rejected）

```js
// Promise的状态
// pedding fulfilled rejected
// pedding
let p1 = new Promise(() => {});
console.log(p1); //Promise {<pedding>}

// fulfilled
let p2 = new Promise((resolve, reject) => {
  resolve();
});
console.log(p2); //Promise {<fulfilled>:undefine}

// reject
let p3 = new Promise((resolve, reject) => {
  reject();
});
console.log(p3); //Promise {<rejected>:undefine}
```

#### B.状态变化

控制期约状态的转换是通过调用它的两个函数参数实现的，这两个函数参数通常都命名为 resolve()和 reject()。无论 resolve()和 reject()中的哪个被调用，状态转换都不可撤销了。

* 调用 reject()会把状态切换为拒绝

* 调用resolve()会把状态切换为兑现

#### C.超时处理

由于Promise的状态改变以后就不能再改变了，那么可以基于这个很容易实现超时处理

```javascript
// 超时处理
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("超时了");
  }, 10000);
});
console.log(p);
// 超时以后查看状态
setTimeout(() => {
  console.log(p);
}, 11000);

```

### 2.3Promise的实例方法

#### A.Then

​		Promise.prototype.then()是为期约实例添加处理程序的主要方法。这个 then()方法接收最多两个参数：onResolved 处理程序和 onRejected 处理程序。这两个参数都是可选的，如果提供的话，则会在期约分别进入“兑现”和“拒绝”状态时执行。

```js
// 回调处理
function onResolved(id) {
    console.log(id, "resolved");
  }
  function onReject(id) {
    console.log(id, "rejected");
  }
  
  let p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 3000);
  });
  let p2 = new Promise((resolve, reject) => {
    setTimeout(reject, 3000);
  });
  
  p1.then(
    () => {
      onResolved("p1");
    },
    () => {
      onReject("p1");
    }
  );
  
  p2.then(
    () => {
      onResolved("p2");
    },
    () => {
      onReject("p2");
    }
  );
// 也可以直接简写
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(2);
    // reject(2);
  }, 3000);
});
// 第一个回调处理成功  第二个回调处理失败
p.then(
  (res) => {
    console.log("resolved", res);
  },
  (res) => {
    console.log("rejected", res);
  }
);
```

​		then的返回值也是一个Promise对象，这里的实验还没做出来

```js
// then的返回值也是Promise对象
let p = new Promise(()=>{})
console.log(p)
p1 = p.then()
console.log(p1)
```

#### B.catch()

​		catch()方法用于给期约添加拒绝处理程序，和then(null,()=>{})的效果一样，如果下面代码p1的reject没有去捕获和处理的话，那么浏览器会有一报错

```js
let p1 = Promise.reject("foo");
p2 = p1.catch((res) => {
  console.log(res);
});
```

#### C.Finally

​		Finally 处理程序没有办法知道期约的状态是解决还是拒绝，所以这个方法主要用于添加清理代码

```js
// finally
let p1 = Promise.resolve("p1");
let p2 = Promise.reject("p2");

p3 = p1.finally();
p4 = p2.finally();
setTimeout(console.log, 0, p3);
setTimeout(console.log, 0, p4);
```

#### D.Promise的执行循序

​		理解Promise对象在创建时内部是同步的，其实例方法是需要异步的，而且Promise对象之间的顺序从上到下

```js
// 创建一个期约并将解决函数保存在一个局部变量中
let p = new Promise((resolve) => {
  synchronousResolve = function () {
    console.log("1: invoking resolve()");
    resolve();
    console.log("2: resolve() returns");
  };
});
p.then(() => console.log("4: then() handler executes"));
synchronousResolve();
console.log("3: synchronousResolve() returns");
```

#### E.以错误对象Reject

​		直接用throw Error和reject都是可以的，catch都能捕获

```js
// 错误处理
let p = new Promise((resolve, reject) => {
  // throw Error("aaa");
  reject(Error("a"));
});
p.catch((res) => {
  console.log("aaaa", res);
});

```

### 2.4Promise连锁与合成





### 2.5 Promise的扩展

#### A.Promise取消

#### B.Promise进度通知

## 3.异步函数

### 3.1异步函数

#### A. async

使用 async 关键字可以让函数具有异步特征，但总体上其代码仍然是同步求值的。不过，异步函数如果使用 return 关键字返回了值（如果没有 return 则会返回 undefined），这个值会被 Promise.resolve()包装成一个期约对象。

```js
// async的执行特点
async function foo() {
  console.log("1");
}
foo();
console.log("2");
// 1  2

async function foo() {
  console.log("1");
  return "2";
}
// foo()变成了一个Promise对象
console.log(foo());
foo().then((res) => {
  console.log(res);
});
console.log("3");

```

与在期约处理程序中一样，在异步函数中抛出错误会返回拒绝的期约，不过，拒绝期约的错误不会被异步函数捕获：

```js
// 与在期约处理程序中一样，在异步函数中抛出错误会返回拒绝的期约
async function foo() {
  console.log("1");
  throw Error("2");
}
foo().catch((res) => {
  console.log(res);
});
console.log(foo());
// 不过，拒绝期约的错误不会被异步函数捕获
async function foo() {
  console.log("1");
  Promise.reject("2");
}
//捕获不到上面的reject
foo().catch((res) => {
  console.log("3");
  console.log(res);
});
```

#### B.Await

​		因为异步函数主要针对不会马上完成的任务，所以自然需要一种暂停和恢复执行的能力。使用 await关键字可以暂停异步函数代码的执行，等待期约解决。





# 十二、BOM

## 1.**window** 对象

### 1.1全局作用域

### 1.2窗口关系



# 13、客户端检测

# 十四、DOM

DOM 中总共有 12 种节点类型，这些	类型都继承一种基本类型。

## 1.节点层级

### 1.1Node类型

#### A. nodeName 与 nodeValue

nodeName 始终等于元素的标签名，而 nodeValue 则始终为 null

#### B. 节点关系

* childNodes
* previousSibling
* nextSibling
* firstChild
* lastChild
* ownerDocument

#### C.操控节点

* appendChild()
* insertBefore()
* replaceChild()
* removeChild()

#### D.其他方法

* cloneNode()
* normalize()

### 1.2Documente类型



# 15、DOM扩展

# 16、DOM2和DOM3

# 十七、事件

## 1.事件流

### 1.1事件冒泡

### 1.2事件捕获

### 1.3DOM 事件流

## 2.事件处理程序



# 十八、动画与Canvas图形

## 1.requestAnimationFrame

### 1.1早期定时动画

```js
(function() { 
 function updateAnimations() { 
 doAnimation1(); 
 doAnimation2(); 
 // 其他任务
 } 
 setInterval(updateAnimations, 100); 
})();
```

### 1.2时间间隔的问题

### 1.3requestAnimationFrame

```js
function updateProgress() { 
 var div = document.getElementById("status"); 
 div.style.width = (parseInt(div.style.width, 10) + 5) + "%"; 
 if (div.style.left != "100%") { 
 requestAnimationFrame(updateProgress); 
 } 
} 
requestAnimationFrame(updateProgress);
```

### 1.4cancelAnimationFrame

```js
let requestID = window.requestAnimationFrame(() => { 
 console.log('Repaint!'); 
}); 
window.cancelAnimationFrame(requestID);
```

### 1.5通过 **requestAnimationFrame** 节流

## 2.基本画布功能

## 3.2D绘图

### 3.1填充和描边

* fillStyle
* strokeStyle

### 3.2绘制矩形

* fillRect
* strokeRect
* clearRect

### 3.3绘制路径

## 3.4绘制文本

### 3.5变换

### 3.6绘制图像

### 3.7阴影

### 3.8渐变

### 3.9图案

### 3.10图像数据

### 3.11合成

## 4.WebGL



# 19、表单脚本



# 二十、JavaScriptAPI

​		有点不太好理解

# 21、错误与调试

# 22、处理XML

# 23、JSON

# 二十四、网络请求与远程资源

## 1.XMLHttpRequest

### 1.1使用

* 定义
* 发送
* 响应
  * responseText
  * responseXML
  * status
  * statusText
* 判断响应状态
* readyState
  * 0
  * 1
  * 2
  * 3
  * 4
* readystatechange 事件
* 取消

```js
let xhr = new XMLHttpRequest(); 
xhr.onreadystatechange = function() { 
 if (xhr.readyState == 4) { 
 if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) { 
 alert(xhr.responseText); 
 } else { 
 alert("Request was unsuccessful: " + xhr.status); 
 } 
 } 
}; 
xhr.open("get", "example.txt", true); 
xhr.send(null);
```

### 1.2头部

* 设置

### 1.3Get

* 添加请求参数的方法

### 1.4Post

* 设置头部
* 携带序列化数据

### 1.5XMLHttpRequest Level 2

* formDate类型
* 超时
  * timeout
  * ontimeout

* overrideMimeType

## 2.进度事件

* loadstart
* progress
* error
* abort
* load
* loadend

### 2.1load

### 2.2progress

```js
xhr.onprogress = function(event) { 
 let divStatus = document.getElementById("status"); 
 if (event.lengthComputable) { 
 divStatus.innerHTML = "Received " + event.position + " of " + 
 event.totalSize + 
" bytes"; 
 } 
};
```

## 3.跨源资源共享

### 3.1预检

### 3.2凭据请求

## 4.替代性跨源技术

### 4.1图片探测

### 4.2JSONP 

## 5.Fetch

### 5.1基本用法

* 分派请求
* 读取响应
* 处理状态码和请求失败
* 自定义选项

### 5.2常见的fetch请求模式

* json
* 在请求体中发送参数
* 发送文件
* 发送跨源请求
* 中断请求

### 5.3Header对象

### 5.4Request对象

### 5.5Response对象

### 5.6**Request**、**Response** 及 **Body** 混入

## 6.Web Socket 

* API 
* 发送和接收数据
* 其他事件
* 

# 二十五、客户端存储

## 1.cookie

### 1.1限制

### 1.2构成

* 名称
* 值
* 域
* 路径
* 过期时间
* 安全标志

```
HTTP/1.1 200 OK 
Content-type: text/html 
Set-Cookie: name=value; expires=Mon, 22-Jan-07 07:10:24 GMT; domain=.wrox.com 
Other-header: other-header-value 
这个头部设置一个名为"name"的 cookie，这个 cookie 在 2007 年 1 月 22 日 7:10:24 过期，对
www.wrox.com 及其他 wrox.com 的子域（如 p2p.wrox.com）有效。
```

### 1.3js中的cookie



## 2.web storage

### 2.1类型

* clear
* getItem
* key
* removeItem
* setItem

### 2.2sessionStorage

* length
* 遍历
* 设置
* 删除

### 2.3localStorage

### 2.4存储事件-storage

* domain
* key
* newValue
* oldValue

### 2.5限制





# 26、模块

# 27、工作者线程

# 28、最佳实践

