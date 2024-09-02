
  // Form Submission ---------------------------------
  document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    const form = this;
    const formData = new FormData(form);
  
    fetch(form.action, {
      method: 'POST',
      body: formData,
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(response => {
        if (response.ok) {
          form.reset();
          const toast = document.getElementById("toast");
          toast.classList.add("show");
          setTimeout(function(){ toast.classList.remove("show"); }, 10000);        
        } else {
          // Handle errors here
          alert('Form submission failed!');
      }
    })
    .catch(error => {
        console.error('Error:', error);
    });
  });