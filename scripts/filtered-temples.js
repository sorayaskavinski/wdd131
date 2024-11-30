document.getElementById('year').textContent = new Date().getFullYear();

const lastModifiedDate = new Date(document.lastModified);
document.getElementById('lastModified').textContent =
    `Last Updated: ${lastModifiedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}`;

const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    const isVisible = navMenu.classList.toggle('visible');
    hamburger.setAttribute('aria-expanded', isVisible.toString());
    hamburger.textContent = isVisible ? '✖' : '☰';
});

const temples = [
    {
      templeName: "Brasilia Brazil Temple",
      location: "Brasilia, Brazil",
      dedicated: "2023, September, 17",
      area: 25000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
    },
    {
      templeName: "Campinas Brazil Temple",
      location: "Campinas, Brazil",
      dedicated: "2002, May, 17",
      area: 48100,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/campinas-brazil-temple/campinas-brazil-temple-6012-main.jpg"
    },
    {
      templeName: "Curitiba Brazil Temple",
      location: "Curitiba, Brazil",
      dedicated: "2008, June, 1",
      area: 27850,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/curitiba-brazil-temple/curitiba-brazil-temple-1078-main.jpg"
    },
    {
      templeName: "Belem Brazil Temple",
      location: "Belem, Brazil",
      dedicated: "2022, November, 20",
      area: 28675,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belem-brazil-temple/belem-brazil-temple-31310-main.jpg"
    },
    {
      templeName: "Belo Horizonte Brazil Temple",
      location: "Belo Horizonte, Brazil",
      dedicated: "",
      area: 27000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/belo-horizonte-brazil-temple/belo-horizonte-brazil-temple-22100-main.jpg"
    },
    {
      templeName: "Fortaleza Brazil Temple",
      location: "Fortaleza, Brazil",
      dedicated: "2019, January, 2",
      area: 36000,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
    },
    {
      templeName: "Manaus Brazil Temple",
      location: "Manaus, Brazil",
      dedicated: "2012, June, 10",
      area: 32032,
      imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/_temp/138-Manaus-Brazil-Temple.jpg"
    },
    {
        templeName:"Porto Alegre Brazil Temple",
        location:"Porto Alegre, Brazil",
        dedicated: "2000, December, 17",
        area: "13325",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/porto-alegre-brazil-temple/porto-alegre-brazil-temple-14267-main.jpg"
    },
    {
        templeName:"Sao Paulo Brazil Temple",
        location: "Sao Paulo, Brazil",
        dedicated: "1978, November, 2",
        area: "59246",
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/017-S%C3%A3o-Paulo-Brazil-Temple.jpg"
    },
    {
        templeName:"Recife Brazil Temple",
        location:"Recife, Brazil",
        dedicated:"2000, December, 15",
        area:"37200",
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/recife-brazil-temple/recife-brazil-temple-36778-main.jpg"
    },
    {
        templeName:"Maceio Brazil Temple",
        location:"Maceio, Brazil",
        dedicated:"",
        area:"",
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/maceio-brazil-temple/maceio-brazil-temple-48800-main.jpg"
    },
    {
        templeName:"Joao Pessoa Brazil Temple",
        location:"Joao Pessoa, Brazil",
        dedicated:"",
        area:"18850",
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/joao-pessoa-brazil-temple/joao-pessoa-brazil-temple-50370-main.jpg"
    },
    {
        templeName:"Salt Lake Temple",
        location:"Salt Lake City, UT",
        dedicated:"24, April, 1893",
        area: "382207",
        imageUrl:"https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
    },
];

function displayTemples(filteredTemples) {
    const templeContainer = document.getElementById('temples-container');
    templeContainer.innerHTML = ''; 
    filteredTemples.forEach(temple => {
        const card = document.createElement('div');
        card.classList.add('temple-card');
        card.innerHTML = `
            <h3>${temple.templeName}</h3>
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <p><span>Location:</span> ${temple.location}</p>
            <p><span>Dedicated:</span> ${temple.dedicated || 'Not yet dedicated'}</p>
            <p><span>Area:</span> ${temple.area || 'N/A'} sq. ft.</p>            
        `;
        templeContainer.appendChild(card);
    });
}

function filterTemples(criteria) {
    let filtered = temples;
    if (criteria === 'old') filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
    if (criteria === 'new') filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
    if (criteria === 'large') filtered = temples.filter(t => parseInt(t.area) > 90000);
    if (criteria === 'small') filtered = temples.filter(t => parseInt(t.area) < 10000);
    displayTemples(filtered);
}

document.getElementById('home').addEventListener('click', () => displayTemples(temples));
document.getElementById('old').addEventListener('click', () => filterTemples('old'));
document.getElementById('new').addEventListener('click', () => filterTemples('new'));
document.getElementById('large').addEventListener('click', () => filterTemples('large'));
document.getElementById('small').addEventListener('click', () => filterTemples('small'));

displayTemples(temples);
