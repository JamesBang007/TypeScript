(function() {
  // 声明一个变量num，同时指定它的类型为number
  let num: number

  // num 的类型设置为了number，在以后的使用过程中num的值只能是数字
  num = 123
  num = 456
  // num = 'hello' // 此行代码会报错，因为变量num的类型是number，不能赋值字符串

  let str: string
  str = 'hello'
  // str = 123

  // 声明完变量直接进行赋值
  let b1: boolean = true

  // 如果变量的声明和赋值是同时进行的，TS可以自动对变量进行类型检测
  let b2 = false
  b2 = true

  // JS中的函数是不考虑参数的类型和个数的
  // function sum(a, b) {
  //   return a + b
  // }

  // console.log(sum(123, 456))   // 579
  // console.log(sum(123, "456")) // "123456"

  function sum(a: number, b: number): number {
    return a + b
  }

  let result = sum(123, 456)
  console.log(result)


})()