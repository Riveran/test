$(document).ready(function(){
    $('.rev_slider').slick({
       arrows:false,
       dots: true
    });

    $('.firstblock a').on('click', function(event) {
        event.preventDefault();
        let sc = $(this).attr("href"),
            dn = $(sc).offset().top;
        $('html, body').animate({scrollTop: dn}, 1000);
        
    });

    function showSuccessRequest() {
        const snackbar = $("#snackbar").addClass("show");
        console.log(snackbar)
        setTimeout(() => { snackbar.removeClass("show"); }, 3000);
    }

    $('.tablecontent').each((index, item) => {
        if (!index) {
            return $(item).css('display', 'block');
        }
    
        $(item).css('display', 'none');
    });

    $('.tablinks').on('click', function(event) {
        $('.tablecontent').css('display', 'none');

        const menuButton = $(event.currentTarget);
        const contentName = menuButton.data('content');

        $(`#${contentName}`).css('display', 'block');
    });

    $('.input_mail button').on("click", function (){     
        const mailValue = $('#mailform').val() || '';

        if(!mailValue) return;

        $.ajax({
            url: 'https://example.com/api/contacts',
            method: 'POST',
            data: JSON.stringify({
                userEmail: mailValue
            })
        }).done((response) => {
            console.log('success');
        }).fail((error) => {
            showSuccessRequest()
        })
    });
});








