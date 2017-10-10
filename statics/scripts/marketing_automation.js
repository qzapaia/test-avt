var MarketingAutomation = {
    debug: false,
    endPointUrl: null,
    endPoint: {
        getToken: "/authenticate",
        subscribe: "/subscribe",
        updateContact: "/contact"
    },
    cookie: {
        sessionName: 'avt_marketing_automation_session',
        sessionTTL: 365, // Dias
        tokenName: 'avt_marketing_automation_token',
        tokenTTL: 1 // Dias
    },
    collector: [], // Agrega un row
    rowCollector: {}, // Junta varios fields para luego hacer un push y agregarlos a un row
    deName: null,
    session: null,
    sessionStatus: null,
    token: null,
    businessUnit: null,
    channel: "desktop", // Por defecto es desktop
    sessionPath: ".avantrip.com",
    // Tenemos el problema de que no son urls de test/prod, sino que el entorno esta dado por el nombre de las
    // data extensions. De ahi que si la url es la de prod (hardcodeado) usa las data ex. de prod, sino de test
    // TODO: Ver de mejorar esto haciendo que el componente agregue TEST a las data extensions cuando no es productivo.
    deTestMapping: {
        "addtocart" : "TEST Eventos Add To Cart Vuelos",
        "searchbox" : "TEST Eventos Busqueda Vuelos",
        "checkout" : "TEST Eventos Checkout Vuelos",
        "error" : "TEST Eventos Error en Compra Vuelos",
        "results" : "TEST Eventos Resultados Vuelos",
        "email": "TEST DE_Mails",
        "channel": "TEST Vuelos DE_Canal",
        "user_suscribe": "AVT - Todos los Contactos - Test"
    },
    deProdMapping: {
        "addtocart" : "Vuelos Eventos Add To Cart",
        "searchbox" : "Vuelos Eventos Busqueda",
        "checkout" : "Vuelos Eventos Checkout",
        "error" : "Vuelos Eventos Error en Compra",
        "results" : "Vuelos Eventos Resultados",
        "email": "Vuelos DE_Mails",
        "channel": "Vuelos DE_Canal",
        "user_suscribe": "AVT - Todos los Contactos"
    }
};

(function($, m) {

    m.init = function(options) {
        $.extend(m, options); // Obtengo configuraciones
        ($.cookie(m.cookie.sessionName) == null) ? m.getSession() : m.session = $.cookie(m.cookie.sessionName); // Obtiene sesion
        ($.cookie(m.cookie.tokenName) == null) ? m.getToken() : m.token = $.cookie(m.cookie.tokenName); // Obtiene token

        if($.isFunction($.fn.on)) m.events(); // Escucha eventos
        if(m.sessionStatus == "NEW") {
            m.alive("MarketingAutomation.token != null", "MarketingAutomation.channelRegister()");
        }

        m.urlSubscribe = m.endPointUrl + m.endPoint.subscribe;
        m.urlUpdateContact = m.endPointUrl + m.endPoint.updateContact;
    };

    /**
     * Activa o desactiva
     */
    m.log = function(text, element) {
        if(m.debug) {
            console.log("* MAM: "+text+":");
            console.log(element);
        }
    };

    /**
     * Guarda el row en el collector y crea un nuevo row vacio.
     */
    /*m.push = function(data) {
        data.session_id = m.session;
        data.timestamp = m.getDate();
        data.de_type = m.deName;

        var dataStructure = {};

        if(m.endPointUrl == "https://api.avantrip.com/mkt-auto-api/v1" ||
            m.endPointUrl == "http://api.avantrip.com/mkt-auto-api/v1") {
            if(m.deProdMapping[m.deName] != undefined) {
                dataStructure.name = m.deProdMapping[m.deName];
            } else {
                dataStructure.name = m.deName;
            }
        } else {
            if(m.deTestMapping[m.deName] != undefined) {
                dataStructure.name = m.deTestMapping[m.deName];
            } else {
                dataStructure.name = m.deName;
            }
        }

        dataStructure.dataRow = data;

        m.collector.push(dataStructure);

        m.rowCollector = {};
    };*/

    m.push = function(data) {
        m.collector.push(data);
        m.rowCollector = {};
    };

    /**
     * Pushea lo que este en el rowCollector bajo el nombre de Data Extension
     * indicado y lo limpia
     */
    m.pushAll = function() {
        m.log("Pushee estos rows", m.rowCollector);
        if(!m.isEmptyJson(m.rowCollector)) {
            m.push(m.rowCollector);
        }
    };

    /**
     * Agrega un conjunto clave - valor al row
     */
    m.addOne = function(field, value) {
        m.log("Agregue al rowCollector", [field, value]);
        m.rowCollector[field] = value;
    };

    /**
     * Es el nombre de la Data Extension. No puede ser reestrito ya que representa una seccion
     * de la pagina (según como fue modelado por marketing).
     */
    m.addName = function(value) {
        m.log("El nombre de esta Data Extension sera", value);
        if(m.deName == null) {
            m.deName = value;
        }
    };

    /**
     * Joinea un objeto json al row
     */
    m.add = function(object) {
        m.log("Agrego al rowCollector este JSON", object);
        $.extend(m.rowCollector, object);
    };

    /**
     * Borra un elemento del objeto
     */
    m.remove = function(field) {
        m.log("Removi este field del rowCollector", field);
        delete m.rowCollector[field];
    };

    /**
     * Envia al endpoint y limpia el collector
     * No esperar ningun estado, enviar y seguir
     */
    m.send = function(url) {

        m.log("Enviado al endpoint", JSON.stringify(m.collector));

        var options = {
            contentType: 'application/json',
            headers: {
                'Authorization': 'Bearer ' + m.token
            },
            url: url,
            data: JSON.stringify(m.collector),
        };

        if(m.compareVersions(jQuery.fn.jquery, "1.9.0")) {
            options.method = (url==m.urlUpdateContact)?"PUT":"POST";
        } else {
            options.type = (url==m.urlUpdateContact)?"PUT":"POST";
        }

        $.ajax(options);

        m.collector= [];
    };

    m.subscribe = function() {
        m.send(m.urlSubscribe);
    };

    m.updateContact = function() {
        m.send(m.urlUpdateContact);
    };

    /**
     * Si se cumple la expresion, dispara el callback y deja de escuchar
     * @string expression
     * @string callback
     */
    m.alive = function(expression, callback) {
        var listener = setInterval(function() {
            if(eval(expression)) {
                eval(callback);
                clearInterval(listener);
            }
        }, 2000);
    };

    /**
     * Registra el canal al crear una nueva sesion
     */
    m.channelRegister = function() {
        if(MarketingAutomation.deName != null) aux = MarketingAutomation.deName;
        m.deName = "channel";
        m.addOne("channel", m.channel);
        m.push(MarketingAutomation.rowCollector);
        m.send();
        if(aux != undefined) {
            MarketingAutomation.deName = aux;
        } else {
            MarketingAutomation.deName = null;
        }
    };

    /**
     * Para añadir datos al rowCollector a partir de eventos. Si el evento es
     * disparado analiza los data-mam-x para ver que hacer.
     */
    m.events = function() {

        $(".mam-refresh").on("click", function() {
            m.refresh();
        });

        /**
         * Send events
         * Estos eventos envian el o los rows recolectados en collector y limpian el collector
         */

        /*$(".mam-send-click").on("click", function() {
            m.send();
        });

        $(".mam-send-change").on("change", function() {
            m.send();
        });*/

        /**
         * Push events
         * Estos eventos recolectan un row con los datos de rowCollector y luego limpian el rowCollector
         */
        $(".mam-push-click").on("click", function() {
            if($(this).data("mam-field")) {
                m.addOne($(this).data("mam-field"), $(this).val());
            } else if($(this).data("mam-data")) {
                m.add($(this).data("mam-data"));
            } else {
                m.log("No hay definidos datafields correspondientes en: "+ $(this).attr("name"));
            }
            m.push(m.rowCollector);
        });

        $(".mam-push-blur").on("blur", function() {
            m.addOne($(this).data("mam-field"), $(this).val());
            m.push(m.rowCollector);
        });

        $(".mam-push-change").on("change", function() {
            if($(this).data("mam-field")) {
                m.addOne($(this).data("mam-field"), $(this).val());
                m.push(m.rowCollector);
            } else if($(this).data("mam-data")) {
                m.add($(this).data("mam-data"));
                m.push(m.rowCollector);
            } else {
                m.log("No hay definidos datafields correspondientes en: "+ $(this).attr("name"));
            }
        });

        /**
         * Add events
         * Estos eventos agregan fields al rowCollector
         */
        $(".mam-add-blur").on("blur", function() {
            if($(this).data("mam-field")) {
                m.addOne($(this).data("mam-field"), $(this).val());
            } else if($(this).data("mam-data")) {
                m.add($(this).data("mam-data"));
            } else {
                m.log("No hay definidos datafields correspondientes en: "+ $(this).attr("name"));
            }
        });

        $(".mam-add-click").on("click", function() {
            if($(this).data("mam-field")) {
                m.addOne($(this).data("mam-field"), $(this).val());
            } else if($(this).data("mam-data")) {
                m.add($(this).data("mam-data"));
            } else {
                m.log("No hay definidos datafields correspondientes en: "+ $(this).attr("name"));
            }
        });

        // Al hacer change, si tiene la clase mam-add-change interpreta campos data
        $(".mam-add-change").on("change", function() {
            if($(this).data("mam-field")) {
                m.addOne($(this).data("mam-field"), $(this).val());
            } else if($(this).data("mam-data")) {
                m.add($(this).data("mam-data"));
            } else {
                m.log("No hay definidos datafields correspondientes en: "+ $(this).attr("name"));
            }
        });

        $(".mam-add-checked").on("click", function() {
            if($(this).data("mam-field")) {
                if($(this).is(':checked')) {
                    m.addOne($(this).data("mam-field"), true);
                } else {
                    m.addOne($(this).data("mam-field"), false);
                }
            } else {
                m.log("No hay definidos datafields correspondientes en: "+ $(this).attr("name"));
            }
        });
    };

    /**
     * Si el dom se renueva, por ejemplo a partir de un ajax, es posible volver a refrescar
     * los eventos disparando este metodo.
     */
    m.refresh = function() {
        m.log("Refresque los eventos");
        m.events();
    };

    m.isEmptyJson = function(obj) {
        for(var i in obj) { return false; }
        return true;
    };

    m.getUrl = function() {
        return $(location).attr('href');
    };

    m.getDate = function() {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();
        var hh = today.getHours()
        var MM = today.getMinutes()
        var ss = "00";

        if(dd<10) dd='0'+dd;
        if(mm<10) mm='0'+mm;
        if(MM<10) MM='0'+MM;
        if(hh<10) hh='0'+hh;

        today = yyyy+'-'+mm+'-'+dd+' '+hh+':'+MM+':'+ss;
        return today;
    };

    /**
     * ExactTarget espera formato yyyy-mm-dd
     */
    m.convertDateToEnglishNotation = function(date) {
        if(date.indexOf("-") != -1) var data = date.split("-");
        if(date.indexOf("/") != -1) var data = date.split("/");
        return data[2]+"-"+data[1]+"-"+data[0];
    };

    m.createRandomId = function(num) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for(var i=1 ; i<num ; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    m.getSession = function() {
        m.log("Cree una nueva sesion ya que no habia ninguna");
        m.session = m.createRandomId(32);
        m.sessionStatus = "NEW";
        $.cookie(m.cookie.sessionName, m.session, { expires: m.cookie.sessionTTL, path: '/', domain: m.sessionPath });
    };

    m.getToken = function() {
        if(m.businessUnit == null) {
            m.log("Falta indicar la vertical para obtener el token");
            return;
        }
        var urlAndUri = m.endPointUrl + m.endPoint.getToken;
        $.post(urlAndUri, {
            "client": m.businessUnit
        }).done(function(data) {
            m.log("Token negociado con el endpoint");
            if(data.token == undefined) {
                m.log("El endpoint no retorno el token");
            }
            m.token = data.token;
            $.cookie(m.cookie.tokenName, m.token, { expires: m.cookie.tokenTTL, path: '/', domain: m.sessionPath });
        }).fail(function(data) {
            m.log("Error al obtener token para marketing automation: " + data.status);
        });
    };

    m.compareVersions = function(a, b) {
        if (a === b) {
           return true;
        }
        var a_components = a.split(".");
        var b_components = b.split(".");
        var len = Math.min(a_components.length, b_components.length);
        for (var i = 0; i < len; i++) {
            if (parseInt(a_components[i]) > parseInt(b_components[i])) {
                return true;
            }
            if (parseInt(a_components[i]) < parseInt(b_components[i])) {
                return false;
            }
        }
        if (a_components.length > b_components.length) {
            return true;
        }
        if (a_components.length < b_components.length) {
            return false;
        }
        return true;
    };

})(jQuery, MarketingAutomation);
