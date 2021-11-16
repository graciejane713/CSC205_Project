
console.log('Before event listeners');

var etarget = "";
    searchbox.addEventListener("input", (e) => etarget = e.target.value);
    searchbox.oninput = function()
    {
        search();
    }


window.onload = (event) =>
{
    fetch( "https://csc205.cscprof.com/courses")
    .then(response => response.json())
    .then(data => displayData(data)); 
    

}
function displayData(results)
{
    course = results 
    let filteredData = removeColumns(course);
    
    let table = document.getElementById("course-table")
    data = Object.keys(filteredData [0]);
    generatePageTitle(table, data);
    generatePage(table, filteredData);

}
function search()
{
    let tablebody = document.getElementById("course-data");
    console.log(tablebody);
    tablebody.remove();
    
    let someClasses = course.filter(oneClass => Object.keys(oneClass)
            .some(key => String(oneClass[key]).toLowerCase().includes(etarget.toLowerCase())));

    let table = document.getElementById("course-table") 
    generatePage(table, someClasses);

}
searchbox.onfocus = ( ) => {document.getElementById("searchbox").classList.add("focus")}
searchbox.onblur = ( ) => {document.getElementById("searchbox").classList.add("blur")}
let classes = "";







function generatePageTitle(table, data) 
{
    let pgtitle = table.createTHead();
    let row = pgtitle.insertRow();
    for (let column of data) 
    {
        let th = document.createElement("th");
        let text = document.createTextNode(column);
        th.appendChild(text);
        row.appendChild(th);
    }
}

{function generatePage(table, data) 
{
    let text = "";
    let tablebody = table.createTBody();
    tablebody.setAttribute("id", "course-data");

    for (let course of data) 
    {
        let row = tablebody.insertRow();
        for (key in course) 
        {
            let cell = row.insertCell();
            if (key == "Title")
            {
                let link = '<a href="detailpage.html?id=' + course.id + '">' + course.Title + '</a>';
                cell.innerHTML = link;
            }
            else if (key == "Email")
            {
                let link = '<a href= "mailto:notreal@geneva.edu' + course.id + '">' + course.Email + '</a>';
                cell.innerHTML = link;
            }
            else 
            {
                cell.innerHTML = course[key];
            }
        
        
        }
    }
}


function removeColumns(courses)
{
    courses.forEach(function (course)
    {
        let information = course.Department + " " + course.Number + " " + course.Section;
        course.Section = information;
        delete course.openings;
        delete course.building;
        delete course.Capacity;
        delete course.Campus;

        delete course.Number;
        delete course.Department;

       
    });
    return courses;
}
    



} 
//function Courses(info)  
//{
    //course = info;
    //alert(course[170].Title);
    //console.log('The page is loaded.We are in the consol');
    //let filteredData = removeColumns(course);
    //let table = document.getElementById("course-table")
   // data = Object.keys(filteredData [4]);
    //generatePageTitle(table, data);
    //generatePage(table, filteredData);
    

    
//}