type Count = {count:number}

function ResultCount(count:Count){
    return(<p>{count.count} books </p>)  
}

export default ResultCount