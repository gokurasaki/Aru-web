TweenMax.to('.box' , 3 , {
    y: 200,
    x: 100
})
TweenMax.to('.box01' , 2 , {
    y: 200,//位移
    x: 100,//位移
    // ease: Power2.easeOut
    // ease : Elastic.easeOut
    ease: Bounce.easeOut,// 補間動畫
    rotation : 360,//旋轉
    width : '80%',//寬度
})
TweenMax.from('.box02' , 2 , {
    x: 400,
    repeat : 7,
    yoyo : true
    
});


TweenMax.to('.box03' , 1 , {
    rotation : 360,
    repeat : -1,
    ease: Power0.easeNone

});
TweenMax.staggerTo('.box04',1,{
   x: 100,
   opacity: 1

},0.6)





TweenMax.staggerFromTo('.box04', 1, {
    x:0,
    opacity:0
}, {
    x: 200,
    opacity: 1
} , 0.6)
