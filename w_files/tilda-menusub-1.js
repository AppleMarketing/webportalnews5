function t_menusub_init(t){$("#rec"+t+" .t-menusub").each(function(){var e=$(this).attr("data-submenu-hook");if(void 0!==e&&""!=e){var n="",u=!1;$("#rec"+t+" a.t-menu__link-item").each(function(){$(this).attr("data-menu-submenu-hook")&&(u=!0)}),n=u?$('a[data-menu-submenu-hook="'+e+'"]'):$('a[href="'+e+'"]'),n.addClass("t-menusub__target-link"),n.attr("data-tooltip-menu-id",t),t_menusub_add_arrow(t,n,e),t_menusub_set_up_menu(t,n,e),t_menusub_highlight()}}),$(window).bind("resize",function(){isMobile||$("#rec"+t+" .t-menusub").each(function(){t_menusub_hide_submenu($(this).find(".t-menusub__menu"))})}),$(window).bind("orientationchange",function(){isMobile&&$("#rec"+t+" .t-menusub").each(function(){t_menusub_hide_submenu($(this).find(".t-menusub__menu"))})})}function t_menusub_set_up_menu(t,e,n){var u=$("#rec"+t+' .t-menusub[data-submenu-hook="'+n+'"] .t-menusub__menu'),s=u.find(".t-menusub__content");isMobile?t_menusub_set_up_menu_mobile(t,e,u):t_menusub_set_up_menu_desktop(t,e,u,n),$(window).bind("scroll",t_throttle(function(){s.hover(function(){},function(){isMobile||u.hasClass("t-menusub__menu_show")&&t_menusub_hide_submenu(u)})},300))}function t_menusub_open_inME401(t){var e=t.find(".t280__menu__wrapper");e.hasClass("t280__menu_static")||(t.find(".t280__menu").css("transition","none"),t.find(".t280__bottom").css("transition","none"),t.find(".t280__menu__wrapper").addClass("t280__menu_static"))}function t_menusub_close_inME401(t){var e=t.find(".t280__menu__wrapper");e.hasClass("t280__menu_static")&&t.find(".t280__menu__wrapper").removeClass("t280__menu_static")}function t_menusub_set_up_menu_mobile(t,e,n){var u=$("#rec"+t+" .t-menusub").attr("data-submenu-margin");e.on("click",function(e){if($(window).width()>980&&$("#rec"+t+" .t-menusub__menu").each(function(){t_menusub_hide_submenu($(this))}),n.hasClass("t-menusub__menu_show"))t_menusub_hide_submenu(n);else{var s=$(this);t_menusub_show(s,n,u);var _=$(this).parents(".t280"),a=t_menusub_is_mobile_ME401(_);t_menusub_is_static_ME401(_);var i=_.find(".t280__menu__wrapper").attr("data-submenu-static");"n"==i&&_.length>0&&a&&t_menusub_open_inME401(_)}e.preventDefault()}),$(document).click(function(e){var u,s=$(e.target).hasClass("t-menusub__menu")||$(e.target).parents(".t-menusub__menu").length>0,_=$(e.target).hasClass("t-menusub__target-link")||$(e.target).parents(".t-menusub__target-link").length>0;_&&(u=$(e.target).hasClass("t-menusub__target-link")?$(e.target):$(e.target).parents(".t-menusub__target-link"),u.attr("data-tooltip-menu-id")!=t&&n.hasClass("t-menusub__menu_show")&&t_menusub_hide_submenu(n));s||_||!n.hasClass("t-menusub__menu_show")||t_menusub_hide_submenu(n)})}function t_menusub_set_up_menu_desktop(t,e,n,u){var s,_=$("#rec"+t+" .t-menusub").attr("data-submenu-margin");e.add(n).on("mouseover",function(){if((!$(this).hasClass("t-menusub__menu")||$(this).hasClass("t-menusub__menu_show"))&&(clearTimeout(s),!$(this).hasClass("t-menusub__menu")||!n.hasClass("t-menusub__menu_show"))){var t=$(this);t_menusub_show(t,n,_)}}),e.add(n).on("mouseout",function(){s=setTimeout(function(){t_menusub_hide_submenu(n)},300)}),e.on("click auxclick",function(t){t.preventDefault()})}function t_menusub_show(t,e,n){var u=e.outerHeight(),s=e.outerWidth(),_=t.height(),a=t.outerWidth(),i=parseInt(t.css("margin-left")),m=$(window).height(),o=$(window).width(),r=$(window).scrollTop(),b=t.position().left;void 0!==n&&""!=n&&(n=1*n.replace("px",""),n+=10);var d=t.position().top+_+n,h=b;d+u>r+m?(d=Math.max(d-u-_-2*n,r),e.removeClass("t-menusub__menu_bottom").addClass("t-menusub__menu_top")):e.removeClass("t-menusub__menu_top").addClass("t-menusub__menu_bottom"),$(window).width()<=980&&(d=0),h+s/2<o?(h=h+(a-s)/2+i,h<0&&(h=10)):h=o-s-10,e.css({display:"block",left:h,top:d}),e.offsetHeight,e.addClass("t-menusub__menu_show"),t.addClass("t-menusub__target-link_active")}function t_menusub_hide_submenu(t){var e=t.parents(".t280"),n=t_menusub_is_mobile_ME401(e);t.css({display:"",left:"",top:""}),t.removeClass("t-menusub__menu_show"),$(".t-menusub__target-link_active").removeClass("t-menusub__target-link_active");var u=e.find(".t280__menu__wrapper").attr("data-submenu-static");"n"==u&&isMobile&&n&&t_menusub_close_inME401(e)}function t_menusub_add_arrow(t,e,n){var u=$("#rec"+t+' .t-menusub[data-submenu-hook="'+n+'"]').attr("data-add-submenu-arrow");void 0!==u&&""!=u&&e.each(function(){$(this).append('<div class="t-menusub__arrow"></div>')})}function t_menusub_highlight(){var t=window.location.href,e=window.location.pathname;"/"==t.substr(t.length-1)&&(t=t.slice(0,-1)),"/"==e.substr(e.length-1)&&(e=e.slice(0,-1)),"/"==e.charAt(0)&&(e=e.slice(1)),""==e&&(e="/"),$('.t-menusub__list-item a[href="'+t+'"]').addClass("t-active"),$('.t-menusub__list-item a[href="'+t+'/"]').addClass("t-active"),$('.t-menusub__list-item a[href="'+e+'"]').addClass("t-active"),$('.t-menusub__list-item a[href="/'+e+'"]').addClass("t-active"),$('.t-menusub__list-item a[href="'+e+'/"]').addClass("t-active"),$('.t-menusub__list-item a[href="/'+e+'/"]').addClass("t-active")}function t_menusub_is_static_ME401(t){t.find(".t280__menu__wrapper").hasClass("t280__menu_static")||t.find(".t280__menu__wrapper").attr("data-submenu-static","n")}function t_menusub_is_mobile_ME401(t){var e=t.find(".t280__menu").height(),n=t.find(".t280__bottom").height(),u=t.find(".t280__container").height(),s=$(window).height()-n-u-40;return e>s}