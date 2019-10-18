class UsersSearch {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data('user-id');
    this.value = this.$el.value;
  }
}
