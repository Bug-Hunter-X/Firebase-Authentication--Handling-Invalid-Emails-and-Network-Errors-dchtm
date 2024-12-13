// Improved error handling in Firebase Authentication

function createUserWithEmailAndPassword(email, password) {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // User created successfully
      console.log("User created:", userCredential.user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // Handle specific error codes for better user feedback
      if (errorCode === 'auth/invalid-email') {
        alert('Invalid email format. Please use a valid email address.');
      } else if (errorCode === 'auth/network-request-failed') {
        alert('Network error. Please check your internet connection and try again.');
      } else {
        // Handle other errors as needed
        console.error("Error creating user:", error);
        alert('An unexpected error occurred. Please try again later.');
      }
    });
}

// Add additional error handling for other authentication methods (e.g., signInWithEmailAndPassword)