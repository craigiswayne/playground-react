
const clicked = () => {
    console.log('Button was clicked');
}
const ClickEvents = () => {
    return <>
        <button onClick={clicked}>Click Me</button>
    </>
}

export default ClickEvents;