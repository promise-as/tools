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
  // params: 点击元素，事件类型，父类元素，类名
  clickEvent: function (btn, parent, className) {

    $(btn).each(function () {

      var that = this;

      $(that).click(function () {

        $(that).addClass(className).siblings().removeClass(className);

      })

    })

  },

  // 鼠标移入
  // params: 点击元素，事件类型，父类元素，类名
  mouseEnter: function (btn, parent, className) {

    $(btn).each(function () {

      var that = this;

      $(that).mouseenter(function () {

        $(that).addClass(className).siblings().removeClass(className);

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
    
  }

}