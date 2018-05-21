define([], function() {

    var Sidemenu = function() {
        this.$body = $("body"),
            this.$openLeftBtn = $(".open-left"),
            this.$menuItem = $("#sidebar-menu a")
    };
    //整体菜单收缩功能
    Sidemenu.prototype.openLeftBar = function() {
        $("#wrapper").toggleClass("enlarged");
        $("#wrapper").addClass("forced");

        if($("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left")) {
            $("body").removeClass("fixed-left").addClass("fixed-left-void");
        } else if(!$("#wrapper").hasClass("enlarged") && $("body").hasClass("fixed-left-void")) {
            $("body").removeClass("fixed-left-void").addClass("fixed-left");
        }

        if($("#wrapper").hasClass("enlarged")) {
            $(".left ul").removeAttr("style");
        } else {
            $(".subdrop").siblings("ul:first").show();
        }
        toggle_slimscroll(".slimscrollleft");
        $("body").trigger("resize");

    },
    //左侧菜单伸缩展开
    Sidemenu.prototype.menuItemClick = function(e) {
        if(!$("#wrapper").hasClass("enlarged")){
            if($(this).parent().hasClass("has_sub")) {
                e.preventDefault();
            }
            if(!$(this).hasClass("subdrop")) {
                // hide any open menus and remove all other classes
                $("ul",$(this).parents("ul:first")).slideUp(350);
                $("a",$(this).parents("ul:first")).removeClass("subdrop");
                $("#sidebar-menu .pull-right i").removeClass("fa-angle-down").addClass("fa-angle-right");
                 
                // open our new menu and add the open class
                $(this).next("ul").slideDown(350);
                $(this).addClass("subdrop");
                var index = $(this).attr("index");
                if(index != "" && index != undefined ){
                    $(".pull-right-"+index+" i",$(this).parents(".has_sub:last")).removeClass("fa-angle-right").addClass("fa-angle-down");
                }else{
                    $(".pull-right i",$(this).parents(".has_sub:last")).removeClass("fa-angle-right").addClass("fa-angle-down");
                }
                $(".pull-right i",$(this).siblings("ul")).removeClass("fa-angle-down").addClass("fa-angle-right");
            }else if($(this).hasClass("subdrop")) {
                $(this).removeClass("subdrop");
                $(this).next("ul").slideUp(350);
                $(".pull-right i",$(this).parent()).removeClass("fa-angle-down").addClass("fa-angle-right");
            }
        }
    },
    
    Sidemenu.prototype.init = function() {
        var $this  = this;
        //bind on click
        $(".subdrop2").click(function(e) {
        	if($(this).hasClass("list-click")&&$(this).hasClass("highlight")){
        		$(this).parent().siblings().children().removeClass("list-click");
            	$(this).removeClass("list-click");
            	$(this).removeClass("highlight");
        	}else{
        		$(this).parent().siblings().children().removeClass("list-click");
            	$(this).addClass("list-click");	
            	$(this).addClass("highlight");
            	
            	$(this).addClass("list-out");
            	var thic=$(this);
            	setTimeout(function(){
            		thic.removeClass("list-out");
            	}, 500);
        	}
        });
       
        
        $(".open-left").click(function(e) {
            if($(".user-box").css("display")=="none"){
            	$(".user-box").css("display","block"); 
            }else{
            	$(".user-box").css("display","none"); 
            }    
            
            e.stopPropagation();
            $this.openLeftBar();
        });
          
        // LEFT SIDE MAIN NAVIGATION
        $this.$menuItem.on('click', $this.menuItemClick);
        // NAVIGATION HIGHLIGHT & OPEN PARENT
        $("#sidebar-menu ul li.has_sub a.active").parents("li:last").children("a:first").addClass("active").trigger("click");
    }

    /********************************/

    //整屏效果
    var FullScreen = function() {
        this.$body = $("body"),
        this.$fullscreenBtn = $("#btn-fullscreen")
    };

    //turn on full screen
    // Thanks to http://davidwalsh.name/fullscreen
    FullScreen.prototype.launchFullscreen  = function(element) {
        if(element.requestFullscreen) {
            element.requestFullscreen();
        } else if(element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if(element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if(element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    },
    FullScreen.prototype.exitFullscreen = function() {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        }
    },
    //toggle screen
    FullScreen.prototype.toggle_fullscreen  = function() {
        var $this = this;
        var fullscreenEnabled = document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled;
        if(fullscreenEnabled) {
            if(!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement && !document.msFullscreenElement) {
                $this.launchFullscreen(document.documentElement);
            } else{
                $this.exitFullscreen();
            }
        }
    },
    //init sidemenu
    FullScreen.prototype.init = function() {
        var $this  = this;
        //bind
        $this.$fullscreenBtn.on('click', function() {
            $this.toggle_fullscreen();
        });
    }

    function toggle_slimscroll(item){
        if($("#wrapper").hasClass("enlarged")){
            $(item).css("overflow","inherit").parent().css("overflow","inherit");
            $(item). siblings(".slimScrollBar").css("visibility","hidden");
        }else{
            $(item).css("overflow","hidden").parent().css("overflow","hidden");
            $(item). siblings(".slimScrollBar").css("visibility","visible");
        }
    }
    function initscrolls(){
        //SLIM SCROLL
        $('.slimscroller').slimscroll({
            height: 'auto',
            size: "5px"
        });
        $('.slimscrollleft').slimScroll({
            height: 'auto',
            position: 'right',
            size: "5px",
            color: '#7A868F',
            wheelStep: 5
        });
    }
    var jqeruyApp=function (){
        var $this  = this;
        $this.sidemenu=new Sidemenu();
        $this.fullScreen=new FullScreen();
        $(window).resize(function(){
            initscrolls();
        });
    };
    jqeruyApp.prototype.init=function(){
        this.sidemenu.init();
        this.fullScreen.init();
        initscrolls();
    };
    return jqeruyApp;
});