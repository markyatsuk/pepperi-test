//finding html elements

const formEl = document.querySelector("form");
const inputEl = document.querySelector(".form__input");
const listEl = document.querySelector(".list");
const sortByName = document.querySelector(".sort-by-name");
const sortByValue = document.querySelector(".sort-by-value");
const deleteBtn = document.querySelector('.delete');
const xmlBtn = document.querySelector(".show-xml");



// let newLi = document.createElement('li');

//binding functions

formEl.addEventListener("submit", onFormSubmit);
sortByName.addEventListener("click", SortByName);
// sortByValue.addEventListener("click", SortByValue);
deleteBtn.addEventListener("click", Delete);
xmlBtn.addEventListener("click", ShowXMLFormat);


//making arrays for taking info to them by pushing elements

let arrayNameHistory = []; 
let arrayValueHistory = [];
let arrayHistrory = [];


// let sortedByValueArr = [];

//function to add pairs name=value to the list

 function onFormSubmit(e) {
     e.preventDefault();
     //dividing our pair by two values - name=value 
     const isCorrectValue = inputEl.value.includes("=");
     
     //cheking if the format is correct(includes "=")
    if (isCorrectValue) {
        const inputArray = inputEl.value.trim().split("=");

    //cheking if the format is correct(user didn't enter only spaces to any value from name=value )
        if (!inputEl.value.trim() || !inputArray[0].trim() || !inputArray[1].trim()) {
            alert("Enter Text");
            return;
        }
    //if everything with input datas is ok, pushing elements into needful arrays and output values
        else {
            arrayNameHistory.push(inputArray[0]);
            arrayValueHistory.push(inputArray[1]);
            arrayHistrory.push(`${inputArray[0]}=${inputArray[1]}`);

            for (let i = 0; i < arrayNameHistory.length; i++){
                //addind new markup li-elements and output them
                const markup = createLi(arrayHistrory)
                console.log(arrayNameHistory, arrayValueHistory, arrayHistrory);
                listEl.textContent =''
                return listEl.insertAdjacentHTML('beforeend', markup);
                
            }
            
            
        }
        
    }
     //saying to enter text using valid format
    else {
        alert("Enter correct text using format 'name=value' ")
    }
    
    
}

//making sorting by name in pair name=value
function SortByName() {
    const sortedArr = arrayHistrory.sort();
    for (let i = 0; i < sortedArr.length; i++) {
        listEl.textContent = '';
        const markup = createLi(sortedArr);
        // newLi.textContent = sortedArr[i];
        // listEl.prepend(newLi)
        return listEl.insertAdjacentHTML('beforeend', markup);
    }
    console.log(sortedArr)
    
}

// function SortByValue() {
//     const sortedValueHistory = arrayValueHistory.sort();
//     for (let i = 0; i < sortedValueHistory.length; i++){
//         // let splitedEl = arrayHistrory[i].split("=");
//         // console.log(splitedEl)
//         // if (splitedEl[1] === sortedValueHistory[i]) {
//         //     sortedByValueArr.push(arrayHistrory[i])
//         // }
//         console.log(sortedByValueArr)
//     }
// }


//deleting everything in list and clears the array with history
function Delete() {
    listEl.textContent = "";
    arrayHistrory = []
}

//showing the xml-format
function ShowXMLFormat() {
    const xmlText = listEl.innerHTML;
    alert(xmlText)
}

//creating markup
function createLi(data) {
    
    return data.map((el) => {
       
        return `
                <li class="list_item"> 
                    ${el}
                </li>
                `;
    }).join('');
    
};