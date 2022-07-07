$(function(){




    $("form").validate({
        rules: {
            test_text: {
                required: true
            }
        },
        messages: {
            test_text: {
                required: '入力忘れてますよ'
            }
        }

    });





    });