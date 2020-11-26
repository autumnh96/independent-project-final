/*
    Author:   Autumn Hancock
    Date:     11-25-2020
    CITC 1300-R51 Independent Project 4
/*

/* create variables */

var coll = document.getElementsByClassName("collapsible");
var i;

/* 
create collapsible section
( I used a tutorial found on w3schools, source: https://www.w3schools.com/howto/howto_js_collapsible.asp )
*/

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var menuSection = this.nextElementSibling;
        if (menuSection.style.display === "block") {
            menuSection.style.display = "none";
        } else {
            menuSection.style.display = "block";
        }
    });
}