// document.querySelector('#usermenu').innerHTML = `<li><a class="ids" id="B19CSE001" href="#">B19CSE001</a></li><li><a class="ids" id="B19CSE002" href="#">B19CSE002</a></li>`;


// const { ipcRenderer } = require("electron");
// const electron = require("electron");
// const ipc = electron.ipcRenderer;
// var ipcRenderer = require("electron").ipcRenderer;

// ipcRenderer.on("got-access-token", (event, html) => {
//     document.querySelector('#usermenu').innerHTML = html;
// });
// const userPrompt = require('electron-osx-prompt');

// const icon = __dirname + '/icon.png';



rows = [
    {
      userid: 'B19CSE001',
      link: 'http://localhost:3000/goto/zL5JIVlnk?orgId=1'
    },
    {
      userid: 'B19CSE002',
      link: 'http://localhost:3000/goto/anuxI4lnk?orgId=1'
    }
  ] ;


function UpdateMenu(){
    var html = '';   
     rows.forEach(function(row){
        html += '<li><a class="ids" id="';
      
        html += row.userid;
        html += '" href="#">';
        html += row.userid;
         html += '</a></li>';
    document.querySelector('#usermenu').innerHTML = html;
      
  });

  document.querySelectorAll('.ids').forEach(item => {
    item.addEventListener('click', event => {
      //handle click
      let myvalue = event.currentTarget.id;
    //   console.log(myvalue);
    var nelink="error";
    for(var i=0; i< rows.length; i++){  
        if (myvalue === rows[i].userid){
            nelink=rows[i].link;
            break;
        } 

    }

    if (nelink!= "error"){
        document.getElementById('iframe').src = nelink;
    }


    
    

    })
  })


}
UpdateMenu()






  document.querySelector('#insert').addEventListener('click', event => {
    //handle click
 
    document.querySelectorAll(".delete").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".apply").forEach(a=>a.style.display = "block");
    document.getElementById('newid').value='' ;
    document.getElementById('newlink').value='' ;
    document.getElementById('iddel').value='' ;
   
     

  }) 

 
 
  document.querySelector('#btn1').addEventListener('click', event => {
    //handle click
 
     
    var newid =  document.getElementById('newid').value ;
    var newlink =  document.getElementById('newlink').value ;
    if (newid==null){
       
      // alert("Enter some unique Id");
    
    }
    var check=true;
    for(var i=0; i< rows.length; i++){  
        if (newid === rows[i].userid){
            // alert("Duplicate Id Found : Please Enter a Unique Id");
            check=false;
            break;
        } 

    }
    if (check){
        // var newlink=prompt("Please enter the link for user");

        
        var newuser = {};
        newuser["userid"] = newid;
        newuser["link"] = newlink;
        rows.push(newuser);
        UpdateMenu();
        // alert("New user created successfully");

    }


    document.querySelectorAll(".apply").forEach(a=>a.style.display = "none");

  

  }) 

   


  document.querySelector('#del').addEventListener('click', event => {

    
    //handle click
    document.querySelectorAll(".apply").forEach(a=>a.style.display = "none");
    document.querySelectorAll(".delete").forEach(a=>a.style.display = "block");
    document.getElementById('newid').value='' ;
    document.getElementById('newlink').value='' ;
    document.getElementById('iddel').value='' ;
 

  })

  document.querySelector('#btn2').addEventListener('click', event => {
    //handle click
 
     
    var deleteid =  document.getElementById('iddel').value ;
     
    if (deleteid==null){
       
      // alert("Enter some Id");
    
    }
    var check=false;
    var index;
    for(var i=0; i< rows.length; i++){  
        if (deleteid === rows[i].userid){
            
            check=true;
            index=i;
            break;
        } 

    }
    if (check){
        

        rows.splice(index, 1); 
        UpdateMenu();

        // alert("user deleted successfully");

    }
    else{
        // alert("UserID entered does not exist");
    }

    document.querySelectorAll(".delete").forEach(a=>a.style.display = "none");

  
  

  }) 




  