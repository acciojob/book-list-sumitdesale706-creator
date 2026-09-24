//your JS code here. If required.
let body = document.querySelector("body");

let heading = document.createElement("h1");
heading.innerText = "MyBookList";
body.appendChild(heading);


// for form :-
let form = document.createElement("div");
form.classList.add("form-group");

let title = document.createElement("input");
title.type = "text";
title.id = "title";

let author = document.createElement("input");
author.type = "text";
author.id = "author";

let isbn = document.createElement("input");
isbn.type = "number";
isbn.id = "isbn";

let button = document.createElement("button");
button.id = "submit";
button.innerText = "Add Book";

form.append(title, author, isbn, button);



// for table :-
let table = document.createElement("table");
table.classList.add("table");
table.classList.add("table-striped");
let tHead = document.createElement("thead");
let headRow = document.createElement("tr");
let c1  =  document.createElement("th");
let c2  =  document.createElement("th");
let c3  =  document.createElement("th");
let c4  =  document.createElement("th");
c1.innerText = "Title";
c2.innerText = "Author";
c3.innerText = "ISBN#";
headRow.append(c1, c2, c3, c4);
tHead.appendChild(headRow);
table.appendChild(tHead);

let tBody = document.createElement("tbody");
tBody.id = "book-list";
table.appendChild(tBody);



// add our form and table in body
body.append(form, table);



button.addEventListener("click", () => {
	let row = document.createElement("tr");
	row.id = "r1";
	
	let col1 = document.createElement("td");
	let col2 = document.createElement("td");
	let col3 = document.createElement("td");
	let col4 = document.createElement("td");

	col1.innerText = `${title.value}`;
	col2.innerText = `${author.value}`;
	col3.innerText = `${isbn.value}`;
	let deleteB = document.createElement("button");
	deleteB.classList.add("delete");
	deleteB.innerText = "Delete";
    col4.appendChild(deleteB);

	row.append(col1, col2, col3, col4);
	tBody.appendChild(row);

	deleteB.addEventListener("click", () => {
		   row.remove();
	})
    
})




