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