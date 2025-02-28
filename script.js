const form = document.querySelector("#contact_form");
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  try {
    const response = await fetch("https://formspree.io/f/manqrqqe", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });
    form.reset();
    console.log("USpesno poslato!");
  } catch (err) {
    console.log(err);
  }
});
