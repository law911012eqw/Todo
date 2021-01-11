'use strict'
/*The responsibility of this file is to display DOMs including a property 
modification */
import { manage } from './helpers.js'

const myProjects = [];
const themes = [
    {   //light blue-green default
        outer: `rgba(20, 189, 96,0.4)`, inner: `rgba(20, 189, 96,0.4)`
    },
    {   //red 
        outer: `rgb(139,20,20)`, inner: `rgb(175,36,36)`
    }, { outer: 'rgb(225,12,65)', inner: 'rgb(245,12,45)' }]


class Projects {
    constructor(name, description, id, tasks, active) {
        this.name = name;
        this.description = description;
        this.id = id;
        this.tasks = tasks;
        this.active = active;
    }
}

class Tasks {
    constructor(checked, desc, dueDate, priority) {
        this.checked = checked;
        this.desc = desc;
        this.dueDate = dueDate;
        this.priority = priority;
    }
}
function addNewProject(name, desc, id, tasks, active) {
    let project = new Projects(name, desc, id, tasks, active);
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
        manage.createInput('text', 'prj-filter', 'searchbar', 'Search for projects', false, "32");
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
        manage.createInput('text', 'prj-create', '', 'Add new project', false, "32");

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
        manage.elWithClasses('', 'prj-rnm-desc', `fas fa-pen-square`, 'div')
    const tempTextarea =
        manage.createTextarea('temp-textarea', 30, 10);
    const taskSettings =
        manage.elWithClasses('', '', `fas fa-cog`, 'i');
    const taskFeatures =
        manage.elWithClasses('', 'task-feature-holder', '', 'div');
    const taskContainer =
        manage.elWithClasses('', 'task-container', 'task-container', 'div');

    function displayTaskItem(prjIndex, i) {
        console.log(prjIndex);
        const taskContainer =
            manage.elWithClasses('', '', 'taskbox', 'div');
        const checklist =
            manage.createChecklist('task-checklist', false);
        const taskDesc =
            manage.elWithClasses(myProjects[prjIndex].tasks[i].desc, '', 'todo', 'p');
        //const taskDue = 
        const taskPrio =
            manage.elWithClasses(myProjects[prjIndex].tasks[i].priority, '', 'task-prio', 'p');
        DOM.taskContainer.append(taskContainer);
        taskContainer.append(checklist, taskDesc, taskPrio);
    }
    //hidden elements to be visible later
    manage.modifyAttr(projectHeader, "style", "visibility: hidden");
    manage.modifyAttr(projectDescWrapper, "style", "visibility: hidden");
    manage.modifyAttr(sortContents, "style", "visibility: hidden;");
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
        projectDescIcon, tempTextarea,
        displayTaskItem
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
        manage.elWithClasses('Creation Date', 'sort-date', 'sort-items', 'div'),
        manage.elWithClasses('Title', 'sort-title', 'sort-items', 'div'),
        manage.elWithClasses('# of tasks', 'sort-num-tasks', 'sort-items', 'div'),
    )
    //sidebar -> project section
    DOM.projectContainer.appendChild(DOM.prjList);

    //task container
    DOM.mainSection.append(DOM.projectHeadContainer, DOM.taskContainer);
    DOM.projectHeadContainer.append(DOM.projectHeader, DOM.projectDescWrapper, DOM.taskFeatures);
    DOM.projectDescWrapper.append(DOM.projectDescIcon, manage.createPara('Write your description here.', 'prj-desc-txt'));
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
        `background: ${themes[1].outer}`
    );
    manage.modifyAttr(
        DOM.themeInner,
        'style',
        `background: ${themes[1].inner}`
    );

    //modifying sidebar color attributes
    manage.modifyAttr(
        DOM.sidebarHeader,
        'style',
        `background: ${themes[1].outer}`
    )
    manage.modifyAttr(
        DOM.sidebarContainer,
        'style',
        `border-right: 16px dashed ${themes[1].inner}`
    )
}

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
            const tasks = [];
            let task = new Tasks
                (false,
                    "Click the circle to compete this task",
                    "",
                    "low");
            tasks.push(task);
            //push the the project-related contents to the array as a database
            addNewProject(
                this.value,
                'Write your description here.',
                prjItems.length + 1,
                tasks,
                true
            );
            //populate the parent with prj item elements
            populatePrjItems();
            //empty value after adding project
            this.value = '';
            //iterate through the loop to remove active state
            disableActiveStatus();
        }
    })
    //setActiveStatus();
    DOM.sortButton.addEventListener('mouseover', () => {
        DOM.sortContents.style.visibility = "visible";
        setTimeout(function () {
            DOM.sortContents.style.visibility = "hidden";
        }, 3000);
    });
    //after choosing a sorting type it becomes invisible
    document.querySelectorAll(".sort-items").forEach(x => {
        x.onclick = () => {
            DOM.sortContents.style.visibility = "hidden";
        };
    });
    //sort project by name
    document.getElementById('sort-title').addEventListener('click', () => {
        myProjects.sort((a, b) => (a.name > b.name) ? 1 : -1);
        removeAllPrjItems(DOM.prjList);
        populatePrjItems();
    })
    //sort by creation date
    document.getElementById('sort-date').addEventListener('click', () => {
        myProjects.sort((a, b) => (a.id > b.id) ? 1 : -1);
        removeAllPrjItems(DOM.prjList);
        populatePrjItems();
    });
    //remove project item
    document.querySelectorAll(`.prj-remove`).forEach((el, index) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            console.log("Wtf?")
            myProjects.splice(index, 1);
            populatePrjItems();
        });
    });
    //allow the user to write a description about the project 
    //note: the project is an alternative keyword as a folder to multiple to do lists
    document.getElementById('prj-rnm-desc').addEventListener('click', function () {
        const desc = document.getElementById('prj-desc-txt');
        const prjDescWrapper = document.getElementById('prj-desc-wrapper');
        if (DOM.tempTextarea.value == '') {
            DOM.tempTextarea.focus();
            prjDescWrapper.replaceChild(DOM.tempTextarea, desc);
        }
        else {
            prjDescWrapper.replaceChild(desc, DOM.tempTextarea);
        }
    });
    DOM.tempTextarea.addEventListener('keypress', function (e) {
        const prjDescWrapper = document.getElementById('prj-desc-wrapper');
        const desc = document.getElementById('prj-desc-txt');
        // if (e.key === 'Enter' || ) {
        //     prjDescWrapper.replaceChild(desc, DOM.tempTextarea);
        // }
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

//add contents inside project item button
function addProjectItemContents(e, l, i) {
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
        manage.elWithClasses('', '', `fas fa-pen-square prj-rename`, 'i'),
        manage.elWithClasses('', '', `fas fa-trash-alt prj-remove`, 'i'));
    changePrjSelectStatus(prjItem, i);
}

function changePrjSelectStatus(item, i) {
    if (myProjects[i].active == true) {
        item.classList.add('prj-active');
    }
    else {
        item.classList.remove('prj-active');
    }
}
function displayTaskTopElements(i, l) {
    DOM.projectHeader.style.visibility = "visible";
    DOM.projectDescWrapper.style.visibility = "visible";
    if (i == -1) {
        DOM.projectHeader.textContent = myProjects[l].name;
        console.log(`This is the latest project = ${myProjects[l].name}`);
    }
    else {
        console.log(`This is the clicked project = ${myProjects[i].name}`);
        DOM.projectHeader.textContent = myProjects[i].name;

    }
}
function createTaskForm() {
    const taskForm =
        manage.elWithClasses('', 'task-form', '', 'form');
    const input =
        manage.createInput(
            'text',
            'form-input',
            '',
            'e.g Finish todo-list project, PoE grind to lvl 80 hardcore, blablabla',
            true,
            "200"
        );
    const labelPrio =
        manage.createLabel('priority','Priority level: ');
    const ddPrio = 
        manage.createSelect

}

function populateTaskItems(prjIndex) {
    for (let i = 0; i < myProjects[prjIndex].tasks.length; i++) {
        DOM.displayTaskItem(prjIndex, i);
    }
}

//remove all the project items as a process to populate effectively
function removeAllTaskItems(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//populate the project items in the sidebar 
function populatePrjItems() {
    for (let i = 0; i < myProjects.length; i++) {
        let title = myProjects[i].name;
        let len = i;
        //create a new node for the prj list
        addProjectItemContents(title, len, i);
        //display top header of task container and create task elements
        displayTaskTopElements(-1, len);
        removeAllTaskItems(DOM.taskContainer);
        populateTaskItems(i);
        setActiveStatus();
    }
}

//remove all the project items as a process to populate effectively
function removeAllPrjItems(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//disable every active element to choose a new active element
function disableActiveStatus() {
    for (let i = 0; i < myProjects.length; i++) {
        myProjects[i].active = false;
    }
}

//when clicking a project item it is set as an active project
function setActiveStatus() {
    const prjItems = document.querySelectorAll('.prj-items');
    prjItems.forEach((item, i) => {
        const index = i + 1;
        item.addEventListener('click', function (e) {
            console.log(`This is index${index}`);
            disableActiveStatus(prjItems);
            myProjects[i].active = true;
            changePrjSelectStatus(item, index)
            this.classList.add('prj-active');
            updateDisplay(index);
        })
    });
};

function updateDisplay(activeIndex) {
    let len = myProjects.length
    for (let i = 0; i < len; i++) {
        if (i + 1 === activeIndex) {
            console.log(`Text content is updated: ${myProjects[i].id} and ${activeIndex}`);
            displayTaskTopElements(i, len);
        }
    }
}
function currentProjectIndex(i) {
    return i;
}

//function dataStorage()
//display, so the user/client can see the elements
const output = () => {
    attachDOM();
    colorModifier();
    sidebarEvents();
}
(output());
console.log(myProjects);