document.getElementById('year').textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent =
    `Last Updated: ${lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}`;
    
const products = [
    { id: 1, name: "Product A" },
    { id: 2, name: "Product B" },
    { id: 3, name: "Product C" },
    { id: 4, name: "Product D" }
];

const productSelect = document.getElementById('productName');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

if (!localStorage.getItem('reviewCount')) {
    localStorage.setItem('reviewCount', '0');
}

const reviewForm = document.getElementById('reviewForm');
reviewForm.addEventListener('submit', () => {
    let reviewCount = parseInt(localStorage.getItem('reviewCount'));
    reviewCount++;
    localStorage.setItem('reviewCount', reviewCount.toString());
});
