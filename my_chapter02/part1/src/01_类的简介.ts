/**
 * 使用class关键字来定义一个类
 *  对象中主要包含了两个部分：属性、方法
 */
class Person {
  // 使用 readonly 开头的属性表示一个只读的属性无法修改
  readonly name: string
  age: number
  // 构造方法，constructor 是一种用于创建和初始化class创建的对象的特殊方法。
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }


  // 定义实例属性
  haha = '哈哈'
  // 使用 static 开头的属性是静态属性（类属性），可以直接通过类去访问
  static xixi = '嘻嘻'


  // 定义方法
  // 如果方法以 static 开头则方法就是类方法，可以直接通过类去调用
  sayHello() {
    console.log('Hello 大家好！');
    console.log(`我的名字：${this.name}，我今年${this.age}岁了`)
  }

}

Person.xixi = '小消息'

const p = new Person('孙悟空', 18)
// p.name = '猪八戒' // 报错：无法分配到 "name" ，因为它是只读属性。
p.sayHello()

