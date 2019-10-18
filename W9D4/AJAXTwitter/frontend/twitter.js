const FollowToggle = require("./follow_toggle");

$(function () {
  $('.follow-toggle').each(function(index, button) {
    new FollowToggle(button);
  });

  $('.users-search').each(function (index, input) {
    new UsersSearch(input);
  });
  



});


  