import React, {useEffect, useState} from "react";

function App() {

const [isLoaded, setIsLoaded] = useState(false)
const [dog, setDog] = useState("")

useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(resp => resp.json())
    .then(data => {
        setDog(data.message)
        setIsLoaded(true)
    })
}, [])

if(!isLoaded) return <p>Loading...</p>

return(
   <img src={dog} alt="A Random Dog"/>
)

}

export default App