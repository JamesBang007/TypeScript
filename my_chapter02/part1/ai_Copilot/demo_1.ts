(function () {

  // 声明一个字符串类型的变量 a
  let a: string;
  // 声明一个数字类型的变量 b
  let b: number;
  // 声明一个布尔类型的变量 c，然后赋值为true
  let c: boolean = true;
  // 声明一个数组类型的变量 d，然后赋值为一个数组
  let d: number[] = [1, 2, 3];

  // 正则验证手机号
  function isPhone(phone: string) {
    return /^1[3456789]\d{9}$/.test(phone);
  }

  // 验证身份证
  function isIdCard(idCard: string) {
    return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(idCard);
  }

  // 验证邮箱
  function isEmail(email: string) {
    return /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/.test(email);
  }

  // 验证密码：必须包含数字和字母，且长度在6-18之间
  function isPassword(password: string) {
    return /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,18}$/.test(password);
  }

  // 封装一个接口请求方法
  function request0(url: string, method: string, data: XMLHttpRequestBodyInit) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.send(data);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          resolve(xhr.responseText);
        }
      }
    })
  }


  // 定义一个父类：Person，属性有名字、年龄，并且有一个方法sayHello
  class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    sayHello() {
      console.log('hello');
    }
  }

  // 定义一个子类：Teacher，继承自Person，属性有school，方法有teach  
  class Teacher extends Person {
    school: string;

    constructor(name: string, age: number, school: string) {
      super(name, age);
      this.school = school;
    }

    teach() {
      console.log(`我在${this.school}教学`);
    }
  }


  // 定义一个子类：学生类，继承Person类，并有一个kaoshi的方法
  class Student extends Person {
    xuehao: string
    banji: string

    constructor(name: string, age: number, xuehao: string, banji: string) {
      super(name, age)
      this.xuehao = xuehao
      this.banji = banji
    }

    // 子类重写父类的方法
    sayHello() {
      super.sayHello();
      console.log(`我是${this.name}，我在${this.banji}班`);
    }

    kaoshi() {
      console.log(`我是${this.name}，我在考试`);
    }

  }





})()