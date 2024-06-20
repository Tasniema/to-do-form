
document.addEventListener("DOMContentLoaded", function() {
  const currentElement = document.querySelector(".current");
  const addInput = document.querySelector(".classes-to-add");
  const removeInput = document.querySelector(".classes-to-remove");
  const classesList = document.querySelector(".classes-list div");

  // Function to update classes list
  function updateClassesList() {
    classesList.innerHTML = ""; // Clear classes list

    const classes = Array.from(currentElement.classList).sort(); // Get and sort classes alphabetically
    if (classes.length === 0) {
      classesList.textContent = "No Classes To Show";
    } else {
      classes.forEach(function(className) {
        const div = document.createElement("div");
        div.textContent = className;
        classesList.appendChild(div);
      });
    }
  }

  // Function to handle blur event on input fields
  function handleInputBlur(input) {
    input.addEventListener("blur", function() {
      const value = input.value.trim().toLowerCase(); // Trim and convert to lowercase

      if (value !== "") {
        const classes = value.split(" "); // Split by space
        if (input === addInput) {
          currentElement.classList.add(...classes);
        } else if (input === removeInput) {
          currentElement.classList.remove(...classes);
        }
      }

      input.value = ""; // Clear input value
      updateClassesList(); // Update classes list
    });
  }

  // Call the functions
  handleInputBlur(addInput);
  handleInputBlur(removeInput);
});

let element = document.querySelector(".our-element");
let pYcode = document.querySelector("p");
let newDiv = document.createElement("div");
let newD =  document.createElement("div");

element.before(newDiv);
// Add class functionality
newDiv.className = "Start"
newDiv.title ="Start Element"
newDiv.textContent= "Start"
newDiv.dataset.value ="Start"
element.after(newD)
newD.className = "end"
newD.title ="end Element"
newD.textContent= "end"
newD.dataset.value ="end"
pYcode.remove()

    var allElements = document.querySelectorAll('*');

    // Add a click event listener to each element
    allElements.forEach(function(element) {
        element.addEventListener('click', function() {
            // Print a message in the console with the element type
            console.log('This Is "' + this.nodeName + '"');
        });
    });


    let header = document.createElement("header");
    let headContent =[
      "Elzero" ,
      "<ul ><li><a href='#'>Home</a><a href='#'>About</a><a href='#'>Service</a><a href='#'>Contact</a> </li></ul> "
    ]
    header.innerHTML= headContent;
    header.className ="Website-head";
    header.style = " background-color : rgb(236,235,236) ; display : flex; justify-content : space-between; align-items : center; padding: 20px; "
    document.body.appendChild(header);

    let section = document.createElement("div");

    section.className="content";
    section.style= " background-color : rgb(236,235,236) ; display : flex; justify-content : center; align-items : center; padding: 20px; box-sizing : bordr-box;flex-wrap: wrap; gap: 20px; min-height:calc(100vh - 142px);"

    for (let i = 1; i <= 15; i++) {
      let span = document.createElement("span");
      span.style = "font-size: 40px; color: black; display: block; margin-bottom: 10px; margin-top: 10px;";
      span.textContent = i;

      let productText = document.createElement("div");
      productText.textContent = " Product";
      productText.style ="font-size : 20px"
      span.appendChild(productText);

      let sectionDiv =document.createElement("div");
      sectionDiv.className = "product";
      sectionDiv.style ="padding : 20px; background-color: white; border : 1px solid rgb(255,255,255);width : calc((100% - 40px)/3); box-sizing : border-box; text-align : center; border-radius : 6px; color : black;"
    
      sectionDiv.appendChild(span);
      section.appendChild(sectionDiv);
  }
    document.body.appendChild(section);

    let footer = document.createElement("footer");
    footer.textContent = "Copyright 2024"
    footer.style ="padding:20px; background-color :rgb(14,85,62); color :white; font-size:24px; text-align:center;"

    document.body.appendChild(footer);
