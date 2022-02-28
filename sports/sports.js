// spinner function start
const spinnerToggle = (displayStyle) => {
   const spinnerFind = document.getElementById('spinner');
   spinnerFind.style.display = displayStyle;
}
// spinner function end





// button function
const descript = document.getElementById('description');
const buttonClick = () => {
   // button and input field access start
  const inputField = document.getElementById('input-field');
  const inputValue = inputField.value;
//   show spinner
spinnerToggle('block');
  
  inputField.value = '';
  // button and input field access end
   //   api access start
   if(inputValue == ''){
      alert('plz write something');
   }
   else if(inputValue >=0 || inputValue < 0){
      alert('plz enter string value');
   }
  
   
   else{
      const url = (`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${inputValue}`);
   fetch(url)
   .then(res => res.json())
   .then(data => playerDisplay(data.player))
   }
   //   api access end
  
};

// ui display function start
const playerDisplay = (players) => {
   const container = document.getElementById('contain');
   container.innerHTML = '';
   descript.innerHTML = '';
for(const player of players){
   console.log(player)
   const div = document.createElement('div');
  div.classList.add("work4");
  
   
    div.innerHTML =`
    <div class='w-75 mx-auto m-3 p-2'>
    <img class='w-100 work6' src="${player.strThumb}" alt="">
    <h3 class="work5">Name:${player.strPlayer}</h3>
    <h5 class="work5">Type:${player.strSport}</h5>
    <h5 class="work5">Gender:${player.strGender}</h5>
    <h5 class="work5">Team:${player.strTeam}</h5>
    <h5 class="work5">height:${player.strHeight}</h5>
    <h5 class="work5">Country: ${player.strBirthLocation}</h5>
    <h5 class="work5">Position:${player.strPosition}</h5>
    <button onclick="descriptionButton(${player.idPlayer})" class="btn btn-primary">detailes</button>
    </div>
    `
    container.appendChild(div);
   
}
spinnerToggle('none');

};
// ui display function end
const descriptionButton = desc =>{
   const url = (`https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${desc}`);
   fetch(url)
   .then(res => res.json())
   .then(data => descriptionDisplay(data.players[0]));

};

const descriptionDisplay = desc1 => {
   console.log(desc1);
   // const descript = document.getElementById('description');
   descript.innerHTML = '';
   const div = document.createElement('div');
   div.classList.add('work7');
   div.innerHTML = `
   <h3 class=" work1 text-center fst-italic"><span class="work3">Player</span> Detailes</h3>
   <img class='w-50  work6 work9' src="${desc1.strCutout}" alt="">
   <p>Information:${desc1.strDescriptionEN.slice(0,300)}</p>
   
   <div class='w-50 mx-auto'><a href="${desc1.strFacebook}" class="btn btn-primary">Facebook</a></div>
   `
   descript.appendChild(div);
}


