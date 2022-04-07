function calculateDaysBetweenDates(begin, end) {
  var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(begin);
  var secondDate = new Date(end);

  return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime()) / (oneDay)));
}

// 查找所有没有alt文本的图像，并给它们一个红色边框
function findAllImagesWithoutAltText() {
  var images = document.getElementsByTagName("img");
  for (var i = 0; i < images.length; i++) {
    if (images[i].alt == "") {
      images[i].style.border = "1px solid red";
    }
  }
}

// 设置文字列表#mylist，前3个项目为红色，其余为黑色
function setListItemColor() {
  var list = document.getElementById("mylist");
  for (var i = 0; i < list.children.length; i++) {
    if (i < 3) {
      list.children[i].style.color = "red";
    } else {
      list.children[i].style.color = "black";
    }
  }
}

// 网页向下滚动一屏后，提示123
function scrollDown() {
  window.onscroll = function() {
    if (window.pageYOffset > 100) {
      alert("123");
    }
  };
}



// Express 服务器在 3000 端口
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000);


// 创建一个服务器
var http = require('http');
var server = http.createServer(function(request, response) {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello World\n');
}, 3000);
server.listen(3000);


// 当前时间
var date = new Date();