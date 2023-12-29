$(document).ready(function () {
    // Initialize Isotope
    $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
});
$(document).ready(function () {
    // Filter items on button click
    $('.filter-button').on('click', function () {
        var filterValue = $(this).attr('data-filter');
        $('.portfolio-container').isotope({ filter: filterValue });
    });
});