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
 * This script contains helper functions that makes images on the map svg clickable.
 */
$(document).ready(function() {
    /**
     * Makes the provided element clickable and adds proper `url`.
     *
     * @param id the element on the map that should be clickable.
     * @param url the url where the element should lead.
     */
    function makeClickable(id, url) {
        const el = $("[id=" + id + "]");
        el.addClass('clickable');

        el.click(function() {
            window.open(url, '_top');
        });
    }

    /**
     * Finds white elements and marks them with the class.
     *
     * It is needed to make the element hover style but don't color it if its white.
     */
    function findWhiteElements() {
        $('path').each(function () {
            markWhiteElements($(this));
        });
        $('polygon').each(function () {
            markWhiteElements($(this));
        });
        $('ellipse').each(function () {
            markWhiteElements($(this));
        });
    }

    /**
     * Checks the provided `el` and marks it as white if it has white or light-gray fill.
     *
     * @param el element that should be checked.
     */
    function markWhiteElements(el) {
        const elFill = el.css('fill');
        const color1 = 'rgb(254, 254, 254)';
        const color2 = 'rgb(255, 255, 255)';
        if (elFill === color1 || elFill === color2) {
            el.addClass('white');
        }
    }

    findWhiteElements();
    makeClickable('start', '/logbook/meetup-1/#the-word-was-first');
    makeClickable('babylon', '/logbook/meetup-1/#tower-of-babel');
    makeClickable('realfacts', '/logbook/meetup-2/#based-on-real-events');
    makeClickable('justnow', '/logbook/meetup-2/#as-soon-as-possible');
    makeClickable('elephant0', '/logbook/meetup-3/#value-objects');
    makeClickable('elephant1', '/logbook/meetup-3/#entities-and-repositories');
    makeClickable('elephant2', '/logbook/meetup-3/#projections');
    makeClickable('bermudes', '/logbook/meetup-4/#bermuda-aggregate');
    makeClickable('katamaran', '/logbook/meetup-4/#catamaran-cqrs');
    makeClickable('signalman', '/logbook/meetup-5/#pleasure-of-signalman');
    makeClickable('saga', '/logbook/meetup-6/#saga-of-commanders');
    makeClickable('ekranoplane', '/logbook/meetup-7/#aggregat-ekranoplan');
    makeClickable('soup', '/logbook/meetup-8/#soup-from-the-package');
});
