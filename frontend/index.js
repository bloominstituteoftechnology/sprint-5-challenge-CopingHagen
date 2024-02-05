async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const idCards = document.querySelector(".cards");

  function idCardMaker({ id, fullName, email, mentors }) {
    const card = document.createElement("div");
    idCards.appendChild(card);

    const name = document.createElement("h3");
    const contact = document.createElement("div");
    const button = document.createElement("h4");
    const list = document.createElement("ul");
    card.appendChild(name);
    card.appendChild(contact);
    card.appendChild(button);
    card.appendChild(list);
    card.classList.add("card");
    button.classList.add("closed");
    
    if (card.classList.contains("selected")) {
      name.textContent = `${fullName}, ID ${id}`;
    } else {
      name.textContent = fullName;
    }
    contact.textContent = email;
    button.textContent = `Mentors`;
    list.textContent = mentors;

    card.addEventListener("click", (event) => {
      if (card.classList.contains("selected") && event.target === button) {
      } else {
        card.classList.toggle("selected");
      }
      if (card.classList.contains("selected")) {
        name.textContent = `${fullName}, ID ${id}`;
      } else {
        name.textContent = fullName;
      }
    });  
    button.addEventListener("click", () => {
      button.classList.toggle("open");
    })

    return card;
  }
  const endpointA = 'http://localhost:3003/api/learners'
  const endpointB = 'http://localhost:3003/api/mentors'
  axios.get(endpointA)
    .then(res => {
      res.data.forEach(learner => {
        const card = idCardMaker(learner);
        idCards.appendChild(card);
      });
    })
    .catch(error => console.log("Error fetching learner data:", error));


  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
