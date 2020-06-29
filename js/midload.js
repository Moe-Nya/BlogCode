$(document).ready(function(){
    var midabme1 = document.getElementById("midabme1");
    var midabme11 = midabme1.innerHTML;
    var midabme2 = document.getElementById("midabme2");
    var midabme22 = midabme2.innerHTML;
    var midabme3 = document.getElementById("midabme3");
    var midabme33 = midabme3.innerHTML;
    var midabme4 = document.getElementById("midabme4");
    var midabme44 = midabme4.innerHTML;

    var midAboutMe3 = document.getElementById("midAboutMe3");

    midabme1.innerHTML = midabme11 + "→";
    midAboutMe3.innerHTML = "来自新世界、少女终末旅行、月色真美、约定的梦幻岛、有顶天家族、轻音少女、日常";
    midabme1.style.color = "#1fb3b3ab";

    midabme1.onclick = MID1;
    midabme2.onclick = MID2;
    midabme3.onclick = MID3;
    midabme4.onclick = MID4;

    function MID1()
    {
        midabme1.innerHTML = midabme11 + "→";
        midabme2.innerHTML = midabme22;
        midabme3.innerHTML = midabme33;
        midabme4.innerHTML = midabme44;

        midabme2.style.color = "#000000b7";
        midabme3.style.color = "#000000b7";
        midabme4.style.color = "#000000b7";

        midAboutMe3.innerHTML = "来自新世界、少女终末旅行、月色真美、约定的梦幻岛、有顶天家族、轻音少女、日常";
        midabme1.style.color = "#1fb3b3ab";
    }

    function MID2()
    {
        midabme2.innerHTML = midabme22 + "→";
        midabme1.innerHTML = midabme11;
        midabme3.innerHTML = midabme33;
        midabme4.innerHTML = midabme44;

        midabme1.style.color = "#000000b7";
        midabme3.style.color = "#000000b7";
        midabme4.style.color = "#000000b7";

        midAboutMe3.innerHTML = "平泽唯、中野梓、土间埋、长野原美绪、丈枪由纪、鹿目圆";
        midabme2.style.color = "#1fb3b3ab";
    }

    function MID3()
    {
        midabme3.innerHTML = midabme33 + "→";
        midabme1.innerHTML = midabme11;
        midabme2.innerHTML = midabme22;
        midabme4.innerHTML = midabme44;

        midabme1.style.color = "#000000b7";
        midabme2.style.color = "#000000b7";
        midabme4.style.color = "#000000b7";

        midAboutMe3.innerHTML = "Minecraft、Tom Clancy's Rainbow Six: Siege、Final Fantasy XIV、剑灵、NI NO KUNI 2";
        midabme3.style.color = "#1fb3b3ab";
    }

    function MID4()
    {
        midabme4.innerHTML = midabme44 + "→";
        midabme1.innerHTML = midabme11;
        midabme2.innerHTML = midabme22;
        midabme3.innerHTML = midabme33;

        midabme1.style.color = "#000000b7";
        midabme2.style.color = "#000000b7";
        midabme3.style.color = "#000000b7";

        midAboutMe3.innerHTML = "学生(全栈游戏工程师、美术监督、音乐监督)";
        midabme4.style.color = "#1fb3b3ab";
    }
});