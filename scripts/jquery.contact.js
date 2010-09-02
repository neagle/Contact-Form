// jQuery Contact Form 
/* http://www.youtube.com/watch?v=s2-LEBc2sO8
   "Contact is the secret
    is the moment
    when everything happens."
*/

(function($){

$.fn.contact = function(o) {
    if (typeof o == 'string') {
        var instance = $(this).data('contact'),
            args = Array.prototype.slice.call(arguments, 1);
        return instance[o].apply(instance, args);
    } else {
        return this.each(function() {
            $(this).data('contact', new $con(this, o));
        });
    }
}

// Contact Plugin
var $con = $.contact = function(elem, options) {
    this.options = $.extend({}, this.options, options || {});

    this.elem = elem;
    this.$elem = $(elem);

    this.email = this.$elem.find('input[type="email"]');
    this.gravatar = $(this.options.gravatar);

    this.build();
}

$con.prototype = {
    options: {
        // defaults
        gravatar: 'img.gravatar'
    },
    build: function() {
        // build
        this.grav = $(this.options.gravatar);

        this.addEventListeners();
    },
    addEventListeners: function() {
        this.email.bind('blur', $.proxy(function() {
            var elem = this.email,
                previousValue = elem.data('value'),
                val = elem.val();

            if (previousValue != val) {
                elem.data('value', val);
                // Use gravatar plugin to grab gravatar image
                this.grav.gravatar({ email: val });
            }
        }, this));
    },
}

})(jQuery);
