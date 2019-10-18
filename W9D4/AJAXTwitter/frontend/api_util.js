const APIUtil = {

  followUser: userId => {
    return $.ajax({
      url: `/users/${userId}/follow`,
      method: 'POST',
      dataType: 'JSON',
    });
  },

  unfollowUser: userId => {
    return $.ajax({
      url: `/users/${userId}/follow`,
      method: 'DELETE',
      dataType: 'JSON',
    });
  }



};

module.exports = APIUtil;