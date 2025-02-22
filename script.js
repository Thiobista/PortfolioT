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
 // Open Menu
function openmenu() {
  document.getElementById('sidemenu').classList.add('open');
  document.getElementById('menu').style.display = 'none'; // Hide the menu button
}

// Close Menu
function closemenu() {
  document.getElementById('sidemenu').classList.remove('open');
  document.getElementById('menu').style.display = 'block'; // Show the menu button
}

// Close menu if the click is outside the menu
document.addEventListener('click', function(event) {
  const menu = document.getElementById('sidemenu');
  const menuButton = document.getElementById('menu');
  
  // Check if the clicked element is not the menu or its button
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    if (menu.classList.contains('open')) {
      closemenu();
    }
  }
});


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
  document.getElementById("contact-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    // Debugging: Log the form data
    for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
    }

    try {
        const response = await fetch("http://localhost:8080/send-email", {
            method: "POST",
            body: formData,
        });

        if (response.ok) {
            alert("Email sent successfully!");
        } else {
            alert("Failed to send email.");
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while sending the email.");
    }
});
