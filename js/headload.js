$(document).ready(function(){
    //图片预加载 new

    var imgload = ['./image/hiMoeNya.png',
                    './image/hjl1.jpg'];
    var len = imgload.length;
    var i = 0;

    function LoadImg(i)
    {
        var img = new Image();
        img.src = imgload[i];
        console.log(i);
        img.onload = function()
        {
            if(i++ < len - 1)
            {
                LoadImg(i);
            }
            else
            {
                console.log("预加载完成！");
                setTimeout(function () { Load(); }, 200);
            }
        }
    }
    console.log("预加载开始！");
    LoadImg(i);

    //------------
});

function Load()
{
    //二级菜单动画效果以及logo淡入效果
    $(".li1").each(function(){
        $(this).mouseover(function(){
            $(this).children("ul").slideDown(300);
        });
        $(this).mouseleave(function(){
            $(this).children("ul").hide();
        });
    })
    $(".headphoto").fadeIn(1800);
    //---------
}