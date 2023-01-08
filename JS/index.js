let menuScript = {
    handleToggleMenu: function () {
        $(".toggle-submenu").on("click", function (e) {

            let parent = $(this).parent();

            parent.hasClass("active") ? parent.removeClass("active") : parent.addClass("active");
        });
    },
    init: function () {
        this.handleToggleMenu();
    }
}

$(document).ready(function () {
    menuScript.init();
});