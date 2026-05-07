const modules = import.meta.glob(
  './Images/lotsofpics/*.{JPG,jpg,JPEG,jpeg,PNG,png}',
  { eager: true, query: '?url', import: 'default' }
);

export const imagesByName = Object.fromEntries(
  Object.entries(modules).map(([path, url]) => {
    const name = path.split('/').pop();
    return [name, url];
  })
);

export const allImages = Object.values(imagesByName);

export const pick = (name, fallbackIndex = 0) =>
  imagesByName[name] || allImages[fallbackIndex];
