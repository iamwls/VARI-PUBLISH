$(document).ready(function () {
  $("div.mainmenu div").click(function () {
    var tab_id = $(this).attr("data-tab");

    $("div.mainmenu div").removeClass("current");
    $(".tab-content").removeClass("current");

    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
