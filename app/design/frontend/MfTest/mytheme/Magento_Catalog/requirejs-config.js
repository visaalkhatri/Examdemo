/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    map: {
        '*': {
            'slick': 'Magento_PageBuilder/js/resource/slick/slick'
        }
    },
    shim: {
        'Magento_PageBuilder/js/resource/slick/slick': {
            deps: ['jquery']
        }	
    },
    deps: [
        'Magento_Catalog/js/pdpcustom'
    ]
};
