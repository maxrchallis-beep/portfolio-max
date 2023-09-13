        function showView1() {
            document.getElementById("view1").style.display = "block";
            document.getElementById("view2").style.display = "none";
        }

        function showView2() {
            document.getElementById("view1").style.display = "none";
            document.getElementById("view2").style.display = "block";
        }


function showUnderline1() {
  var element = document.getElementById("view1")
  
  element.style.textDecoration = "underline";
  }

const myButton1 = document.getElementById("myButton1");
const myButton2 = document.getElementById("myButton2");

// Function to handle button click
function handleButtonClick() {
    // Toggle the "selected" class on the button
    myButton1.classList.toggle("selected");
}

// Add click event listener to the button
myButton1.addEventListener("click", handleButtonClick);
