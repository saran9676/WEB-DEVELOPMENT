var obj_array = [];

function display() {
    try {
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var height = document.getElementById("height").value;
        var weight = document.getElementById("weight").value;

        var obj = createObject(name, age, height, weight);
        addArray(obj);

        var resultTable = "<table class='table'><tr><th>Name</th><th>Age</th><th>Height</th><th>Weight</th></tr>";

        for (var i = 0; i < obj_array.length; i++) {
            resultTable += "<tr><td>" + obj_array[i].name + "</td><td>" + obj_array[i].age + "</td><td>" + obj_array[i].height + "</td><td>" + obj_array[i].weight + "</td></tr>";
        }

        resultTable += "</table>";
        document.getElementById("result").innerHTML = resultTable;
    } catch (err) {
        document.getElementById("result").innerHTML = "Function display: " + err;
    }
}

function createObject(name, age, height, weight) {
    try {
        var customer = {
            name: name,
            age: age,
            height: height,
            weight: weight
        };
        return customer;
    } catch (err) {
        document.getElementById("result").innerHTML = "Function createObject: " + err;
    }
}

function addArray(obj) {
    try {
        obj_array.push(obj);
        return obj_array;
    } catch (err) {
        document.getElementById("result").innerHTML = "Function addArray: " + err;
    }
}
