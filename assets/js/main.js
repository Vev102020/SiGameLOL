$(document).ready(function () {
  let audio = new Audio();

  $(`button.audio__button`).on(`click`, function () {
    if (audio.played) {
      $(`button.audio__button`).removeClass(`play`);
      audio.src = this.name;
      audio.play();
      $(this).toggleClass(`play`);
    } else {
      audio.src = this.name;
      audio.play();
      $(this).toggleClass(`play`);
    }

    audio.onended = function () {
      $(`button.audio__button`).removeClass(`play`);
    };
  });
});

//
