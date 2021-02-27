//NOTES
//Create a button: Grab form, addEventListener, submit, preventDefault
//Generate emojis: Grab emojis & use Math.random method & user input
//Generate length (via user input): Grab user input for emoji length
//Display the emojis: Grab p-tag to display

// const formOne = document.querySelector("#form-one")//Do we need a form?
const storyLength = document.querySelector("#story-length-input"); //points to user input
const emojiStory = document.querySelector("#emoji-story");
const storyButton = document.querySelector("#generate-story-btn");


const generateEmoji = (event) => {
  event.preventDefault()
  emojiStory.innerText = "Story: "
  let emojiStr = ""
  // question why userInput variable needs to be in function
  const numInput = Number(storyLength.value); //user input(input tag has value property which is a string)
  for (let i = 0; i < numInput; i++) {
    const randomIdx = Math.floor(Math.random() * emojis.length);
    emojiStr += emojis[randomIdx]; //Be sure not to reassign (=), make sure to use +=
  }
  emojiStory.innerText += emojiStr
};


storyButton.addEventListener("click", generateEmoji)

const storyInput = document.querySelector("#description-input");
const descriptionButton = document.querySelector("#submit-description-btn");
const ul = document.querySelector("ul")
const histTitle = document.querySelector("#history-title");
let histCount = 0;

const createStory = () => {
    let storyString = storyInput.value;
    const li = document.createElement("li");
    li.textContent = `${emojiStory.textContent} ${storyString}`;
    ul.appendChild(li);
    histCount ++;
    if(histCount === 0 || histCount === 1) {
      histTitle.innerText = `${histCount} Saved Story`
    } else {
      histTitle.innerText = `${histCount} Saved Stories`
    }
};

descriptionButton.addEventListener("click", (event) => {
    event.preventDefault();
    createStory();
});
// debugger;

