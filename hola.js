// const arrhtml = [{
//     img : 'dotnet',
//     name: 'ASP.net'
// },{
//     img: 'devops',
//     name: 'DevOps'
// }



// ];








// const container = document.querySelector('.js-container');


// if (container){

// container.innerHTML = arrhtml.map (data =>`

//     <div class=" col-12 col-sm-12 col-md-6 col-lg-3">
//     <div class="colpad d-flex border rounded p-2 align-items-center">
//         <input type="checkbox" class="me-2 flex-shrink-0"
//                 style="height: 25px; width: 20px;">
//             <img src="Assets/${data.img}.png" alt="asp" class="me-2 flex-shrink-0" width="32px;"
//                 height="35px">
//             <span class="flex-grow-1 text-truncate">${data.name}</span>
//             <div class="trashicon d-flex">
//                 <button class="trash btn btn-sm p-1"><img src="Assets/trash.png" alt="trash"
//                         style="height: 20px; width: 18x;"></button>
//             </div>
//             <div class="pencilicon d-flex">
//                 <button class="pencil btn btn-sm p-1 ms-1"><img src="Assets/pencil.png"
//                         alt="pencil" style="height: 20px; width: 18x;"></button>
//             </div>
//         </div>
//     </div>


// `).join("");


// }else{
//     console.log("notfound");
// }





document.addEventListener("DOMContentLoaded", function () {
    const arrhtml = [
        { img: 'HTML', name: 'HTML' },
        { img: 'python', name: 'Python' },
        { img: 'css3', name: 'CSS' },
        { img: 'java', name: 'Java' },
        { img: 'bootstrap', name: 'Bootstrap' },
        { img: 'react', name: 'React' },
        { img: 'typescript', name: 'Typescript' },
        { img: 'angular', name: 'Angular JS'},
        { img: 'nodejs', name: 'Node JS'},
        { img: 'machinelearning', name: 'MachineLearning'},
        { img: 'ai', name: 'Artificial Intelligence'},
        { img: 'deeplearning', name: 'Deep Learning'},
        { img: 'dataanalysis', name: 'Data Analysis'},
        { img: 'sql', name: 'SQL'},
        { img: 'mysql', name: 'My SQL'},
        { img: 'datamanagement', name: 'Database Management'},
        { img: 'mongodb', name: 'Mongo DB' },
        { img: 'sqlserver', name: 'SQL Server'},
        { img: 'apachekafka', name: 'Apache Kafka'},
        { img: 'postgresql', name: 'Postgre SQL'},
        { img: 'oraclesql', name: 'Oracle SQL'},
        { img: 'docker', name: 'Docker'},
        { img: 'kubernets', name: 'Kubernets'},
        { img: 'jira', name: 'JIRA'},
        { img: 'apitesting', name: 'API Testing'},
        { img: 'databaseprogramming', name: 'Database Programming'},
        { img: 'cypress', name: 'Cypress.io'},
        { img: 'automationtesting', name: 'Automation Testing'},
        { img: 'github', name: 'GitHub'},
        { img: 'confluence', name: 'Confluence'},
        { img: 'devops', name: 'DevOps'},
        { img: 'jenkins', name: 'JenKins'},
    ];

    const container = document.querySelector('.js-container');

    if (container) {
        container.innerHTML = arrhtml.map(data => `
            <div class="col-12 col-sm-12 col-md-6 col-lg-3 mb-2">
                <div class="colpad d-flex border rounded p-2 align-items-center">
                    <input type="checkbox" class="me-2 flex-shrink-0" style="height: 25px; width: 20px;">
                    <img src="Assets/${data.img}.png" alt="${data.name}" class="me-2 flex-shrink-0" width="32" height="35">
                    <span class="flex-grow-1 text-truncate">${data.name}</span>
                    <div class="trashicon d-flex">
                        <button class="trash btn btn-sm p-1">
                            <img src="Assets/trash.png" alt="trash" style="height: 20px; width: 18px;">
                        </button>
                    </div>
                    <div class="pencilicon d-flex">
                        <button class="pencil btn btn-sm p-1 ms-1">
                            <img src="Assets/pencil.png" alt="edit" style="height: 20px; width: 18px;">
                        </button>
                    </div>
                </div>
            </div>
        `).join("");
    } else {
        console.error("Element with class 'js-container' not found!");
    }
});
