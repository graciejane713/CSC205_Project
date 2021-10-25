
let courses= 
[
  {"Department":"CSC","Number":205,"Section":1,"Title":"HCI DESIGN & PROGRAMMING","Faculty":"Madeira, Scott","Openings":10,"Capacity":25,"Status":"Open","Day":"MWF","StartTime":"11:15:00 AM","EndTime":"12:10 PM","Campus":" Main Campus","Building":" Science and Engineering","Room":" SE 341 Computer Science Lab","Credits":3,"Start Date":"8\/30\/2021","End Date":"12\/17\/2021\r\n"}
]  
window.onload = (event) => 
{
    
    console.log('The page is loaded.We are in the consol');
    let filteredData = removeColumns(courses);
    let table = document.getElementById("course-table")
    let data = Object.keys(filteredData [0]);
    generatePageTitle(table, data);
    generatePage(table, filteredData);
    var myTable = document.getElementById('course-table');
    myTable.style.border="13px solid white";
}

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

function generatePage(table, data) 
{
    let pgcontent = table.createTBody();
    for (let course of data) 
    {
        let row = pgcontent.insertRow();
        for (key in course) 
        {
            let cell = row.insertCell();
            let text = document.createTextNode(course[key]);
            cell.appendChild(text);
        }
    }
}
function removeColumns(courses)
{
    courses.forEach(function (course)
    {
        delete courses.Line;
        delete course.openings;
        delete course.building;
        delete course.Capacity;
        delete course.Campus;
    });
    return courses;
}


    



    


    