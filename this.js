// "this" keyword in JavaScript
// ==========================================================================

var person = {
    firstName: "Drew",
    lastName: "Barrymore",
    fullName: function() {
        console.log(this.firstName + " " + this.lastName);
        // is the same as:
        console.log(person.firstName + " " + person.lastName);
    }
}

person.fullName();

// jQuery example of "this"
// ==========================================================================
$("button").click(function(event) {
    console.log($ (this).prop('name'));
})