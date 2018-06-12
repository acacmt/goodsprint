$(document).ready(function () {
    //Printer 1
    $("#more").parent().on("click", "#more", function () {
        $("#more").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'> <b style='font-size: 18px'> Funções</b>  </i><hr><b>Funções</b><p>Impressão, cópia, digitalização, fax, fotos</p><b>Admite multitarefas</b><p>Não</p></li>");
        $("#more").attr("id", "less");
    });
    $("#more").parent().on("click", "#less", function () {
        $("#less").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'> <b style='font-size: 18px'> Funções</b>  </i></li>");
        $("#less").attr("id", "more");
    });

    $("#more1").parent().on("click", "#more1", function () {
        $("#more1").html("<li data-toggle='collapse'data-target='#demo1'><i class='fas fa-minus-square'> <b style='font-size: 18px'> Especificações para impressão</b></i><hr><b>Velocidade de impressão (preto e branco):</b><p>ISO: Até 9,5 ppm</p><p>Rascunho: Até 20 ppm</p><b>Velocidade de impressão (cor):</b><p>ISO:Até 6,8 ppm</p><p>Rascunho:Até 16 ppm</p><b>Ciclo de trabalho (mensal, A4)</b><p>Até 1200 páginas</p><b>Volume mensal de páginas recomendado</b><p>100 a 300</p><b>Tecnologia de impressão</b><p>Jato de Tinta Térmico HP</p><b>Drivers da impressora incluídos</b><p>HP PCL 3 GUI</p><b>Qualidade de impressão (melhor)</b><p>Cor: Até 4800 x 1200 dpi otimizados em cores (ao imprimir de um computador em papéis fotográficos selecionados HP e 1200 dpi de entrada)</p><p>Preto e branco: Até 1200 x 1200 dpi renderizados (se imprimir a partir de um computador)</p><b>Monitor</b><p>LCD mono alta resolução de 5,5 cm (2,2')</p><b>Velocidade do processador</b><p>360 MHz</p><b>Número de cartuchos de impressão</b><p>2 (1 preto, 1 tricolor [ciano, magenta, amarelo])</p><b>Idiomas de impressão</b><p>HP PCL 3 GUI</p><b>Sensor automático de papel</b><p>Sim</p><b>Cartuchos de reposição</b><p>F6V29AB - cartucho de tinta preto original HP 664 Advantage (~120 páginas)</p><p>F6V28AB - Cartucho de tinta colorido original HP 664 Advantage (~100 páginas)</p><p>F6V31AB - Cartucho original de tinta preto de alto rendimento HP 664XL Advantage (~480 páginas)</p><p>F6V30AB - Cartucho original de tinta colorido de alto rendimento HP 664XL Advantage (~330 páginas)</p></li>");
        $("#more1").attr("id", "less1");
    });
    $("#more1").parent().on("click", "#less1", function () {
        $("#less1").html("<li data-toggle='collapse'data-target='#demo1'><i class='fas fa-plus-square'> <b style='font-size: 18px'> Especificações para impressão</b></i></li>");
        $("#less1").attr("id", "more1");
    });

    $("#more2").parent().on("click", "#more2", function () {
        $("#more2").html("<li data-toggle='collapse'data-target='#demo2'><i class='fas fa-minus-square'> <b style='font-size: 18px'> Conectividade</b></i><hr><b>Capacidade sem fios</b><p>Sim, Wi-Fi 802.11 b/g/n incorporada</p><b>Conectividade, padrão</b><p>1 USB 2.0 de alta velocidade</p><p>1 WiFi 802.11n</p> <b>Conectividade, padrão</b><p>Windows 8.1, 8, 7: 32 bits ou 64 bits, 2 GB de espaço disponível em disco rígido, unidade de CD-ROM/DVD ou conexão com a Internet, porta USB, Internet Explorer. Windows Vista: 2 GB de espaço disponível em disco rígido, unidade de CD-ROM/DVD ou conexão com a Internet, porta USB, Internet Explorer 8. Windows XP SP3 ou superior (somente 32 bits): qualquer processador Intel Pentium II, Celeron ou compatível com 233 MHz, 850 MB de espaço disponível em disco rígido, unidade de CD-ROM/DVD ou conexão com a Internet, porta USB, Internet Explorer 8</p><br><p>Apple® OS X Yosemite (v10.10) OS X Mavericks (v10.9), OS X Mountain Lion (v10.8)</p><p>HD 1 GB</p><p>Necessário acesso à Internet</p><p>USB</p><b>Sistemas operacionais compatíveis</b><p>Windows 8.1, Windows 8, Windows 7, Windows Vista, Windows XP SP3 (32 bits) OS X v10.8 Mountain Lion, OS X v10.9 Mavericks, OS X v10.10 Yosemite</p></li>");
        $("#more2").attr("id", "less2");
    });
    $("#more2").parent().on("click", "#less2", function () {
        $("#less2").html("<li data-toggle='collapse'data-target='#demo2'><i class='fas fa-plus-square'> <b style='font-size: 18px'> Conectividade</b></i></li>");
        $("#less2").attr("id", "more2");
    });

    //Printer 2
    $("#more4").parent().on("click", "#more4", function () {
        $("#more4").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'><b style='font-size: 18px'> Funções</b></i><hr><b>Funções</b><p>Impressão, cópia, digitalização, sem fios e fax</p><b>Suporte multitarefa</b><p>Não</p></li>");
        $("#more4").attr("id", "less4");
    });
    $("#more4").parent().on("click", "#less4", function () {
        $("#less4").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'><b style='font-size: 18px'> Funções</b></i></li>");
        $("#less4").attr("id", "more4");
    });

    $("#more5").parent().on("click", "#more5", function () {
        $("#more5").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'><b style='font-size: 18px'> Especificações para impressão</b></i><hr><b>Velocidade de impressão a preto:</b><p>ISO: Até 8,5 ppm</p><p>Rascunho: Até 20 ppm</p><b>Velocidade de impressão a cores:</b><p>ISO:Até 6 ppm</p><p>Rascunho:Até 16 ppm</p><b>Saída da primeira página (pronta)</b><p>Preto: Em apenas 14 seg.</p><p>Cor: Em apenas 17 seg.</p><b>Ciclo de produtividade (mensal, A4)</b><p>Até 1000 páginas</p><b>Volume mensal de páginas recomendado</b><p>100 a 250</p><b>Tecnologia de impressão</b><p>Jacto de Tinta Térmico HP</p><b>Controladores da impressora incluídos</b><p>HP PCL 3 GUI</p><b>Qualidade de impressão (superior)</b><p>Cor: Até 4800 x 1200 ppp optimizados a cor (ao imprimir de um computador em papéis fotográficos HP e 1200 ppp de entrada seleccionados)</p><p>Preto: Até 1200 x 1200 ppp prestados</p><b>Ecrã</b><p>Ecrã tátil monocromático de 5,5 cm (2,2 pol.)</p><b>Velocidade do processador</b><p>180 MHz</p><b>Número de tinteiros</b><p>2 (1 preto e 1 tricolor)</p><b>Linguagens de impressão</b><p>HP PCL 3 GUI; PCLm (HP Apps/UPD); URF (AirPrint)</p><b>Sensor automático de papel</b><p>Sim</p></li>");
        $("#more5").attr("id", "less5");
    });
    $("#more5").parent().on("click", "#less5", function () {
        $("#less5").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'><b style='font-size: 18px'> Especificações para impressão</b></i></li>");
        $("#less5").attr("id", "more5");
    });

    $("#more6").parent().on("click", "#more6", function () {
        $("#more6").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'><b style='font-size: 18px'> Conectividade</b></i><hr> <b>Capacidade sem fios</b><p>Sim, Wi-Fi 802.11b/g/n incorporado</p><b>Conectividade, padrão</b><p>1 porta USB 2.0 de alta velocidade</p><b>Requisitos mínimos do sistema</b><p>Windows 10, 8.1, 8, 7: Processador de 1 GHz de 32 bits (x86) ou 64 bits (x64), 2 GB de espaço disponível em disco rígido, unidade de CD-ROM/DVD ou ligação à Internet, porta USB, Internet Explorer</p><p>Windows Vista: Processador de 800 MHz de 32 bits (x86) ou 64 bits (x64), 2 GB de espaço disponível em disco rígido, unidade de CD-ROM/DVD ou ligação à Internet, porta USB, Internet Explorer 8</p><p>OS X v10.8 Mountain Lion, OS X v10.9 Mavericks, OS X v10.10 Yosemite</p><p>1 GB de espaço disponível no disco rígido</p><p>Internet</p><p>USB</p><b>Sistemas operativos compatíveis</b><p>Windows 10, Windows 8.1, Windows 8, Windows 7</p><p>Mac OS X v10.8 Mountain Lion, OS X v10.9 Mavericks, OS X v10.10 Yosemite</p></li>");
        $("#more6").attr("id", "less6");
    });
    $("#more6").parent().on("click", "#less6", function () {
        $("#less6").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'><b style='font-size: 18px'> Conectividade</b></i></li>");
        $("#less6").attr("id", "more6");
    });


    //Printer 3
    $("#more7").parent().on("click", "#more7", function () {
        $("#more7").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'> <b style='font-size: 18px'> Especificações gerais</b></i><hr><b>Sistemas operacionais:</b><p>Windows® XP/XP Professional x64 Edition/VistaTM/7/8/8.1/10 Mac® OS X 10.6.8, 10.7.x, 10.8.x, 10.9.x, 10.10.x, 10.11x</p><b>Requisitos de sistema:</b><p>512 MB RAM (1GB recomendado)</p><p>Monitor SVGA de pelo menos 256 cores</p><p>550 MB de espaço em disco (1 GB recomendado)</p><p>Conexão USB (cabo incluso)</p><p>Unidade de CD-ROM ou DVD-ROM</p><b>Dimensões</b><p>44,5 x 30,4 x 16,9 cm (17,5' x 12,0' x 6,7')</p><b>Peso</b><p>4,9 kg (10.8 lb)</p><b>Visor de LCD</b><p>1,44' LCD TFT colorido</p></li>");
        $("#more7").attr("id", "less7");
    });
    $("#more7").parent().on("click", "#less7", function () {
        $("#less7").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'><b style='font-size: 18px'> Especificações gerais</b></i></li>");
        $("#less7").attr("id", "more7");
    });

    $("#more8").parent().on("click", "#more8", function () {
        $("#more8").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'><b style='font-size: 18px'> Especificações para impressão</b></i><hr><b>Tecnologia de impressão:</b><p>Tecnologia de jato de tinta MicroPiezo® de 4 cores (CMYK)</p><b>Tamanho mínimo de gotícula de tinta:</b><p> 3 picolitrosResolução máxima de impressão:Até 5760 x 1440 dpi de resolução otimizada em vários tipos de papel</p><b>Velocidade de impressão:</b><p>Máxima: Preto 33 ppm / em cores 15 ppm </p><p>Normal: Preto 10 ppm / em cores 5 ppm 8</p></li>");
        $("#more8").attr("id", "less8");
    });
    $("#more8").parent().on("click", "#less8", function () {
        $("#less8").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'><b style='font-size: 18px'> Especificações para impressão</b></i></li>");
        $("#less8").attr("id", "more8");
    });

    $("#more9").parent().on("click", "#more9", function () {
        $("#more9").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-minus-square'> <b style='font-size: 18px'> Conectividade</b></i><hr><b>Conectividade padrão:</b><p>USB 2.0 de Alta velocidade (compatível com USB 1.1), Wi-Fi (802.11 b/g/n) e Wi-Fi Direct</p><b>Cartões de memória suportados:</b><p>SDTM, SDHC, SDXC, MiniSD (com adaptador), MiniSDHC (com adaptador),MicroSD (com adaptador), MicroSDHC (com adaptador), MicroSDXC (com adaptador)</p></li>");
        $("#more9").attr("id", "less9");
    });
    $("#more9").parent().on("click", "#less9", function () {
        $("#less9").html("<li data-toggle='collapse'data-target='#demo'><i class='fas fa-plus-square'> <b style='font-size: 18px'> Conectividade</b></i></li>");
        $("#less9").attr("id", "more9");
    });
});



(function ($) {
    "use strict"
    //Preloader
    $(window).on('load', function () {
        $("#preloader").delay(600).fadeOut();
    })

    //Scrollspy
    $('body').scrollspy({
        target: '#nav',
        offset: $(window).height() / 2
    })

    //Smooth scroll
    $("#nav .main-nav a [href^='#']").on('click', function (e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 600);
    });

    $('#back-to-top').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
    })

    //Btn nav collapse
    $('#nav .nav-collapse').on('click', function () {
        $('#nav').toggleClass('open');
    });

    //Mobile dropdown
    $('.has-dropdown a').on('click', function () {
        $(this).parent().toggleClass('open-drop');
    });

    //On Scroll
    $(window).on('scroll', function () {
        var wScroll = $(this).scrollTop();

        //Fixed nav
        wScroll > 1 ? $('#nav').addClass('fixed-nav') : $('#nav').removeClass('fixed-nav');

        //Back to top appear
        wScroll > 700 ? $('#back-to-top').fadeIn() : $('#back-to-top').fadeOut();
    });

    //magnificPopup
    $('.work').magnificPopup({
        delegate: '.lightbox',
        type: 'image'
    });

    //Owl Carousel
    $('#about-slider').owlCarousel({
        items: 1,
        loop: true,
        margin: 15,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: true,
        animateOut: 'fadeOut'
    });
})(jQuery);