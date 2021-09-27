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
    imageUrls: [
      "pics/pkwar/pk1.png",
      "pics/pkwar/pk2.png",
      "pics/pkwar/pk3.png",
      "pics/pkwar/pk4.png",
      "pics/pkwar/pk5.png",
      "pics/pkwar/pk6.png",
    ],
  },
  {
    id: 2,
    name: "Ray's Kitchen",
    description:
      "Fully functioning mock e-commerce website. Features include: user authentication, working shopping cart, item pagination.",
    liveUrl: "https://graceshopper-fullstack.herokuapp.com/'",
    gitUrl: "https://github.com/Brownie-Batter/graceshopper-project",
    techStack: "PostgreSQL, Express, React/Redux, Node.js., Material UI",
    imageUrls: [
      "https://camo.githubusercontent.com/49bc0b0957097b32721516777c1b72472f5e89f5739c7151efa2b4b8a2a5cc4d/68747470733a2f2f63646e2e6c6f6f6d2e636f6d2f73657373696f6e732f7468756d626e61696c732f30393661343066343136323734346364386461353538373138613463353738342d776974682d706c61792e676966",
    ],
  },
];

export default function projectData() {
  return data;
}
