export const playgroundData = {
  hero: {
    title: "Playground",
    subtitle: "A digital garden of unpolished gems, explorations, and boredom-induced creativity.",
  },
  figma: [
    { type: 'video', src: '/images/playground/FigmaVid1.mp4' },
    { type: 'video', src: '/images/playground/FigmaVid2.mp4' },
  ],
  animations: [
    { type: 'video', src: '/images/playground/Animation1.mp4' },
    { type: 'video', src: '/images/playground/Animation2.mp4' },
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
    { type: 'video', src: '/images/playground/Blender1.mkv' },
    { type: 'video', src: '/images/playground/Blender2.mp4' },
    { type: 'video', src: '/images/playground/Blender3.mp4' },
    { type: 'video', src: '/images/playground/Blender4.mp4' },
  ],
  misc: [
    { id: 'extra-1', image: '/images/playground/ExtraArt2.png' },
    { id: 'extra-4', image: '/images/playground/Pixel.gif' },
    { id: 'extra-5', image: '/images/playground/DigitalArt1.png' },
    { id: 'extra-6', image: '/images/playground/DigitalArt2.png' },
    { id: 'extra-3', image: '/images/playground/Origami.jpg' },
    { id: 'extra-7', image: '/images/playground/Photography1.jpeg' },
    { id: 'extra-8', image: '/images/playground/Photography2.jpg' },
    { id: 'extra-9', image: '/images/playground/Photography4.jpg' },
  ],
  characters: Array.from({ length: 21 }).map((_, i) => ({
    id: `char-${i}`,
    image: `/images/playground/Character${i + 1}.png`,
  })),
};
