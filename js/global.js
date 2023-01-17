let menuScript = {
    addOverlay: function () {
        const body = $("body");

        const html = `<div id="side_panel_overlay" class="side-panel__overlay"></div>`;

        body.prepend(html);
    },
    removeOverlay: function () {
        $("#side_panel_overlay").remove();
    },
    hadleToggleSidePanel: function () {
        const sidePanel = $("#side_panel");
        const self = this;

        $(document).on("click", ".mobile-nav", function (e) {
            sidePanel.addClass("active");
            self.addOverlay();
        });

        $(".btn-toggle-canvas").on("click", function (e) {
            sidePanel.removeClass("active");
            self.removeOverlay();
        });

        $(document).on("click", ".side-panel__overlay", function () {
            sidePanel.removeClass("active");
            self.removeOverlay();
        });

    },
    handleToggleMenu: function () {
        $(document).on("click", ".toggle-submenu", function (e) {

            let parent = $(this).parent();

            parent.hasClass("active") ? parent.removeClass("active") : parent.addClass("active");
        });
    },
    init: function () {
        this.handleToggleMenu();
        this.hadleToggleSidePanel();
    }
}

let myAccordion = {
    handleToggle: function () {
        $(document).on("click", ".my-accordion > .toggle", function (e) {
            $(this).parent().hasClass("active") ? $(this).parent().removeClass("active") : $(this).parent().addClass("active");
        });
    },
    init: function () {
        this.handleToggle();
    }
}

$(document).ready(function () {

    menuScript.init();
    myAccordion.init();

});