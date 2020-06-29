$(document).ready(function(){
    var midabme1 = document.getElementById("midabme1");
    var midabme11 = midabme1.innerHTML;
    var midabme2 = document.getElementById("midabme2");
    var midabme22 = midabme2.innerHTML;
    var midabme3 = document.getElementById("midabme3");
    var midabme33 = midabme3.innerHTML;
    var midabme4 = document.getElementById("midabme4");
    var midabme44 = midabme4.innerHTML;

    midabme1.innerHTML = midabme11 + "→";

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
    }

    function MID2()
    {
        midabme2.innerHTML = midabme22 + "→";
        midabme1.innerHTML = midabme11;
        midabme3.innerHTML = midabme33;
        midabme4.innerHTML = midabme44;
    }

    function MID3()
    {
        midabme3.innerHTML = midabme33 + "→";
        midabme1.innerHTML = midabme11;
        midabme2.innerHTML = midabme22;
        midabme4.innerHTML = midabme44;
    }

    function MID4()
    {
        midabme4.innerHTML = midabme44 + "→";
        midabme1.innerHTML = midabme11;
        midabme2.innerHTML = midabme22;
        midabme3.innerHTML = midabme33;
    }
});