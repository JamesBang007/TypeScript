(function () {

  // 描述一个对象的类型
  type myType = {
    name: string;
    age: number;
  }

  /**
   * 接口用来定义一个类结构，用来定义一个类中应该包含哪些属性和方法
   *  同时接口也可以当成类型声明去使用
   */
  interface myInterface {
    name: string;
    age: number;
  }

  interface myInterface {
    gender: string;
  }

  const obj: myInterface = {
    name: '小明',
    age: 11,
    gender: '男'
  }

  // 可选属性
  // 接口里的属性不全都是必需的。有些是只在某些条件下存在，或者根本不存在。 可选属性在应用“option bags”模式时很常用，即给函数传入的参数对象中只有部分属性赋值了。
  // 下面是应用了“option bags”的例子：

  interface SquareConfig {
    color?: string;
    width?: number;
  }

  function createSquare(config: SquareConfig): { color: string; area: number } {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width * config.width;
    }
    return newSquare;
  }

  let mySquare = createSquare({ color: "black" });



  /**
   * 接口可以在定义类的时候去限制类的结构，
   * 接口中所有的属性都不能有实际的值，只定义对象的结构，而不考虑实际值。
   * 接口中所有的方法都是抽象方法
   */
  interface myInterClass {
    name: string;

    sayHello(): void;
  }

  /**
   * 定义类时，可以使类去实现一个接口，
   * 实现接口就是使类满足接口的要求
   */
  class MyClass implements myInterClass {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    sayHello() {
      console.log('大家好~~');
    }

  }


})()