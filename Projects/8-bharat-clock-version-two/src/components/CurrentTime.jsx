function CurrentTime(){ 
    let time = new Date();
    return(
        
        <p className="lead">The current time is: {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>
    )
}

export default CurrentTime;