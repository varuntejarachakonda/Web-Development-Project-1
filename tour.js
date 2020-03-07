var tour = new Tour({
    storage: false
});

var name = '';

tour.addSteps(
    [
        {
            element: '#col-1',
            placement: 'bottom',
            title: 'Live classes',
            content: 'Classes are interactive and happen in real time, <br> <input type="text" placeholder = "Enter your name" id="name" />',
            onNext: function(){
                name = $('#name').val();
            }
        },
        {
            element: '#col-2',
            placement: 'bottom',
            title: 'Flexible Schedule',
            content: function(){
                return name + ', You can transfer batches in between';
            }
        },
        {
            element: '#col-3',
            placement: 'bottom',
            title: 'Round-the-clock Support',
            content: function(){
                return name + ', You have Round-the-clock Support'
            }
        },
        {
            orphan: true,
            title: 'Thank You',
            backdrop: true,
            placement: 'top',
            content: function(){
                return name + ', Thank You for visiting the site'
            }
        }
    ]
);

$(document).ready(function () {
    $('#tour-start-btn').on ('click', function ($event){
        tour.init();
        tour.start();
        $event.preventDefault();
    });
})
