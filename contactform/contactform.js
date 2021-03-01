jQuery(document).ready(function($) {
            "use strict";

            //Contact
            $('form.contactForm').submit(function(event) {
                        event.preventDefault();
                        var f = $(this).find('.form-group'),
                            ferror = false,
                            emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

                        f.children('input').each(function() { // run all inputs

                            var i = $(this); // current input
                            var rule = i.attr('data-rule');

                            if (rule !== undefined) {
                                var ierror = false; // error flag for current input
                                var pos = rule.indexOf(':', 0);
                                if (pos >= 0) {
                                    var exp = rule.substr(pos + 1, rule.length);
                                    rule = rule.substr(0, pos);
                                } else {
                                    rule = rule.substr(pos + 1, rule.length);
                                }

                                switch (rule) {
                                    case 'required':
                                        if (i.val() === '') {
                                            ferror = ierror = true;
                                        }
                                        break;

                                    case 'minlen':
                                        if (i.val().length < parseInt(exp)) {
                                            ferror = ierror = true;
                                        }
                                        break;

                                    case 'email':
                                        if (!emailExp.test(i.val())) {
                                            ferror = ierror = true;
                                        }
                                        break;

                                    case 'checked':
                                        if (!i.is(':checked')) {
                                            ferror = ierror = true;
                                        }
                                        break;

                                    case 'regexp':
                                        exp = new RegExp(exp);
                                        if (!exp.test(i.val())) {
                                            ferror = ierror = true;
                                        }
                                        break;
                                }
                                i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
                            }
                        });
                        f.children('textarea').each(function() { // run all inputs

                            var i = $(this); // current input
                            var rule = i.attr('data-rule');

                            if (rule !== undefined) {
                                var ierror = false; // error flag for current input
                                var pos = rule.indexOf(':', 0);
                                if (pos >= 0) {
                                    var exp = rule.substr(pos + 1, rule.length);
                                    rule = rule.substr(0, pos);
                                } else {
                                    rule = rule.substr(pos + 1, rule.length);
                                }

                                switch (rule) {
                                    case 'required':
                                        if (i.val() === '') {
                                            ferror = ierror = true;
                                        }
                                        break;

                                    case 'minlen':
                                        if (i.val().length < parseInt(exp)) {
                                            ferror = ierror = true;
                                        }
                                        break;
                                }
                                i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
                            }
                        });
                        if (ferror) return false;
                        else {
                            var str = $(this).serializeArray(); //.serialize();
                            var object = {};
                            jQuery.each(str, function(i, obj) {
                                object[obj.name] = obj.value;
                            });
                            $("#idProgress").addClass("show");
                        }
                        var action = $(this).attr('action');
                        if (!action) {
                            action = 'https://sender-mail-big-pink.herokuapp.com/sendmail';
                        }

                        const plantilla = `
      <body>
      <div align="center">
        ¡Hola! gracias por comunicarte con nosotros le daremos seguimiento a tu petición.
      </div>
      <div align="center">
        Que tengas un excelente día.
      </div>
      </body>
    `;

                        const plantilla2 = `
      <body>
      <div align="center">
        Esta persona se puso en contacto con nosotros
      </div>
      <hr>
      <div>
        <b> Nombre: </b> <br>
        ${object.name}
      </div>
      <div>
      <b> Email: </b> <br>
        ${object.email}
      </div>
      <div>
        ${
          object.phone ?
            (
                `<b>` + "Teléfono :" + `</b>`
                + `<br>` +
                object.phone
            )
            :
            (
                ""
            )
        }
      </div>
      <div>
      <b> Mensaje: </b> <br>
      ${object.message}
      </body>
    `;

    var settings = {
      async: true,
      crossDomain: true,
      url: action,
      type: "POST",
      headers: {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache"
      },
      dataUser: {          
          from: 'contacto.safety.a@gmail.com',
          emailPass: 'Safety2021.#',
          to: object.email, 
          message: plantilla,
          subject: 'contacto Safe-T',
      },
      dataAdmin: {          
        from: 'contacto.safety.a@gmail.com',
        emailPass: 'Safety2021.#',
        to: 'contacto.safety.a@gmail.com',
        message: plantilla2,
        subject: 'contacto Safe-T',
      }
    };

    $.ajax({
      type: "POST",
      async: true,
      crossDomain: true,
      url: action,
      data: settings.dataAdmin,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "cache-control": "no-cache"
      },
      success: function(msg) {
        if (msg.ok == true) {
          $.ajax({
            type: "POST",
            async: true,
            crossDomain: true,
            url: action,
            data: settings.dataUser,
            headers: {
              "content-type": "application/x-www-form-urlencoded",
              "cache-control": "no-cache"
            },
            success: function(msg) {
              if (msg.ok == true) {
                $("#sendmessage").addClass("show");
                $("#errormessage").removeClass("show");
                $("#idProgress").removeClass("show");
                document.getElementById("idContactForm").reset();
              }
            }, 
            error: function(error){
              $("#sendmessage").removeClass("show");
              $("#idProgress").removeClass("show");
              $("#errormessage").addClass("show");
            }
          });          
        }
      }, 
      error: function(error){
        $("#sendmessage").removeClass("show");
        $("#idProgress").removeClass("show");
        $("#errormessage").addClass("show");
      }
    });
    
  
    return false;
  });

});