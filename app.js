$('#button-input').click(function () { 

    $('.row').html('');

    $.ajax({
        type: "GET",
        url: "https://islamic-api-indonesia.herokuapp.com/api/data/kisahnabi",
        dataType: "JSON",
        data : {
            "nabi" : $('#search-input').val()
        },
        success: function (response) {
            if (response.status === true) {
                let status = response.result.nabi;
    
                $('.row').html('<h1>'+ status.nabi +'</h1>');
                
                console.log(status.nabi)
            } else {
                alert('tidak ditemukan')
            }
        }
    }); 
});