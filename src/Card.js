import { Button } from "./Button"
export const Card=({name})=>{
    return(
        <div className="card">
            <h2>Hello!</h2>
            <p>My Name is {<h3>{name}</h3>} and this is my first attempt at React!</p>
            <Button placeHolder="simple button" /><Button placeHolder="another button" />
            <footer>Thanks LetsUpgrade for the oppurtunity</footer>
        </div>
    )
}