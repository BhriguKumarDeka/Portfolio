export const playgroundData = {
  hero: {
    title: "Playground",
    subtitle: "A digital garden of unpolished gems, explorations, and boredom-induced creativity.",
  },
  figma: [
    { type: 'video', src: '/images/playground/FigmaVid1.webm' },
    { type: 'video', src: '/images/playground/FigmaVid2.webm' },
  ],
  animations: [
    { type: 'video', src: '/images/playground/Animation1.webm' },
    { type: 'video', src: '/images/playground/Animation2.webm' },
  ],
  spotify: [
    { id: 'spotify-1', image: '/images/playground/SpotifyArt1.jpeg' },
    { id: 'spotify-2', image: '/images/playground/SpotifyArt2.png' },
  ],
  posters: [
    { id: 'poster-1', image: '/images/playground/Poster1.png' },
    { id: 'poster-2', image: '/images/playground/Poster2.png' },
    { id: 'poster-5', image: '/images/playground/Poster3.png' },
  ],
  threeD: [
    { type: 'video', src: '/images/playground/Blender1.webm' },
    { type: 'video', src: '/images/playground/Blender2.webm' },
    { type: 'video', src: '/images/playground/Blender3.webm' },
    { type: 'video', src: '/images/playground/Blender4.webm' },
  ],
  misc: [
    { id: 'extra-1', image: '/images/playground/ExtraArt2.png' },
    { id: 'extra-4', image: '/images/playground/Pixel.gif' },
    { id: 'extra-2', image: '/images/playground/Illustration1.png' },
    { id: 'extra-5', image: '/images/playground/DigitalArt1.png' },
    { id: 'extra-6', image: '/images/playground/DigitalArt2.png' },
  ],
  characters: Array.from({ length: 21 }).map((_, i) => ({
    id: `char-${i}`,
    image: `/images/playground/Character${i + 1}.webp`,
  })),
};
