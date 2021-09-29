import pk1 from "./pics/pkwar/pk1.png";
import pk2 from "./pics/pkwar/pk2.png";
import pk3 from "./pics/pkwar/pk3.png";
import pk4 from "./pics/pkwar/pk4.png";
import pk5 from "./pics/pkwar/pk5.png";
import pk6 from "./pics/pkwar/pk6.png";

import drink1 from "./pics/drinkrandom/drink1.png";
import drink2 from "./pics/drinkrandom/drink2.png";
import drink3 from "./pics/drinkrandom/drink3.png";
import drink4 from "./pics/drinkrandom/drink4.png";
import drink5 from "./pics/drinkrandom/drink5.png";

const data = [
  {
    id: 1,
    name: "PokeWar",
    description:
      "Two player online turn-based Pokemon game. Features include: User account creation and profile management, Google and Github authentication, real-time in-game chat, global leaderboard.",
    liveUrl: "https://poke-war-4483c.web.app/",
    gitUrl: "https://github.com/bell-peppers/PokeWar",
    techStack:
      "React, Redux, Firebase, Material UI, and a 3rd-party api (PokeAPI).",
    imageUrls: [pk1, pk2, pk3, pk4, pk5, pk6],
  },
  {
    id: 2,
    name: "Ray's Kitchen",
    description:
      "Fully functioning mock e-commerce website. Features include: user authentication, working shopping cart, item pagination.",
    liveUrl: "https://graceshopper-fullstack.herokuapp.com/",
    gitUrl: "https://github.com/Brownie-Batter/graceshopper-project",
    techStack: "PostgreSQL, Express.js, React/Redux, Node.js., Material UI",
    imageUrls: [
      "https://camo.githubusercontent.com/49bc0b0957097b32721516777c1b72472f5e89f5739c7151efa2b4b8a2a5cc4d/68747470733a2f2f63646e2e6c6f6f6d2e636f6d2f73657373696f6e732f7468756d626e61696c732f30393661343066343136323734346364386461353538373138613463353738342d776974682d706c61792e676966",
    ],
  },
  {
    id: 3,
    name: "Drink Randomizer",
    description:
      "Drink Randomizer will present the user with a random drink recipe. From here they can save it or keep looking for the right one. Users can create their own accounts to save or delete their favorites. Visitors can visit, but cannot save.",
    liveUrl: "https://stackathon-eb2e6.web.app/ ",
    gitUrl: "https://github.com/Malessi5/Stackathon",
    techStack:
      "Firebase, Express.js, React/Redux, Node.js, Material UI, 3rd party API",
    imageUrls: [drink1, drink2, drink3, drink4, drink5],
  },
];

export default function projectData() {
  return data;
}
