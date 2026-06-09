import sharp from 'sharp';
import { readdir, copyFile } from 'fs/promises';
import { join, extname } from 'path';

const SRC_BASE = 'C:/Users/kaiki/Portfolio/img&gif_projets';
const DST_BASE = 'C:/Users/kaiki/Portfolio/Astro/CEOfolio/public/projects';

const projects = [
  { src: 'ClassLab', dst: 'classlab' },
  { src: 'ThermoClash', dst: 'thermoclash' },
  { src: 'ElementsPowder', dst: 'element-powder' },
  { src: 'DarkChildStory', dst: 'darkchild-story' },
  { src: 'Chroniques Oubliées  Cœur Tendancieux (démo)', dst: 'chroniques-oubliees' },
];

for (const proj of projects) {
  const srcDir = join(SRC_BASE, proj.src);
  const dstDir = join(DST_BASE, proj.dst);
  const files = await readdir(srcDir);

  let imgIndex = 1;
  for (const file of files) {
    const ext = extname(file).toLowerCase();
    const srcPath = join(srcDir, file);

    if (ext === '.png' || ext === '.jpg' || ext === '.jpeg') {
      const outName = `${proj.dst}-${imgIndex}.webp`;
      console.log(`Converting ${file} -> ${outName}`);
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(join(dstDir, outName));
      imgIndex++;
    } else if (ext === '.mp4') {
      // Just copy mp4 files
      const outName = `${proj.dst}-demo.mp4`;
      console.log(`Copying ${file} -> ${outName}`);
      await copyFile(srcPath, join(dstDir, outName));
    }
    // Skip .gif, .txt, .ini files
  }
  console.log(`✅ ${proj.src}: ${imgIndex - 1} images converted`);
}

console.log('\n🎉 All done!');
