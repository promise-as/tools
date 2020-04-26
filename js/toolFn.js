// 基与jQuery
// 工具对象
var toolFn = {

  // 星星评分
  // params: 点击元素，类名
  evaluate: function (btn, className) {

    $(btn).each(function (index) {

      $(this).click(function () {

        // 移除其他兄弟的类
        $(this).siblings().removeClass(className);

        for (var i = 0; i <= index; i++) {

          $($(btn)[i]).addClass(className)

        }

      });

    });

  },

  // 点击事件
  // params: 点击元素，父类元素，类名
  clickEvent: function (btn, parent, className) {

    $(btn).each(function () {

      var that = this;

      $(that).click(function () {

        $(that).addClass(className).siblings().removeClass(className);

      })

    })

  },

  // 鼠标移入
  // params: 触发元素，内容元素，类名
  mouseEnter: function (btn, cont, className) {

    $(btn).each(function (i) {

      var that = this;

      $(that).mouseenter(function () {

        $(that).addClass(className).siblings().removeClass(className);
        $($(cont)[i]).addClass(className).siblings().removeClass(className);

      })

    })

  },

  // 收集结果
  // params: 每一项，类名，收集的容器，连接符号
  collectResult: function (item, className, collectBox, connector) {

    var result = '';

    $(item).each(function () {

      var that = this;

      // 尾部多一个、符号
      result = $(that).find('.' + className).text() + connector + result;

    })

    $(collectBox).val(result);
    
  },

  // 倒计时（单位：天）
  countdown: function (day, hundred, ten, one) {
    // 个，十，百
    var o, t, h;
    o = parseInt(day % 10);
    t = parseInt((day % 100) / 10);
    h = parseInt((day % 1000) / 100);

    // 重新赋值
    one.text(o);
    ten.text(t);
    hundred.text(h);
   
    // 剩余时间不到3位数
    if (day < 100) {
      hundred.hide();
    }
     // 剩余时间不到2位数
     if (day < 10) {
      ten.hide();
    }
    // 剩余时间为0
    if (day <= 0) {
      clearInterval(timeId);
      return null;
    }
  }

  // 展开与收起
  
}