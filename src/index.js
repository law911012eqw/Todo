'use strict'
/*The responsibility of this file is to display DOMs including a property 
modification */
import { manage } from './helpers.js'

const myProjects = [];
const themes = [
    {   //light blue-green default
        outer: `background: rgba(20, 189, 96,0.4)`, inner: `background: rgba(20, 189, 96,0.4)`
    },
    {   //red 
        outer: `background: rgb(139,20,20)`, inner: `background: rgb(175,36,36)`
    }, { outer: 'background: rgb(245,12,45)' }]


class Projects {
    constructor(name, description, id, task) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.task = task;
    }
}

class Tasks {
    constructor(title, desc, dueDate, priority) {
        this.title = title;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
function addNewProject(name, desc, id, task) {
    let project = new Projects(name, desc, id, task);
    myProjects.push(project);
}

//DOM instances
const DOM = (() => {
    const themeOuter =
        manage.elWithClasses('', 'theme-up-outer', 'theme-up-outer', 'div');
    const themeInner =
        manage.elWithClasses('', 'theme-up-inner', 'theme-up-inner', 'div');
    const sidebarContainer =
        manage.elWithClasses('', 'sidebar', 'sidebar', 'div');
    const sidebarHeader =
        manage.elWithClasses('', 'sidebar-header', 'sidebar-headers', 'div');

    //sidebar stuff
    const filterContainer =
        manage.elWithClasses('', 'filter-container', 'filter-container', 'div');
    const magnifyIcon =
        manage.elWithClasses('', '', `fas fa-search`, 'i');
    const addButton =
        manage.elWithClasses('', '', `fas fa-plus-circle`, 'i');

    //sorting elements
    const sortButtonWrapper =
        manage.elWithClasses('', '', `dropdown`, 'div');
    const sortButton =
        manage.elWithClasses('Sort by', '', `dropbtn`, 'button');
    const sortContents =
        manage.elWithClasses('', '', `dropdown-content`, 'div')

    //sidebar filter stuff
    const emptyFilterBox =
        manage.elWithClasses('', '', `fas fa-times`, 'i');
    const searchProjects =
        manage.createInput('text', 'prj-filter', 'searchbar', 'Search for projects', false);
    const searchbarWrapper =
        manage.elWithClasses('', 'searchbar-wrapper', 'searchbar-wrapper', 'div');
    const sortDownIcon =
        manage.elWithClasses('', '', `fas fa-sort-down`, 'i');

    //project-something (add,view, delete, or any )
    const projectContainer =
        manage.elWithClasses('', 'prj-container', 'prj-container', 'div');
    const prjList =
        manage.elWithClasses('', 'prj-list', '', 'ul');
    const createProject =
        manage.createInput('text', 'prj-create', '', 'Add new project', false);

    //task container
    const mainSection =
        manage.elWithClasses('', 'main-section', '', 'div');

    //task container top side
    const projectHeader =
        manage.elWithClasses('', 'prj-header', '', 'div');
    const projectHeadContainer =
        manage.elWithClasses('', 'prj-head-container', '', 'div');
    const projectDescWrapper =
        manage.elWithClasses('', 'prj-desc-wrapper', '', 'div');
    const projectDescIcon = 
        manage.elWithClasses('','prj-rnm-desc', `fas fa-pen-square`,'div')
    const taskSettings =
        manage.elWithClasses('', '', `fas fa-cog`, 'i');
    const taskFeatures =
        manage.elWithClasses('', 'task-feature-holder', '', 'div');
    const taskContainer =
        manage.elWithClasses('', 'task-container', 'task-container', 'div');

    manage.modifyAttr(projectHeader,"style","visibility: hidden");
    manage.modifyAttr(projectDescWrapper,"style","visibility: hidden");
    return {
        themeOuter, themeInner,
        sidebarContainer, sidebarHeader,
        taskContainer, projectContainer,
        filterContainer, addButton,
        sortButtonWrapper, magnifyIcon,
        searchProjects, searchbarWrapper,
        createProject, prjList,
        projectHeader, mainSection,
        emptyFilterBox, sortDownIcon,
        sortButton, sortContents,
        taskFeatures, taskSettings,
        projectHeadContainer, projectDescWrapper,
        projectDescIcon
    }
})()

//this appends the children to their corresponding parents
const attachDOM = () => {
    //main theme section
    document.getElementById('content').appendChild(DOM.themeOuter);
    DOM.themeOuter.appendChild(DOM.themeInner);
    DOM.themeInner.append(DOM.sidebarContainer, DOM.mainSection);

    //sidebar section
    DOM.sidebarContainer
        .append(DOM.sidebarHeader, DOM.filterContainer, DOM.projectContainer);
    DOM.sidebarHeader.append(manage.createPara('My Projects', ''), DOM.addButton);

    //sidebar -> filter/sort section
    DOM.filterContainer.append(DOM.sortButtonWrapper, DOM.searchbarWrapper);

    //filter section
    DOM.searchbarWrapper
        .append(DOM.magnifyIcon, DOM.searchProjects, DOM.emptyFilterBox);

    //sort section
    DOM.sortButtonWrapper.append(DOM.sortButton, DOM.sortContents);
    DOM.sortButton.appendChild(DOM.sortDownIcon);
    DOM.sortContents.append(
        manage.createPara('Sort by', ''),
        manage.elWithClasses('Creation Date', '', 'sort-items', 'div'),
        manage.elWithClasses('Title', '', 'sort-items', 'div'),
        manage.elWithClasses('# of tasks', '', 'sort-items', 'div'),
    )
    //sidebar -> project section
    DOM.projectContainer.appendChild(DOM.prjList);

    //task container
    DOM.mainSection.append(DOM.projectHeadContainer, DOM.taskContainer);
    DOM.projectHeadContainer.append(DOM.projectHeader, DOM.projectDescWrapper, DOM.taskFeatures);
    DOM.projectDescWrapper.append(DOM.projectDescIcon,manage.createPara('Write your description here.','prj-desc-txt'));
    DOM.taskFeatures.append(DOM.taskSettings);
    DOM.taskContainer.append(manage.createPara
        ('You don\'t have any task at the moment.', 'empty-task-text'));
}

//THIS SECTION IS MAINLY FOR COLOR PROPERTY MODIFICATION
function colorModifier() {
    //modifying theme color attributes
    manage.modifyAttr(
        DOM.themeOuter,
        'style',
        `background: rgb(139,20,20)`
    );
    manage.modifyAttr(
        DOM.themeInner,
        'style',
        `background: rgb(175,36,36)`
    );

    //modifying sidebar color attributes
    manage.modifyAttr(
        DOM.sidebarHeader,
        'style',
        `background: rgb(139,20,20)`
    )
    manage.modifyAttr(
        DOM.sidebarContainer,
        'style',
        `border-right: 16px dashed rgb(175,36,36)`
    )
}

// Close the dropdown menu if the user clicks outside of it
// window.onhover = function (e) {
//     e.preventDefault();
//     if (!e.target.matches('.dropbtn') || !e.target.matches('.dropdown-content') || !e.target.matches('.sort-items')) {
//         let dropdowns = document.getElementsByClassName("dropdown-content");
//         for (let i = 0; i < dropdowns.length; i++) {
//             let openDropdown = dropdowns[i];
//             if (openDropdown.style.display == "block") {
//                 openDropdown.style.display = "none";
//             }
//         }
//     }
// }

//adding event listeners 
function sidebarEvents() {
    // display textbox to add a project
    DOM.addButton.addEventListener('click', function () {
        DOM.prjList.append(DOM.createProject);
        DOM.createProject.focus();
    })
    //empties the filter search bar
    DOM.emptyFilterBox.addEventListener('click', function () {
        DOM.searchProjects.value = null;
    })

    //creates the project item and its DOM related stuff
    DOM.createProject.addEventListener('keypress', function (e) {
        if (e.key === 'Enter' && this.value !== '') {
            //get the nodes of all project items
            const prjItems = document.querySelectorAll('.prj-items');

            removeAllPrjItems(DOM.prjList); //self explanatory
            //adding default task object data
            let task = new Tasks
                ("This is your first task",
                    "Click the circle to compete this task",
                    "",
                    "low");
            //push the the project-related contents to the array as a database
            addNewProject(this.value, '', prjItems.length + 1, task);
            //populate the parent with prj item elements
            populatePrjItem();
            //empty value after adding project
            this.value = '';
            //iterate through the loop to remove active state
            disableActiveStatus(prjItems);
            //prjClickEvent();
        }
    })
    // DOM.sortContents.style.visibility = "hidden";
    // DOM.sortButton.addEventListener('mouseover', () => {
    //     DOM.sortContents.style.visibility = "visible";
    // })
    document.querySelectorAll(".sort-items").forEach(x => {
        x.onclick = () => {
            DOM.sortContents.style.visibility = "hidden";
        };
    })

    //filter feature
    DOM.searchProjects.addEventListener('input', prjFilterItems);
}

//
//This filter the items that does not contain in the value
function prjFilterItems() {
    let filterValue = document.getElementById('prj-filter').value.toUpperCase();
    const prjItems = document.querySelectorAll('.prj-items');
    for (let i = 0; i < prjItems.length; i++) {
        let a = DOM.prjList.getElementsByTagName('li')[i];
        // If matched
        if (a.textContent.toUpperCase().indexOf(filterValue) > -1) {
            prjItems[i].style.display = '';
        } else {
            prjItems[i].style.display = 'none';
        }
    }
}
// function prjClickEvent() {
//     document.querySelectorAll('.prj-items').forEach((item, i) = () => {
//         item.addEventListener('click', () => {
//             disableActiveStatus(document.querySelectorAll('.prj-items'));
//             this.classList.add('prj-active');
//         });
//     });
// }

//add contents inside project item button
function addProjectItemContents(e, l) {
    /*created here we can create new elements rather than modifying
    the existing element*/
    let prjItem =
        manage.elWithClasses('', '', 'prj-items', 'li');
    // const prjEdit = 
    //     manage.elWithClasses('')
    //replace textbox with prj item
    DOM.prjList.appendChild(prjItem);
    prjItem.append(manage.createPara(e, ''),
        manage.elWithClasses('', `prj-edit${l}`, 'prj-edit', 'div'));

    document.getElementById(`prj-edit${l}`).append(
        manage.elWithClasses('', 'prj-remove', `fas fa-pen-square`, 'i'),
        manage.elWithClasses('', 'prj-remove', `fas fa-trash-alt`, 'i'));
    if (l == myProjects.length - 1) {
        prjItem.classList.add('prj-active');
    }
}

function displayTaskItemElements(e,i,l){
    DOM.projectHeader.style.visibility = "visible";
    DOM.projectDescWrapper.style.visibility = "visible";
    //DOM.projectHeader.appendChild(manage.createPara(e, ''));
    DOM.projectHeader.textContent = e;
}

//populate the project items in the sidebar 
function populatePrjItem() {
    for (let i = 0; i < myProjects.length; i++) {
        let title = myProjects[i].name;
        let len = i;
        //create a new node for the prj list
        addProjectItemContents(title, len);
        //display top header of task container and create task elements
        displayTaskItemElements(title,i,len);
        console.log(`You can see this ${i}`);
    }
}

//remove all the project items as a process to populate effectively
function removeAllPrjItems(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//disable every active element to choose a new active element
function disableActiveStatus(items) {
    for (const item of items) {
        console.log(item);
        item.classList.remove('prj-active');
    }
}

//display, so the user/client can see the elements
const output = () => {
    attachDOM();
    colorModifier();
    sidebarEvents();
}
(output());
console.log(myProjects);