document.getElementById('addBook').addEventListener('click', function() {
    const title = document.getElementById('bookTitle').value;
    const fileInput = document.getElementById('bookFile');
    const file = fileInput.files[0];

    if (title && file) {
        const listItem = document.createElement('li');
        listItem.textContent = title;

        // Create a link to open the file
        const fileURL = URL.createObjectURL(file);
        const link = document.createElement('a');
        link.href = fileURL;
        link.target = '_blank'; // Open in new tab
        link.textContent = 'Open Book';
        link.style.marginLeft = '10px';

        // Append the link to the list item
        listItem.appendChild(link);

        // Append the list item to the book list
        document.getElementById('bookList').appendChild(listItem);

        // Clear input fields
        document.getElementById('bookTitle').value = '';
        fileInput.value = '';
    } else {
        alert('Please enter a book title and upload a file.');
    }
});
