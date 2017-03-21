'use strict';

export const projectionRules: {} = {
    readFilter: {
        public: ['NOM_BARRI','EQUIPAMENT','ADRECA','TELEFON','LONGITUD','LATITUD']
    },
    // writeFilter: {
    //    "owner" : []
    //},
    // defaultFilterRole: 'nofilter', // (is a built-in filter that does no processing, be careful with this)
    defaultFilterRole: 'public',
    sanitize: false, // Escape HTML in strings
    compat: false // Enable compatibility for Mongoose versions prior to 3.6 (default false)
};
