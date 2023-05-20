let myToken = " 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";
// let myToken="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";
let display_repo = document.getElementById("repository");
let info = document.getElementById("user_info");
let display_pic = document.getElementById("image_prof");

//search repo
function submit_input() {
  let number_repo = document.getElementById("numberrepo");
  let user_input = document.getElementById("my_input").value;
if(user_input == ''){
  return;
}
  fetch(`https://api.github.com/users/${user_input}`, {
    headers: { Authorization: `token ${myToken}` },
  })
    .then((response) => response.json())
    .then((data) => {
      number_repo.innerText = `${data.public_repos}`;
      console.log(data);
      info.innerHTML = `
                <img src="${data.avatar_url}" id="profile_picture">
                <div class="status"><i class="fa-solid fa-heart"></i></div>
                <h2 id="name">${data.login}</h2>
                <p id="username">${data.name}</p>
                <button class="btn_edit">Edit profile</button>
            `;
    })
    .catch((error) => console.error(error));

  fetch(`https://api.github.com/users/${user_input}/repos`, {
    headers: { Authorization: `token ${myToken}` },
  })
    .then((response) => response.json())
    .then((repos) => {
      display_repo.innerHTML = "";
      repos.forEach((repo) => {
        let div_circle = document.createElement("div");
        div_circle.classList.add("color_Circle");
        let languages = repo.language;

        
        if (languages == "JavaScript") {
          div_circle.style.background = "#f1e05a";
        } else if (languages == "CSS") {
          div_circle.style.background = "#563d7c";
        } else if (languages == "HTML") {
          div_circle.style.background = "#e34c26";
        } else if (languages == "Java") {
          div_circle.style.background = " #b07219";
        } else if (languages == "Python") {
          div_circle.style.background = "#3572A5";
        } else if (languages == "Ruby") {
          div_circle.style.background = "#701516";
        } else if (languages == "C#") {
          div_circle.style.background = " #178600";
        }  else if (languages == "PHP") {
          div_circle.style.background = "#4F5D95";
        }  else if (languages == "C++") {
          div_circle.style.background = "#f34b7d";
        }
         else {
          div_circle.style.background = "black";
        }

        const forkedFrom = repo.parent
          ? `<p>Forked from <a href="${repo.parent.html_url}">${repo.parent.full_name}</a></p>`
          : "";

        const repoElement = document.createElement("div");
        repoElement.classList.add("row", "border-bottom", "p-3","row-repo");
        repoElement.innerHTML = `
              <div class="col-10">
                <div class="name_repo">
                  <a href="${repo.html_url}">${repo.full_name} </a>
                  <div class="pub_priv">public</div>
                </div>
                ${forkedFrom}
                <div class="Typeandcolor">
                  <div class="type_repo">${repo.language}</div>
                  
                </div>
              </div>
              <div class="col-2"></div>`;

        repoElement.querySelector(".Typeandcolor").prepend(div_circle);

        display_repo.appendChild(repoElement);
      });
    })
    .catch((error) => console.error(error));

  // comparing script

 
}
let div_header_user1 = document.getElementById("headerUser1");
let div_header_user2 = document.getElementById("headerUser2");
let div_body_user1 = document.getElementById("body_user1");
let div_body_user2 = document.getElementById("body_user2");
let array_user_info = [];

  function user1_input() {
    let input_user1 = document.getElementById("user1_input").value;

    if (input_user1 === '') {
      return;
    }

    fetch(`https://api.github.com/users/${input_user1}`, {
      headers: { Authorization: `token ${myToken}` },
    })
      .then((response) => response.json())
      .then((user) => {
        // header user

        let username1 = user.login;
        let image1 = user.avatar_url;
        //    body user
        let name1 = user.name;
        let location1 = user.location;
        let email1 = user.email;
        let followers = user.followers;
        let following = user.following;
        let repo = user.public_repos;

        //    push array
        array_user_info.push({
          username: username1,
          image: image1,
          name: name1,
          location: location1,
          email: email1,
          followers: followers,
          following: following,
          repo: repo,
        });

        // console.log(array_user_info)

        //input user1
        div_header_user1.innerHTML = `
            <p class="fs-4 text-center" id="lable1"></p>
            <img src="${array_user_info[0].image}" class="card-img-top image_user_profile" alt="...">
            <div class="card-body">
              <p class="fs-4 text-center">${array_user_info[0].username}</p>
            </div>
            `;

        //body user1
        div_body_user1.innerHTML = `
              <p class="fs-5 atrib">name :  ${array_user_info[0].name}</p>
              <p class="fs-5 atrib">location :  ${array_user_info[0].location}</p>
              <p class="fs-5 atrib">email :${array_user_info[0].email}</p>
              <p class="fs-5 atrib"> number followers :  ${array_user_info[0].followers}</p>
              <p class="fs-5 atrib">number following :  ${array_user_info[0].following}</p>
              <p class="fs-5 atrib">number repository :  ${array_user_info[0].repo}</p>
              `;

        //input user2
        div_header_user2.innerHTML = `
            <p class="fs-4 text-center" id="lable2"></p>

            <img src="${array_user_info[1].image}" class="card-img-top image_user_profile" alt="...">
            <div class="card-body">
              <p class="fs-4 text-center">${array_user_info[1].username}</p>
            </div>
            `;
        // body user 2
        div_body_user2.innerHTML = `
            <p class="fs-5 atrib">name :  ${array_user_info[1].name}</p>
            <p class="fs-5 atrib">location :  ${array_user_info[1].location}</p>
            <p class="fs-5 atrib">email :${array_user_info[1].email}</p>
            <p class="fs-5 atrib">number followers :  ${array_user_info[1].followers}</p>
            <p class="fs-5 atrib">number following :  ${array_user_info[1].following}</p>
            <p class="fs-5 atrib">number repository :  ${array_user_info[1].repo}</p>
            `;
      })
      .catch((error) => console.error(error));

    user1_input.value = " ";
    user1_input.focus();
  }

  //script comparing
  function comparing() {
    let repo1 = array_user_info[0].repo;
    let repo2 = array_user_info[1].repo;
    console.log(repo1);
    console.log(repo2);
    let labelUser1 = document.getElementById("lable1");
    let labelUser2 = document.getElementById("lable2");
    if (repo1 > repo2) {
      labelUser1.innerText = "Winner";
      labelUser2.innerText = "Loser";
    } else if(repo1 < repo2){
      labelUser1.innerText = "Loser";
      labelUser2.innerText = "Winner";
    }
    else{
      labelUser1.innerText = "Tie";
      labelUser2.innerText = "Tie";
    }
  }
  