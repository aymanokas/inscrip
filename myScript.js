    var ancient = false;
    var nouveau = false;
    var formToShow = 
    `
    <form class="text-center border border-light p-5" method="post" style="max-width: 659px;margin: auto;">

    <p style="color:white" class="h4 mb-4">Postuler</p>

    <div class="form-row mb-4">
        <div class="col">
            <!-- First name -->
            <input type="text" id="firstName" class="form-control" placeholder="First name">
        </div>
        <div class="col">
            <!-- Last name -->
            <input type="text" id="lastName" class="form-control" placeholder="Last name">
        </div>
    </div>

    <!-- E-mail -->
    <input type="email" id="email" class="form-control mb-4 is-valid" placeholder="E-mail">
    
    <!-- Gender -->
  
      <div class="custom-control custom-radio custom-control-inline">
        <input type="radio" class="custom-control-input" id="male" name="inlineDefaultRadiosExample">
        <label style="color:white" class="custom-control-label" for="defaultInline2">Male</label>


      <div class="custom-control custom-radio custom-control-inline" ">
        <input type="radio" class="custom-control-input" id="female" name="inlineDefaultRadiosExample">
        <label style="color:white" class="custom-control-label" for="defaultInline3">Female</label>
      </div>
</div>
      <br>
    <!-- Poste 1-->
    <select id="choice1" class="browser-default custom-select mb-4" style="max-width: 35%;display: block;">
        <option value="" selected disabled>Premier Choix</option>
        <option value="president">President</option>
        <option value="vice-president">Vice president</option>
        <option value="tresorier">Tresorier</option>
        <option value="secraitaire">Secraitaire</option>
        <option value="documentation">Cellule Documentation</option>
        <option value="technique">Cellule technique</option>
        <option value="multi-media">Cellule Multi-Media</option>
        <option value="sponsoring">Cellule Sponsoring</option>
    </select>

    <!-- Poste 2-->
    <select id="choice2" class="browser-default custom-select mb-4" style="max-width: 35%;display: block;">
        <option value="" selected disabled>Deuxieme Choix</option>
        <option value="president">President</option>
        <option value="vice-president">Vice president</option>
        <option value="tresorier">Tresorier</option>
        <option value="secraitaire">Secraitaire</option>
        <option value="documentation">Cellule Documentation</option>
        <option value="technique">Cellule technique</option>
        <option value="multi-media">Cellule Multi-Media</option>
        <option value="sponsoring">Cellule Sponsoring</option>
    </select>

    <!-- Poste 2-->
    <select id="choice3" class="browser-default custom-select mb-4" style="max-width: 35%;display: block;">
        <option value="" selected disabled>Troisieme Choix</option>
        <option value="president">President</option>
        <option value="vice-president">Vice president</option>
        <option value="tresorier">Tresorier</option>
        <option value="secraitaire">Secraitaire</option>
        <option value="documentation">Cellule Documentation</option>
        <option value="technique">Cellule technique</option>
        <option value="multi-media">Cellule Multi-Media</option>
        <option value="sponsoring">Cellule Sponsoring</option>
    </select>
    <!-- Password -->
    <input type="password" id="defaultRegisterFormPassword" class="form-control" placeholder="Password" aria-describedby="defaultRegisterFormPasswordHelpBlock">
    <small id="code" class="form-text text-muted mb-4">
        4 digits Code
    </small>

    <!-- Raison -->
    <textarea id="raison" class="form-control z-depth-1" placeholder="Pourquoi voulez vous etre responsable de ce poste ?" > </textarea>
    <small class="form-text text-muted mb-4">
        At least 6 words
    </small>

    <!-- Submit button -->
    <button class="btn btn-info my-4 btn-block" type="submit" onclick="getFormInfo()">Submit</button>

    
</form>`
    function onAncient(){
      console.log("Ancient Clicked");
      //document.getElementById('button-choice').style.display = 'none' 
      //document.getElementById('logo').style.display = 'none' 
      document.getElementById('top-jumbotron').style.display = "none";
      document.getElementById('test').innerHTML = 
                ` 
                <div class="row" style="margin-top:5%">
                          <div class="col-lg-12">
                            <div class="jumbotron">
                                <h4>Section Ancient Membres</h4>
                                <hr style="background-color: white;">
                                <p id="pToHide" style="color:white">Veuillez entrez le code pour avoir accee au fichier pdf<p>
                           
                                <input id="code" name="code" onKeyUp="getCode()" class="form-control" type="password" placeholder="4 digits" value=""/>
                                <div id="downloadPDF"> </div>
                            </div>
                          </div>
                </div>
                        `;
     
    }

     function onNouveau(){
      console.log("Nouveau Clicked");
    }
    function fillFormAncient(){
      document.getElementById('downloadBtn').style.display = "none";
      document.getElementById('pCliquezIci').style.display = "none";
      document.getElementById('formAncient').innerHTML = formToShow;
        }
    function getFormInfo(){
      var firstName =  document.getElementById('firstName').value;
      var lastName = document.getElementById('lastname').value;
      var email = document.getElementById('email').value;
      var choice1 = document.getElementById('choice1');
      var choice2 = document.getElementById('choice2').value;
      var choice3 = document.getElementById('choice3').value;
      var code = document.getElementById('code').value;
      var raison = document.getElementById('raison').value;
      var allInfo = firstName + " " + lastName + " " + email + " " + code + " " + rasion;
      console.log(allInfo);
      if (firstName == '' || lastName == '' || password == '' || email == '' || raison == '') {
        alert("Please Fill All Fields");
        } else {
        // AJAX code to submit form.
        $.ajax({
        type: "POST",
        url: "ajaxjs.php",
        data: dataString,
        cache: false,
        success: function(html) {
        alert(html);
        }
        });
        }
        return false;
    }
    function getCode(){ //4321
      var code = document.getElementById('code').value;
      console.log(code);
      if ( code == 4321) {
        document.getElementById('downloadPDF').innerHTML = 
        `
        <p style="color:white">Veuillez lire attentivement toutes les informations disponibles sur ce fichier, ensuite faite votre choix et votez via le lien disponible en bas du document<p>
        <button id="downloadBtn" class="btn btn-success">Download</button>
        <p id="pCliquezIci" style="color:white">Apres avoir bien lu le document vous pouvez postuler pour l'une des cellules ou poste du bureau en cliquant <button onClick="fillFormAncient()" class="btn btn-sm btn-info">ici</button></p>
        <div id="formAncient" class="container"> </div>
        `;
        document.getElementById('code').style.display = "none";
        document.getElementById('pToHide').style.display = "none";
      }else  document.getElementById('code').classList.add('wrong');
    }
 