

//? definicao das variaveis locais
let grid = document.getElementById('grid');
let filters = document.getElementById('filters');



//? EVENTOS DA APLICACAO
filters.addEventListener('click', filterEvents, false);
filters.addEventListener('input', filterEvents, false);
grid.addEventListener('click', gridEvents, false);


//? Listeners
function filterEvents(e){
    let el = e.target;
    
    if (el.id === 'allBtn') {
        showBooks(getBooks());
    }

    if (el.id === 'readBtn') {
        showBooks(getReadBooks());
    }

    if (el.id === 'notReadBtn') {
        showBooks(getNotReadBooks());
    }

    if ((el.id === 'searchTxt') && (e.type === 'input')){
        let text = el.value.toLowerCase();
        showBooks(getBooksByAuthorTitle(text))
    }
}

function gridEvents(e){
    console.log(e);

    if ((e.target.nodeName === 'P') && (e.target.textContent.search('✅') > -1)  ){
        showBooks(getReadBooks());
    }

    if ((e.target.nodeName === 'P') && (e.target.textContent.search('❌') > -1)  ){
        showBooks(getNotReadBooks());
    }

    if (e.target.dataset.type === 'deleteBtn'){
        showBooks(deleteBook(e.target.dataset.idbook))
    }
}



//? Business Logic 
//console.log(livros);
showBooks(getBooks());

function showBooks(arrayBooks){

    grid.innerHTML = '';

    arrayBooks.map( book => {
        grid.innerHTML += `
            <article>
                <h1>${book.title}</h1>
                <h2>${book.author}</h2>
                <img src="livros/${book.imageUrl}" alt="${book.title}}" >
                <p>Already read: ${book.alreadyRead ? '✅' : '❌' }  </p>
                <button class='btn' data-type='deleteBtn' data-idbook=${book.id}> Delete </button>
                <button class='btn' data-type='editBtn' data-idbook=${book.id}> Edit </button>
            </article>
        `;
    })
}

