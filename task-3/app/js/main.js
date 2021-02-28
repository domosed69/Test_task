const section = document.querySelector('section');


const requestURL = '../data.json';
const request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();

request.onload = function () {
    let universitet = request.response;
    showDetails(universitet);
};


function showDetails(jsonObj) {
    let member = jsonObj['members'];

    for (let i = 0; i < member.length; i++) {

        let myH1 = document.createElement('h1');
        let myArticle = document.createElement('article');
        let myH2 = document.createElement('h2');
        let myPara1 = document.createElement('p');
        let myPara2 = document.createElement('p');
        let myPara3 = document.createElement('p');
        let myList = document.createElement('ul');
        let myList2 = document.createElement('ul');
        let myHr = document.createElement('hr');

        myH1.textContent = member[i].name;
        myH2.textContent = 'Country: ' + member[i].country;
        myPara1.textContent = 'Alpha two code: ' + member[i].alpha_two_code;
        myPara2.textContent = 'Web pages: ';
        myPara3.textContent = 'Domains: ';

        let domains = member[i].domains;
        for (let l = 0; l < domains.length; l++) {
            let listItem2 = document.createElement('li');
            listItem2.textContent = domains[l];
            myList2.appendChild(listItem2);

        }
        let webPages = member[i].web_pages;
        for (let j = 0; j < webPages.length; j++) {
            let href = document.createElement('a');
            href.setAttribute('href', webPages[j]);
            href.setAttribute('target', '_blank');
            href.textContent = webPages[j];
            myList.appendChild(href);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myList);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList2);
        myArticle.appendChild(myHr);


        section.appendChild(myH1);
        section.appendChild(myArticle);
    }
}