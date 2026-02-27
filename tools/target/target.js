document.addEventListener("at-library-loaded", function() {
    document.addEventListener("at-content-rendering-succeeded", function(e) {
        // Your code to "fix" the UI goes here
        console.log("Target finished rendering: ", e.detail.selectors);
    });
});
