$(document).ready(function () {

    hideShowPassword();
    countDownTimer();
    countChar();
    borderBottomShowHide();
    changeContent();
    slidePost();
    closeAccountSettings();
    correctForm();
    hamburgerButton();
    dragScroll();

    function countDownTimer() {
        if ($(".time").length > 0) {
            var countDownDate = new Date("Aug 6, 2019 23:59:25").getTime();

            var x = setInterval(function () {
                var now = new Date().getTime();
                var distance = countDownDate - now;
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                $(".day").html(days);
                $(".hrs").html(hours);
                $(".min").html(minutes);
                $(".sec").html(seconds)

                if (distance < 0) {
                    clearInterval(x);
                    $(".time").html("EXPIRED");
                }
            }, 1000);
        }
    }

    function close() {
        $('.search-box.active').removeClass("active");
        setTimeout(function () {
            nav.removeClass("nav-search-hide");
        }, 500);
    };

    $(".search-btn").click(function (e) {
        e.stopPropagation();
        $(".search-box").addClass("active");

        var windowWidth = $(window).width();
        var nav = $(".nav");
        if (windowWidth < 1206) {
            nav.addClass("nav-search-hide");
        }
    });

    $(document.body).click(function (e) {
        close();
    });

    function correctForm() {
        var logForm = $(".log-form");

        if (logForm.length > 0) {
            logForm.submit(function () {
                var empty = true;
                $(this).find('input').each(function () {
                    if ($(this).val() === "") {
                        empty = false;
                        $(".correct").addClass('active');
                    }
                });
                return empty;
            });
        }
    }

    function showLoginBox() {
        $(".login-btn").click(function () {
            $(".log-box").addClass("active");
        });

        $(".single-box").click(function () {
            $(".single-box").addClass('active');
            $(".single-box.active").removeClass('active');
        });
    }

    $(".single-box").click(function () {
        $(".single-box.active").removeClass('active');
        $(this).addClass('active')

    });

    function countChar() {
        $('.text-area').keyup(function () {
            var maxLength = 140;
            var length = $(this).val().length;
            var length = maxLength - length;
            $('.max-characters').html('max ' + length + ' znaków');
        });
    };

    function borderBottomShowHide() {
        if ($(".text-area").length > 0) {
            $(".add-text").click(function (e) {
                e.stopPropagation();
                $(".add-text.active").removeClass('active');
                $(this).addClass('active');

                $(document.body).click(function () {
                    var textAreaVal = $(".text-area").val()
                    if (textAreaVal.length == 0) {
                        $(".add-text.active").removeClass('active');
                    }
                });
            });
        }
    }

    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();

            reader.onload = function (e) {
                $('.blah').attr('src', e.target.result);
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    $(".input-file").change(function () {
        readURL(this);
        $(".add-photo").css("border", "none");
    });

    function changeContent() {
        $(".btn-change").click(function () {
            $(".btn-change.active").removeClass('active');
            $(this).addClass('active');

            $(".main-content").removeClass('active');
            if ($(this).hasClass('video-content')) {
                $(".main-content.video-content").addClass('active');
            }
            else {
                $(".main-content.photo-content").addClass('active');
            }
        });
    }

    function slidePost() {
        var mainBox = $(".main-box")
        mainBox.removeClass('active')

        $(".photo").click(function () {
            $(this).closest('.main-box').addClass('active');

            $(".icon-cancel").click(function (e) {
                e.stopPropagation();
                $(this).closest(".main-box.active").removeClass('active');
            });
        });
    }

    function closeAccountSettings() {
        var slideBox = $(".slide-box")

        $(".icon-white-play").click(function (e) {
            e.stopPropagation();
            slideBox.addClass("active");
        });

        $(document.body).click(function (e) {
            $('.slide-box.active').removeClass("active");
        });
        
        slideBox.click(function (e) {
            e.stopPropagation();
        })
    }

    function hamburgerButton() {
        var hamburgerBtn = $(".hamburger-btn")

        hamburgerBtn.click(function () {
            hamburgerBtn.toggleClass("change");
            $(".nav").toggleClass("active")
        });
    }

    function dragScroll() {
        var curDown = false,
            curYPos = 0;
        var commentsBox = $(".comments-box")

        commentsBox.mousemove(function (m) {
            if (curDown === true) {
                commentsBox.scrollTop(commentsBox.scrollTop() + (curYPos - m.pageY));
            }
        });

        commentsBox.mousedown(function (m) {
            curDown = true;
            curYPos = m.pageY;
        });

        commentsBox.mouseup(function () {
            curDown = false;
        });
    }
});