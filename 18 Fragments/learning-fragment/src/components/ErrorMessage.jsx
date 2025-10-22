function ErrorMessage({ items }){
    return<>
        {items.length === 0 && <h3>I am stil hungry</h3>}
    </>
}

export default ErrorMessage;