window.addEventListener("beforeunload", function() {
  document.body.classList.add("animate-out");
});

let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty("--vh", `${vh}px`);

window.addEventListener("resize", () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
});

$(document).ready(function() {


/* $(window).scroll(function () {
    // End of the document reached?
    if ($(document).height() - $(this).height() == $(this).scrollTop()) {
      console.log("adentro");
        $.ajax({
            type: "POST",
            url: "Gran_Ricardo.html",
            contentType: "application/json; charset=utf-8",
            data: '',
            dataType: "json",
            success: function (msg) {
                if (msg.d) {
                    $(".container").append(msg.d);
                }
            },
            error: function (req, status, error) {
                alert("Error try again");
            }
        });
    }
});  */
  $("#contenidoPopUp").hide();

  var posicion = 0;
  var posicion_movil = 0;
  var anterior_movil = 0;
  var anterior = null;
  var anterior_categorias = 0;
  var posicion_categorias = 0;

  var valores = ["cajita1", "cajita2", "cajita3", "cajita4"];
  var valores_movil = [
    "cajita1_movil",
    "cajita2_movil",
    "cajita3_movil",
    "cajita4_movil"
  ];
  var valores_categorias = [
    "elemento1",
    "elemento2",
    "elemento3",
    "elemento4",
    "elemento5"
  ];

  $("#boton_arriba_r").click(function(e) {
    console.log("cambio");
    e.preventDefault();
    if (posicion === 0) {
      window.location.href = "./Monte_Xanix_y_Gran_Ricardo.html";
    }
    if (posicion > 0) {
      anterior = posicion;
      posicion -= 1;
    }

    $(`#${valores[anterior]}`).fadeOut();

    setTimeout(() => {
      $(`#${valores[posicion]}`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 500);
  });

  $("#boton_abajo_r").click(function(e) {
    e.preventDefault();
    if (posicion === valores.length - 1) {
      window.location.href = "./Puntos_y_Medallas.html";
    }

    anterior = posicion;
    posicion += 1;

    $(`#${valores[anterior]}`).fadeOut();

    setTimeout(() => {
      $(`#${valores[posicion]}`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 500);
  });
  $("#gran_rc_btn_izquierda").click(function(e) {
    e.preventDefault();
    if (posicion_movil === 0) {
      window.location.href = "./Monte_Xanix_y_Gran_Ricardo.html";
    }
    if (posicion_movil > 0) {
      anterior_movil = posicion_movil;
      posicion_movil -= 1;
    }

    $(`#${valores_movil[anterior_movil]}`).fadeOut();

    setTimeout(() => {
      $(`#${valores_movil[posicion_movil]}`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 500);
  });

  $("#gran_rc_btn_derecha").click(function(e) {
    e.preventDefault();
    if (posicion_movil === valores_movil.length - 1) {
      window.location.href = "./Puntos_y_Medallas.html";
    }

    anterior_movil = posicion_movil;
    posicion_movil += 1;

    $(`#${valores_movil[anterior_movil]}`).fadeOut();

    setTimeout(() => {
      $(`#${valores_movil[posicion_movil]}`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 500);
  });

  $("#botella_cat_btn_izquierda").click(function(e) {
    e.preventDefault();
    if (posicion_categorias === 0) {
      window.location.href = "./Puntos_y_Medallas.html";
    }
    if (posicion_categorias > 0) {
      anterior_categorias = posicion_categorias;
      posicion_categorias -= 1;
    }

    $(`#${valores_categorias[anterior_categorias]}`).fadeOut();

    setTimeout(() => {
      $(`#${valores_categorias[posicion_categorias]}`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 500);
  });

  $("#botella_cat_btn_derecha").click(function(e) {
    e.preventDefault();
    if (posicion_categorias === valores_categorias.length - 1) {
      window.location.href = "./galeria.html";
    }

    anterior_categorias = posicion_categorias;
    posicion_categorias += 1;

    $(`#${valores_categorias[anterior_categorias]}`).fadeOut();

    setTimeout(() => {
      $(`#${valores_categorias[posicion_categorias]}`)
        .css("display", "flex")
        .hide()
        .fadeIn();
    }, 500);
  });

  $("#vercompleto").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");

    video[0].src += "&autoplay=1";

    video[0].requestFullscreen();
  });
  $("#saltarvideo").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");

    video[0].src = "";
    $("#contenidoPopUp").fadeOut("slow");

    $("#contenidoPopUp").hide();
  });

  $("#saltarvideox").click(function(e) {
    e.preventDefault();

    $("#contenidoPopUpx").fadeOut("slow");

    $("#contenidoPopUpx").hide();
    $("#contenidoA").show();
  });

  $("#secondVid").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");
    video[0].src =
      "https://www.youtube.com/embed/2_HQOk93CmU?rel=0&controls=0&autoplay=1";
    console.log("picado");
    $("#contenidoPopUp").fadeIn();

    $("#contenidoPopUp").show();
  });

  $("#firstVid").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");
    video[0].src =
      "https://www.youtube.com/embed/Hre6EXsxZxs?rel=0&controls=0&autoplay=1";
    console.log("picado");
    $("#contenidoPopUp").fadeIn();

    $("#contenidoPopUp").show();
  });

  $("#thirdVid").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");
    video[0].src =
      "https://www.youtube.com/embed/PmjtS5fkbbs?rel=0&controls=0&autoplay=1";
    console.log("picado");
    $("#contenidoPopUp").fadeIn();

    $("#contenidoPopUp").show();
  });
  $("#fourthVid").click(function(e) {
    e.preventDefault();
    var video = $("#youtube-video");
    video[0].src =
      "https://www.youtube.com/embed/ZqWBJkvgmyQ?rel=0&controls=0&autoplay=1";
    $("#contenidoPopUp").fadeIn();

    $("#contenidoPopUp").show();
  });

  $("#imagen_categoria1")
    .on("mouseover", function(event) {
      $("#contenido_gran_ricardo_p2").css("display", "flex");
      $("#contenido_gran_ricardo_p2").css("align-items", "center");
      $("#imagen_detalle1").css("display", "block");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle1").hide();
    });
  $("#imagen_categoria2")
    .on("mouseover", function(event) {
      $("#contenido_gran_ricardo_p2").css("display", "flex");
      $("#contenido_gran_ricardo_p2").css("align-items", "center");
      $("#imagen_detalle2").css("display", "block");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle2").hide();
    });
  $("#imagen_categoria3")
    .on("mouseover", function(event) {
      $("#contenido_gran_ricardo_p2").css("display", "flex");
      $("#contenido_gran_ricardo_p2").css("align-items", "flex-start");
      $("#imagen_detalle3").css("display", "block");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle3").hide();
    });
  $("#imagen_categoria4")
    .on("mouseover", function(event) {
      $("#contenido_gran_ricardo_p2").css("display", "flex");
      $("#contenido_gran_ricardo_p2").css("align-items", "center");
      $("#imagen_detalle4").css("display", "block");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle4").hide();
    });
  $("#imagen_categoria5")
    .on("mouseover", function(event) {
      $("#contenido_gran_ricardo_p2").css("display", "flex");
      $("#contenido_gran_ricardo_p2").css("align-items", "center");
      $("#imagen_detalle5").css("display", "block");
    })
    .on("mouseout", function(event) {
      $("#imagen_detalle5").hide();
    });

  /* ===========NAVEGACION ========*/
  $("#nav_gran_ricardo_linea").on("mouseenter", function(event) {
    $("#nav_gran_ricardo").css("display", "block");
    $("#nav_gran_ricardo").addClass("principal_nav");
    $("#nav_gran_ricardo_linea").hide();
    ocultarNavPagActual();
  });
  $("#nav_gran_ricardo").on("mouseleave", function(event) {
    $("#nav_gran_ricardo_linea").css("display", "block");
    $("#nav_gran_ricardo").hide();
    mostrarNavPagActual();
  });
  $("#nav_premios_linea").on("mouseenter", function(event) {
    $("#nav_premios").css("display", "block");
    $("#nav_premios").addClass("principal_nav");
    $("#nav_premios_linea").hide();
    ocultarNavPagActual();
  });
  $("#nav_premios").on("mouseleave", function(event) {
    $("#nav_premios_linea").css("display", "block");
    $("#nav_premios").hide();
    mostrarNavPagActual();
  });
  $("#nav_monte_xanic_gr_linea").on("mouseenter", function(event) {
    $("#nav_monte_xanic_gr").css("display", "block");
    $("#nav_monte_xanic_gr").addClass("principal_nav");
    $("#nav_monte_xanic_gr_linea").hide();
    ocultarNavPagActual();
  });
  $("#nav_monte_xanic_gr").on("mouseleave", function(event) {
    $("#nav_monte_xanic_gr_linea").css("display", "block");
    $("#nav_monte_xanic_gr").hide();
    mostrarNavPagActual();
  });
  $("#nav_monte_xanic_gr").on("mouseout", function(event) {
    $("#nav_monte_xanic_gr_linea").css("display", "block");
    $("#nav_monte_xanic_gr").hide();
    mostrarNavPagActual();
  });
  $("#nav_acerca_linea").on("mouseenter", function(event) {
    $("#nav_acerca").css("display", "block");
    $("#nav_acerca").addClass("principal_nav");
    $("#nav_acerca_linea").hide();
    ocultarNavPagActual();
  });
  $("#nav_acerca").on("mouseleave", function(event) {
    $("#nav_acerca_linea").css("display", "block");
    $("#nav_acerca").hide();
    mostrarNavPagActual();
  });

  $("#nav_acerca").on("mouseout", function(event) {
    $("#nav_acerca_linea").css("display", "block");
    $("#nav_acerca").hide();
    mostrarNavPagActual();
  });
  $("#nav_acerca").on("mouseleave", function(event) {
    $("#nav_acerca_linea").css("display", "block");
    $("#nav_acerca").hide();
    mostrarNavPagActual();
  });

  $("#nav_galeria_linea").on("mouseenter", function(event) {
    $("#nav_galeria_videos").css("display", "block");
    $("#nav_galeria_videos").addClass("principal_nav");
    $("#nav_galeria_linea").hide();
    ocultarNavPagActual();
  });
  $("#nav_galeria_videos").on("mouseleave", function(event) {
    $("#nav_galeria_linea").css("display", "block");
    $("#nav_galeria_videos").hide();
    mostrarNavPagActual();
  });

  $("#nav_gran_ricardo_linea2").on("mouseenter", function(event) {
    $("#nav_gran_ricardo2").css("display", "block");
    $("#nav_gran_ricardo2").addClass("principal_nav");
    $("#nav_gran_ricardo_linea2").hide();
    ocultarNavPagActual();
  });
  $("#nav_gran_ricardo2").on("mouseleave", function(event) {
    $("#nav_gran_ricardo_linea2").css("display", "block");
    $("#nav_gran_ricardo2").hide();
    mostrarNavPagActual();
  });

  function mostrarNavPagActual() {
    $(".pagina_actual img:nth-child(1)").hide();
    $(".pagina_actual img:nth-child(2)").css("display", "block");
  }
  function ocultarNavPagActual() {
    $(".pagina_actual img:nth-child(1)").css("display", "block");
    $(".pagina_actual img:nth-child(2)").hide();
  }

  /*======= TERMINA NAVEGACION====== */
});

let hold = "Puntos";
function hover(element, src) {
  element.setAttribute("src", "./img/pagina3/s" + src + ".png");
  $(document).ready(function() {
    if (hold !== src) {
      $("#i" + hold).attr("src", "./img/pagina3/i" + hold + ".png");
    }
    $("#dText").attr("src", "./img/pagina3/tex" + src + ".png");
    $("#mText").attr("src", "./img/pagina3/tex" + src + "M.png");
    hold = src;
  });
}
