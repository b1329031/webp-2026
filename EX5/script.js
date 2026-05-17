var count = 1;

function addfunction() {
  var btn = document.createElement("BUTTON");
  btn.innerHTML = `CLICK ME (${count})`;
  btn.setAttribute("id", "btn_" + count++);
  btn.setAttribute("class", "btn btn-outline-danger");

  btn.addEventListener("click", function(e) {
    e.target.innerHTML = e.target.id + " CLICKED !";
    console.log("onclick1");
  });

  btn.addEventListener("dblclick", function(e) {
    e.target.innerHTML = "CLICKED (" + e.target.id.replace("btn_", "") + ")";
    console.log("dbclick1");
  });

  console.log(btn);
  document.body.appendChild(btn);
}

function delfunction() {
  var btn = document.getElementById("btn_" + --count);
  if (btn) {
    document.body.removeChild(btn);
  }
}
