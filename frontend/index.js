async function sprintChallenge5() { // Note the async keyword, in case you wish to use `await` inside sprintChallenge5
  // 👇 WORK WORK BELOW THIS LINE 👇
  const idCards = document.querySelector(".cards");
  console.log(idCards);
  const endpointA = 'http://localhost:3003/api/learners'
  axios.get(endpointA)
    .then(response => {
      console.log(response);
    });
  const endpointB = 'http://localhost:3003/api/mentors'
  axios.get(endpointB)
    .then(response => {
      console.log(response);
    });
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
  const footer = document.querySelector('footer')
  const currentYear = new Date().getFullYear()
  footer.textContent = `© BLOOM INSTITUTE OF TECHNOLOGY ${currentYear}`

  // 👆 WORK WORK ABOVE THIS LINE 👆
}

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = { sprintChallenge5 }
else sprintChallenge5()
