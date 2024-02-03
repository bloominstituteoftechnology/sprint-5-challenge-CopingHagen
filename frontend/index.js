async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const idCards = document.querySelector(".cards");
  console.log(idCards);
  function idCardMaker({ id, fullName, email, mentors}) {
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
    
    name.textContent = `${id}`;
    contact.textContent = email;
    button.textContent = mentors;
    list.textContent = fullName;
    

    card.addEventListener("click", () => {
      card.classList.toggle("card selected");
    })
    button.addEventListener("click", () => {
      button.classList.toggle("open");
    })
    
    return idCards;
  }
  const endpointA = 'http://localhost:3003/api/learners'
  axios.get(endpointA)
    .then(response => {
      const card = idCardMaker({ id: response.data.fullName, email, mentors});
      idCards.appendChild(card);
    });
  const endpointB = 'http://localhost:3003/api/mentors'
  axios.get(endpointB)
    .then(response => {

      console.log(response.data);
    });

  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
