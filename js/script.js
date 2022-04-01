$(document).ready(function () {
  let red = "#FF0000"
  let yellow = "#FFFF00"
  let green = "#00FF00"
  let lightblue = "#00FFFF"
  let darkblue = "#0000FF"
  let pink = "#FF00FF"
  let colors = [red, yellow, green, lightblue, darkblue, pink]
  let themecolor = colors[Math.floor(Math.random() * colors.length)]

  const canvas = document.getElementById("canv")
  const ctx = canvas.getContext("2d")

  let w = (canvas.width = document.body.offsetWidth)
  let h = (canvas.height = window.innerHeight)

  ctx.fillStyle = "#000"
  ctx.fillRect(0, 0, w, h)

  let cols = Math.floor(w / 20) + 1
  let ypos = Array(cols).fill(0)

  $(window).on("resize", function () {
    w = canvas.width = document.body.offsetWidth
    h = canvas.height = window.innerHeight
    ctx.fillRect(0, 0, w, h)
    cols = Math.floor(w / 20) + 1
    ypos = Array(cols).fill(0)
  })

  function matrix() {
    // Draw a semitransparent black rectangle on top of previous drawing
    ctx.fillStyle = "#0001"
    ctx.fillRect(0, 0, w, h)

    // Set color to green and font to 15pt monospace in the drawing context
    ctx.fillStyle = themecolor
    ctx.font = "15pt monospace"

    // for each column put a random character at the end
    ypos.forEach((y, ind) => {
      // generate a random character
      const text = String.fromCharCode(Math.random() * 128)

      // x coordinate of the column, y coordinate is already given
      const x = ind * 20
      // render the character at (x, y)
      ctx.fillText(text, x, y)

      // randomly reset the end of the column if it's at least 100px high
      if (y > 100 + Math.random() * 10000) ypos[ind] = 0
      // otherwise just move the y coordinate for the column 20px down,
      else ypos[ind] = y + 20
    })
  }

  // render the animation at 20 FPS.
  setInterval(matrix, 50)

  $(".down-arrow:eq(0)").on("click", function () {
    let position = document.getElementById("about").offsetTop
    $("html, body").animate(
      {
        scrollTop: position
      },
      1000
    )
  })

  $(".down-arrow:eq(1)").on("click", function () {
    let position = document.getElementById("skills").offsetTop
    $("html, body").animate(
      {
        scrollTop: position
      },
      1000
    )
  })

  $(".down-arrow:eq(2)").on("click", function () {
    let position = document.getElementById("portfolio").offsetTop
    $("html, body").animate(
      {
        scrollTop: position
      },
      1000
    )
  })

  $(".down-arrow:eq(3)").on("click", function () {
    let position = document.getElementById("contact").offsetTop
    $("html, body").animate(
      {
        scrollTop: position
      },
      1000
    )
  })

  $("#footer-arrow").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      1000
    )
  })

  particlesJS("about", {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 400
        }
      },
      color: {
        value: themecolor
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: themecolor
        },
        polygon: {
          nb_sides: 5
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 4,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: themecolor,
        opacity: 0.5,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: false
        },
        onclick: {
          enable: false
        },
        resize: true,
        density_auto: true,
        density_area: 400
      }
    }
  })

  $("section#about a").css({"border-color": themecolor, "background-color": themecolor})
  $("section#skills svg.gears").css("fill", themecolor)
  $("section#skills #certs-list li").css({"border-color": themecolor, "background-color": themecolor})

  $(window).on("scroll", function () {
    let scroll = window.scrollY
    scroll = scroll / 8
    $("#gearpoly0").css("transform", "rotate(" + scroll + "deg)")
    $("#gearpoly1").css("transform", "rotate(" + -scroll * 1.5 + "deg)")
    $("#gearpoly2").css("transform", "rotate(" + scroll * 0.75 + "deg)")
    $("#gearpoly3").css("transform", "rotate(" + -scroll * 1.5 + "deg)")
    $("#gearpoly4").css("transform", "rotate(" + scroll * 1.5 + "deg)")
    $("#gearpoly5").css("transform", "rotate(" + -scroll + "deg)")
    $("#gearpoly6").css("transform", "rotate(" + scroll * 0.75 + "deg)")
    $("#gearpoly7").css("transform", "rotate(" + -scroll * 1.5 + "deg)")
    $("#gearpoly8").css("transform", "rotate(" + scroll * 1 + "deg)")
    $("#gearpoly9").css("transform", "rotate(" + scroll + "deg)")
    $("#gearpoly10").css("transform", "rotate(" + -scroll * 1.5 + "deg)")
    $("#gearpoly11").css("transform", "rotate(" + scroll * 0.75 + "deg)")
    $("#gearpoly12").css("transform", "rotate(" + -scroll * 1.5 + "deg)")
    $("#gearpoly13").css("transform", "rotate(" + scroll * 1.5 + "deg)")
    $("#gearpoly14").css("transform", "rotate(" + -scroll + "deg)")
    $("#gearpoly15").css("transform", "rotate(" + scroll * 0.75 + "deg)")
    $("#gearpoly16").css("transform", "rotate(" + -scroll * 1.5 + "deg)")
    $("#gearpoly17").css("transform", "rotate(" + scroll * 1 + "deg)")
  })

  $(".portfolio-card-right a")
    .on("mouseenter", function () {
      $(this).css("color", themecolor)
    })
    .on("mouseleave", function () {
      $(this).css("color", "#fff")
    })

  $(".portfolio-card-outer").on("mouseenter", function () {
    $(this).css("filter", "drop-shadow(0px 0px 8px " + themecolor + ")")
    $(this).find(".portfolio-card-left").mgGlitch({
      destroy: false, // set 'true' to stop the plugin
      glitch: true, // set 'false' to stop glitching
      scale: true, // set 'false' to stop scaling
      blend: true, // set 'false' to stop glitch blending
      blendModeType: "hue", // select blend mode type
      glitch1TimeMin: 300, // set min time for glitch 1 elem
      glitch1TimeMax: 600, // set max time for glitch 1 elem
      glitch2TimeMin: 10, // set min time for glitch 2 elem
      glitch2TimeMax: 110 // set max time for glitch 2 elem
    })
  })

  $(".portfolio-card-outer").on("mouseleave", function () {
    $(this).css("filter", "unset")
    $(this).find(".portfolio-card-left").mgGlitch({
      destroy: true // set 'true' to stop the plugin
    })
  })

  $(".grid-square.el").css("background-color", themecolor)

  $(".linedraw").css("stroke", themecolor)

  var svgNotTriggered = true

  $(window).on("scroll load", function () {
    var scrollTop = $(document).scrollTop()
    var contactTop = document.getElementById("contact").offsetTop
    var windowHeight = $(window).height()

    if (scrollTop < contactTop - windowHeight) {
      svgNotTriggered = true
      $(".linedraw").hide()
    }

    if (scrollTop >= contactTop - windowHeight / 4 && svgNotTriggered) {
      svgNotTriggered = false
      $(".linedraw").show()

      anime({
        targets: "#contact > svg path",
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: "easeInOutSine",
        duration: 2500,
        direction: "normal"
      })
    }
  })

  $("#contact > form").on("keyup", function () {
    let name = $("#contact-name").val()
    let email = $("#contact-email").val()
    let message = $("#contact-message").val()

    if (name != "" && email != "" && message != "") {
      $("#contact-submit").prop("disabled", false)
    } else {
      $("#contact-submit").prop("disabled", true)
    }
  })

  $("#contact-submit").on("click", function (e) {
    e.preventDefault()

    let name = $("#contact-name").val()
    let email = $("#contact-email").val()
    let message = $("#contact-message").val()

    if (name != "" && email != "" && message != "") {
      $("#contact-submit").addClass("sending").html('<div class="loading"></div>')

      $.ajax({
        url: "mail.php",
        data: {
          "contact-name": name,
          "contact-email": email,
          "contact-message": message
        },
        type: "POST",
        success: response => {
          if (response == 1) {
            $("#contact-name, #contact-email, #contact-message").val("")
            $("#contact-submit").hide()
            $("#contact").append('<span class="contact-response">Thank you - your message has been sent!</span>')
            $("#contact-submit").removeClass("sending").html("Submit")
            setTimeout(function () {
              $(".contact-response").fadeOut(500)
            }, 5000)
            setTimeout(function () {
              $(".contact-response").remove()
              $("#contact-submit").fadeIn()
            }, 5500)
          } else {
            $("#contact-submit").hide()
            $("#contact").append('<span class="contact-response">Error - please try again later.</span>')
            $("#contact-submit").removeClass("sending").html("Submit")
            setTimeout(function () {
              $(".contact-response").fadeOut(500)
            }, 5000)
            setTimeout(function () {
              $(".contact-response").remove()
              $("#contact-submit").fadeIn()
            }, 5500)
          }
        },
        error: response => {
          $("#contact-submit").hide()
          $("#contact").append('<span class="contact-response">Error - please try again later.</span>')
          $("#contact-submit").removeClass("sending").html("Submit")
          setTimeout(function () {
            $(".contact-response").fadeOut(500)
          }, 5000)
          setTimeout(function () {
            $(".contact-response").remove()
            $("#contact-submit").fadeIn()
          }, 5500)
        }
      })
    } else {
    }
  })
})
