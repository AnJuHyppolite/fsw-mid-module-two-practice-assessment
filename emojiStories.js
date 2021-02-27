//Create a button: Grab form, addEventListener, submit, preventDefault
//Generate emojis: Grab emojis & use Math.random method & user input
//Generate length (via user input): Grab user input for emoji length
//Display the emojis: Grab p-tag to display
const formOne = document.querySelector("#form-one")
const storyLength = document.querySelector("#story-length-input") //points to user input
const emojiStory = document.querySelector("#emoji-story")
const storyButton = document.querySelector("#generate-story-btn")

const generateEmoji = () => {
    // question why userInput variable needs to be in function
    const userInput = Number(storyLength.value) //user input(input tag has value property which is a string)
    for (let i = 0; i < userInput; i++) {
        const randomIdx = Math.floor(Math.random() * emojis.length-1)
        emojiStory.innerText += emojis[randomIdx] //Be sure not to reassign (=), make sure to use +=
    }
}

storyButton.addEventListener ("click", generateEmoji)

formOne.addEventListener ('click', (event) => {
    event.preventDefault()
})
