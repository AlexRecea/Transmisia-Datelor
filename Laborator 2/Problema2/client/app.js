var app = new Vue({
    el: '#app',
    data: {
      users: [],
      newUser: { name: '', city: '' }
    },
    created: function () {
      this.fetchUsers();
    },
    methods: {
      fetchUsers: function () {
        axios.get('http://localhost:3000/users')
          .then(response => {
            this.users = response.data;
          })
          .catch(error => {
            console.error('Error fetching users: ', error);
          });
      },
      addUser: function () {
        axios.post('http://localhost:3000/users', this.newUser)
          .then(response => {
            console.log(response.data);
            this.fetchUsers();
          })
          .catch(error => {
            console.error('Error adding user: ', error);
          });
      },
      deleteUser: function (index) {
        axios.delete('http://localhost:3000/users/' + index)
          .then(response => {
            console.log(response.data);
            this.fetchUsers();
          })
          .catch(error => {
            console.error('Error deleting user: ', error);
          });
      }
    }
  });
  