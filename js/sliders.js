$(document).on('ready', function() {
    $(".vertical-center-todos").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      mobileFirst:true,
    });

    $(".vertical-center-hidraulico").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      mobileFirst:true,
    });

    $(".vertical-center-supresion").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      mobileFirst:true,
    });

    $(".vertical-center-alarma").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      mobileFirst:true,
    });

    $(".vertical-center-iluminacion").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      mobileFirst:true,
    });

    $(".vertical-center-video").slick({
      dots: true,
      vertical: true,
      centerMode: true,
      mobileFirst:true,
    });

    hidraulico(event);

    var textoSupresion = '<p>Sistemas y agentes de supresión</p>'+
    'Para la protección de riesgos específicos se utilizan los sistemas de '+
    'supresión. Generalmente se componen de elementos que detectan el inicio del incendio, y elementos '+
    'que almacenan el agente de supresión y lo expulsan a través de boquillas para controlar un fuego '+
    'en su etapa inicial.<br>'+
    'Según el tipo de riesgo será el sistema y agente de supresión que eligirá. Se debe observar el '+
    'combustible, las fuentes de ignición, las fuentes de calor, si el equipo a proteger es delicado '+
    'o costoso, las temperaturas de operación, entre otros.';
    document.getElementById("text-supresion").innerHTML = textoSupresion;
    //document.getElementById("text-supresion2").innerHTML = textoSupresion;
    document.getElementById("text-supresionTodos").innerHTML = textoSupresion;

    var textoAlarma = '<p>Alarmas y estrobos</p> '+
        'El sistema de detección y alarma busca como prioridad notificas a las ocupantes de la presencia '+
        'de un incendio o emergencia de otro tipo. Para este fin puede utilizar principalmente sirenas '+
        'de audio, luces estrobocópicas, voceo grabado o  en vivo, así como otros medios de notificación '+
        'masiva. <br>'+
        'La detección bucará tener las señales iniciales de un incendio lo más pronto posible para '+
        'poder actuar a tiempo. En la mayoría de incendios, el humo es el primer elemento a detectar '+
        'en una etapatemprana; sin embargo por las condiciones de las áreas o de los riesgos deberán '+
        'utilizarse otro tipo de principios de detección como el calor, flama, monóxido de carbono (CO),'+
        'mezclas de gases combustibles,  gases tóxicos o combinaciones de éstos.<br><br>'+
        'Los sistemas de detección y alarma llevan un tablero de control que decide las funciones del '+
        'sistema, y tiene monitoreados en caso de alarma o falla a todos los dispositivos. Los tableros '+
        'existen desde muy pequenños de tipo convencional o de zonas, hasta sistemas inteligentes/direccionables '+
        'con distintas capacidades de expansión, con voceo, e inclusive con opción de tener varios tableros '+
        'en red monitoreados por una central gráfica.';
    document.getElementById("text-alarma").innerHTML = textoAlarma;
    //document.getElementById("text-alarma2").innerHTML = textoAlarma;
    document.getElementById("text-alarmaTodos").innerHTML = textoAlarma;

    var textoIluminacion = '<p>Iluminación y Video vigilancia</p> '+
        'Ofrecemos tranquilidad, comodidad y seguridad a través de asesorías personalizadas en soluciones '+
        'de calidad de seguridad electrónica; enfocadas a personas preocupandas por la protección de sus '+
        'hogares y negocios.';
    document.getElementById("text-iluminacion").innerHTML = textoIluminacion;
    document.getElementById("text-iluminacionTodos").innerHTML = textoIluminacion;

    var textoVideo = '<p>Iluminación y Video vigilancia</p> '+
        'Ofrecemos tranquilidad, comodidad y seguridad a través de asesorías personalizadas en soluciones '+
        'de calidad de seguridad electrónica; enfocadas a personas preocupandas por la protección de sus '+
        'hogares y negocios.';
    document.getElementById("text-video").innerHTML = textoVideo;
    document.getElementById("text-video2").innerHTML = textoVideo;
    document.getElementById("text-video3").innerHTML = textoVideo;
    document.getElementById("text-videoTodos").innerHTML = textoVideo;
    
    var textoHidraulico = '<p>Sistemas hidráulicos</p> '+
        'Los sistemas hidráulicos contra incendio tienen muy distintos alcances. Requerimientos minimos '+
        'de un sistema hidráulico contra indendio: <br><br>'+
        '<ul class="txtSliders"> '+
            '<li>Almacenamiento de agua;</li> '+
            '<li>Medio de proporcionar flujo y presión al agua, que generalmente es el sistema de '+
            'bombas contra incendio;</li> '+
            '<li>La red de tuberías hidráulica, que llevara el agua hasta los distintos riesgos, '+
            'y los medios de descarga hacia el riesgo protegido.</li> '+
        '</ul><br>'+
        'El diseño de estos sistemas se hace mediante una ingeniería de detalle, debiendo seguir uno '+
        'o más de las normativas, ya sea locales/nacionales como la NOM-002-STP, o internacionales '+
        'como NFPA y requerimientos específicos de las aseguradoras. <br>'+
        'La descarga del agua hacia el fuego puede ser manual, mediante el uso de mangueras o monitores; '+
        'o puede ser automática con el uso de rociadores, sistemas de diluvio o monitores automáticos. <br>' +
        'Ofrecemos: <br><br>'+
        '<ul class="txtSliders"> '+
            '<li>Ingeniería dedetalle</li> '+
            '<li>Instalación</li> '+
            '<li>Mantenimiento preventivo y correctivo, de acuerdo a NFPA 25</li> '+
            '<li>Suministro de equipo</li> '+
        '</ul>';
    document.getElementById("text-hidraulico").innerHTML = textoHidraulico;
    document.getElementById("text-hidraulicoTodos").innerHTML = textoHidraulico;
});

function alarma(event) {
    event.preventDefault();
    $("#content-supresion").removeClass("show");
    $("#content-iluminacion").removeClass("show");
    $("#content-video").removeClass("show");
    $("#content-hidraulico").removeClass("show");
    $("#content-todos").removeClass("show");

    $("#content-alarma").addClass("show");     
    $('.vertical-center-alarma')[0].slick.refresh();
    
}

function supresion(event){
    event.preventDefault();
    $("#content-alarma").removeClass("show");
    $("#content-iluminacion").removeClass("show");
    $("#content-video").removeClass("show");
    $("#content-hidraulico").removeClass("show");
    $("#content-todos").removeClass("show");

    $("#content-supresion").addClass("show");        
    $('.vertical-center-supresion')[0].slick.refresh();      
}

function iluminacion(event) {
    event.preventDefault();
    $("#content-supresion").removeClass("show");
    $("#content-alarma").removeClass("show");
    $("#content-video").removeClass("show");
    $("#content-hidraulico").removeClass("show");
    $("#content-todos").removeClass("show");

    $("#content-iluminacion").addClass("show");     
    $('.vertical-center-iluminacion')[0].slick.refresh();
}

function video(event) {
    event.preventDefault();
    $("#content-supresion").removeClass("show");
    $("#content-alarma").removeClass("show");
    $("#content-iluminacion").removeClass("show");
    $("#content-hidraulico").removeClass("show");
    $("#content-todos").removeClass("show");

    $("#content-video").addClass("show");     
    $('.vertical-center-video')[0].slick.refresh();
}

function hidraulico(event) {
    event.preventDefault();
    $("#content-supresion").removeClass("show");
    $("#content-alarma").removeClass("show");
    $("#content-iluminacion").removeClass("show");
    $("#content-video").removeClass("show");
    $("#content-todos").removeClass("show");

    $("#content-hidraulico").addClass("show");     
    $('.vertical-center-hidraulico')[0].slick.refresh();
}

function todos(event) {
    event.preventDefault();
    $("#content-supresion").removeClass("show");
    $("#content-alarma").removeClass("show");
    $("#content-iluminacion").removeClass("show");
    $("#content-video").removeClass("show");
    $("#content-hidraulico").removeClass("show");

    $("#content-todos").addClass("show");     
    $('.vertical-center-todos')[0].slick.refresh();
}

  
$("#alarma-selected").on('click', function(event) {
    event.preventDefault();
    alarma(event);
});

$("#supresion-selected").on('click', function(event) {
    event.preventDefault();
    supresion(event);
});

$("#iluminacion-selected").on('click', function(event) {
    event.preventDefault();
    iluminacion(event);
});

$("#video-selected").on('click', function(event) {
    event.preventDefault();
    video(event);
});

$("#hidraulico-selected").on('click', function(event) {
    event.preventDefault();
    hidraulico(event);
});

$("#todos-selected").on('click', function(event) {
    event.preventDefault();
    todos(event);
});

function fromMenuServices(opcion, event){
    event.preventDefault();
    console.log(opcion);
    if(opcion == 'alarma') {
        alarma(event);
    } else 
    if(opcion == 'supresion') {
        supresion(event);
    } else 
    if(opcion == 'iluminacion') {
        iluminacion(event);
    } else 
    if(opcion == 'video') {
        video(event);
    } else 
    if(opcion == 'hidraulico') {
        hidraulico(event);
    } else 
    if(opcion == 'todos') {
        todos(event);
    } 
}


  

  $(window).on("resize", function() { 
    $('.vertical-center-todos')[0].slick.refresh();
    $('.vertical-center-hidraulico')[0].slick.refresh();
    $('.vertical-center-supresion')[0].slick.refresh();
    $('.vertical-center-alarma')[0].slick.refresh();
    $('.vertical-center-iluminacion')[0].slick.refresh();
    $('.vertical-center-video')[0].slick.refresh();                
  });



