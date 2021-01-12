'use strict'

/*The responsibility of this file is to display DOMs including a property 
modification */
import { manage } from './helpers.js'
import { themes } from './modules/themes.js'

const myProjects = [];

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
    const sortPrjButtonWrapper =
        manage.elWithClasses('', '', `dropdown`, 'div');
    const sortPrjButton =
        manage.elWithClasses('Sort by', '', `dropbtn`, 'button');
    const sortPrjContents =
        manage.elWithClasses('', '', `dropdown-content`, 'div')

    //sidebar filter stuff
    const emptyFilterBox =
        manage.elWithClasses('', '', `fas fa-times`, 'i');
    const searchProjects =
        manage.createInput('text', 'prj-filter', 'searchbar', 'Search for projects', false, "32");
    const searchbarWrapper =
        manage.elWithClasses('', 'searchbar-wrapper', 'searchbar-wrapper', 'div');

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

    //sorting task feature
    const sortTskButtonWrapper =
        manage.elWithClasses('', '', `dropdown`, 'div');
    const sortTskButton =
        manage.elWithClasses('Sort by', '', `dropbtn`, 'button');
    const sortTskContents =
        manage.elWithClasses('', '', `dropdown-content`, 'div')

    function displayTaskItem(prjIndex, i) {
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
    function hideTaskTopSection() {
        manage.modifyAttr(projectHeader, "style", "visibility: hidden");
        manage.modifyAttr(projectDescWrapper, "style", "visibility: hidden");
        manage.modifyAttr(sortPrjContents, "style", "visibility: hidden;");
    }
    return {
        themeOuter, themeInner,
        sidebarContainer, sidebarHeader,
        taskContainer, projectContainer,
        filterContainer, addButton,
        sortPrjButtonWrapper, magnifyIcon,
        searchProjects, searchbarWrapper,
        createProject, prjList,
        projectHeader, mainSection,
        emptyFilterBox, tempTextarea,
        sortPrjButton, sortPrjContents,
        taskFeatures, taskSettings,
        projectHeadContainer, projectDescWrapper,
        projectDescIcon, sortTskContents,
        sortTskButtonWrapper, sortTskButton,
        displayTaskItem, hideTaskTopSection
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
    DOM.filterContainer.append(DOM.sortPrjButtonWrapper, DOM.searchbarWrapper);

    //filter section
    DOM.searchbarWrapper
        .append(DOM.magnifyIcon, DOM.searchProjects, DOM.emptyFilterBox);

    //sort project section
    DOM.sortPrjButtonWrapper.append(DOM.sortPrjButton, DOM.sortPrjContents);
    DOM.sortPrjButton.appendChild(manage.elWithClasses('', '', `fas fa-sort-down`, 'i'));
    DOM.sortPrjContents.append(
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
    DOM.projectDescWrapper.append(
        DOM.projectDescIcon,
        manage.createPara('Write your description here.', 'prj-desc-txt')
    );
    DOM.taskFeatures.append(DOM.sortTskButtonWrapper, DOM.taskSettings);
    DOM.taskContainer.append(manage.createPara
        ('You don\'t have any task at the moment.', 'empty-task-text'));

    //sort task section
    DOM.sortTskButtonWrapper.append(DOM.sortTskButton, DOM.sortTskContents);
    DOM.sortTskButton.appendChild(manage.elWithClasses('', '', `fas fa-sort-down`, 'i'));
    DOM.sortTskContents.append(
        manage.createPara('Sort by', ''),
        manage.elWithClasses('By Due Date', 'sort-due', 'sort-items', 'div'),
        manage.elWithClasses('By Title', 'sort-tasktitle', 'sort-items', 'div'),
        manage.elWithClasses('By Priority', 'sort-priority', 'sort-items', 'div'),
    )
}

//THIS SECTION IS MAINLY FOR COLOR PROPERTY MODIFICATION
function colorModifier() {
    //modifying theme color attributes
    manage.modifyAttr(
        DOM.themeInner,
        'style',
        `background: ${themes[1].inner}`
    );
    //modifying sidebar color attributes
    manage.modifyAttr(
        DOM.sidebarHeader,
        'style',
        `background: ${themes[1].header}`
    )
    manage.modifyAttr(
        DOM.sidebarContainer,
        'style',
        `border-right: 16px dashed ${themes[1].inner}`
    )
    manage.modifyAttr(
        DOM.sortPrjButton,
        'style',
        `background: ${themes[1].sort}`
    );
    manage.modifyAttr(
        DOM.sortTskButton,
        'style',
        `background: white; color: ${themes[1].header};`
    );
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
            //iterate through the loop to remove active state
            disableActiveStatus();

            //push the the project-related contents to the array database
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
        }
    })
    sortMouseOver(DOM.sortPrjButton, DOM.sortPrjContents);
    sortMouseOver(DOM.sortTskButton, DOM.sortTskContents);
    //after choosing a sorting type it becomes invisible
    document.querySelectorAll(".sort-items").forEach(x => {
        x.onclick = () => {
            DOM.sortPrjContents.style.visibility = "hidden";
            DOM.sortTskContents.style.visibility = "hidden";
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

function sortMouseOver(obj,contents) {
    //displays dropdown content after hover
    obj.addEventListener('mouseover', () => {
        contents.style.visibility = "visible";
        setTimeout(function () {
            contents.style.visibility = "hidden";
        }, 3000);
    });
}
function submitForm() {
    document.querySelector('.task-form').addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(myProjects.length);
        let prjIndex;
        for (let i = 0; i < myProjects.length; i++) {
            if (myProjects[i].active === true) {
                prjIndex = i;
                const task = new Tasks(
                    false,
                    document.getElementById('form-input').value,
                    "",
                    document.getElementById('form-prio').value
                )
                myProjects[i].tasks.push(task);
            }
        }
        removeAllTaskItems(DOM.taskContainer);
        populateTaskItems(prjIndex);
    });
}

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
//populate the project items in the sidebar 
function populatePrjItems() {
    for (let i = 0; i < myProjects.length; i++) {
        let title = myProjects[i].name;
        let len = i;
        //create a new node for the prj list
        addProjectItemContents(title, len, i);
        //display top header of task container and create task elements
        if (myProjects[i].active == true) {
            displayTaskTopElements(-1, len);
            removeAllPrjItems(DOM.taskContainer);
            populateTaskItems(i);
        }
        setActiveStatus();
    }
}
function removePrjItem() {
    //remove project item
    document.querySelectorAll(`.prj-remove`).forEach((el, index) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            clearTasksIfActiveNotExists(index);
            myProjects.splice(index, 1);
            removeAllPrjItems(DOM.prjList);
            populatePrjItems();
        });
    });
}

//clear every ask element if deleted project/folder is active
function clearTasksIfActiveNotExists(i) {
    if (myProjects[i].active === true) {
        removeAllTaskItems(DOM.taskContainer);
        DOM.hideTaskTopSection();
        DOM.taskContainer.appendChild(manage.createPara
            ('You don\'t have any task at the moment.', 'empty-task-text'));
    }
}
//remove all the project items as a process to populate effectively
function removeAllPrjItems(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
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
        //manage.elWithClasses('', '', `fas fa-pen-square prj-rename`, 'i'),
        manage.elWithClasses('', '', `fas fa-trash-alt prj-remove`, 'i'));
    changePrjSelectStatus(prjItem, i);
    console.log(`yes ${i}`);
    removePrjItem();
}
function renamePrjItem() {
    //remove project item
    document.querySelectorAll(`.prj-rename`).forEach((el, index) => {
        el.addEventListener('click', (e) => {
            e.stopPropagation();
            e.replaceChild(

            )
            removeAllPrjItems(DOM.prjList);
            populatePrjItems();
        });
    });
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
        manage.elWithClasses('', '', 'task-form', 'form');
    const upperForm =
        manage.elWithClasses('', 'form-upper', '', 'div');
    const input =
        manage.createInput(
            'text',
            'form-input',
            '',
            'e.g Finish todo-list project, Grind new PoE 3.13 expansion, World domination,..',
            true,
            "200"
        );
    input.autocomplete = 'off';
    const labelPrio =
        manage.createLabel('priority', 'Priority level: ');
    const ddPrio =
        manage.createSelect('form-prio');
    const submit =
        manage.createSubmit('Submit');
    DOM.taskContainer.appendChild(taskForm);
    taskForm.append(upperForm, submit);
    ddPrio.append(
        manage.createSelectOption('low', 'Low'),
        manage.createSelectOption('medium', 'Medium'),
        manage.createSelectOption('high', 'High'))
    upperForm.append(input, labelPrio, ddPrio);
    submitForm();
}

function populateTaskItems(prjIndex) {
    //console.log(`the length is ${myProjects[prjIndex].tasks.length}`);
    for (let i = 0; i < myProjects[prjIndex].tasks.length; i++) {
        DOM.displayTaskItem(prjIndex, i);
    }
    createTaskForm();
}

//remove all the project items as a process to populate effectively
function removeAllTaskItems(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

//disable every active element to choose a new active element
function disableActiveStatus() {
    const prjItems = document.querySelectorAll('.prj-items')
    for (let i = 0; i < myProjects.length; i++) {
        myProjects[i].active = false;
    }
    [].forEach.call(prjItems, function (e) {
        e.classList.remove('prj-active');
    });
}

//when clicking a project item it is set as an active project
function setActiveStatus() {
    const prjItems = document.querySelectorAll('.prj-items');
    prjItems.forEach((item, i) => {
        item.addEventListener('click', function (e) {
            disableActiveStatus(prjItems);
            myProjects[i].active = true;
            changePrjSelectStatus(item, i)
            this.classList.add('prj-active');
            updateDisplay();
        })
    });
};

function updateDisplay() {
    let len = myProjects.length
    for (let i = 0; i < len; i++) {
        if (myProjects[i].active === true) {
            displayTaskTopElements(i, len);
            removeAllTaskItems(DOM.taskContainer);
            populateTaskItems(i);
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
    DOM.hideTaskTopSection();
    colorModifier();
    sidebarEvents();
}
(output());
console.log(myProjects);