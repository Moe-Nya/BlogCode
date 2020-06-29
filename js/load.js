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
                    <li class = \"li2\"><a class = \"a3\" href = \"https://space.bilibili.com/8522226\" target = \"_blank\">Bilibili</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://twitter.com/C_Moe_Nya_N\" target = \"_blank\">Twitter</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://github.com/Moe-Nya\" target = \"_blank\">GitHub</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"https://steamcommunity.com/id/moenya/\" target = \"_blank\">Steam</a></li>\
                </ul>\
            </li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">邻家友猫</a></li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">便利贴~</a></li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">追番!</a>\
                <ul class = \"ul2\" id = \"ultwo\">\
                    <li class = \"li2\"><a class = \"a3\" href = \"#\" target = \"_blank\">动画电影</a></li>\
                    <li class = \"li2\"><a class = \"a3\" href = \"#\" target = \"_blank\">TV动画</a></li>\
                </ul>\
            </li>\
            <li class = \"li1\"><a class = \"a1\" href = \"#\">留言</a></li>\
        </ul>\
    </div>\
</div>";

    mid.innerHTML = "<div class = \"main\">\
                    <div class = \"midimfor\">\
                        <div class = \"myimformation\">\
                        <div class = \"head\"></div>\
                        <div class = \"talk\"><p><span style=\"color:red\">写代码是热爱，</span><span style=\"color:turquoise\">写到世界充满爱！</span></p></div>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle\"></i>\
                        <a class = \"a4\" href = \"http://wpa.qq.com/msgrd?v=3&uin=1404058996&site=qq&menu=yes\" target = \"_blank\">&nbsp&nbspQQ</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle2\"></i>\
                        <a class = \"a4\" href = \"https://space.bilibili.com/8522226\" target = \"_blank\">&nbsp&nbspBliBli</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle3\"></i>\
                        <a class = \"a4\" href = \"https://github.com/Moe-Nya\" target = \"_blank\">&nbsp&nbspGitHub</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle4\"></i>\
                        <a class = \"a4\" href = \"https://twitter.com/C_Moe_Nya_N\" target = \"_blank\">&nbsp&nbspTwitter</a>\
                    </div>\
                    <div class = \"midAboutMe2\">\
                        <div class = \"midAboutMeStyle5\" id = \"midabme\">\
                        111\
                        </div>\
                        <div class = \"midAboutMeStyle6\" id = \"midabme\">\
                        111\
                        </div>\
                    </div>\
                    </div>\
                    </div>\
                    ";
}