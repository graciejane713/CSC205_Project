

window.onload = (event) => 
{
    
    let id = getCourseId();

    let serverUrl = getServerUrl(id);

    fetch(serverUrl)
        .then(response => response.json())
        .then(data => displayData(data));
}

function getCourseId() {
    let url_str = document.URL;
    let url = new URL(url_str);
    return url.searchParams.get('id');
}


function getServerUrl(id){
    return "https://csc205.cscprof.com/courses/" + id;
}


function displayData(details) {


    document.getElementById('Status').innerHTML = details.Status;
    document.getElementById('Number').innerHTML = details.Number;
    document.getElementById('Title').innerHTML = details.Title;
    document.getElementById('Rating').innerHTML = details.Rating;
    document.getElementById('Professor').innerHTML = details.Professor;
    document.getElementById('Time').innerHTML = details.day + " "  + details.StartTime;
    document.getElementById('Name').innerHTML = details.Department + " " + details.Number + " " + details.Section;
    document.getElementById('Credits').innerHTML = details.Credits;
    


 
}



    



    


    