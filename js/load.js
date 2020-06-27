window.onload = init;

function init()
{
    var loadhead = document.getElementById("header");
    var loadfooter = document.getElementById("footer");
    var mid = document.getElementById("mid");
    loadhead.innerHTML = "<div class = \"headborder\">\
    <div class=\"headphoto\"></div>\
    <div class = \"NavigationBar\">\
        <ul class = \"ul1\" id = \"ulone\">\
            <li class = \"li1\"><a class = \"a2\" href = \"https://nekohome.moenya.cat\">Neko喵窝</a></li>\
            <li class = \"li1\"><a class = \"a1\" href = \"https://testa.moenya.cat\">首页</a></li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">抓到我</a>\
                <ul class = \"ul2\" id = \"ultwo\">\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://space.bilibili.com/8522226\">Bilibili</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://twitter.com/C_Moe_Nya_N\">Twitter</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://github.com/Moe-Nya\">GitHub</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://steamcommunity.com/id/moenya/\">Steam</a></li>\
                </ul>\
            </li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">邻家友猫</a></li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">便利贴~</a></li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">追番!</a>\
                <ul class = \"ul2\" id = \"ultwo\">\
                    <li class = \"li2\"><a class = \"a3\" href = \"#\">动画电影</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"#\">TV动画</a></li>\
                </ul>\
            </li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">留言</a></li>\
        </ul>\
    </div>\
</div>";

    mid.innerHTML = "<div class=\"myimformation\">\
                    <div class=\"head\"></div>\
                    <div class=\"talk\"><p><span style=\"color:red\">写代码是热爱，</span><span style=\"color:turquoise\">写到世界充满爱！</span></p></div>\
                    </div>";
}