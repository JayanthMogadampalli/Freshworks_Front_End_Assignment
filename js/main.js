var x = document.getElementById('search').value;
document.getElementById('getVal').addEventListener('click', getDetails);

function getDetails() {
    fetch('https://restcountries.eu/rest/v2/name/' + `x`)
        .then((res) => res.json())
        .then((data) => {
            let output = '<h2 style="align:center;">Data</h2>';
            data.forEach(function (country) {
                output += `
        <div class="card">
        <a href="countrydetails.html?countryname="+(${country.name})><img src="${country.flag}" class="img1" alt="Avatar" style="width:100%"></a>
        <div class="container2">
            <h4 id="heading3"><b>${country.name}</b></h4>
            <p>Architect & Engineer</p>
        </div>
    </div>
      `;
            });
            document.getElementById('container1').innerHTML = output;
        })
}