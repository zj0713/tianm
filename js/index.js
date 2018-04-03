//topbar leftbar
{
    $(window).scroll(function () {
        let st = $(window).scrollTop();
        if (st > 700) {
            $(".topbar").show();
        } else {
            $(".topbar").hide();
        }
        if (st > 500) {
            $(".leftbar").show();
        } else {
            $(".leftbar").hide();
        }
    });
}
//头部导航1
{
    $(".head_di_right2")
        .mouseenter(function () {
            let index=$(this).index(".head_di_right2");
            $(".head_di_right2_chu").eq(index).show()
        })
        .mouseleave(function () {
            let index = $(this).index(".head_di_right2");
            $(".head_di_right2_chu").eq(index).hide()
        })
}
//头部导航2
{
    $(".head_di_right4")
        .mouseenter(function () {
            $(".hdr41").show()
        })
        .mouseleave(function () {
            $(".hdr41").hide()
        })
}
//头部导航3
{
    $(".head_di_right1")
        .mouseenter(function () {
            $(".wzdh_chu").show()
        })
        .mouseleave(function () {
            $(".wzdh_chu").hide()
        })
}
//banner左
{
    $(".lunboxia_left_li")
        .mouseenter(function () {
            let index = $(this).index(".lunboxia_left_li");
            $(".lunboxia_left_li_chu").eq(index).show();
        })
        .mouseleave(function () {
            let index = $(this).index(".lunboxia_left_li");
            $(".lunboxia_left_li_chu").eq(index).hide();
        })
}
//右侧
{
    $(".ceding33").mouseenter(function () {
        $(".ceding_chu2").css("opacity", "1");
    });
    $(".ceding33").mouseleave(function () {
        $(".ceding_chu2").css("opacity", "0");
    });


    $(".ceding1").mouseenter(function () {
        $(".ceding_chu")
            .fadeIn()
            .css("opacity", "1")
            .removeClass("flyOut").addClass("flyIn");
    });
    $(".ceding1").mouseleave(function () {
        $(".ceding_chu")
            .fadeOut()
            .css("opacity", "0")
            .removeClass("flyIn").addClass("flyOut");
    });

    $(".ceding31").mouseenter(function () {
        let index = $(this).index(".ceding31");
        $(".ceding_chu1").eq(index)
            .fadeIn()
            .css("opacity", "1")
            .removeClass("flyOut").addClass("flyIn");
    });
    $(".ceding31").mouseleave(function () {
        let index = $(this).index(".ceding31");
        $(".ceding_chu1").eq(index)
            .fadeOut()
            .css("opacity", "0")
            .removeClass("flyIn").addClass("flyOut");
    });

    $(".ceding35").mouseenter(function () {
        $(".ceding_chu5")
            .fadeIn()
            .css("opacity", "1")
            .removeClass("flyOut").addClass("flyIn");
    });
    $(".ceding35").mouseleave(function () {
        $(".ceding_chu5")
            .fadeOut()
            .css("opacity", "0")
            .removeClass("flyIn").addClass("flyOut");
    });

    $(".ceding34").mouseenter(function () {
        $(".ceding_chu4")
            .fadeIn()
            .css("opacity", "1")
            .removeClass("flyOut").addClass("flyIn");
    });
    $(".ceding34").mouseleave(function () {
        $(".ceding_chu4")
            .fadeOut()
            .css("opacity", "0")
            .removeClass("flyIn").addClass("flyOut");
    });
}
//banner
{
    $(".lunboxia_dian li").mouseenter(function () {
        let index = $(this).index(".lunboxia_dian li");
        $(".lunboxia_dian li").removeClass("lunboxia_dian_li_active").eq(index).addClass("lunboxia_dian_li_active");
        $(".lunboxia_img").removeClass("lunboxia_img_active").eq(index).addClass("lunboxia_img_active");
        n = index;
    });

    //自动轮播
    let n = 0;
    let l = $(".lunboxia_img").length;

    let st=setInterval(move, 3000);

    function move() {
        n++;
        if (n === l) {
            n = 0;
        }
        if (n < 0) {
            n = l - 1;
        }
        $(".lunboxia_dian li").removeClass("lunboxia_dian_li_active").eq(n).addClass("lunboxia_dian_li_active");
        $(".lunboxia_img").removeClass("lunboxia_img_active").eq(n).addClass("lunboxia_img_active");
        switch (n){
            case "1":$(".lunboxia").removeClass("")
        }
    }

    $(".lunboxia_img").mouseenter(function () {
        clearInterval(st)
    });
    $(".lunboxia_img").mouseleave(function () {
        st=setInterval(move,3000);
    })

}
//leftbar
{
    $(".leftbar2_a").click(function () {
        let index = $(this).index(".leftbar2_a");
        let ot = $(".content_zhu_item").eq(index).offset().top - 100;
        $(".leftbar2_a").removeClass("active1");
        $(".leftbar2_a").eq(index).addClass("active1");
        $("html,body").animate({scrollTop: ot}, 200);
    });
    let arr2=["#64C333","#FF0036","#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#FF0036"];
    $(window).scroll(function () {
        let st = $(window).scrollTop();

        $(".content_zhu_item").each(function (e) {
            if(st>$(".content_zhu_item").eq(e).offset().top-200){
                $(".leftbar2_a").css("background","rgba(0,0,0,0.8)").eq(e).css("background",arr2[e]);
            }
        })

    });
}
//totop
{
    $(".leftbar2_a2").click(function () {
        $("html,body").animate({scrollTop: 0})
    })
}
//限时区域
{
    let i = 0;

    function active() {
        i++;
        if (i === 2) {
            i = 0;
        }
        if (i < 0) {
            i = 1;
        }
        $(".content_zhu_item_bottom_right_item1_di_head li").removeClass("content_zhu_item_active_li").eq(i).addClass("content_zhu_item_active_li");
        $(".czibri_body_content").removeClass("czibri_body_active").eq(i).addClass("czibri_body_active");
    }

    let t = setInterval(active, 3000);

    $(".content_zhu_item_bottom_right_item1_di_head li").mouseenter(function () {
        clearInterval(t);
        let index = $(this).index(".content_zhu_item_bottom_right_item1_di_head li");
        $(".content_zhu_item_bottom_right_item1_di_head li").removeClass("content_zhu_item_active_li").eq(index).addClass("content_zhu_item_active_li");
        $(".czibri_body_content").removeClass("czibri_body_active").eq(index).addClass("czibri_body_active");
        i = index;
    });
    $(".content_zhu_item_bottom_right_item1_di_head li").mouseleave(function () {
        t = setInterval(active, 3000);
    })

}