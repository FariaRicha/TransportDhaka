var firebaseConfig = {
    apiKey: "AIzaSyC6dAAtAO8SH-NoTsGNJ25RBWYusOwhe9M",
    authDomain: "transport-for-dhaka.firebaseapp.com",
    databaseURL: "https://transport-for-dhaka.firebaseio.com",
    projectId: "transport-for-dhaka",
    storageBucket: "transport-for-dhaka.appspot.com",
    messagingSenderId: "400332849286",
    appId: "1:400332849286:web:024fad5b1a96ee00f65107",
    measurementId: "G-SLP3LVBN2C"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function createtable()
  {
      var table=document.getElementById("table_body");

      var ref=firebase.database().ref("orders");

      ref.on("value",data=>{
          var alldata=data.val();
          var keys=Object.keys(alldata);
          for(var i=0;i<keys.length;i++)
          {
              var index=keys[i];

              var row=table.insertRow();
              var cell1=row.insertCell(0);
              var cell2=row.insertCell(1);
			  var cell3=row.insertCell(2);



              cell1.innerHTML=alldata[index].name;

			  cell2.innerHTML=alldata[index].email;

              cell3.innerHTML=alldata[index].message;
          }


      },errorfunc);
  }

  function errorfunc(err)
  {
    console.log("Error!! id: ");
    console.log(err);
  }

  createtable();
