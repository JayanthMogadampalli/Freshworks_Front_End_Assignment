window.addEventListener('load', () => {
    countrydetails();
});

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

function countrydetails() {
    console.log(JSON.parse(getParameterByName('countryname')));
    var countrydetails = JSON.parse(getParameterByName('countryname'));
    const countrydata = document.getElementById("country-details")

}