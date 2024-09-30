let form = document.querySelector("form")
form.addEventListener("submit",(re)=>{
    re.preventDefault()

    let text = document.getElementById("text").value
    console.log(text)
   let any= new SpeechSynthesisUtterance(text)
   speechSynthesis.speak(any)


})