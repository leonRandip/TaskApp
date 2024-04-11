document.getElementById("subbtn").addEventListener("click", formManipulate);
let second = "00";
let minute = "00";
let hour = "00";

function updateTime() {
  second = String(second).padStart(2, "0");
  minute = String(minute).padStart(2, "0");
  hour = String(hour).padStart(2, "0");
  document.getElementById(
    "content2"
  ).innerHTML = `<p>${hour}hours:${minute}minutes:${second}seconds</p>`;
}

document.getElementById(
  "content2"
).innerHTML = `<p>${hour}hours:${minute}minutes:${second}seconds</p>`;

function startStopwatch() {
  document.getElementById("start").disabled = true;
  intervalId = setInterval(() => {
    second++;
    if (second === 60) {
      second = 0;
      minute++;
      if (minute === 60) {
        minute = 0;
        hour++;
      }
    }
    updateTime();
  }, 1000);
}

function stopStopwatch() {
  clearInterval(intervalId);
  document.getElementById("start").disabled = false;
}

function resetStopwatch() {
  clearInterval(intervalId);
  second = 0;
  minute = 0;
  hour = 0;
  updateTime();
  document.getElementById("start").disabled = false;
}

document.getElementById("start").addEventListener("click", startStopwatch);
document.getElementById("stop").addEventListener("click", stopStopwatch);
document.getElementById("reset").addEventListener("click", resetStopwatch);

let arr = [
  {
    age: "host",
    downtime: "00hours:00minutes:06seconds",
    name: "Work ",
    task: "meet",
  },
  {
    age: "personal",
    downtime: "00hours:01minutes:06seconds",
    name: "project",
    task: "demo",
  },
];

// Function to populate table with initial data
function populateTable() {
  let tableBody = document.querySelector("#database table tbody");
  let category = document.getElementById("category").value;
  let filteredArr = arr.filter(
    (item) => item.name === category || category === "all"
  );
  tableBody.innerHTML = filteredArr
    .map((i, index) => {
      return `
            <tr>
                <td>${i.name}</td>
                <td>${i.task}</td>
                <td>${i.age}</td>
                <td>${i.downtime}</td>
                <td>
                    <button class="delete" data-index="${index}" >Delete</button>
                    <button class="update" data-index="${index}" >Update</button>
                </td>
            </tr>`;
    })
    .join("");

  document.querySelectorAll(".delete").forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      arr.splice(index, 1);
      populateTable();
    });
  });

  document.querySelectorAll(".update").forEach((button) => {
    button.addEventListener("click", function () {
      const index = parseInt(this.getAttribute("data-index"));
      const newItem = arr[index];
      document.getElementById("name").value = newItem.name;
      document.getElementById("age").value = newItem.age;
      document.getElementById("task").value = newItem.task;

      arr.splice(index, 1);

      populateTable();
    });
  });
}
populateTable();

function formManipulate(event) {
  event.preventDefault();
  let name = document.getElementById("name").value;
  let age = document.getElementById("age").value;
  let task = document.getElementById("task").value;
  let downtime = document.getElementById("content2").innerHTML;
  arr.push({ name: name, age: age, downtime: downtime, task: task });
  populateTable();
}
