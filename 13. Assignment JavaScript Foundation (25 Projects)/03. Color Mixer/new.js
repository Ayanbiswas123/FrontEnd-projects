function mixcolor() {
    let col1 = document.getElementById("col1").value;
    let col2 = document.getElementById("col2").value;
    let out = document.getElementById("out");
    let color1 = col1.toLowerCase();
    let color2 = col2.toLowerCase();

  switch(color1){

    case "red":
            switch(color2){
                case "yellow":
                    out.value = "orange";
                    break;
                case "blue":
                    out.value = "purple";
                break;
                default:
                    out.value = "Invalid color combination1";
            }
            break;

    case "blue":
            switch(color2){

                case "red":
                    out.value = "purple";
                    break;
                case "yellow":
                    out.value = "green";
                    break;
                default:
                    out.value = "Invalid color combination2";
            }
            break;
    case "yellow":
            switch(color2){

                case "red":
                    out.value = "orange";
                    break;
                case "blue":
                    out.value = "green";
                    break;
                default:
                    out.value = "Invalid color combination3";    
            }
            break;
    default:
        out.value = "Invalid color combination4";

  }








    /*if( col1.toLowerCase() === "red" && col2.toUpperCase() === "YELLOW"){

        out.value = "yes";
    }else{

        out.value = "no";
    }*/




}
