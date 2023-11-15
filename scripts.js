// function handleSubmit() {
//   const submit = {};
//   submit.fName = document.querySelector("#fName").value;
//   submit.lName = document.querySelector("#lName").value;
//   submit.email = document.querySelector("#email").value;
//   submit.address = document.querySelector("#address").value;

//   // debugger;

//   const tableRow = document.createElement("tr");

//   Object.values(submit).forEach((value) => {
//     const tableData = document.createElement("td");

//     const textNode = document.createTextNode(value);

//     tableData.appendChild(textNode);
//     tableRow.appendChild(tableData);
//   });

//   Object.keys(submit).forEach(key => {
//     document.querySelector("#" + key).value = null;
//   });

//   const table = document.querySelector("#student-table");
//   table.appendChild(tableRow);
// }

function handleSubmit() {
  const submit = {};
  submit.fName = document.querySelector("#fName").value;
  submit.lName = document.querySelector("#lName").value;
  submit.email = document.querySelector("#email").value;
  submit.address = document.querySelector("#address").value;

  const tableRow = document.createElement("tr");

  Object.values(submit).forEach((value) => {
    const tableData = document.createElement("td");
    const textNode = document.createTextNode(value);

    tableData.appendChild(textNode);
    tableRow.appendChild(tableData);
  });

  Object.keys(submit).forEach((key)=>{
    document.querySelector("#"+key).value=null;
  })

  const table = document.querySelector("#student-table");
  table.appendChild(tableRow);
}
