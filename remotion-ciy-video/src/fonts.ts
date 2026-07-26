import {continueRender, delayRender, staticFile} from 'remotion';

const loadFont = (family: string, file: string, weight: string) => {
  const handle = delayRender(`font-${family}-${weight}`);
  const font = new FontFace(family, `url(${staticFile(file)})`, {weight});
  font
    .load()
    .then((loaded) => {
      document.fonts.add(loaded);
      continueRender(handle);
    })
    .catch(() => continueRender(handle));
};

let loaded = false;
export const loadFonts = () => {
  if (loaded) return;
  loaded = true;
  loadFont('NotoMyanmar', 'fonts/NotoSansMyanmar-Regular.ttf', '400');
  loadFont('NotoMyanmar', 'fonts/NotoSansMyanmar-Bold.ttf', '700');
  loadFont('NotoMyanmar', 'fonts/NotoSansMyanmar-Black.ttf', '900');
  loadFont('Poppins', 'fonts/Poppins-SemiBold.ttf', '600');
  loadFont('Poppins', 'fonts/Poppins-Bold.ttf', '700');
};
