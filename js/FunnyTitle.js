var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/image/true.png");
         document.title = '(╥╯^╰╥)你快回来~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/image/true.png");
         document.title = '(o´ω`o)ﾉ爱你哟~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
