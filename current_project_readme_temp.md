# Current Project
Current project in development
### Type: Learning
### Title: To-do Webpage
### Start Date: 04/24/2024
### Target Date: 06/28/2024
### Finish Date: 07/28/2024
### Overdue 30 days !

### Google Sheet for all progress/roadmap: https://docs.google.com/spreadsheets/d/1Goo4Qj8LqUBYjKw9L3Ikx92SY2xZSUdk/edit?pli=1#gid=1461891629 

### <u>Action Tracker</u>
Process of edit if VSCode Web is used:
1. Open github repository remotely
2. Download all files at local
3. Open local copy of folder and files in new window
4. Edit & Test Locally
5. Copy all files to remote repository
6. Push/Sync to github

#### Node/Tab/Page/Stage: Main Panel/Workspace
1. Today tab (todocatalog entry)
    - <s>CONVERT HTML to DOM for todayTodo (manual edit at html)</s>
    - <s>Functionality dialog for todo details to be displayed</s>
    - <s>eventlistener for deletion of todo entry and remove entry on todo object then check if there will be error on other catalog then need to reinitialize indexes on id of todo catalog entry to avoid misalignment (loops everytime on updated array then finds what will match the title, so no need to re-initialize)</s>
    - <s>Make function of foreach of todo entries reusable OR start sorting the functions for tab and looping everything inside the mainTodo object per key</s>
    - <s>add attribute of checked to input checkbox when status is true at function displayTodoCatalogEntry</s>
    - <s>eventlistener for when checkbox of todo entry is checked, switch from text-decoration strikethrough the title when checkbox is checked</s>
    - <s>Fix process of submitting todo to be submitted and pushed on right key(category)</s>
    - <s>Reinitialize todo of respective category after create todo form was submitted</s>
    - <s>If PROJECT tab is selected add eventlistener to the projects tab</s>
    - <s>eventlistener to each project item tab. Do same with today and week todo provide with mock data
    Check if can also use renderTodos function</s>
    - <s>apply sortToCategory function to projectCategoryTabs evetlisteners through submitTodo function, check if it will have the same functionality compare to when added at mainpanelbtns</s>
    - <s>function to process project form submit use createProjectTab function</s>
      <s>RESOLVE ISSUE OF NEW submitted PROJECT does not have eventlistener</s>
      <s>RESOLVE ISSUE when -active class in project tab is given it must be removed when other tab is clicked</s>
      <s>When new empty key is clicked current workspace panel is not clearing</s>
    - <s>Style the overflow scroll bar</s>
    - <s>Create a function to print/show each todo entry programmatically (compile render todo into one function for reusability on other project category)</s>
    - <b>Functionality to make todo catalog editable using pop up dialog (todoFunction.js reference start at line 290), line 339 at JS code</b>
        1. <s>Append sa displaytodocatalog function yung dialog for this</s>
        2. <s>Use current object to assign text contents for inputs</s>
        3. <s>Process data of submit form [RAW]</s>
        4. <s>Way to know if na toggle yung value do that otherwise mag compare nalang</s>
            pagka-submit
        5. <s>Anitcipate that if may pose a problem to not re-display todo catalogs right after deletion
            (may result in edit not falling into right index) -> can be a solution to this is find first the index
            at which the current is on before editting the object/index</s>
    - put border (left only or whole box of catalog) depending on priority (OPTIONAL)
2. Project tab
    - <s>If project is created the title will be created as an LI under UL with class projects under the PROJECT LI tag</s>
3. Notes tab
    - <s>Create function to renderNotes</s>
        1. <s>function createNotes</s>
        2. <s>function displayNoteCatalogEntry</s>
        3. <s>function renderNotes</s>
            - <s>submit edit note form function</s>
3. All todo tabs
    - <s>Sort main todo if today or this week, auto-sort if possible OR just add a marker if overdue at TODAY panel</s>
        - <s>improve sorting when overdue tasks is mark as done</s>
        - <s>improve sorting when edit todo is submitted (if date is changed)</s>
    - <s>ALSO differentiate today/week todo with project todo depending on active mainpanel if this does not work just create different button when opening dialog if possible</s>z
    - <s>Calculate summary of Tasks function</s>
        - <s>total projects excluding today and week keys</s>
        - <s>total notes</s>
        - <s>overall tasks done</s>
        - <s>total tasks today</s>
        - <s>total tasks overdue</s>
        - <s>total tasks this week</s>
    - <s>Determine at which point mag stringify and parse para ma mantain utilization ng localStorage</s>

#### Node/Tab/Page/Stage: Enhancement/Improvement
1. Add button to clear cache [delete localStorage]
2. Add feature of user login

#### Node/Tab/Page/Stage: Release/Live/Deploy
1. Create and setup repository using webpack, test:
    - HtmlWebpackPlugin: for bundling
    - HtmlWebpackTemplate (optional)
    - CopyPlugin (used in coffe page project)
    Then push all changes on github repository once done