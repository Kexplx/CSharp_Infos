            $("#formPost").submit(function(e) {
                e.preventDefault()
                var form = document.getElementById("formPost");
                var data = new FormData(form);

                // Files have to be appended sepparately
                var fileInput = document.querySelector("#inputFile");
                data.append("img", fileInput.files[0]);

                fetch('/app02/addPost.php', {
                    method: 'POST',
                    body: data,
                }).then(data => {
                    if (data.status == 200) {
                        console.log("Everything went well");

                        data.json().then(json => {
                            // json.username
                        })
                    } else {
                        console.log(data.status + " -> " + data.statusText);
                    }
                });

                clearInputs();
            });