document.getElementById('User').addEventListener('click', function () {
    console.log(document.getElementById('User'));
    const dropdown = document.getElementById('Dropdown-menu');
    dropdown.classList.toggle('show'); // Aggiunge/rimuove la visibilità
});
