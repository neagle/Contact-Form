// jQuery Gravatar Plugin 
// There was one already, but this is mine.
// I referenced this excellent plugin by Zach Leatherman as inspiration
// http://plugins.jquery.com/project/gravatar

(function($){

$.fn.gravatar = function(o) {
    if (typeof o == 'string') {
        var instance = $(this).data('gravatar'),
            args = Array.prototype.slice.call(arguments, 1);
        return instance[o].apply(instance, args);
    } else {
        return this.each(function() {
            $(this).data('gravatar', new $grav(this, o));
        });
    }
}

$grav = $.gravatar = function(elem, options) {
    this.options = $.extend({}, this.options, options || {});

    this.elem = elem;
    this.$elem = $(elem);

    this.build();
}

$grav.prototype = {
    options: {
        // defaults
        email: null,
        // url to define a default image (can also be one of: identicon, monsterid, wavatar)
        image: null,
        // rating: g (default), pg, r, x        
        rating: null,
        // integer size: between 1 and 512, default 80 (in pixels)
        size: null,
        speed: 'fast',
        url: 'http://www.gravatar.com/avatar/'
    },
    build: function() {
        this.getGravatar({ success: this.placeGravatar });
    },
    getGravatar: function(opts) {
        console.log('Get gravatar');
        this.options.url = this.options.url +
            $.md5(this.options.email) +
            '.jpg?' +
            (this.options.size ? 's=' + this.options.size + '&' : '') +
            (this.options.rating ? 'r=' + this.options.rating + '&' : '') +
            (this.options.image ? 'd=' + encodeURIComponent(this.options.image) : '') +
        $.ajax({
            url: this.options.url,
            success: $.proxy(opts.success, this)
        });
    },
    placeGravatar: function() {
        console.log('Place gravatar');
        this.$elem.animate({
            opacity: 0
        }, this.options.speed, $.proxy(function() {
            this.$elem.attr('src', this.options.url);
            this.$elem.animate({
                opacity: 1
            }, this.options.speed);
        }, this));
    }
}

})(jQuery);
