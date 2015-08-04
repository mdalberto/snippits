// Enables a href link to have an added #xxxxx and that xxxxx be the id 
// of the tab element on the target page hus opening up the tab upon page load.


function enableLinkingToTabs() {
    // https: //github.com/twbs/bootstrap/issues/2415
    $(function () {
        var hash = window.location.hash;
        //alert(hash);
        // do some validation on the hash here

        hash && $('ul.tabpanel-tabs a[href="' + hash + '"]').tab('show');
        parent.location.hash = '';
    });

    // made an simple a tag with data attribute click a tab that exists on the same page.
   

    $("a[data-tab-destination]").on('click', function () {
        
        var tab = $(this).attr('data-tab-destination');
        $("#" + tab).click();

        //TODO remove hash
        //var hash = window.location.hash;

    });
}

