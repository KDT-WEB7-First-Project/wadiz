// temp vh만큼 움직임
let temp = 0

//자동 슬라이드
$(function() {
    var timer = setInterval(function() {
        temp -= 100;
        if (temp == -800) {
            temp = 0
        }
        $('.slider').css({
            'transform':`translate(${temp}vw)`
        })
        px = (380/8) * Math.abs(temp)/100
        $('.front-bar').animate( {
            width:`${px}px`
        }, 150)
    }, 5000)


})

// 앞으로 가는 슬라이드 버튼
$('.back').click(function() {
    temp -= 100;
    if (temp == -800) {
        temp = 000
    }
    $('.slider').css({
        'transform':`translate(${temp}vw)`
    })
    px = (380/7) * Math.abs(temp)/100
    $('.front-bar').animate( {
        width:`${px}px`
    }, 150)
})

// 뒤로 가는 슬라이드 버튼
$('.for').click(function() {
    temp += 100;
    if (temp == 100) {
        temp = -700
    }
    $('.slider').css({
        'transform':`translate(${temp}vw)`
    })
    px = (380/7) * Math.abs(temp)/100
    $('.front-bar').animate( {
        width:`${px}px`
    }, 150)
})

$('#main_right_toggle_1').click( function() {
    if($('.toggle_main_right_nav_list').hasClass('d_none') === true) {
        $('.toggle_main_right_nav_list').removeClass('d_none');
        $('.toggle_main_right_nav_list2').addClass('d_none');
        $('#main_right_toggle_select_id1').addClass('main_right_toggle_select')
        $('#main_right_toggle_select_id2').removeClass('main_right_toggle_select')
    }
})

$('#main_right_toggle_2').click( function() {
    if($('.toggle_main_right_nav_list2').hasClass('d_none') === true) {
        $('.toggle_main_right_nav_list2').removeClass('d_none');
        $('.toggle_main_right_nav_list').addClass('d_none');
        $('#main_right_toggle_select_id2').addClass('main_right_toggle_select')
        $('#main_right_toggle_select_id1').removeClass('main_right_toggle_select')
    }
})