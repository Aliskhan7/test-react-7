const {useState} = require("react");


function Heroes(){

    const nameItem = [
        "Шерлок Холмс",
        "Доктор Ватсон",
        "Профессор Мориарти",
        "Миссис Хадсон",
        "Ирен Адлер"
    ]

    const [names, setNames] = useState(nameItem);

    const handleDelete = (index) =>{
        const del = names.filter((item, i) => {
            if(index === i){
                return false;
            } else {
                return true;
            }
        })
        setNames(del);
    }

    return(
        names.map((item, index) => {
           return(
               <ul key={index} onClick={() => handleDelete(index)}>
                   <li>{item}</li>
               </ul>
           )
        })
    )
}
export default Heroes;