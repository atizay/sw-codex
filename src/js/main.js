$(document).ready(function() {


    /* === Scrolling to Sections === */
    $(".btn_watch").click(function(e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $("body,html").animate({ scrollTop: destination }, 1200, 'swing');
    });

    /* === /Scrolling to Sections === */



    $('.btn_order').click(function(e){
        e.preventDefault();
        $('#exampleModal').arcticmodal();
    });





    $('.menu-open, .menu__link').click(function() {
        // $('.menu-collapse').toggleClass('d-none');
        $('.navbar').toggleClass('navbar_opened');
        $('.menu-open').css('right','-18rem').css('display','none');
        $('.header-overlay').css('opacity', '.25').css('zIndex', '1').css('display','block');
        $('.wrapper').css('filter','blur(1px)')
        // $('.menu-open').css('right','-18rem').css('display','none');
        // $('.s-header .container').css('opacity', '0');
    });




    $('.menu__link, .menu-close, .header-overlay').click(function() { //
        // $('.ham').click();
        $('.navbar').toggleClass('navbar_opened');
        $('.header-overlay').css('opacity', '0').css('zIndex', '-1').css('display','none');
        $('.menu-open').css('right','2rem').css('display','block');
        $('.wrapper').css('filter','blur(0px)')
        // $('.s-header .container').css('opacity', '1');
    });











    $('.slider-main').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });


    $('.slider-brnds').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    $('.slider-advises').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    $('.slider-trends').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.slider-usefull').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    rows: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rows: 2
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.slider-testimonials').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });



    $('.slider-testimonials_video').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });






    $('.slider-shops').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });











    $('.slider-team').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });










    /* --- Меню-гамбургер --- */
    $('.burger, .menu__link').click(function() {
        // $('.menu-collapse').toggleClass('d-none');
        $('.menu-list_burger').addClass('menu-list_burger_opened');

    });

    $('.menu-list__link, .menu-list_burger_opened, .menu-list_burger, .close').click(function() { //
        // $('.ham').click();
        $('.menu-list_burger').removeClass('menu-list_burger_opened');

    });




















    jQuery(document).ready(function($) {
        //open/close lateral filter
        $('.cd-filter-trigger').on('click', function() {
            triggerFilter(true);
        });
        $('.cd-filter .cd-close').on('click', function() {
            triggerFilter(false);
        });

        function triggerFilter($bool) {
            var elementsToTrigger = $([$('.cd-filter-trigger'), $('.cd-filter'), $('.cd-tab-filter'), $('.cd-gallery')]);
            elementsToTrigger.each(function() {
                $(this).toggleClass('filter-is-visible', $bool);
            });
        }

        //mobile version - detect click event on filters tab
        var filter_tab_placeholder = $('.cd-tab-filter .placeholder a'),
            filter_tab_placeholder_default_value = 'Select',
            filter_tab_placeholder_text = filter_tab_placeholder.text();

        $('.cd-tab-filter li').on('click', function(event) {
            //detect which tab filter item was selected
            var selected_filter = $(event.target).data('type');

            //check if user has clicked the placeholder item
            if ($(event.target).is(filter_tab_placeholder)) {
                (filter_tab_placeholder_default_value == filter_tab_placeholder.text()) ? filter_tab_placeholder.text(filter_tab_placeholder_text): filter_tab_placeholder.text(filter_tab_placeholder_default_value);
                $('.cd-tab-filter').toggleClass('is-open');

                //check if user has clicked a filter already selected 
            } else if (filter_tab_placeholder.data('type') == selected_filter) {
                filter_tab_placeholder.text($(event.target).text());
                $('.cd-tab-filter').removeClass('is-open');

            } else {
                //close the dropdown and change placeholder text/data-type value
                $('.cd-tab-filter').removeClass('is-open');
                filter_tab_placeholder.text($(event.target).text()).data('type', selected_filter);
                filter_tab_placeholder_text = $(event.target).text();

                //add class selected to the selected filter item
                $('.cd-tab-filter .selected').removeClass('selected');
                $(event.target).addClass('selected');
            }
        });

        //close filter dropdown inside lateral .cd-filter 
        $('.cd-filter-block h5').on('click', function() {
            $(this).toggleClass('closed').siblings('.cd-filter-content').slideToggle(300);
        })

        //fix lateral filter and gallery on scrolling
        $(window).on('scroll', function() {
            (!window.requestAnimationFrame) ? fixGallery(): window.requestAnimationFrame(fixGallery);
        });

        function fixGallery() {
            var offsetTop = $('.cd-main-content').offset().top,
                scrollTop = $(window).scrollTop();
            (scrollTop >= offsetTop) ? $('.cd-main-content').addClass('is-fixed'): $('.cd-main-content').removeClass('is-fixed');
        }

        /************************************
          MitItUp filter settings
          More details: 
          https://mixitup.kunkalabs.com/
          or:
          http://codepen.io/patrickkunka/
        *************************************/

        buttonFilter.init();
        $('.cd-gallery ul').mixItUp({
            controls: {
                enable: false
            },
            callbacks: {
                onMixStart: function() {
                    $('.cd-fail-message').fadeOut(200);
                },
                onMixFail: function() {
                    $('.cd-fail-message').fadeIn(200);
                }
            }
        });

        //search filtering
        //credits http://codepen.io/edprats/pen/pzAdg
        var inputText;
        var $matching = $();

        var delay = (function() {
            var timer = 0;
            return function(callback, ms) {
                clearTimeout(timer);
                timer = setTimeout(callback, ms);
            };
        })();

        $(".cd-filter-content input[type='search']").keyup(function() {
            // Delay function invoked to make sure user stopped typing
            delay(function() {
                inputText = $(".cd-filter-content input[type='search']").val().toLowerCase();
                // Check to see if input field is empty
                if ((inputText.length) > 0) {
                    $('.mix').each(function() {
                        var $this = $(this);

                        // add item to be filtered out if input text matches items inside the title   
                        if ($this.attr('class').toLowerCase().match(inputText)) {
                            $matching = $matching.add(this);
                        } else {
                            // removes any previously matched item
                            $matching = $matching.not(this);
                        }
                    });
                    $('.cd-gallery ul').mixItUp('filter', $matching);
                } else {
                    // resets the filter to show all item if input is empty
                    $('.cd-gallery ul').mixItUp('filter', 'all');
                }
            }, 200);
        });
    });

    /*****************************************************
      MixItUp - Define a single object literal 
      to contain all filter custom functionality
    *****************************************************/
    var buttonFilter = {
        // Declare any variables we will need as properties of the object
        $filters: null,
        groups: [],
        outputArray: [],
        outputString: '',

        // The "init" method will run on document ready and cache any jQuery objects we will need.
        init: function() {
            var self = this; // As a best practice, in each method we will asign "this" to the variable "self" so that it remains scope-agnostic. We will use it to refer to the parent "buttonFilter" object so that we can share methods and properties between all parts of the object.

            self.$filters = $('.cd-main-content');
            self.$container = $('.cd-gallery ul');

            self.$filters.find('.cd-filters').each(function() {
                var $this = $(this);

                self.groups.push({
                    $inputs: $this.find('.filter'),
                    active: '',
                    tracker: false
                });
            });

            self.bindHandlers();
        },

        // The "bindHandlers" method will listen for whenever a button is clicked. 
        bindHandlers: function() {
            var self = this;

            self.$filters.on('click', 'a', function(e) {
                self.parseFilters();
            });
            self.$filters.on('change', function() {
                self.parseFilters();
            });
        },

        parseFilters: function() {
            var self = this;

            // loop through each filter group and grap the active filter from each one.
            for (var i = 0, group; group = self.groups[i]; i++) {
                group.active = [];
                group.$inputs.each(function() {
                    var $this = $(this);
                    if ($this.is('input[type="radio"]') || $this.is('input[type="checkbox"]')) {
                        if ($this.is(':checked')) {
                            group.active.push($this.attr('data-filter'));
                        }
                    } else if ($this.is('select')) {
                        group.active.push($this.val());
                    } else if ($this.find('.selected').length > 0) {
                        group.active.push($this.attr('data-filter'));
                    }
                });
            }
            self.concatenate();
        },

        concatenate: function() {
            var self = this;

            self.outputString = ''; // Reset output string

            for (var i = 0, group; group = self.groups[i]; i++) {
                self.outputString += group.active;
            }

            // If the output string is empty, show all rather than none:    
            !self.outputString.length && (self.outputString = 'all');

            // Send the output string to MixItUp via the 'filter' method:    
            if (self.$container.mixItUp('isLoaded')) {
                self.$container.mixItUp('filter', self.outputString);
            }
        }
    };






});