// Когда html документ готов (прорисован)
$(document).ready(function () {
    // При клике по значку корзины открываем всплывающее(модальное) окно
    $('#modalButton').click(function () {
        $('#exampleModal').appendTo('body');

        $('#exampleModal').modal('show');
    });

    // Собыите клик по кнопке закрыть окна корзины
    $('#exampleModal .btn-close').click(function () {
        $('#exampleModal').modal('hide');
    });

    // Обработчик события радиокнопки выбора способа доставки
    $("input[name='requires_delivery']").change(function () {
        var selectedValue = $(this).val();
        // Скрываем или отображаем input ввода адреса доставки
        if (selectedValue === "1") {
            $("#ChoseShopField").show();
            $("#deliveryAddressField").hide();
        } else {
            $("#ChoseShopField").hide();
            $("#deliveryAddressField").show();
        }
    });

    // // Ловим собыитие клика по кнопке "заказать"

    // function checkForm() {
    //     var fields = new Array('street','house');
    //     var submit = true;
    //     for (var x=0;x<fields.length;x++) {
    //         if (document.forms.f2.elements[fields[x]].value == '') {
    //             submit = false;
    //         }
    //     }
    //     if (!submit) { alert('Не все обязательные поля заполнены!.'); }
    //     return submit;
    // }


    // btn = form.find('.final-create-order');
    // setInterval(function () {
    //     checkInput();
    //     var street = document.getElementById('street').value;
    //     var house = document.getElementById('house').value;
    //     var delivery_pickup = document.getElementById("id_requires_delivery").value;
    //     if (delivery_pickup === "0" && house !== '' && street !== '') {
    //         console.log(delivery_pickup);
            
    //         e.preventDefault();
    //     } else {
    //         form.submit();
    //     }
    // });



});