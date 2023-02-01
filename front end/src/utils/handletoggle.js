export const handleToggle = () => {
    document.body.classList.toggle("darken-bg");
    const card = document.querySelectorAll(".card-button")
    card.forEach(darkentest => {
      darkentest.classList.toggle("darken-img")
    })
    document.querySelector(".jumbotron").classList.toggle("darken-img");
    const images = document.querySelectorAll("img");
    images.forEach((img) => {
      img.classList.toggle("darken-img");
    });
  };
