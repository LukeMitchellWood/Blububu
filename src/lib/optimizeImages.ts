import sharp from 'sharp';
import { readdir, mkdir } from 'node:fs/promises';

const root = 'static/img/assets/markets/orig';
const destination = 'static/img/assets/markets/optimised';

const settings = [
  {
    suffix: 'sm',
    width: 300,
  },
  {
    suffix: 'md',
    width: 600,
  },
  {
    suffix: 'lg',
    width: 1200,
  },
  {
    suffix: 'xl',
    width: 2400,
  },
];

async function main() {
  const files = await readdir(root);
  files.forEach(async (file) => {
    const fn = file.split('_').slice(0, 2).join('_');
    settings.forEach(async (setting) => {
      await mkdir(`./${destination}/${setting.suffix}`, { recursive: true });
      const optimisedFilePath = `./${destination}/${setting.suffix}/${fn}_${setting.suffix}.jpeg`;
      await sharp(`./${root}/${file}`)
        .resize({ width: setting.width })
        .toFormat('jpeg', { quality: 60 })
        .toFile(optimisedFilePath);
    });
  });
}

main();
