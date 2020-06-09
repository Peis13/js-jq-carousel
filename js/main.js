// Scrivere la funzionalità in JQuery che permette allo slider di funzionare

$(document).ready(
  function() {

    // Associo i tasti 'prev' e 'next' a delle variabili
    var prev = $('.prev');
    var next = $('.next');

    // Al click di uno dei due tasti genero un evento che mi farà navigare nello slider
    // PREV: mostra l'immagine precedente
    //  --> togliere la classe 'active' all'immagine/cerchio corrente
    //  --> e assegnarla all'elemento precedente
    prev.click(
      function() {

        // Img
        var imgCorrente = $('.images > img.active');
        var imgPrev = imgCorrente.prev('img');

        // Cerchio
        var cerchioCorrente = $('.nav > i.active');
        var cerchioPrev = cerchioCorrente.prev('i');

        // Rimuovo le classi 'active' dagli elementi correnti
        imgCorrente.removeClass('active');
        cerchioCorrente.removeClass('active');

        // Aggiungo le classi 'active' agli elementi precedenti
        // se l'immagine corrente ha classe 'first',
        // allora l'immagine precedente diventa quella con classe 'last'
        // e aggiungo la classe 'active' all'immagine precedente
        if (imgCorrente.hasClass('first')) {

          // riassegno i valori corretti alle variabili
          imgPrev = $('.images > img.last');
          cerchioPrev = $('.nav > i.last');

          // assegno le classi 'active'
          imgPrev.addClass('active');
          cerchioPrev.addClass('active');

          // altrimenti aggiungo semplicemente la classe 'active' all'immagine precedente
        } else {

          imgPrev.addClass('active');
          cerchioPrev.addClass('active');
        }
      }
    )

    // NEXT: mostra l'immagine successiva
    //  --> togliere la classe 'active' all'immagine/cerchio corrente
    //  --> e assegnarla all'elemento successivo
    next.click(
      function() {

        // Img
        var imgCorrente = $('.images > img.active');
        var imgNext = imgCorrente.next('img');

        // Cerchio
        var cerchioCorrente = $('.nav > i.active');
        var cerchioNext = cerchioCorrente.next('i');

        // Rimuovo le classi 'active' dagli elementi correnti
        imgCorrente.removeClass('active');
        cerchioCorrente.removeClass('active');

        // Aggiungo le classi 'active' agli elementi successivi
        // se l'immagine corrente ha classe 'last',
        // allora l'immagine successiva diventa quella con classe 'first'
        // e aggiungo la classe 'active' all'immagine successiva
        if (imgCorrente.hasClass('last')) {

          // riassegno i valori corretti alle variabili
          imgNext = $('.images > img.first');
          cerchioNext = $('.nav > i.first');

          // assegno le classi 'active'
          imgNext.addClass('active');
          cerchioNext.addClass('active');

          // altrimenti aggiungo semplicemente la classe 'active' all'immagine successiva
        } else {

          imgNext.addClass('active');
          cerchioNext.addClass('active');
        }
      }
    )
  }
);
