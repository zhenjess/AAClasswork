const APIUtil = require("./api_util");

class FollowToggle {
  constructor (el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.followState = this.$el.data('initial-follow-state');
    this.render();
    this.$el.on('click', this.handleClick.bind(this));
  }

  // const setEventHandlers = () => {
  //   $('.follow-toggle').on('click', function (e) {
  //     let $element = $(e.target);
  //     $element.handleClick(e);
  //   });
  // };

  // $(setEventHandlers); 

  render () {
    if (this.followState === "followed") {
      this.$el.text("unfollow");
    } else {
      this.$el.text("follow");
    }
  }

  handleClick (e) {
    e.preventDefault();
    this.$el.attr("disabled", true);
    if (this.followState === 'unfollowed') {
      APIUtil.followUser(this.userId)
      .then(() => {
        this.followState = 'followed';
        this.render();
        this.$el.attr("disabled", false);
      });
    } else {
      APIUtil.unfollowUser(this.userId)
      .then(() => {
        this.followState = 'unfollowed';
        this.render();
        this.$el.attr("disabled", false);
      });
    }
  }  

  // toggleFollowState(followState) {
  //   if (followState === "followed") {
  //     return "unfollowed";
  //   } else {
  //     return "follow";
  //   }
  // }

}

module.exports = FollowToggle;