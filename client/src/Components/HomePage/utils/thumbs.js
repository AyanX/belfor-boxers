
const req = require.context("../../../Assets/thumbs", false, /\.(png|jpe?g|webp|svg)$/);

const THUMBS = {};
req.keys().forEach((key) => {
  const filename = key.replace("./", ""); 
  const mod = req(key);
  THUMBS[filename] = mod.default || mod;
});

export const getThumb = (filename) => THUMBS[filename];