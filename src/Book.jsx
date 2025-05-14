import './Book.css'
export default function Book ({book}){
    const {name, score} = book;
    return (
        <div className='book'>
            <h3>Book Name : {name}</h3>
            <h3>Score : {score}</h3>
        </div>
    )
}