// Insert your code here

document.querySelector("#register").addEventListener("click", () => {
  const name = document.querySelector("#registerName").value;
  const email = document.querySelector("#registerEmail").value;
  const password = document.querySelector("#registerPassword").value;
  fetch("https://weatherapp-backend-murex.vercel.app/users/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  })
    .then((response) => response.json({ result: true }))
    .then(() => window.location.assign("index.html"));
});

document.querySelector("#connection").addEventListener("click", () => {
  const email = document.querySelector("#connectionEmail").value;
  const password = document.querySelector("#connectionPassword").value;
  fetch("https://weatherapp-backend-murex.vercel.app/users/signin", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json({ result: true }))
    .then(() => window.location.assign("index.html"));
});
