
// Toggles 'read more' and 'read less' strings (data attributes) that are on a 
// regular bootstrap collapse element.

$('#wklyLoveMoreLess').on('click', function () {
    var $this = $(this);
    var $more = $(this).attr("data-txt-more");
    var $less = $(this).attr("data-txt-less");
    $this.toggleClass('SeeMore');
    if ($this.hasClass('SeeMore')) {
        $this.text($less);
    } else {
        $this.text($more);
    }
});
