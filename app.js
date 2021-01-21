// var readmore = document.getElementById("readmore");

function addNotes() {
    var notes = document.getElementById("notes").value;
    var hide = document.getElementById("hide");

    if (hide.style.display === "block") {
        hide.style.display = "block";
    } else {
        hide.style.display = "none";
    }

    var main = document.getElementById("main");
    main.setAttribute("class","big-one")

    // h6 start
    var h6 = document.createElement("h6");
    var h6Text = document.createTextNode("Notes");
    h6.appendChild(h6Text);
    h6.setAttribute("id", "hello")
    h6.setAttribute("class", "card-title")
    h6.style.marginTop="20px"
    // h6 end

    // p start
    var p = document.createElement("p");
    var pText = document.createTextNode(notes);
    p.appendChild(pText);
    p.setAttribute("class", "card-text")
    // p end

    // button start
    var btn = document.createElement("button");
    var btnText = document.createTextNode("View Detail");
    btn.appendChild(btnText);
    btn.setAttribute("class", "btn btn-primary card-button")
    // button end

    //alert functionality start
    main.appendChild(h6);
    main.appendChild(p);
    main.appendChild(btn);
    //alert functionality end



}