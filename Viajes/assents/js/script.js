$(document).ready(function(){
    $("a").click(function() {
        var dato = this.hash
        $("html, body").animate(
            {
                scrollTop: $(dato).offset().top-70
            },
            800
        )
    })
})

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

