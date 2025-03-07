function donateNow() {
    alert("Thank you for your generosity!");
}

function watchVideo() {
    alert("Opening video...");
}

document.querySelectorAll(".donation-card button").forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for donating!");
    });
});
