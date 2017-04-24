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

     $('.btn-large')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime vanishIn',
            classToRemove: 'a-hide',
            offset: 200
        });

     $('.tli')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime tinLeftIn',
            classToRemove: 'a-hide',
            offset: 200
        });

        $('.tdi')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime tinDownIn',
            classToRemove: 'a-hide',
            offset: 200
        });
        $('.tri')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime tinRightIn',
            classToRemove: 'a-hide',
            offset: 200
        });

        setInterval(function(){
        	$('.brand-logo').toggleClass('animated tada');
        }, 1000);
   
});
