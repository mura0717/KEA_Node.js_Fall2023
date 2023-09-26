console.log("hello")

// task: create a fetch to /battlepokemon

    fetch("/battlepokemon")
    .then((response) => response.json)
    .then((result) => {
        console.log(result); 
    });
  