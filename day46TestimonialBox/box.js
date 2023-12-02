const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

const testimonials = [
  {
    name: "Miyah Millers",
    position: "Markerting",
    photo: "https://randomuser.me/api/portraits/women/46.jpg",
    text: "She is the best developer hands down.I will work with her again.She made the project run smoothly and she was very patient. She goes over and beyond and transforms ART into PIXELS without a glitch",
  },

  {
    name: "Kato Millers",
    position: "Sales",
    photo: "https://randomuser.me/api/portraits/men/46.jpg",
    text: "She is the best developer hands down.I will work with her again.She made the project run smoothly and she was very patient. She goes over and beyond and transforms ART into PIXELS without a glitch",
  },

  {
    name: "Miyah Pers",
    position: "HR",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "She is the best developer hands down.I will work with her again.She made the project run smoothly and she was very patient. She goes over and beyond and transforms ART into PIXELS without a glitch",
  },

  {
    name: "Miyah Millers",
    position: "Markerting",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "She is the best developer hands down.I will work with her again.She made the project run smoothly and she was very patient. She goes over and beyond and transforms ART into PIXELS without a glitch",
  },
];

let idx = 1;
function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;
  idx++;

  if (idx > testimonials.length - 1) {
    idx = 0;
  }
}

setInterval(updateTestimonial, 10000);
