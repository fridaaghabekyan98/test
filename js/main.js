var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))


$(document).ready(function () {
    $('.dropdown-submenu a.test').on("click", function (e) {
        $(this).next('ul').toggle();
        e.stopPropagation();
        e.preventDefault();
    });
    $("[data-bs-toggle=popover]").popover({
        container: 'body',
        html: true,
        content: '<p id="myPopup1"> ' +
            '<div id="popover-content" class="hide">\n' +
            '  <div class="green">\n' +
            '    <img src="images/non.png" alt="">\n' +
            '     <span>Non-working day</span>\n' +
            '     <img src="images/pencil.png" alt="" class="edit">\n' +
            '  </div>\n' +
            '  <div class="blue">\n' +
            '     <img src="images/team.png" alt="">\n' +
            '     <span>Team building</span>\n' +
            '     <img src="images/pencil.png" alt="" class="edit">\n' +
            '  </div>\n' +
            '</div></p>'
    })
});


