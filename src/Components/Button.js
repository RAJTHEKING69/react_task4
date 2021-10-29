const styles = {
    backgroundColor:'green',
            fontSize:'2rem',
            color:'grey',
            border : 'none',
            margin : '5px'
}
const Button = ({value}) => {
    return(
        <button style={styles}>{value}</button>
    )
}
export default Button;