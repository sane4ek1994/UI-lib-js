import './lib/lib';

$('#first').on('click', () => {
    $('div').eq(1).fadeToggle(800);
});

$('[data-block="second"]').on('click', () => {
    $('div').eq(2).fadeToggle(800);
});

$('button').eq(2).on('click', () => {
    $('.w-500').fadeToggle(800);
});

$('.wrapper').html(`
        <div class="dropdown">
            <button class="btn btn-primary dropdown-toggle" data-dropdown="drop" id="dropdownMenuButtons">Dropdown Menu</button>
            <div class="dropdown-menu" data-toggle-id="dropdownMenuButtons">
                <a href="#" class="dropdown-item">Action</a>
                <a href="#" class="dropdown-item">Menu</a>
                <a href="#" class="dropdown-item">About</a>
            </div>
        </div>
`);

$('[data-dropdown="drop"]').dropdown();

//GET POST
$().get('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res));

$().post('https://jsonplaceholder.typicode.com/todos/1')
.then(res => console.log(res));


// BTNS
$('#trigger').click(() => $('#trigger').createModal({
    text : {
        title: 'Modal Title',
        body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia itaque placeat qui suscipit.'
    },
    btns: {
        count: 3,
        settings: [
            [
                'Close',
                ['btn-danger', 'mr-10'],
                true
            ],
            [
                'Save changes',
                ['btn-success' , 'mr-10'],
                false,
                () => {
                    alert('Данные сохраненны');
                }
            ],
            [
                'Autor Name',
                ['btn-primary'],
                false,
                () => {
                    alert('Hello!');
                }
            ]
        ]
    }
}));