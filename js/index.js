var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
var currentQuote = '',
  currentAuthor = '';

function getQuote() {
  $.ajax({
    headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    url: 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=',
    success: function(response) {
      var r = JSON.parse(response);
      currentQuote = r.quote;
      currentAuthor = r.author;
      $("#text").text(currentQuote);
      $("#author").text(currentAuthor);
      console.log(currentQuote);
      var color = Math.floor(Math.random() * colors.length);
      $("body").css({
        backgroundColor: colors[color],
        color: colors[color]
      });
      $(".btn").css({
        backgroundColor: colors[color]
      });
    }
  });

}
$(document).ready(function() {
  getQuote();
  $(".btn").on("click", getQuote);
});