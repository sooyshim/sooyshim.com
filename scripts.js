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
    $(".navContainer").addClass("displayNav");
  })
};

portfolio.hideNav = () => { 
  $(".close").on("click", function() {
    $(".navContainer").removeClass("displayNav");
  })
};

portfolio.addScroll = () => {
  $("a").on("click", portfolio.smoothScroll());
}

portfolio.hideNavOnClick = () => {
  $(".topNavList li").on("click", function() {
    $(".navContainer").removeClass("displayNav");
  })
}

// Form error handlers
portfolio.validateEmailString = (email) => {
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(String(email).toLowerCase());
}

portfolio.validateEmail = () => {
  const $emailErrorMessage = $(".emailErrorMessage")
  const $email = $("#email").val();

  if (!portfolio.validateEmailString($email) || $email === "") {
    $emailErrorMessage.removeClass("fade");
  } else {
    return true
  }
}

portfolio.validateName = () => {
  const $name = $("#name").val();
  const $nameErrorMessage = $(".nameErrorMessage");

  if ($name === "") {
    $nameErrorMessage.removeClass("fade");
  } else {
    return true
  }
}

portfolio.validateMessage = () => {
  const $textarea = $("#message").val();
  const $textareaErrorMessage = $(".textareaErrorMessage");

  if ($textarea === "") {
    $textareaErrorMessage.removeClass("fade");
  } else {
    return true
  }
}

// eventlistener to trigger form validation
portfolio.validateForm = () => {
  $("#submit").on("click", (e) => {
    portfolio.validateName();
    portfolio.validateEmail();
    portfolio.validateMessage();

    if (portfolio.validateEmail() && portfolio.validateName() && portfolio.validateMessage()) {
      $("form").attr("action", "https://www.focuspocus.io/magic/sooyshim@gmail.com").attr("method", "POST");
    } else {
      e.preventDefault();
    }
  });
};

portfolio.clearErrorMessages = () => {
  $("#name").on("select click focus", function(){
    $(".nameErrorMessage").addClass("fade");
  });
  $("#email").on("select click focus", function(){
    $(".emailErrorMessage").addClass("fade");
  });
  $("#message").on("select click focus", function(){
    $(".textareaErrorMessage").addClass("fade");
  });
}

portfolio.clearForm = () => {
  $("form").trigger("reset");
}

// init
portfolio.init = () => {
  portfolio.addScroll();
  portfolio.displayNav();
  portfolio.hideNav();
  portfolio.hideNavOnClick();
  portfolio.validateForm();
  portfolio.clearErrorMessages();
  portfolio.clearForm();
}

// doc ready
$(document).ready(function() {
  portfolio.init();
})