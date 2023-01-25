const pets = [
    {
      id: 1,
      name: "Dusty",
      color: "Green",
      specialSkill: "Gives sincere apologies.",
      type: "cat",
      imageUrl: "http://kittentoob.com/wp-content/uploads/2015/06/funny-cat-with-a-towel.jpg",
    },
    {
        id: 2,
      name: "Trouble",
      color: "Brown",
      specialSkill: "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
      type: "dino",
      imageUrl: "https://i.pinimg.com/originals/b3/5f/d0/b35fd0028292ea5dafee7c829808bd6b.png",
    },
    {
      id: 3,
      name: "Whiskers",
      color: "Yellow",
      specialSkill: "Can prove he is a real man by drinking whiskey.",
      type: "dino",
      imageUrl: "https://mydinosaurs.com/wp-content/uploads/2017/02/2-3-600x400.jpg"
    },
    {
      id: 4,
      name: "Coco",
      color: "Black",
      specialSkill: "Burps minimally.",
      type: "dog",
      imageUrl: "http://cdn.akc.org/content/article-body-image/funny-pembroke_welsh_corgi.jpg"
    },
    {
      id: 5,
      name: "Spooky",
      color: "Brown",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "cat",
      imageUrl: "http://www.catster.com/wp-content/uploads/2017/08/A-fluffy-cat-looking-funny-surprised-or-concerned.jpg"
    },
    {
      id: 6,
      name: "Tiger",
      color: "Black",
      specialSkill: "Can read (but cannot understand) Hebrew.",
      type: "dog",
      imageUrl: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Basset_Hound_600.jpg"
    },
    {
      id: 7,
      name: "Oreo",
      color: "Yellow",
      specialSkill: "Able to stop chewing ice or whistling on request.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/9d/da/3e/9dda3e5fd2b9886fc3d13ee47f52e8a0.jpg"
    },
    {
      id: 8,
      name: "Ginger",
      color: "Grey",
      specialSkill: "Comfortable in the outdoors for up to eight hours.",
      type: "dino",
      imageUrl: "https://cdn.dribbble.com/users/1044993/screenshots/9009749/media/6e55d3fd4372ad500ba54c495ea40d73.png?compress=1&resize=400x300"
    },
    {
      id: 9,
      name: "Sassy",
      color: "Brown",
      specialSkill: "Adept at talking self and others out of fights.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2015/09/40-Amazing-Cat-Funny-Moment-Pictures-Feature-Image.jpg"
    },
    {
      id: 10,
      name: "Sammy",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "cat",
      imageUrl: "https://i.pinimg.com/originals/04/54/92/0454926d39eeb420f4f01948e94e9e41.jpg"
    },
    {
      id: 11,
      name: "Coco",
      color: "Orange",
      specialSkill: "Can be around food without staring creepily at it.",
      type: "dino",
      imageUrl: "https://www.shutterstock.com/shutterstock/photos/1640790232/display_1500/stock-vector-cute-cartoon-dinosaur-tyrannosaur-orange-dinosaur-isolated-on-a-white-background-vector-1640790232.jpg"
    },
    {
      id: 12,
      name: "Buster",
      color: "Green",
      specialSkill: "Does not use excessive acronyms.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg"
    },
    {
      id: 13,
      name: "Chester",
      color: "Red",
      specialSkill: "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/736x/57/54/0b/57540b7db1d47708665e1a6a8d1b7677.jpg"
    },
    {
      id: 14,
      name: "Samantha",
      color: "Brown",
      specialSkill: "Always up for dessert.",
      type: "cat",
      imageUrl: "http://3.bp.blogspot.com/-RzIFLsIO-XQ/UFoMLOT66JI/AAAAAAAAVps/JRF98hdA9S8/s640/funny-cat-pictures-016-027.jpg"
    },
    {
      id: 15,
      name: "Coco",
      color: "Red",
      specialSkill: "Burps minimally.",
      type: "cat",
      imageUrl: "http://cathumor.net/wp-content/uploads/2013/12/cat-humor-funny-karate-cat-2.jpg"
    },
    {
      id: 16,
      name: "Smokey",
      color: "Brown",
      specialSkill: "Drives at a safe rate of speed in snow or rain.",
      type: "dino",
      imageUrl: "https://cdn2.vectorstock.com/i/1000x1000/31/66/cute-dinosaur-cartoon-vector-9813166.jpg"
    },
    {
     id: 17,
      name: "Muffin",
      color: "Yellow",
      specialSkill: "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
      type: "cat",
      imageUrl: "https://i.pinimg.com/736x/aa/f2/d2/aaf2d2eacb2392a265ca8c40468956b5.jpg"
    },
    {
      id: 18,
      name: "Salem",
      color: "Brown",
      specialSkill: "Proficient in air guitar",
      type: "dino",
      imageUrl: "https://static2.bigstockphoto.com/0/8/2/large2/280647787.jpg"
    },
    {
      id: 19,
      name: "Callie",
      color: "Blue",
      specialSkill: "Listens attentively to boring stories.",
      type: "dog",
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/pit-bull-puppy-royalty-free-image-1599741486.jpg"
    },
    {
      id: 20,
      name: "Spooky",
      color: "Black",
      specialSkill: "Uses litter box at appropriate hours.",
      type: "cat",
      imageUrl: "https://www.rd.com/wp-content/uploads/2021/01/GettyImages-1175550351.jpg"
    },
    {
      id: 21,
      name: "Miss kitty",
      color: "Red",
      specialSkill: "Owns a Nintendo Power Glove.",
      type: "dino",
      imageUrl: "https://inhomecatgrooming.com/wp-content/uploads/2021/12/cat-haircuts-1.jpg"
    },
    {
        id: 22,
      name: "Snuggles",
      color: "Orange",
      specialSkill: "Is comfortable with jokes about his receding hairline.",
      type: "cat",
      imageUrl: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/cute-cat-photos-1593441022.jpg"
    },
    {
        id: 23,
      name: "Buddy",
      color: "Red",
      specialSkill: "Enjoys fine wine.",
      type: "dog",
      imageUrl: "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg"
    },
    {
        id: 24,
      name: "George",
      color: "Brown",
      specialSkill: "Participates in karaoke but does not force others to go out to karaoke.",
      type: "dog",
      imageUrl: "https://i.pinimg.com/736x/ac/bb/d2/acbbd20121347e9c150165aa8b9ffc0b--shar-pei-puppies-cute-puppies.jpg"
    },
    {
      id: 25,
      name: "Salem",
      color: "Red",
      specialSkill: "Knows the words to 4 rap songs.",
      type: "cat",
      imageUrl: "https://cdn-prd.content.metamorphosis.com/wp-content/uploads/sites/2/2022/05/black-and-white-cat-breeds-main.jpg"
    },
    {
        id: 26,
      name: "Bubba",
      color: "Yellow",
      specialSkill: "Cleans himself.",
      type: "dog",
      imageUrl: "https://m.media-amazon.com/images/I/61RIK6DnVgL._AC_UF894,1000_QL80_.jpg"
    },
    {
        id: 27,
      name: "Chloe",
      color: "Green",
      specialSkill: "Admits he is wrong",
      type: "dino",
      imageUrl: "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg"
    },
    {
        id: 28,
      name: "Nala",
      color: "Purple",
      specialSkill: "Dances when he has to.",
      type: "cat",
      imageUrl: "https://tailandfur.com/wp-content/uploads/2016/03/40-Scary-and-Funny-Cat-Pictures-8.jpg"
    },
    {
        id: 29,
      name: "Oscar",
      color: "Green",
      specialSkill: "Gives hugs with appropriate pressure and for the right length of time.",
      type: "cat",
      imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg"
    },
    {
        id: 30,
      name: "Lucy",
      color: "Red",
      specialSkill: "Doesn’t get weirded out by the word “moist.”",
      type: "dino",
      imageUrl: "https://ih1.redbubble.net/image.2265552562.8651/st,small,507x507-pad,600x600,f8f8f8.u1.jpg"
    }
  ];

  // const targetingApp = document.querySelector(".app");
  // let domString = "";

  // for (const pet of pets) {
  //   domString += `<div class="card" style="width: 18rem;">
  //     <img src="${pet.imageUrl}" class="card-img-top" alt="...">
  //     <div class="card-body">
  //       <p class="card-text">${pet.name}</p>
  //     </div>
  //   </div>`;
  // }

  // console.log(domString);
  // targetingApp.innerHTML = domString;



const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  console.log("divId", divId);

  selectedDiv.innerHTML = htmlToRender;
};

const app = document.querySelector('.card')


const filter = (pets, typeStr) => {
  const typeArr = [];
for (const pet of pets) {
  if (pet.type === typeStr) {
    typeArr.push(pet)
  }
}
return typeArr
}

const cardsOnDom = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `<div class="card" style="width: 18rem;">
    <img src="${pet.imageUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${pet.name}</p>
      <button class="btn btn-danger" id="delete--${pet.id}">Delete</button>
    </div>
  </div>`;
  }

  renderToDom(".app", domString);
};



const catBtn = document.querySelector('.cat-button');
const dogBtn = document.querySelector('.dog-button');
const dinoBtn = document.querySelector('.dino-button');

catBtn.addEventListener('click', () => {
  const catPage = filter(pets, "cat");
  cardsOnDom(catPage);
});

dogBtn.addEventListener('click', () => {
  const dogPage = filter(pets, "dog");
  cardsOnDom(dogPage);
});

dinoBtn.addEventListener('click', () => {
  const dinoPage = filter(pets, "dino");
  cardsOnDom(dinoPage);
});

cardsOnDom(pets);


// CREATE

const createPet = (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const color = document.querySelector("#color");
  const specialSkill = document.querySelector("#specialSkill");
  const type = document.querySelector("#type");
  const imageUrl = document.querySelector("#image");

  console.log(name);
  console.log(name.value);

  const newPet = {
    name: name.value,
    color: color.value,
    specialSkill: specialSkill.value,
    type: type.value,
    imageUrl: imageUrl.value
  };
  console.log("new pet", newPet);

  pets.push(newPet);
  console.log(pets);
  cardsOnDom(pets);
};

  const submitButton = document.querySelector("#form-submit");

  submitButton.addEventListener("click", createPet);


  const appDiv = document.querySelector(".app");

  // 2. Add an event listener to capture clicks
  
  appDiv.addEventListener("click", (event) => {
    // 3. check e.target.id includes "delete"
    if (event.target.id.includes("delete")) {
      // 4. add logic to remove from array
  
      const [throwAway, petID] = event.target.id.split("--");
      // what object needs to be removed and I know my memberID
      console.log(petID);
      const indexOfPet = pets.findIndex((obj) => obj.id === Number(petID));
      pets.splice(indexOfPet, 1);
    }
    // 5. Repaint the DOM with the updated array
  cardsOnDom(pets);
  });
  
  
  const startApp = () => {
    cardsOnDom(pets);
    // events(); // ALWAYS LAST
  };
  
  startApp();
  
