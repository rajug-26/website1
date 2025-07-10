fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));



// fetch('http://127.0.0.1:5500/task.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

  // AJAX METHOD
// $.ajax({
//   url: 'https://jsonplaceholder.typicode.com/todos', // API endpoint
//   method: 'GET',
//   dataType: 'json', // ensures response is parsed as JSON
//   success: function(response) {
//     console.log(response); // handle the response here
//   },
//   error: function(xhr, status, error) {
//     console.error('Error:', error); // log the error
//   }
// });