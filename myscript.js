// $('#slider1, #slider2, #slider3').owlCarousel({
//     loop: true,
//     margin: 20,
//     responsiveClass: true,
//     responsive: {
//         0: {
//             items: 2,
//             nav: false,
//             autoplay: true,
//         },
//         600: {
//             items: 4,
//             nav: true,
//             autoplay: true,
//         },
//         1000: {
//             items: 6,
//             nav: true,
//             loop: true,
//             autoplay: true,
//         }
//     }
// })

(function($) {
    document.querySelectorAll('.plus-cart').forEach(function(element) {
        element.addEventListener('click', function() {
            var id = this.getAttribute("pid").toString();
            var eml = this.parentNode.children[2];
            console.log("pid =", id);
    
            fetch("/pluscart?prod_id=" + id)
                .then(response => response.json())
                .then(data => {
                    console.log("data =", data);
                    eml.innerText = data.quantity;
                    document.getElementById("amount").innerText = data.amount;
                    document.getElementById("totalamount").innerText = data.totalamount;
                })
                .catch(error => console.error('Error:', error));
        });
    });
    
})(jQuery);

(function($) {
    document.querySelectorAll('.minus-cart').forEach(function(element) {
        element.addEventListener('click', function() {
            var id = this.getAttribute("pid").toString();
            var eml = this.parentNode.children[2];
            console.log("pid =", id);
    
            fetch("/minuscart?prod_id=" + id)
                .then(response => response.json())
                .then(data => {
                    console.log("data =", data);
                    eml.innerText = data.quantity;
                    document.getElementById("amount").innerText = data.amount;
                    document.getElementById("totalamount").innerText = data.totalamount;
                })
                .catch(error => console.error('Error:', error));
        });
    });
    
})(jQuery);


(function($) {
    document.querySelectorAll('.remove-cart').forEach(function(element) {
        element.addEventListener('click', function() {
            var id = this.getAttribute("pid").toString();
            var eml = this
            console.log("pid =", id);
    
            fetch("/removecart?prod_id=" + id)
                .then(response => response.json())
                .then(data => {
                    console.log("data =", data);
                    eml.innerText = data.quantity;
                    document.getElementById("amount").innerText = data.amount;
                    document.getElementById("totalamount").innerText = data.totalamount;
                    eml.parentNode.parentNode.parentNode.parentNode.remove()
                })
                .catch(error => console.error('Error:', error));
        });
    });
    
})(jQuery);


// myscript.js
// (function($) {
//     $(document).ready(function() {
//         if (typeof $.ajax === 'function') {
//             console.log('jQuery and $.ajax are loaded');
//         } else {
//             console.log('Error: $.ajax is not a function');
//         }

//         $('.plus-wishlist').click(function() {
//             var id = $(this).attr("pid").toString();
//             $.ajax({
//                 type: "GET",
//                 url: "/pluswishlist",
//                 data: {
//                     prod_id: id
//                 },
//                 success: function(data) {
//                     window.location.href = `http://localhost:8000/product-detail/${id}`;
//                 }
//             });
//         });
//     });
// })(jQuery);



// (function($) {
//     $(document).ready(function() {
//         $('.minus-wishlist').click(function() {
//             var id = $(this).attr("pid").toString();
//             $.ajax({
//                 type: "GET",
//                 url: "/minuswishlist",
//                 data: {
//                     prod_id: id
//                 },
//                 success: function(data) {
//                     //alert(data.message)
//                     window.location.href = `http://localhost:8000/product-detail/${id}`;
//                 }
//             });
//         });
//     });
//     })(jQuery);


// $(document).ready(function() {
//     $('.minus-wishlist').click(function() {
//         var id = $(this).attr("pid").toString();
//         $.ajax({
//             type: "GET",
//             url: "/minuswishlist",
//             data: {
//                 prod_id: id
//             },
//             success: function(data) {
//                 //alert(data.message)
//                 window.location.href = `http://localhost:8000/product-detail/${id}`;
//             }
//         });
//     });
// });


