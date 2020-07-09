switch (objDiv[i].innerText) {
    case 'people':
        objDiv[i].addEventListener('click', function () { clickMenu('people') });
        break;
    case 'planets':
        objDiv[i].addEventListener('click', function () { clickMenu('planets') });
        break;
    case 'films':
        objDiv[i].addEventListener('click', function () { clickMenu('films') });
        break;
    case 'species':
        objDiv[i].addEventListener('click', function () { clickMenu('species') });
        break;
    case 'vehicles':
        objDiv[i].addEventListener('click', function () { clickMenu('vehicles') });
        break;
    case 'starships':
        objDiv[i].addEventListener('click', function () { clickMenu('starships') });
        break;
}