
var positions = JSON.parse(localStorage.positions || "{}");
$(function () {
    var d = $("[id=draggable]").attr("id", function (i) {
        return "draggable_" + i
    })
    $.each(positions, function (id, pos) {
        $("#" + id).css(pos)
    })

    d.draggable({
        containment: "#containment-wrapper",
        scroll: false,
        stop: function (event, ui) {
            positions[this.id] = ui.position
            localStorage.positions = JSON.stringify(positions)
        }
    });
            
});
// inventory toggle
// $('.charlie').dblclick(function() {
//     $('#charlie-inventory').toggle();


$(function() {
    $( ".draggable" ).draggable();
  });


// const loot = document.querySelectorAll('.stealable');

// for (var i = 0; i < loot.length; i++) {
//     loot[i].addEventListener('click', function(e) { 
//         if (e.altKey) {
//             // console.log(this);
//             this.style.display="none";
//         }
//     })  
// }
