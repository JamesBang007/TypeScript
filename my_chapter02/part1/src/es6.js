(function() {
  // class 声明创建一个基于原型继承的具有给定名称的新类。
  class People {
    // 构造方法，constructor 是一种用于创建和初始化class创建的对象的特殊方法。
    constructor(name, age, sex) {
      this.name = name
      this.age = age
      this.sex = sex
    }

    sayHello() {
      console.log(`你好，我是${this.name}，我今年${this.age}岁了`)
    }
  }

  const p = new People('小明', 18, '男')
  console.log(p)
  p.sayHello()


  class Student extends People {
    constructor(name, age, sex, xuehao, banji) {
      // 调用父类的构造方法。
      super(name, age, sex)
      // 注意：1、super() 只能在构造函数中使用；
      //      2、在派生类中, 必须先调用 super() 才能使用 "this"。忽略这个，将会导致一个引用错误。
      this.xuehao = xuehao
      this.banji = banji
    }

    kaoshi() {
      console.log(`我是${this.name}，我在考试`)
    }
  }

  var xiaodoubao = new Student('小豆包', 8, '男', '100001', '一年级一班')
  xiaodoubao.sayHello()
  xiaodoubao.kaoshi()


})()