function calculateAge(){
    let d = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let y = document.getElementById("year").value;

    const bDate = new Date(y+"-"+month+"-"+d);
    let ageMille = Date.now() - bDate.getTime();
    
    let rest;
    let ageYear = Math.floor(ageMille / (1000*60*60*24*356.25));
    rest = ageMille % (1000*60*60*24*356.25);
    let ageMonth = Math.floor(rest/(1000*60*60*24*30.5));
    rest = rest % (1000*60*60*24*30.5);
    let ageDay = Math.floor(rest / (1000*60*60*24))
    // document.getElementById("ggg").innerHTML("yu");
    window.alert(ageYear+"-"+ageMonth+"-"+ageDay);
}