window.onload = init;

function init()
{
    var loadhead = document.getElementById("header");
    var mid = document.getElementById("mid");
    //头部样式//
    loadhead.innerHTML = "<a id = \"cat\"></a>\
                        <div class = \"headborder\">\
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
                                <li class = \"li1\"><a class = \"a1\" href = \"#\">关于我~</a></li>\
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
    //-------//

    //侧边栏样式和jio部样式//
    mid.innerHTML = "\
                <div class = \"midimfor\">\
                        <div class = \"myimformation\">\
                        <div class = \"head\"></div>\
                        <div class = \"talk\"><p><span style=\"color:red\">写代码是热爱，</span><span style=\"color:turquoise\">写到世界充满爱！</span></p></div>\
                        </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle\"></i>\
                        <a class = \"a4\" href = \"http://wpa.qq.com/msgrd?v=3&uin=1404058996&site=qq&menu=yes\" target = \"_blank\">&nbspQQ</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle2\"></i>\
                        <a class = \"a4\" href = \"https://space.bilibili.com/8522226\" target = \"_blank\">&nbspBliBli</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle3\"></i>\
                        <a class = \"a4\" href = \"https://github.com/Moe-Nya\" target = \"_blank\">&nbsp&nbspGitHub</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle4\"></i>\
                        <a class = \"a4\" href = \"https://twitter.com/C_Moe_Nya_N\" target = \"_blank\">&nbsp&nbspTwitter</a>\
                    </div>\
                    <div class = \"midAboutMe\">\
                        <i class = \"midAboutMeStyle5\"></i>\
                        <a class = \"a4\" href = \"#\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp140hjl#gmail.com</a>\
                    </div>\
                    <div class = \"midAboutMe2\">\
                        <div class = \"midAboutMeStyle6\" id = \"midabme1\">\
                        最喜欢的作品\
                        </div>\
                        <div class = \"midAboutMeStyle6\" id = \"midabme2\">\
                        最喜欢的女孩子\
                        </div>\
                        <div class = \"midAboutMeStyle6\" id = \"midabme3\">\
                        最喜欢的游戏\
                        </div>\
                        <div class = \"midAboutMeStyle6\" id = \"midabme4\">\
                        工作\
                        </div>\
                    </div>\
                    <div class = \"midAboutMe3\" id = \"midAboutMe3\"></div>\
                </div>\
                <div class = \"writebox\" id = \"writebox\"></div>\
                <div id = \"footer\">\
                <p class = \"footstyle\">版权所有©2018-2020&nbsp <a class = \"foota\" target = \"_blank\" href = \"https://nekohome.moenya.cat\">Neko 喵窝</a>\
                <br>Hi,MoeNyaです by MoeNya with <i class = \"heart\"></i>\
                <br><span class = \"shake-slow\">(●'◡'●)ﾉ</span>本博客在各种灾难中艰难的存活了<span class = \"time\" id = \"time\"></span>\
                </p>\
                </div>\
                    ";
    //-------//
}