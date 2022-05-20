/*
 * Copyright 2022, TeamDev. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Redistribution and use in source and/or binary forms, with or without
 * modification, must retain the above copyright notice and the following
 * disclaimer.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

'use strict';

/**
 * This script contains helper functions that configures carousel slider
 * with maps on the home page.
 *
 * The `Owl Carousel 2` library information you can find
 * here https://owlcarousel2.github.io/OwlCarousel2/.
 */

$(document).ready(function() {
    const $owl = $('.owl-carousel');
    const $rotatedMeridians = $('.rotated-meridians');
    const $btnPrev = $('#nav_prev');
    const $btnNext = $('#nav_next');

    $owl.owlCarousel({
        loop: false,
        nav: false,
        dots: false,
        smartSpeed: 600,
        responsive: {
            0: {
                items: 1,
            }
        },
        onTranslated: (event) => onTranslated(event),
    });

    /**
     * On the previous button click.
     */
    $btnPrev.click(function() {
        $owl.trigger('prev.owl.carousel');
        $btnPrev.addClass('not-clickable');
        rotateMeridians($rotatedMeridians, 'rotate-backward');
        return false; // Prevents from scrolling top.
    });

    /**
     * On the next button click.
     */
    $btnNext.click(function() {
        $owl.trigger('next.owl.carousel');
        $btnNext.addClass('not-clickable');
        rotateMeridians($rotatedMeridians, 'rotate-forward');
        return false; // Prevents from scrolling top.
    });

    /**
     * Rotates meridians.
     * @param el an element that will be rotated.
     * @param className the class that will be added to the element.
     */
    function rotateMeridians(el, className) {
        el.addClass(className);
        el.one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(event) {
            $(this).removeClass(className);
        });
    }

    /**
     * The `OwnCarousel` callback will be called
     * when the translation of the stage starts.
     *
     * Checks if there are more slides to show.
     * If not, disables the next/prev buttons.
     *
     * @param event
     */
    function onTranslated(event) {
        $btnPrev.removeClass('disabled not-clickable');
        $btnNext.removeClass('disabled not-clickable');
        if (event.item.index === 0) {
            $btnPrev.addClass('disabled');
        }
        if (event.item.index === event.item.count - 1) {
            $btnNext.addClass('disabled');
        }
    }
});
