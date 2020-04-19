var planNumber = 1;
var cena = 20;
var cardText = 'Filmy w HD';

var html = [
        '<div class="card">',
            '<div class="card-body text-center">',
                '<h4 class="card-text">Plan ' + String(planNumber) + '</h4>',
                '<p class="card-text">Cena:' + String(cena) + 'zł za miesiąc</p>',
                '<p class="card-text">' + cardText + '</p>',
                '<a href="../register_payment/register.html" class="btn btn-primary stretched-link">Wybierz plan</a>', //numerowanie przyciskow jakos
            '</div>',
        '</div>'
    ].join("\n"); 

    var html2 = [
        '<div class="card">',
            '<div class="card-body text-center">',
                '<h4 class="card-text">Plan ' + String(planNumber+1) + '</h4>',
                '<p class="card-text">Cena:' + String(cena+10) + 'zł za miesiąc</p>',
                '<p class="card-text">' + cardText + '</p>',
                '<a href="../register_payment/register.html" class="btn btn-primary stretched-link">Wybierz plan</a>', //numerowanie przyciskow jakos
                '</div>',
        '</div>'
    ].join("\n");
    html = html + html2;


    document.getElementById("cards").innerHTML = html;



/*skopiowane:

            <div class="card">
                <div class="card-body text-center">
                    <h4 class="card-text">Plan 1</h4>
                    <p class="card-text">Cena: 20 zł za miesiąc</p>
                    <p class="card-text">Filmy w HD!</p>
                    <a href="#" class="btn btn-primary stretched-link">Wybierz plan</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body text-center">
                    <h4 class="card-text">Plan 2</h4>
                    <p class="card-text">Cena: 30 zł za miesiąc</p>
                    <p class="card-text">Filmy w FullHD!</p>
                    <a href="#" class="btn btn-primary stretched-link">Wybierz plan</a>
                </div>
            </div>
            <div class="card">
                <div class="card-body text-center">
                    <h4 class="card-text">Plan 3</h4>
                    <p class="card-text">Cena: 40 zł za miesiąc</p>
                    <p class="card-text">Filmy w UltraHD!</p>
                    <a href="#" class="btn btn-primary stretched-link">Wybierz plan</a>
                </div>
            </div>

            */