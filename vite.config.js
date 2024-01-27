import { resolve } from 'path';
import { defineConfig } from 'vite';

const episodeObject = {};

for (let i = 1; i <= 56; i++) {
  episodeObject[`episode${i}`] = resolve(
    __dirname,
    `src/episode${i}/index.html`
  );
}

export default defineConfig({
  root: 'src',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        ...episodeObject,
      },
    },
  },
});
