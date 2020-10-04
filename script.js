//Initialize Firebase
  var config = {
    apiKey: "AIzaSyA9lWEo-9FgiQ90ExdsvHSTB1ehE6dxjhY",
    authDomain: "image-upload-3e69d.firebaseapp.com",
    databaseURL: "https://image-upload-3e69d.firebaseio.com",
    projectId: "image-upload-3e69d",
    storageBucket: "image-upload-3e69d.appspot.com",
  };
  firebase.initializeApp(config);

//function to save file
function previewFile(){
  var storage = firebase.storage();

  var file = document.getElementById("files").files[0];
    console.log(file);
  
  var storageRef = firebase.storage().ref();
  
  //dynamically set reference to the file name
  var thisRef = storageRef.child(file.name);

  //put request upload file to firebase storage
  thisRef.put(file).then(function(snapshot) {
    console.log('Uploaded a blob or file!');
});
  
  //get request to get URL for uploaded file
  thisRef.getDownloadURL().then(function(url) {
  console.log(url);
  })

  }
