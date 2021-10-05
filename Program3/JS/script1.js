// document.addEventListener("DOMContentLoaded", function(event) { 
//     alert('Hey')
//   });
// var script = document.createElement('script');
//                 script.setAttribute('type', 'text/javascript');
//                 script.setAttribute('src', source);

//             document.body.appendChild(script);

function validate() {
    let srn = document.getElementById("srn_check").value;
    if (srn.match(/^[A-Z a-z]+[0-9]+[0-9]+[A-Z a-z]+[A-Z a-z]+[0-9]+[0-9]+[0-9]+$/) === -1 || srn.length!==8) {
        document.write("Invalid SRN!!\nEnter a valid SRN");
        return;
    }
    document.write("Success");
}