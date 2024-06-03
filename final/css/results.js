document.addEventListener('DOMContentLoaded', function() {
    const results = JSON.parse(localStorage.getItem('searchResults'));
    const resultsDiv = document.getElementById('results');

    if (results && results.length > 0) {
        const ul = document.createElement('ul');
        results.forEach(result => {
            const li = document.createElement('li');
            const button = document.createElement('button');
            button.textContent = `Go to ${result}`;
            button.addEventListener('click', () => {
                window.location.href = result;
            });
            li.appendChild(button);
            ul.appendChild(li);
        });
        resultsDiv.appendChild(ul);
    } else {
        resultsDiv.textContent = 'No pages found with the given keywords.';
    }
});