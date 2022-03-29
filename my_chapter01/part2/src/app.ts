import { hi } from './m.js'
// 这是一个注释
console.log(hi);

let a = 10
console.log(a)

// a = 'hello'


function fn(a: number, b: number): string {
  return '求和为：' + (a + b)
}
console.log(fn(10, 20))

function fn2(this: Window) {
  alert(this);
}


let box1 = document.getElementById('box1')
// js 对象可能为 "null"
// if (box1 !== null) {
//   box1.addEventListener('click', function () {
//     alert('hello')
//   })
// }
// ts
box1?.addEventListener('click', () => {
  alert('hello')
})

