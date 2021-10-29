import Button from "./Components/Button";


function App(){
    const styles = {
        backgroundColor:'green',
                fontSize:'2rem',
                color:'grey',
                border : 'none',
                margin : '5px'
    }
    return(
        <div>
        <div>
            {/* inline css */}
            <button style={{
                backgroundColor:'yellow',
                fontSize:'2rem',
                color:'grey',
                border : 'none'
            }}>Play Store</button>
           {/* <p>My Name is {name}</p> */}
        </div>
        <div>
            {/* internal css */}
            <button style={styles}>Internal</button>
        </div>
        <div>
            {/* Component 1 */}
            <Button value='Button 1'/>
            <Button value='Button2'/>
        </div>
        </div>
    )
}
export default App;