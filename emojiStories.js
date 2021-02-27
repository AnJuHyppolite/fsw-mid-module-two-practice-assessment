//NOTES
//Create a button: Grab form, addEventListener, submit, preventDefault
//Generate emojis: Grab emojis & use Math.random method & user input
//Generate length (via user input): Grab user input for emoji length
//Display the emojis: Grab p-tag to display

// const formOne = document.querySelector("#form-one")//Do we need a form?
const storyLength = document.querySelector("#story-length-input"); //points to user input
const emojiStory = document.querySelector("#emoji-story");
const storyButton = document.querySelector("#generate-story-btn");
let emojiStr = ""

const generateEmoji = () => {
  // question why userInput variable needs to be in function
  const numInput = Number(storyLength.value); //user input(input tag has value property which is a string)
  for (let i = 0; i < numInput; i++) {
    const randomIdx = Math.floor(Math.random() * emojis.length - 1);
    emojiStr += emojis[randomIdx]; //Be sure not to reassign (=), make sure to use +=
  }
  emojiStory.innerText += emojiStr
};


storyButton.addEventListener("click", (event) => {
  event.preventDefault();
  generateEmoji();
});

const storyInput = document.querySelector("#description-input");
const descriptionButton = document.querySelector("#submit-description-btn");
const ul = document.querySelector("ul")


const createStory = () => {
    let storyString = storyInput.value;
    const li = document.createElement("li");
    li.textContent = `${emojiStr} ${storyString}`;
    ul.appendChild(li);
};

descriptionButton.addEventListener("click", (event) => {
    event.preventDefault();
    createStory();
});
debugger;
