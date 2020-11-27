/**
 * The control panel.
 */
var Panel = {
    init: function() {
        var $algo = $('#algorithm_panel');

        $('.panel').draggable();
        $('.accordion').accordion({
            collapsible: false,
        });

        $('#hide_instructions').click(function() {
            $('#instructions_panel').slideUp();
        });
    },
    /**
     * Get the user selected path-finder.
     * TODO: clean up this messy code.
     */
    
};