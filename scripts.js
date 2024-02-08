import { ENV_NINJAS_API_KEY } from "./env.js";

const getRandomQuote = () => {
  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes",
    headers: { "X-Api-Key": ENV_NINJAS_API_KEY },
    contentType: "application/json",
    success: (result) => {
      const data = result[0];

      $("#quote").text(data.quote);
      $("#quote-author").text(data.author);
      $("#quote-category").text(data.category);
    },
    error: (error) => {
      console.error("Error: ", error.responseText);
    },
  });
};

$(document).ready(() => {
  getRandomQuote();

  $("#get-new-quote").click(getRandomQuote);
});
