var arr = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

$(".search-icon").click(function() {
    $(this).toggleClass("fa-times");
    $(".search-screen").toggleClass("active");
});

$(".search-text").keyup(function() {
    if ($(this).val() != "") {
        $(".search-btn").css("opacity", 1);
        $(".search-btn").css("transform", "rotate(0deg)");
    } else {
        $(".search-btn").css("opacity", 0);
        $(".search-btn").css("transform", "rotate(45deg)");
    }
});

$("#autocomplete").autocomplete({
    lookup: arr
});