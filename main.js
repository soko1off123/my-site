//$(".result").html("asd");

$(".item").on("click", function(event) {

    //получаем кнопку, какую нажали
    let button = $(event.currentTarget).html();

    // если мы нажали "C"
    if (button == "C") {
        $(".example").html(null);
        $(".result").html(null);
    }
    // если мы нажали "="
    else if (button == "=") {

        let example = $(".example").html();
        let result;
        try {
            result = eval(example);
        } catch (error) {
            result = "Error";
        }

        $(".result").html(result);

    } else {
        //получаем новый пример
        let example = $(".example").html() + button;

        //записываем новый пример
        $(".example").html(example);
    }

});