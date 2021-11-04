var Link = {
    setColor : function(color) {
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while(i < alist.length) {
        //     console.log(alist[i]);
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }

        // 모든 웹 페이지의 a 태그를 제이쿼리로 제어하겠다. 
        $('a').css('color', color);
    }
}
var Body = {
    setColor : function(color) {
        //document.querySelector('body').style.color = color;
        $('body').css('color', color);
    },
    setBackgroundColor : function(color) {
        //document.querySelector('body').style.backgroundColor = color;
        $('body').css('background-color', color);
    }
}
// function bodySetColor(color) {
//     document.querySelector('body').style.color = color;
// }
// function bodySetBackgroundColor(color) {
//     document.querySelector('body').style.backgroundColor = color;
// }
function nightDayHandler(self) {
    var target = document.querySelector('body');

    if(self.value === 'night') {
        Body.setBackgroundColor('yellow');
        Body.setColor('orange');
        self.value = 'day';

        Link.setColor('powderblue');
    } else { 
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
                    
        Link.setColor('blue');
    }
}