$(function () {
    $(".top_bb").click(function () {
        var spL = $(".sp_nav a").length;
        var spW = spL * 78;
        if ($(this).hasClass("spA")) {
            $(this).removeClass("spA");
            $(".sp_m").stop(true, false).show(function () { $(this).animate({ "width": 97 }, 200) });
            $(".sp_nav").stop(true, false).animate({ width: 0 }, 200);
            $(".sp").stop(true, false).animate({ width: 0 }, 200);

        } else {
            $(this).addClass("spA");
            $(".sp_m").stop(true, false).animate({ width: 0 }, 200, function () { $(this).hide() });
            $(".sp_nav").stop(true, false).animate({ width: spW }, 200);
            $(".sp").stop(true, false).animate({ width: spW }, 200);
        }
    });
})
