
let clickBtn1 = document.getElementById("button");
clickBtn1.addEventListener('click', decision);
let username1 = $('.text-field1')[0].value;
let username2 = $('.text-field2')[0].value;
let x = document.getElementById("mySelect").selectedIndex;
let y = document.getElementById("mySelect").options;
let websiteName = y[x].text;



function decision() {

    if(websiteName === "codechef"){
        codechefProfile();
    } else if(websiteName === "codeforces") {
        codeforcesProfiles();
    }

}



function codeforcesProfiles() {

    document.getElementById('loading').style.display = 'block';

    fetch(`https://cors-anywhere.herokuapp.com/https://competitive-programming-api.herokuapp.com/codeforces/${username1}`)
        .then(response => response.json())
        .then((data1) => {

            // console.log(data1);

            if (data1) {
                document.getElementById('loading').style.display = 'none';

                let html1 = showCodeforces(data1);
                let result1 = document.querySelector("#result1");
                result1.innerHTML = html1;
            }
        })



    fetch(`https://cors-anywhere.herokuapp.com/https://competitive-programming-api.herokuapp.com/codeforces/${username2}`)
        .then(response => response.json())
        .then((data2) => {

            // console.log(data2);

            if (data2) {
                document.getElementById('loading').style.display = 'none';

                let html = showCodeforces(data2);
                let result2 = document.querySelector("#result2");
                result2.innerHTML = html;
            }
        })
}





function showCodeforces(data) {

    let html = `
        <div class="card">
          <div class="text-center card-heading mt-2">
            <h4>${data.name}</h4>
            <hr>
          </div>

          <div class="card-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col"></th>
                  <th scope="col"></th>
                  <th scope="col"></th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Username</td>
                  <td>${data.username}</td>
                </tr>

                <tr>
                  <th scope="row">2</th>
                  <td>User Rank</td>
                  <td>${data.user_rank}</td>
                </tr>

                <tr>
                  <th scope="row">3</th>
                  <td>City</td>
                  <td>${data.city}</td>
                </tr>

                <tr>
                  <th scope="row">4</th>
                  <td>Country</td>
                  <td>${data.country}</td>
                </tr>

                <tr>
                  <th scope="row">5</th>
                  <td>Organization</td>
                  <td>${data.organization}</td>
                </tr>

                <tr>
                  <th scope="row">6</th>
                  <td>Contest Rating</td>
                  <td>${data.contest_rating}</td>
                </tr>

                <tr>
                  <th scope="row">7</th>
                  <td>Contribution</td>
                  <td>${data.contribution}</td>
                </tr>

                <tr>
                  <th scope="row">8</th>
                  <td>Friend Of</td>
                  <td>${data.friend_of}</td>
                </tr>

                <tr>
                  <th scope="row">9</th>
                  <td>Last Visited</td>
                  <td>${data.last_visited}</td>
                </tr>

                <tr>
                  <th scope="row">10</th>
                  <td>Registered Since</td>
                  <td>${data.registered}</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
    `;

    return html;
}




function codechefProfile() {

    document.getElementById('loading').style.display = 'block';

    fetch(`https://cors-anywhere.herokuapp.com/https://competitive-programming-api.herokuapp.com/codechef/${username1}`)
        .then(response => response.json())
        .then((data1) => {

            console.log(data1);

            if (data1) {
                document.getElementById('loading').style.display = 'none';

                let html1 = showCodechef(data1);
                let result1 = document.querySelector("#result1");
                result1.innerHTML = html1;
            }
        })



    fetch(`https://cors-anywhere.herokuapp.com/https://competitive-programming-api.herokuapp.com/codechef/${username2}`)
        .then(response => response.json())
        .then((data2) => {

            console.log(data2);

            if (data2) {
                document.getElementById('loading').style.display = 'none';

                let html = showCodechef(data2);
                let result2 = document.querySelector("#result2");
                result2.innerHTML = html;
            }
        })
}



function showCodechef(data) {

    let html = `
      <div class="card">
        <div class="text-center card-heading mt-2">
          <h4>${data.name}</h4>
          <hr>
        </div>
        <div class="card-body">
          <table class="table text-center">
            <thead class="thead-dark">
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
        `;

    let count = 1;
    let profile = "";
    for (let i = 0; i < (data.profile).length; ++i) {
        let s =

            `<tr>
                <th scope="row">${i + 1}</th>
                <td>${data.profile[i].first_field}</td>
                <td>${data.profile[i].second_field}</td>
            </tr>`
        count++;
        profile += s;
    }

    html += profile;

    html +=
        `<tr>
                <th scope="row">${count}</th>
                <td>Global Rank</td>
                <td>${data.global_rank}</td>
            </tr>
            <tr>
                <th scope="row">${count + 1}</th>
                <td>Country Rank</td>
                <td>${data.country_rank}</td>
            </tr>
            <tr>
                <th scope="row">${count + 2}</th>
                <td>Fully Solved</td>
                <td>
            `;


    let fullySolved = "";
    for (let i = 0; i < (data.fullySolvedPracticeProblems).length; ++i) {

        let s = `
            <span class="badge badge-success"><a class="text-white" target="_blank"
                href="${data.fullySolvedPracticeProblems[i].problem_link}">${data.fullySolvedPracticeProblems[i].problemName}</a>
            </span>
            `;
        fullySolved += s;
    }

    html += fullySolved + `</td> </tr>`;

    html +=
        `<tr>
            <th scope="row">${count + 3}</th>
            <td>Partially Solved</td>
            <td>
        `;

    let partiallySolved = "";
    for (let i = 0; i < (data.partiallySolvedPracticeProblems).length; ++i) {
        let s =
            `<span class="badge badge-danger"><a class="text-white" target="_blank"
                href="${data.partiallySolvedPracticeProblems[i].problem_link}">${data.partiallySolvedPracticeProblems[i].problemName}</a>
            </span>
            `;
        partiallySolved += s;
    }

    html += partiallySolved + `</td> </tr>
            </tbody>
          </table>

        </div>
      </div>

`;

    return html;

}



