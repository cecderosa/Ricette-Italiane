function displayRecipe(response) {
    console.log("recipe generated");
    new Typewriter('#recipe', {
  strings: response.data.answer,
  autoStart: true,
  delay:1,
  cursor: "",
});
   
}

function generateRecipe (event){
    event.preventDefault();

let instructionsInput = document.querySelector("#user-instructions");
    let apiKey="c7o85b9t9db5f04fdbe341094a1feefd";
    let context="You are an Italian chef, expert in traditional italian cuisine. Your mission is to generate a recipe including the ingredients provided. Make sure the recipe is traditional and includes the user intructions. Make the recipe readable, in HTML, separate each line with a <br />. Separate the ingredients from the recipe and make it easily accessible. Do not include your commentary at the start, but provide context as to when and where the recipe is used.";
     let prompt=`User instructions: Generate an Italian recipe including ${instructionsInput.value}`;
    let apiUrl=`https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

console.log("Generating recipe");
console.log(`Prompt: ${prompt}`);
console.log(`Context: ${context}`);

    axios.get(apiUrl).then(displayRecipe);

}

let recipeFormElement=document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener(`submit`, generateRecipe );