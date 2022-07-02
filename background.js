const images = [
  "url(https://i.pinimg.com/originals/49/fc/d5/49fcd543822a7923220c54e3efb146f5.jpg)",
  "url(https://t1.daumcdn.net/cfile/blog/2201613652970A0E20)",
  "url(https://www.wallpapertip.com/wmimgs/81-811943_minimalist-wallpaper-purple.jpg)",
];

document.body.style.backgroundImage =
  images[Math.floor(Math.random() * images.length)];
