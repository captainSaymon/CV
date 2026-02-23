document.addEventListener('DOMContentLoaded', function () {
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a id="name-text" href="">Szymon<a>
    <div class="nav-menu">
      <ul>
        <li><a href="#about-me">O mnie</a></li>
        <li><a href="#skills">Umiejętności</a></li>
        <li><a href="#">Projekty</a></li>
      </ul>
    </div>
  `;

  const expandedMenu = document.getElementById('expanded-menu');
  expandedMenu.innerHTML = `
    <div id="expanded-menu-content">
      <a href="#about-me">O mnie</a>
      <a href="#skills">Umiejętności</a>
      <a href="#">Projekty</a>
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

document.getElementById('year').innerHTML = new Date().getFullYear();



let titles = ['Języki', 'Git', 'Nauka']
let description = [
  'Najwięcej projektów realizowałem w Pythonie i C++, a także tworzyłem aplikacje mobilne w Javie i React Native. W ramach laboratoriów zaprojektowałem aplikację webową w TypeScript, która komunikowała się z zdalnym serwerem.',
  'Od początku studiów pracuję z systemem kontroli wersji Git. Większość swoich projektów tworzę i rozwijam na platformie GitHub. Znam zarówno podstawowe, jak i bardziej zaawansowane funkcje tego narzędzia.',
  'Ukończyłem IV Liceum Ogólnokształcące w Tarnowie, zdając maturę z matematyki rozszerzonej oraz informatyki. Obecnie studiuję na Akademii Tarnowskiej. Znam język angielski na poziomie B2 i aktywnie rozwijam swoje umiejętności również w trybie samodzielnym w domu.'
]

let index = 0;
const el = document.querySelector('.cards');

function changeCard() 
{
  const oldCard = el.querySelector('.card');

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
  card.innerHTML = `<h3>${titles[index]}</h3><p>${description[index]}</p>`;
  el.appendChild(card);
  setTimeout(() => card.classList.remove('fade-in'), 1000);

  index = (index + 1) % titles.length;
}

changeCard();
setInterval(changeCard, 10000)

