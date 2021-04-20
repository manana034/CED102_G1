$(document).ready(function(){
    setTimeout(() => {
        
    // 3_Calories Item 切換分頁
    $('#exercise').click(function(){
        $('.main_food').css('display','none');
        $('.main_exercise').css('display','inline-flex');
    });
    $('#food').click(function(){
        $('.main_exercise').css('display','none');
        $('.main_food').css('display','inline-flex');
    });
    // tabla內的icon hover效果
    $('img.delete').hover(function(){
        $(this).attr('src', './icon/backend_trashopen.png');
    },function(){
        $(this).attr('src', './icon/backend_trash.png');
    });
    $('img.edit').hover(function(){
        $(this).attr('src', './icon/backend_editing.png');
    },function(){
        $(this).attr('src', './icon/backend_edit.png');
    });
    // menu底色變
    let x = parseInt(location.pathname.substr(1,1));
    $`(li:nth-child(${x}))`.attr('class', 'on');
    // 日曆
    // var drp = $('#daterange').data('daterangepicker');
    // $('input[name="dates"]').daterangepicker();

    $('input[name="singledate"]').daterangepicker({
        "locale": {
            "format": "YYYY-MM-DD",
        },
        "autoApply": true,
        singleDatePicker: true,
        opens: 'center',
    });

    $('input[name="daterange"]').daterangepicker({
        "locale": {
            "format": "YYYY-MM-DD",
            "separator": " ~ "
        },
        "autoApply": true,
        opens: 'center',
    }, function(start, end, label) {
        console.log('New date range selected: ' + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
    },500);
});
