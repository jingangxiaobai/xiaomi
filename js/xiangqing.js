/**
 * Created by Administrator on 2016/8/14.
 */
$(function(){
    $(".btnPart1 button:first-child").addClass("currentBtn");
    $(".btnPart1").find("button").click(function(){
        $(this).parent().children().removeClass("currentBtn");
        $(this).addClass("currentBtn");
    });
    $(".btnPart2").find("button").click(function(){
        $(this).parent().children().removeClass("currentBtn");
        $(this).addClass("currentBtn");
    });
    $(".btnPart2 button:eq(0)").click(function(){
        $("#mainImg").html('<img src= "images/mi5-yin.jpg"  >')
    });
    $(".btnPart2 button:eq(1)").click(function(){
        $("#mainImg").html('<img src= "images/mi5-hei.jpg"  >')
    });
    $(".btnPart2 button:eq(2)").click(function(){
        $("#mainImg").html('<img src= "images/mi5-jin.jpg"  >')
    });
    $(".btnPart2 button:eq(3)").click(function(){
        $("#mainImg").html('<img src= "images/mi5-zi-webfile.jpg"  >')
    });
});