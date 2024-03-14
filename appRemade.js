var counter = 0;
function printValue(divID, value) {
    $("#" +divID).html(value)
}
printValue("counter", 0);

$("#inc").on('click', increment);

function increment() {
    counter++;
    printValue("counter", counter);
}

var textValue = $('#inputTextId').val();
$('#inputTextId').val('123');