$(document).ready(function() {
    // SideBar Toggle JS
    $('#toggle-sidebar').click(function() {
        $(this).hide();
        $('aside').css('width', '0px').css('visibility', 'hidden');
        $('#show-toggle').removeClass('lg:hidden')
    })
    $('#show-toggle-btn').click(function() {
        $('aside').css('width', '260px').css('visibility', 'visible');
        $('#toggle-sidebar').show();
        $('#show-toggle').addClass('lg:hidden')
    })
    // SideBar Toggle JS

    // New Chat JS
    $('.add-new-chat').click(function() {
       $('#chat-body').addClass('hidden') 
       $('#inial-part-new').removeClass('hidden');
    });
    // New Chat JS
})