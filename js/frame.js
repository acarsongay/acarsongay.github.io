
function frame(src_string) {
    var frame = document.getElementById("frame");
    frame.setAttribute("src", src_string);
    frame.setAttribute("width", "800px");
    frame.setAttribute("height", "600px");
    //document.getElementById("frame_canvas").appendChild(frame);
}