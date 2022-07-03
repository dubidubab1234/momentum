const images = [
  "url(https://i.pinimg.com/originals/49/fc/d5/49fcd543822a7923220c54e3efb146f5.jpg)",
  "url(https://dthezntil550i.cloudfront.net/3q/latest/3q1708081746157540000130612/1280_960/a34307ac-b2ac-4fa7-b816-31d231253cdf.png)",
  "url(https://www.wallpapertip.com/wmimgs/81-811943_minimalist-wallpaper-purple.jpg)",
  "url(https://p4.wallpaperbetter.com/wallpaper/331/487/644/dark-desktop-backgrounds-for-winter-wallpaper-preview.jpg)",
  "url(https://p0.pikist.com/photos/892/372/night-sky-stars-universe-milky-way-dark-space-milky.jpg)",
];

document.body.style.backgroundImage =
  images[Math.floor(Math.random() * images.length)];
