
$(document).ready(function () {
    var vids = $("video");
    $.each(vids, function () {
        this.controls = false;
    });

    $("video").click(function () {
        //console.log(this); 
        if (this.paused) {
            this.play();
        } else {
            this.pause();
        }
    });
});