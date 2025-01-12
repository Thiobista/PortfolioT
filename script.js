   // Tab Functionality
   function opentab(tabname) {
    let tabContents = document.getElementsByClassName('tab-contents');
    let tabLinks = document.getElementsByClassName('tab-links');

    for (let tab of tabContents) {
      tab.classList.remove('active-tab');
    }

    for (let link of tabLinks) {
      link.classList.remove('active-link');
    }

    document.getElementById(tabname).classList.add('active-tab');
    event.target.classList.add('active-link');
  }

  // Menu Functionality
  function openmenu() {
    document.getElementById('sidemenu').classList.add('open');
  }

  function closemenu() {
    document.getElementById('sidemenu').classList.remove('open');
  }

  // Night Mode Toggle
  const nightModeToggle = document.getElementById('night-mode-toggle');
  const body = document.body;

  if (nightModeToggle) {
    nightModeToggle.addEventListener('click', () => {
      body.classList.toggle('night-mode');
      const isNightMode = body.classList.contains('night-mode');
      nightModeToggle.innerHTML = isNightMode
        ? '<i class="fas fa-sun"></i>'
        : '<i class="fas fa-moon"></i>';
    });
  }

  // Word Typing Animation
  const word = 'Front-end Developer';
  const characterContainer = document.getElementById('headers');
  let index = 0;

  function displayNextCharacter() {
    if (characterContainer && index < word.length) {
      const character = document.createElement('span');
      character.textContent = word.charAt(index);
      characterContainer.appendChild(character);
      index++;
      setTimeout(displayNextCharacter, 100);
    }
  }

  displayNextCharacter();

  // Button Show/Hide Content Functionality
  const buttonContentMapping = [
    { button: 'showButtonbio', content: 'hiddenContentbio' },
    { button: 'showButton', content: 'hiddenContent' },
    { button: 'showButtonfood', content: 'hiddenContentfood' },
    { button: 'showButtonsong', content: 'hiddenContentsong' },
    { button: 'showButtonmovie', content: 'hiddenContentmovie' },
    { button: 'showButtoncons', content: 'hiddenContentcons' },
    { button: 'showButtonlnd', content: 'hiddenContentlnd' },
    { button: 'showButtonmag', content: 'hiddenContentmag' },
    { button: 'showButtonnutr', content: 'hiddenContentnutr' },
    { button: 'showButtoncafe', content: 'hiddenContentcafe' },
    { button: 'showButtoncal', content: 'hiddenContentcal' },
  ];

  buttonContentMapping.forEach(({ button, content }) => {
    const buttonElement = document.getElementById(button);
    const contentElement = document.getElementById(content);

    if (buttonElement && contentElement) {
      buttonElement.addEventListener('click', () => {
        contentElement.style.display = 'block';
        buttonElement.style.display = 'none';
      });
    }
  });