/**
 * Copyright © Test MF. All rights reserved.
 * See COPYING.txt for license details.
 */

 define([
    'jquery',
    'matchMedia',
    'mage/mage',    
    'jquery/ui',
    'Magento_PageBuilder/js/resource/slick/slick'

], function ($, mediaCheck, slick) {
    'use strict';

    $('.product-info-main').mage('sticky', {
        container: '.product_gallery_info',
        stickyClass: '_infosticky',
        spacingTop: 0
    });
   
    mediaCheck({
        media: '(min-width: 640px)',
        entry: function () { 
            $('.product-gallery').slick('unslick');
        },
        exit: function () {
            $('.product-gallery').not('.slick-initialized').slick({
                infinite: true,
                speed: 300,
                arrows: false,
                dots: true,
                slidesToShow: 1,
            });
        }
    });

});
