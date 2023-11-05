
const imageStyle = {
    width: "25%"
}

export default function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Dev stuff about me</p>
            <img src="src/assets/me-green-hair.jpeg" alt='picture of me' style={ imageStyle } />
        </div>
    )
}