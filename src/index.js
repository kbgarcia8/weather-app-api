//import functions
import {
    mainPanelRender,
    dialogPopupRender,
    createMainTodo,
    renderTodos,
    createProjectTab,
    createNote,
    renderNotes,
    cancelAdd,
    submitTodo,
    submitProject,
    submitNote
} from "./functions.js";

/*---------------------------------------------------------------------------START of PROGRAM---------------------------------------------------------------------------*/
//variable declarations for dialog for creating new todo, project and note
const openCreate = document.getElementById("adder");
const dialogCreateNewForm = document.querySelector("#create-task-dialog");
const dialogCreateNew = document.getElementById("create-task");
const dialogNavigationBtns = document.querySelectorAll(".create-new-menu");
const dialogAddTodoBtn = document.querySelector("#create-new-selection1");
const dialogAddProjectBtn = document.querySelector("#create-new-selection2");
const dialogAddNoteBtn = document.querySelector("#create-new-selection3");
const dialogPopupOpen = new dialogPopupRender();
//variable declarations for main panel
const mainPanelNavigationBtns = document.querySelectorAll(".main-panel-menu, .main-panel-menu-projects");
const mainPanelHomeBtn = document.querySelector("#main-panel-selection1");
const mainPanelTodayBtn = document.querySelector("#main-panel-selection2");
const mainPanelWeekBtn = document.querySelector("#main-panel-selection3");
const mainPanelNoteBtn = document.querySelector("#main-panel-selection4");
const mainPanelOverdueBtn= document.querySelector("#main-panel-selection6");
const mainPanelGeneralBtn= document.querySelector("#main-panel-selection7");
const mainPanelOpen = new mainPanelRender();
  
//parse on local storage or create empty new mainTodos and notes
const mainTodos = JSON.parse(localStorage.getItem('mainTodos')) || {
  "today" : [],
  "week" : [],
  "overdue" : [],
  "general" : []
}

//const projectTodos = JSON.parse(localStorage.getItem('projectTodos')) || [];
const notes = JSON.parse(localStorage.getItem('notes')) || [];

//create a mock details if no object found on local storage
if (!localStorage.getItem('mainTodos')) { 
  //mainTodos.today.push(createMainTodo(inputtedTodoTitle, inputtedTodoDescription, inputtedTodoDueDate, inputtedTodoPriority, inputtedTodoStatus).mainTodoObject());
  mainTodos.today.push(createMainTodo("House Chores", "Water the plants, clean the bathroom and make the bed", "2024-05-21", "LOW", false).mainTodoObject());
  mainTodos.today.push(createMainTodo("Get Haircut", "", "2024-05-22", "MID", false).mainTodoObject());
  mainTodos.today.push(createMainTodo("Javascript Self-Learning", "Continue project: To-do list production testing and incorporate bug fixes if needed", "2024-05-23", "HIGH", true).mainTodoObject());
  
  mainTodos.week.push(createMainTodo("Do Grocery", "Buy 2 canned tuna, 1 carton milk and 2kg chicken", "2024-05-19", "MID", false).mainTodoObject());
  mainTodos.week.push(createMainTodo("Laundry", "Deliver laundry at 9AM then pickup at 5:30PM", "2024-07-05", "HIGH", true).mainTodoObject());
  mainTodos.week.push(createMainTodo("Doctor's Appointment", "Go to dermatologist appointment, bring medical records", "2024-05-27", "LOW", false).mainTodoObject());

  mainTodos["gym"] = [];
  mainTodos.gym.push(createMainTodo("BB Grocery", "Buy Protein Shake at Shoppee", "2024-06-10", "HIGH", true).mainTodoObject());
  mainTodos.gym.push(createMainTodo("Meal Prep", "Prepare meal prep for this week", "2024-07-02", "LOW", false).mainTodoObject());
  mainTodos.gym.push(createMainTodo("Statistics Update", "Weigh in then update calorie intaks", "2024-06-15", "LOW", false).mainTodoObject());

  mainTodos["work"] = [];
  mainTodos.work.push(createMainTodo("Script", "Create script request of client for SEO", "2024-06-13", "HIGH", true).mainTodoObject());
  mainTodos.work.push(createMainTodo("Ticket CleanUp", "Dobule check unresolved tickets from last week", "2024-06-21", "LOW", false).mainTodoObject());
  mainTodos.work.push(createMainTodo("1-on-1", "1 on 1 discussion with Boss", "2024-06-18", "HIGH", false).mainTodoObject());

  mainTodos["school"] = [];
  mainTodos.school.push(createMainTodo("Lecture 1", "Finish Lecture 1 on Engr Management", "2024-06-25", "MID", true).mainTodoObject());
  mainTodos.school.push(createMainTodo("Thesis", "Prepare thesis title and chapter 1-3", "2024-06-22", "HIGH", false).mainTodoObject());
  mainTodos.school.push(createMainTodo("Add Course", "Add 3 more units to next sem target courses", "2024-06-27", "HIGH", false).mainTodoObject());
}

if(!localStorage.getItem('notes')) {
  notes.push(createNote("Leave Balance", "Current Spend:\n2 VL, 4 FB, 0 SL\n0 BL").mainNoteObject());
  notes.push(createNote("Country Wishlist", "Japan\nVietnam\nTaiwan").mainNoteObject());
  notes.push(createNote("Local Travel Wishlist", "La Union\nVigan\nSiargao\nPuerto Princesa\nBoracay\nBaguio\nCamSur").mainNoteObject());
  notes.push(createNote("2025 Goals", "Take the boards\nGo for a 6-digits job\nBuy more sneakers").mainNoteObject());
  notes.push(createNote("Macros", "160g Protein\n237g Carbs\n31g Fat\n1900 calories").mainNoteObject());
  notes.push(createNote("Work Notes", "Cultural Training - July1\nSubmit doc for performance review - July 3\nTalent Review - September").mainNoteObject());
  notes.push(createNote("Leave Balance Copy", "Current Spend:\n2 VL, 4 FB, 0 SL\n0 BL").mainNoteObject());
  notes.push(createNote("Country Wishlist Copy", "Japan\nVietnam\nTaiwan").mainNoteObject());
  notes.push(createNote("Local Travel Wishlist Copy", "La Union\nVigan\nSiargao\nPuerto Princesa\nBoracay\nBaguio\nCamSur").mainNoteObject());
  notes.push(createNote("2025 Goals Copy", "Take the boards\nGo for a 6-digits job\nBuy more sneakers").mainNoteObject());
  notes.push(createNote("Macros Copy", "160g Protein\n237g Carbs\n31g Fat\n1900 calories").mainNoteObject());
  notes.push(createNote("Work Notes Copy", "Cultural Training - July1\nSubmit doc for performance review - July 3\nTalent Review - September").mainNoteObject());
}
//Create project tabs initially parsed or created
createProjectTab (mainTodos);

let mainPanelWindow = null;
let activeProjectCategoryTab = null;
const projectTabIsActivePattern = new RegExp("projects", 'i');
/*MAIN PANEL*/
//Render home summary upon open of page
mainPanelOpen.homeSummary(mainTodos, notes);
mainPanelHomeBtn.classList.add('main-panel-menu-active');
//adding event listener to main nav bar
mainPanelNavigationBtns.forEach(function(mainPanelNavigationBtn, index) {
  mainPanelNavigationBtn.addEventListener("click", function() {
    //To know which tab is active
      mainPanelWindow = mainPanelNavigationBtn.textContent;
      //console.log(mainPanelWindow);
      //to clear -active class on project tab category
      const projectCategoryTabs = document.querySelectorAll(".main-panel-menu-projects-item");
      if (mainPanelWindow == "MY HOME") {
      console.log(mainPanelWindow+" menu active again");
        //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
        if (!mainPanelHomeBtn.classList.add('main-panel-menu-active') && 
            (mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
              mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
              mainPanelNoteBtn.classList.contains('main-panel-menu-active')||
              mainPanelOverdueBtn.classList.contains('main-panel-menu-active')||
              mainPanelGeneralBtn.classList.contains('main-panel-menu-active'))) {
              mainPanelHomeBtn.classList.add('main-panel-menu-active');
              mainPanelTodayBtn.classList.remove('main-panel-menu-active');
              mainPanelWeekBtn.classList.remove('main-panel-menu-active');
              mainPanelNoteBtn.classList.remove('main-panel-menu-active');
              mainPanelOverdueBtn.classList.remove('main-panel-menu-active');
              mainPanelGeneralBtn.classList.remove('main-panel-menu-active');
            }
            mainPanelOpen.homeSummary(mainTodos, notes);
            //to clear -active class on project tab category
            projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
              });
        } else if (mainPanelWindow == "TODAY") {
          console.log(mainPanelWindow+" menu active");
            //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
          if (!mainPanelTodayBtn.classList.add('main-panel-menu-active') && 
             (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
             mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
             mainPanelNoteBtn.classList.contains('main-panel-menu-active')||
             mainPanelOverdueBtn.classList.contains('main-panel-menu-active')||
             mainPanelGeneralBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelTodayBtn.classList.add('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
                mainPanelNoteBtn.classList.remove('main-panel-menu-active');
                mainPanelOverdueBtn.classList.remove('main-panel-menu-active');
                mainPanelGeneralBtn.classList.remove('main-panel-menu-active');
            }
            mainPanelOpen.todo();
                
            renderTodos (mainPanelWindow, mainTodos);
            projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
            });
        } else if (mainPanelWindow == "WEEK") {
            console.log(mainPanelWindow+" menu active");
            //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
            if (!mainPanelWeekBtn.classList.add('main-panel-menu-active') && 
            (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
            mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
            mainPanelNoteBtn.classList.contains('main-panel-menu-active')||
            mainPanelOverdueBtn.classList.contains('main-panel-menu-active')||
            mainPanelGeneralBtn.classList.contains('main-panel-menu-active'))) {
              mainPanelWeekBtn.classList.add('main-panel-menu-active');
              mainPanelHomeBtn.classList.remove('main-panel-menu-active');
              mainPanelTodayBtn.classList.remove('main-panel-menu-active');
              mainPanelNoteBtn.classList.remove('main-panel-menu-active');
              mainPanelOverdueBtn.classList.remove('main-panel-menu-active');
              mainPanelGeneralBtn.classList.remove('main-panel-menu-active');
            }
            mainPanelOpen.todo();
                
            renderTodos (mainPanelWindow, mainTodos);
            projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
              projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
            });
        } else if (mainPanelWindow == "OVERDUE") {
          console.log(mainPanelWindow+" menu active");
              //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
            if (!mainPanelOverdueBtn.classList.add('main-panel-menu-active') && 
            (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
            mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
            mainPanelNoteBtn.classList.contains('main-panel-menu-active')||
            mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
            mainPanelGeneralBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelOverdueBtn.classList.add('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelTodayBtn.classList.remove('main-panel-menu-active');
                mainPanelNoteBtn.classList.remove('main-panel-menu-active');
                mainPanelGeneralBtn.classList.remove('main-panel-menu-active');
            }
            mainPanelOpen.todo();
              
            renderTodos (mainPanelWindow, mainTodos);
            projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
            });
        } else if (mainPanelWindow == "GENERAL") {
          console.log(mainPanelWindow+" menu active");
              //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
            if (!mainPanelGeneralBtn.classList.add('main-panel-menu-active') && 
            (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
            mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
            mainPanelNoteBtn.classList.contains('main-panel-menu-active')||
            mainPanelOverdueBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelGeneralBtn.classList.add('main-panel-menu-active');
                mainPanelOverdueBtn.classList.remove('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelTodayBtn.classList.remove('main-panel-menu-active');
                mainPanelNoteBtn.classList.remove('main-panel-menu-active');
            }
            mainPanelOpen.todo();
              
            renderTodos (mainPanelWindow, mainTodos);
            projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
            });
        } else if (mainPanelWindow.match(projectTabIsActivePattern)) {
          console.log("Projects menu tab is active");
          //let projectCategoryTabs = document.querySelectorAll(".main-panel-menu-projects-item");
          //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
          if (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
            mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
            mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
            mainPanelNoteBtn.classList.contains('main-panel-menu-active')||
            mainPanelOverdueBtn.classList.contains('main-panel-menu-active')||
            mainPanelGeneralBtn.classList.contains('main-panel-menu-active')) {
            mainPanelHomeBtn.classList.remove('main-panel-menu-active');
            mainPanelTodayBtn.classList.remove('main-panel-menu-active');
            mainPanelWeekBtn.classList.remove('main-panel-menu-active');
            mainPanelNoteBtn.classList.remove('main-panel-menu-active');
            mainPanelOverdueBtn.classList.remove('main-panel-menu-active');
            mainPanelGeneralBtn.classList.remove('main-panel-menu-active');
          }
        } else if (mainPanelWindow == "MY NOTES") {
            console.log(mainPanelWindow+" menu active");
            //change class to main-panel-menu-active of TODO nav button and clears active class for others if switched from them
            if (!mainPanelNoteBtn.classList.add('main-panel-menu-active') && 
            (mainPanelHomeBtn.classList.contains('main-panel-menu-active')||
            mainPanelTodayBtn.classList.contains('main-panel-menu-active')||
            mainPanelWeekBtn.classList.contains('main-panel-menu-active')||
            mainPanelOverdueBtn.classList.contains('main-panel-menu-active')||
            mainPanelGeneralBtn.classList.contains('main-panel-menu-active'))) {
                mainPanelNoteBtn.classList.add('main-panel-menu-active');
                mainPanelHomeBtn.classList.remove('main-panel-menu-active');
                mainPanelTodayBtn.classList.remove('main-panel-menu-active');
                mainPanelWeekBtn.classList.remove('main-panel-menu-active');
                mainPanelOverdueBtn.classList.remove('main-panel-menu-active');
                mainPanelGeneralBtn.classList.remove('main-panel-menu-active');
            }
            mainPanelOpen.notes();
            renderNotes (mainPanelWindow, notes);
            projectCategoryTabs.forEach(function(projectCategoryTab, index) { 
                projectCategoryTab.classList.remove('main-panel-menu-projects-item-active');
            });
    } else {
        console.log("No main panel menu assigned to clicked navigation button");
    }
    return mainPanelWindow;
  });
});
    
/*DIALOG PANEL*/
//dialog function to add todo, project and note
openCreate.addEventListener("click", () => {
  console.log(mainPanelWindow+" main panel is detected");
  dialogCreateNew.showModal();
  console.log("Dialog is open");
  //initially making TODO nav button active
  dialogPopupOpen.renderCreateTodoDialog();
    dialogAddTodoBtn.classList.add('create-new-menu-active');
    //add button for close (OPTIONAL-default is esc button)
    const cancelAddBtn = document.querySelector("#cancel-create-todo");
    cancelAddBtn.addEventListener("click", cancelAdd);
    //event listener to process inputs
    dialogCreateNewForm.addEventListener("submit", submitTodo);
    
    //adding event listener to dialog nav bar
    dialogNavigationBtns.forEach(function(dialogNavigationBtn, index) {
      dialogNavigationBtn.addEventListener("click", function() {
          let dialogWindow = dialogNavigationBtn.textContent;
          if (dialogWindow == "TO-DO") {
              console.log(dialogWindow+" menu active again");
              try {
                dialogCreateNewForm.removeEventListener('submit', submitTodo);
                dialogCreateNewForm.removeEventListener('submit', submitProject);
                dialogCreateNewForm.removeEventListener('submit', submitNote);
              } finally {
                //change class to create-new-menu-active of TODO nav button and clears active class for others if switched from them
                if (!dialogAddTodoBtn.classList.add('create-new-menu-active') && 
                (dialogAddProjectBtn.classList.contains('create-new-menu-active')||
                dialogAddNoteBtn.classList.contains('create-new-menu-active'))) {
                  dialogAddTodoBtn.classList.add('create-new-menu-active');
                  dialogAddProjectBtn.classList.remove('create-new-menu-active');
                  dialogAddNoteBtn.classList.remove('create-new-menu-active');
                }
                dialogPopupOpen.renderCreateTodoDialog();
                
                //add button for close (OPTIONAL-default is esc button)
                const cancelAddBtn = document.querySelector("#cancel-create-todo");
                cancelAddBtn.addEventListener("click", cancelAdd);
                //event listener to process inputs
                dialogCreateNewForm.addEventListener("submit", submitTodo);
                
              }
          } else if (dialogWindow == "PROJECT") {
              console.log(dialogWindow+" menu active");
              try {
                dialogCreateNewForm.removeEventListener('submit', submitTodo);
                dialogCreateNewForm.removeEventListener('submit', submitProject);
                dialogCreateNewForm.removeEventListener('submit', submitNote);
              } finally {
                //change class to create-new-menu-active of TODO nav button and clears active class for others if switched from them
                if (!dialogAddProjectBtn.classList.add('create-new-menu-active') && 
                (dialogAddTodoBtn.classList.contains('create-new-menu-active')||
                dialogAddNoteBtn.classList.contains('create-new-menu-active'))) {
                  dialogAddProjectBtn.classList.add('create-new-menu-active');
                  dialogAddTodoBtn.classList.remove('create-new-menu-active');
                  dialogAddNoteBtn.classList.remove('create-new-menu-active');
                }
                dialogPopupOpen.renderCreateProjectDialog();
                //add button for close (OPTIONAL-default is esc button)
                const cancelAddBtn = document.querySelector("#cancel-create-project");
                cancelAddBtn.addEventListener("click", cancelAdd);
                //event listener to process inputs
                dialogCreateNewForm.addEventListener("submit", submitProject);
              }
          } else if (dialogWindow == "NOTE") {
              console.log(dialogWindow+" menu active");
              try {
                  dialogCreateNewForm.removeEventListener('submit', submitTodo);
                  dialogCreateNewForm.removeEventListener('submit', submitProject);
                  dialogCreateNewForm.removeEventListener('submit', submitNote);
                } finally {
                  //change class to create-new-menu-active of TODO nav button and clears active class for others if switched from them
                  if (!dialogAddNoteBtn.classList.add('create-new-menu-active') && 
                  (dialogAddProjectBtn.classList.contains('create-new-menu-active')||
                  dialogAddTodoBtn.classList.contains('create-new-menu-active'))) {
                    dialogAddNoteBtn.classList.add('create-new-menu-active');
                    dialogAddProjectBtn.classList.remove('create-new-menu-active');
                    dialogAddTodoBtn.classList.remove('create-new-menu-active');
                  }
                  dialogPopupOpen.renderCreateNoteDialog();
                  //add button for close (OPTIONAL-default is esc button)
                  const cancelAddBtn = document.querySelector("#cancel-create-note");
                  cancelAddBtn.addEventListener("click", cancelAdd);
                  //event listener to process inputs
                  dialogCreateNewForm.addEventListener("submit", submitNote);
                }
          } else {
              console.log("No dialog menu assigned to clicked navigation button");
          }
      });
      
    });
});

