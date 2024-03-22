let studentNames = [];
let studentMarks = [];

function inputmarks() {
    let name = document.getElementById("name").value;
    let marks = parseFloat(document.getElementById("marks").value);

    if (studentNames.length < 5) {
        studentNames.push(name);
        studentMarks.push(marks);

        // Clear input fields
        document.getElementById("name").value = "";
        document.getElementById("marks").value = "";

        // Update the count
        document.querySelectorAll(".count").forEach(countElement => {
            countElement.textContent = studentNames.length;
        });
    }
}

function displaymarks() {
    if (studentNames.length > 0) {
        // Find the student with the highest marks
        let maxMarks = Math.max(...studentMarks);
        let maxMarksIndex = studentMarks.indexOf(maxMarks);

        // Display the name of the student with the highest marks
        document.getElementById("outname").textContent = studentNames[maxMarksIndex];

        // Display the total number of records
        document.getElementById("outmarks").textContent = studentMarks[maxMarksIndex];
    } else {
        // If no records exist, display an appropriate message
        document.getElementById("outname").textContent = "No records";
        document.getElementById("outmarks").textContent = "0";
    }
}
