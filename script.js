// menu
document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a id="name-text" href="">Szymon<a>
    <div class="nav-menu">
      <ul>
        <li><a href="#about-me">O mnie</a></li>
        <li><a href="#skills">Umiejętności</a></li>
        <li><a href="#my-projects">Projekty</a></li>
      </ul>
    </div>
  `;

  const expandedMenu = document.getElementById('expanded-menu');
  expandedMenu.innerHTML = `
    <div id="expanded-menu-content">
      <a href="#about-me">O mnie</a>
      <a href="#skills">Umiejętności</a>
      <a href="#my-projects">Projekty</a>
    </div>
  `;

  const menuIcon = document.getElementById('menu-icon');
  menuIcon.addEventListener('click', () => {
    expandedMenu.classList.toggle('show');
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 768 && expandedMenu.classList.contains('show')) {
      expandedMenu.classList.remove('show');
    }
  });
});


// rok w stopce
document.getElementById('year').innerHTML = new Date().getFullYear();


// karty
let titlesCard = ['Języki', 'Git', 'Nauka']
let descriptionCard = [
  'Najwięcej projektów realizowałem w Pythonie i C++, a także tworzyłem aplikacje mobilne w Javie i React Native. W ramach laboratoriów zaprojektowałem aplikację webową w TypeScript, która komunikowała się z zdalnym serwerem.',
  'Od początku studiów pracuję z systemem kontroli wersji Git. Większość swoich projektów tworzę i rozwijam na platformie GitHub. Znam zarówno podstawowe, jak i bardziej zaawansowane funkcje tego narzędzia.',
  'Ukończyłem IV Liceum Ogólnokształcące w Tarnowie, zdając maturę z matematyki rozszerzonej oraz informatyki. Obecnie studiuję na Akademii Tarnowskiej. Znam język angielski na poziomie B2 i aktywnie rozwijam swoje umiejętności również w trybie samodzielnym w domu.'
]

let indexCard = 0;
const cardContainer = document.querySelector('.cards');

function changeCard() 
{
  const oldCard = cardContainer.querySelector('.card');

  if (oldCard)
  {
    oldCard.classList.add('fade-out');
    setTimeout(() => {
      oldCard.remove();
      createNewCard();
    }, 1000);
  }

  else
  {
    createNewCard();
  }
}

function createNewCard()
{
  const card = document.createElement('article');
  card.classList.add('card', 'fade-in');
  card.innerHTML = `<h3>${titlesCard[indexCard]}</h3><p>${descriptionCard[indexCard]}</p>`;
  cardContainer.appendChild(card);
  setTimeout(() => card.classList.remove('fade-in'), 1000);

  indexCard = (indexCard + 1) % titlesCard.length;
}

function createCards()
{
  changeCard();
  setInterval(changeCard, 10000)
}


// projekty
const url = 'https://github.com/captainSaymon/'
let projectNameURL = ['app-blog', 'app-blog-server', 'Kwadrat-Logiczny']
let titlesProject = ['App Blog', 'Server', 'Kwadrat Logiczny']
let descriptionProject = [
  'Stworzona przy użyciu Angular CLI aplikacja blogowa umożliwia dodawanie, przeglądanie postów oraz rejestrację użytkowników.',
  'Zawiera dane postów i użytkowników oraz obsługuje zapytania HTTP: POST, PUT, GET i DELETE.',
  'Program wspomaga analizę logiczną poprzez generowanie zdań dla brakujących wierzchołków kwadratu logicznego. Stosowane są różne techniki promptowania do pracy z dużymi modelami językowymi (LLM).'
]

const elementContainer = document.querySelector('.projects');

function createProjectCards()
{
  for (let i = 0; i < titlesProject.length; i++) {
      const link = document.createElement('a');
      link.href = url + projectNameURL[i];
      link.style.textDecoration = 'none';

      const card = document.createElement('article');
      card.classList.add('project-card');
      card.innerHTML = `<h3>${titlesProject[i]}</h3><p>${descriptionProject[i]}</p>`;
      link.appendChild(card);
      elementContainer.appendChild(link);
  }
}


// pobranie pliku pdf
const button = document.getElementById('downloadCV');

button.addEventListener('click', () => {
  const filePath = 'files/CV.pdf';
    const link = document.createElement('a');
    link.href = filePath;
    link.download = 'CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });


// uruchomienie kart
createCards();
createProjectCards();