// Code Keypad Component Here

function Keypad (){
    function handleChange() {
        console.log("Enter password")
      }
    
      return (
        <input type="password" onChange={handleChange} />
      )
}

export default Keypad;