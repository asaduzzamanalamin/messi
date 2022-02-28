
// spinner

const toggleSpinner = displayStyle => {
   document.getElementById('spinner').style.display = displayStyle;
}
const toggleSearchResult = displayStyle => {
   document.getElementById('meals').style.display = displayStyle;
}




// meal db
const searchMeal = () => {
   const seaarchText = document.getElementById('search-field').value;
   // show spinner
   toggleSpinner('block');
   toggleSearchResult('none')
   console.log(seaarchText);
   loadMeals(seaarchText);
   document.getElementById('search-field').value ='';
   
};

const loadMeals = searchText =>{
   const url = (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
   fetch(url)
   .then(res => res.json())
   .then(data => displayMeals(data.meals))
};

const displayMeals = meals => {
   const container = document.getElementById('meals');
    container.textContent = '';
   meals?.forEach(meal =>{
      console.log(meal);
     const div = document.createElement('div');
     div.innerHTML = `
     <h1>${meal.strMeal}</h1>
     <p>${meal.strIngredient8 ? meal.strIngredient8:'unvaliable'}</p>
     <button onclick = " loadMealDetail('${meal.strMeal}')">click me</button>

     `
     container.appendChild(div);
   });
   toggleSpinner('none');
   toggleSearchResult('block')

};
 loadMeals('fish');
const loadMealDetail = mealName =>{
   console.log(mealName);
}