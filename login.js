function fetchData() {
  return new Promise((resolve, reject) => {
    fetch("./data.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

function Login(event) {
  event.preventDefault();

  fetchData()
    .then((data) => {
      const email = document.getElementById("user").value;
      const password = document.getElementById("password").value;
      const match = data.find(
        (entry) => entry.email === email && entry.password === password
      );

      if (match) {
        window.location.href = "form.html";
        localStorage.setItem("token", email);
      } else {
        console.log("Not Found");
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
