document.getElementById('survey-form').addEventListener('submit', async function (e) {
    e.preventDefault();

    const data = {
        fields: {
            Pseudonym: document.getElementById('pseudonym').value,
            Age: parseInt(document.getElementById('age').value),
            Gender: document.getElementById('gender').value,
            Email: document.getElementById('email').value,
            WatchFrequency: document.getElementById('watchFrequency').value,
            CollegeYear: document.getElementById('collegeYear').value,
        }
    };

    try {
        const proxyUrl = '/airtable'; // Relative path for GitHub deployment
        const response = await fetch(proxyUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apiUrl: 'https://api.airtable.com/v0/appZjXjXlvvkSXJ7d/tblpatUhKKDFNoTXv',
                apiKey: 'YOUR_API_KEY', // Replace with environment variable or placeholder
                data: data
            })
        });

        const responseData = await response.json();
        console.log('API Response:', responseData);

        if (response.ok) {
            alert('Survey submitted successfully!');
            document.getElementById('survey-form').reset();
        } else {
            alert('Failed to submit survey. Please try again.');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    }
});
