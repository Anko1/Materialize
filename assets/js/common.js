$( document ).ready(function(){
	$(".button-collapse").sideNav();
    $('.parallax').parallax();


    $('.q-left')
        .addClass('a-hide')
        .viewportChecker({
        classToAdd: 'a-show magictime spaceInLeft',
        classToRemove: 'a-hide',
        offset: 200
    });

    $('.q-right')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime spaceInRight',
            classToRemove: 'a-hide',
            offset: 200
        });

    // $('.q-left').hover(function () {
    //     $(this).addClass('magictime puffIn');
    // });

});
