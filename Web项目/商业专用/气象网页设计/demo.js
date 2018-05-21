var $loading = $('.loading'),
    $main = $('.main'),
    $btn = $('.navBtn').children(),
    $content = $('.contentWra').children(),
    $return = $('.returnBtn')
    $userHelp=$('.userHelp');

//创造的元素
var $scrollback = $('<div></div>');

init();

function init() {
    //调试
    $main.hide();

    //进入主页
    $('.welcome').one('click', function() {
        $loading.animate({
            borderWidth: '20px',
            borderRightWidth: '0',
            borderBottomWidth: '0',
        }, 1000);
        $loading.empty();
        $main.show();
        $loading.fadeOut();
        $main.animate({
            borderWidth: '20px',
            borderRightWidth: '0',
            borderBottomWidth: '0'
        }, 100);
    });

    //二级菜单
    for (var i = 0; i < $btn.length; i++) {
        (function(o) {
            $btn[o].addEventListener('click', function() {
                $('.show').fadeOut().removeClass('show');
                $content.eq(o).addClass('show').fadeIn();
            }, false);
        }(i))
    }

    //返回功能绑定
    for (var i = 0; i < $return.length; i++) {
        (function(o) {
            $return[o].addEventListener('click', function(e) {
                e.preventDefault();
                $('.show').fadeOut().removeClass('show');
                $content.eq(0).addClass('show').fadeIn();
            }, false);
        }(i))
    }

    //回滚功能判定/绑定
    $main.append($scrollback);
    $scrollback.addClass('scrollback');
    $scrollback.on('click', function() {
        window.scrollTo(0, 0);
    })

    $(document).on('scroll', function() {
        if ($(document).scrollTop() > 0) {
            $scrollback.fadeIn();
        } else {
            $scrollback.fadeOut();
        }
    })

    //用户菜单
    $('.userHelp li').not('.uHdes').hide();
    $('.userHelp').on('click', function() {
        $('.userHelp li').not('.uHdes').slideToggle();
    })
}



//拖拽公式 
function blindEvent(ele, wrap) {
    var X,
        Y,
        boxL,
        boxT,
        disL,
        disT;
    var drag = false;
    ele.onmousedown = function(e) {
        drag = true;
        var event = e || window.event;
        X = event.clientX;
        Y = event.clientY;
        boxL = ele.offsetLeft;
        boxT = ele.offsetTop;
        disL = X - boxL;
        disT = Y - boxT;
        console.log(disL,disT,X,Y);
    };
    wrap.onmousemove = function(e) {
        if (drag) {
            var event = e || window.event;
            ele.style.left = event.clientX - disL + 'px';
            ele.style.top = event.clientY - disT +'px';
        }
    };
    ele.onmouseup = function(e) {
        drag = false;
    }
}