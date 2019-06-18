const portfolio = {};

// smoothScroll
portfolio.smoothScroll = function () {
  $('a').smoothScroll({
      autoFocus: false,
      easing: 'swing',
      speed: '400',
  });
}

// eventlisteners
portfolio.displayNav = () => { 
  $(".hamburger").on("click", function() {
  $(".navContainer").removeClass("hide");
  $(".hamburger").addClass("hide");
  })
};

portfolio.hideNav = () => { 
  $(".close span").on("click", function() {
  $(".navContainer").addClass("hide");
  $(".hamburger").removeClass("hide");
  })
};

portfolio.addScroll = () => {
  $("a").on("click", portfolio.smoothScroll());
}

portfolio.validateEmailString = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

portfolio.validateEmail = () => {
  const $emailErrorMessage = $(".emailErrorMessage")
  const $email = $("#email").val();

  if (!portfolio.validateEmailString($email) || $email === "") {
    $emailErrorMessage.removeClass("fadeIn");
  } else {
    return true
  }
}

portfolio.validateName = () => {
  const $name = $("#name").val();
  const $nameErrorMessage = $(".nameErrorMessage");

  if ($name === "") {
    $nameErrorMessage.removeClass("fadeIn");
  } else {
    return true
  }
}

portfolio.validateMessage = () => {
  const $textarea = $("#message").val();
  const $textareaErrorMessage = $(".textareaErrorMessage");

  if ($textarea === "") {
    $textareaErrorMessage.removeClass("fadeIn");
  } else {
    return true
  }
}

portfolio.validateForm = () => {
  $("#submit").on("click", function(e) {
    portfolio.validateName();
    portfolio.validateEmail();
    portfolio.validateMessage();

    if (portfolio.validateEmail() && portfolio.validateName() && portfolio.validateMessage()) {
      $("form").attr("action", "https://formspree.io/sooyshim@gmail.com").attr("method", "POST");
    } else {
      e.preventDefault();
    }
  });
};


portfolio.init = () => {
  portfolio.displayNav();
  portfolio.hideNav();
  portfolio.addScroll();
  portfolio.validateForm();
}

$(document).ready(function() {
  portfolio.init();
})