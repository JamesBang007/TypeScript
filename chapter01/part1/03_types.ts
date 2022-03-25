// 也可以直接使用字面量进行类型声明
let a: 10
a = 10

// 可以使用 | 来连接多个类型（联合类型）
let b: 'male' | 'female'
b = 'male'
b = 'female'

let c: boolean | string
c = true
c = 'hello'

// any 表示的是任意类型，一个变量设置类型为any后相当于对该变量关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

// 声明变量如果不指定类型，则TS解析器会自动判断变量的类型为any （隐式的any）
let d
d = 10
d = 'hello'
d = true

// unknown 表示未知类型的值
let e: unknown
e = 10
e = 'hello'
e = true

let s: string

// d的类型是any，它可以赋值给任意变量
// s = d

e = 'hello'

// unknown 实际上就是一个类型安全的any
// unknown类型的变量，不能直接赋值给其他变量
// s = e // 报错
if (typeof e === 'string') {
  s = e
}

// 类型断言，可以用来告诉解析器变量的实际类型
/*
 * 语法：
 *   变量 as 类型
 *   <类型>变量
 *
 * */
s = e as string
s = <string>e

/**
 * void
 *
 * 某种程度上来说，void类型像是与any类型相反，它表示没有任何类型。当一个函数没有返回值时，你通常会见到其返回值类型是 void：
 */
// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn(): void {}

// 声明一个void类型的变量没有什么大用，因为你只能为它赋予undefined和null：
let unusable: void = undefined

// Null 和 Undefined
// TypeScript里，undefined和null两者各自有自己的类型分别叫做undefined和null。和 void相似，它们的本身的类型用处不是很大：
let u: undefined = undefined
let n: null = null
// 默认情况下null和undefined是所有类型的子类型。 就是说你可以把 null和undefined赋值给number类型的变量。

/**
 * Never
 *
 * never类型表示的是那些永不存在的值的类型。例如， never类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； 变量也可能是 never类型，当它们被永不为真的类型保护所约束时。
 *
 * never类型是任何类型的子类型，也可以赋值给任何类型；然而，没有类型是never的子类型或可以赋值给never类型（除了never本身之外）。 即使 any也不可以赋值给never。
 */
// never 表示永远不会返回结果
function fn2(): never {
  throw new Error('报错了！')
}

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message)
}

// 推断的返回值类型为never
function fail() {
  return error('Something failed')
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
