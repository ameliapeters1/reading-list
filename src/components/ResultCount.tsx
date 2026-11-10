interface ResultCountProps {
    count: number;
    label?: string
}


function ResultCount({count, label="books"}: ResultCountProps){
    return(<p>{ count } {label}</p>)  
}

export default ResultCount