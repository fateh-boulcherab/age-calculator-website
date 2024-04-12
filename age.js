function calculateAge(){

    // Reset everything in every submition

    document.getElementById("dayLabel").style.color = "var(--smokey-grey)";
    document.getElementById("monthLabel").style.color = "var(--smokey-grey)";
    document.getElementById("yearLabel").style.color = "var(--smokey-grey)";

    document.getElementById("day").style.border = "1px solid var(--light-grey)";
    document.getElementById("month").style.border = "1px solid var(--light-grey)";
    document.getElementById("year").style.border = "1px solid var(--light-grey)";

    document.getElementById("dayError").innerHTML = "";
    document.getElementById("monthError").innerHTML = "";
    document.getElementById("yearError").innerHTML = "";

    document.getElementById("yearResult").innerHTML = "--";
    document.getElementById("monthResult").innerHTML = "--";
    document.getElementById("dayResult").innerHTML = "--";

    // Extracting the values...

    let d = document.getElementById("day").value;
    let m = document.getElementById("month").value;
    let y = document.getElementById("year").value;


    // Handling errors

    if(d<1 || d>31 || m<1 || m>12 || y<1900 || y>2024){
        if(d<1 || d>31){
            document.getElementById("day").style.border = "1px solid var(--light-red)";
            document.getElementById("dayLabel").style.color = "var(--light-red)";
            document.getElementById("dayError").innerHTML = "day must be between 1 and 31";
        }
        if(m<1 || m>12){
            document.getElementById("month").style.border = "1px solid var(--light-red)";
            document.getElementById("monthLabel").style.color = "var(--light-red)";
            document.getElementById("monthError").innerHTML = "month must be between 1 and 12";
        }
        if(y<1900 || y>2024){
            document.getElementById("year").style.border = "1px solid var(--light-red)";
            document.getElementById("yearLabel").style.color = "var(--light-red)";
            document.getElementById("yearError").innerHTML = "year must be between 1900 and 2024";
        }
        return false;
    }else{
        const bDate = new Date(y+"-"+m+"-"+d);
        let ageMille = Date.now() - bDate.getTime();
        if(ageMille<0){
            document.getElementById("day").style.border = "1px solid var(--light-red)";
            document.getElementById("dayLabel").style.color = "var(--light-red)";
            document.getElementById("month").style.border = "1px solid var(--light-red)";
            document.getElementById("monthLabel").style.color = "var(--light-red)";
            document.getElementById("year").style.border = "1px solid var(--light-red)";
            document.getElementById("yearLabel").style.color = "var(--light-red)";

            document.getElementById("dayError").innerHTML = "day is in the future";
        }
        else{
            if(m==2 && d>28){
                document.getElementById("day").style.border = "1px solid var(--light-red)";
                document.getElementById("dayLabel").style.color = "var(--light-red)";
                document.getElementById("dayError").innerHTML = "February has only 28 days";
                return 0;
            }
            if(m==2 || m==4 || m==6 || m==9 || m==11){
                if(d==31){
                    document.getElementById("day").style.border = "1px solid var(--light-red)";
                    document.getElementById("dayLabel").style.color = "var(--light-red)";
                    document.getElementById("dayError").innerHTML ="the month "+m+" has only 30 days";
                    return 0;
                }
            }
            let ageDays = ageMille/1000/3600/24;

            let years = ageDays/365.25;
            let months = (ageDays%365.25)/30;
            let days = ((ageDays%365.25)%30)+1;

            incrementValues(years, months, days);

        }
    
    }
    
}

// Animate numbers to their final number 

async function incrementValues(years, months, days) {
    await processYears(years);
    await processMonths(months);
    await processDays(days);
}

async function processYears(years) {
    for (let i = 1; i <= Math.floor(years); i++) {
        document.getElementById("yearResult").innerHTML = i;
        await sleep(20);
    }
}
async function processMonths(months) {
    for (let i = 1; i <= Math.floor(months); i++) {
        document.getElementById("monthResult").innerHTML = i;
        await sleep(20);
    }
}
async function processDays(days) {
    for (let i = 1; i <= Math.floor(days); i++) {
        document.getElementById("dayResult").innerHTML = i-1;
        await sleep(20);
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}