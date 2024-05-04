// Find the table element using XPath
var table = document.evaluate(
    "/html/body/div[3]/div[3]/div[2]/table/tbody/tr[2]/td[1]/table",
    document,
    null,
    XPathResult.FIRST_ORDERED_NODE_TYPE,
    null
  ).singleNodeValue;
  
  // Create a new table row
  var newRow = document.createElement("tr");
  
  // You can add content to the row if needed
  // For example, adding a cell
  var cell = document.createElement("td");
  cell.textContent = "New Cell Content";
  newRow.appendChild(cell);
  
  // Add the new row to the table
  table.appendChild(newRow);
  