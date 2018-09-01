# JavaScript 函数基础
## 定义方法
- 静态方法 `function 函数名(){return[函数返回值]}`
- 动态匿名方法 `var 函数名 = new Function ([arg]){}`
- 直接量方法 `函数名 = new Function ([arg]){函数体}`
## 调用方法
- 直接调用
- 在链接中调用
- 在事件中调用
- 递归调用

## 方法
### `Function.prototype.apply()`
> func.apply(thisArg, [argsArray]) 

> 返回值：调用有指定this值和参数的函数的结果

> thisArg
可选。在非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象（浏览器中就是window对象），同时值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的包装对象。

> argsArray
可选。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为null 或 undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。

[使用apply来链接构造器](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
```javascript
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```
---

### `Function.prototype.call()`
> `fun.call(thisArg, arg1, arg2, ...)`

> 返回值：返回值是你调用的方法的返回值，若该方法没有返回值，则返回undefined。

[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/call)


---

### `Function.prototype.bind()`
> fun.bind(thisArg[, arg1[, arg2[, ...]]])

参数

`thisArg`

> 当绑定函数被调用时，该参数会作为原函数运行时的 this 指向。当使用new 操作符调用绑定函数时，该参数无效。

`arg1, arg2, ...`
> 当绑定函数被调用时，这些参数将置于实参之前传递给被绑定的方法。

返回值
>  返回由指定的this值和初始化参数改造的原函数拷贝

> 创建绑定函数
[示例](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/bind)

```javascript
this.x = 9; 
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 返回 81

var retrieveX = module.getX;
retrieveX(); // 返回 9, 在这种情况下，"this"指向全局作用域

// 创建一个新函数，将"this"绑定到module对象
// 新手可能会被全局的x变量和module里的属性x所迷惑
var boundGetX = retrieveX.bind(module);
boundGetX(); // 返回 81
```

> 偏函数

```javascript
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]

// Create a function with a preset leading argument
var leadingThirtysevenList = list.bind(undefined, 37);

var list2 = leadingThirtysevenList(); // [37]
var list3 = leadingThirtysevenList(1, 2, 3); // [37, 1, 2, 3]
```

## arguments
- 功能：存放实参的参数列表
- 特性：1. 仅能在函数体内使用
        2. 带有下标属性，非数组
        3. 函数声明时自动初始化
- 属性：1. length
        2. callee(严格模式下,(ES5) 禁止使用)
        3. caller 已被移除