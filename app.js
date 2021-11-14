'use strict'

const sectionToggle = function() {
  $('.hero__home').hide()
  $('.hero__about').hide()
  $('.hero__team').hide()
  $('.hero__book').hide()
  $('.hero__buy-sessions').hide()
  $('.hero__contact').hide()
  $('.hero__register').hide()
}

const imgSliderToggle = function() {
  $('#workout_room').css('background-color', '#bbb')
  $('#front_desk').css('background-color', '#bbb')
  $('#team').css('background-color', '#bbb')
}



$(() => {
  // Start-up
  sectionToggle()
  $('.hero__home').show()
  $('#workout_room').css('background-color', 'rgb(70, 70, 70)')

  // Background Img Switching
  $('#workout_room').on("click", () => {
    $("body").css({
      "background": "url('img/workout_room.png') no-repeat center center fixed",
      "background-size": "cover"
    })
    $('.quote').css('color', 'white')
    imgSliderToggle()
    $('#workout_room').css('background-color', 'rgb(70, 70, 70)')
  });
  $('#front_desk').on("click", () => {
    $("body").css({
      "background" :"url('img/front_desk.png') no-repeat center center fixed",
      "background-size": "cover"
    })
    $('.quote').css('color', 'white')
    imgSliderToggle()
    $('#front_desk').css('background-color', 'rgb(70, 70, 70)')
  });

  $('#team').on("click", () => {
    $("body").css({
      "background":"url('img/team.jpg') no-repeat center center fixed",
      "background-size": "cover"
    })
    $('.quote').css('color', 'black')
    imgSliderToggle()
    $('#team').css('background-color', 'rgb(70, 70, 70)')
  });

  // Page Changing
  $('.navbar-brand').on("click", () => {
    sectionToggle()
    $('.hero__home').show()
  });
  $('.about-nav-btn').on("click", () => {
    sectionToggle()
    $('.hero__about').show()
  });
  $('.team-nav-btn').on("click", () => {
    sectionToggle()
    $('.hero__team').show()
  });
  $('.book-nav-btn').on("click", () => {
    sectionToggle()
    $('.hero__book').show()
  });
  $('.booking-btn').on("click", () => {
    sectionToggle()
    $('.hero__book').show()
  });
  $('.buy-nav-btn').on("click", () => {
    sectionToggle()
    $('.hero__buy-sessions').show()
  });
  $('.contact-btn').on("click", () => {
    sectionToggle()
    $('.hero__contact').show()
  });
  $('.login-btn').on("click", () => {
    sectionToggle()
    $('.hero__register').show()
  });
});