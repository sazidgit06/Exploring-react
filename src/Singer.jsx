export default function Singer({singer}) {
    console.log(singer)
    return (
        <ol>
            <li>name: {singer.name}</li>
            <li>age: {singer.age}</li>
        </ol>
    )
}