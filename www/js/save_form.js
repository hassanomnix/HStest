    function store(){
       localStorage.clear();
        var $inputs = $('input[type="text"],input[type="email"],input[type="number"]');
        $inputs.each(function(){
            var name = $(this).attr('name');
            var value = $(this).val();
            var order = $(this).data('order');
            if(value){
                var itemdata = {};
                itemdata['value'] = value;
                itemdata['name'] = name;

                var saved = window.localStorage.setItem(order,JSON.stringify(itemdata));
            }

        });
    }

$(document).ready(function(){

       $('.review_of_data_btn').show();
       $('.review_of_data_btn').click(function(){

            store();
            window.location.href = "save_data.html";

        });

});





