$(function() {
    $("#sample1 .header").resizable({
        alsoResize: "#sample2 .desc"});
    $("#sample2 .desc").resizable({
        alsoResize: "#sample1 .header"});
});