(function () {

  /**
   * 定义一个Animal类
   */
  class Animal {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('动物在叫~');
    }
  }

  /**
   *  定义一个表示狗的类，使Dog类继承Animal类
   */
  class Dog extends Animal {
    age: number;

    constructor(name: string, age: number) {
      // 如果在子类中写了构造函数，必须对父类的构造函数进行调用
      super(name);
      // 注意：1、super() 只能在构造函数中使用；
      //      2、在派生类中, 必须先调用 super() 才能使用 "this"。忽略这个，将会导致一个引用错误。
      this.age = age;
    }

    // 子类重写父类的方法
    sayHello() {
      // 在类的方法中 super就表示当前类的父类
      super.sayHello();
      console.log('汪汪汪汪！');
    }

  }


  const dog = new Dog('小黄', 2);
  console.log(dog);
  dog.sayHello();


})()