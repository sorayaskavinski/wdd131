document.getElementById('year').textContent = new Date().getFullYear();
       
const formData = JSON.parse(localStorage.getItem('formData'));
if (formData) {
    document.getElementById('name').textContent = formData.name;
    document.getElementById('phone').textContent = formData.phone || 'Not provided';
    document.getElementById('email').textContent = formData.email;
    document.getElementById('topic').textContent = formData.topic;
    document.getElementById('message').textContent = formData.message;
} 
else {
    document.getElementById('summary').innerHTML = '<p>No submission data found.</p>';
}
