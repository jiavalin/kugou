/**
 * Created by Administrator on 2018/8/6 0006.
 */
window.onload= function () {
    Vue.component('top-hd',{
        template: '<div class="top-hd"><a href="/index.html" class="logo"></a> <div class="download_app">下载酷狗</div> <a href="/search.html" class="search_btn"></a> </div>'
    });
    Vue.component('top-nav',{
        data: function () {
            return {
                navList:[
                    {url:"/", title:"新歌"},
                    {url:"/rankList.html", title:"排行"},
                    {url:"/plist.html", title:"歌单"},
                    {url:"/singer.html", title:"歌手"}
                ],
                url:location.pathname
            }
        },
        props: ["active"],
        template: '<div class="top-nav"> <ul class="clear"> <li v-for="nav in navList"><a :href="url==nav.url?\'javascript:;\':nav.url" :class="{act_a:url==nav.url}">{{nav.title}}</a></li> </ul> </div> '
    });
    new Vue({
        el: "#header"
    });
    $(".search-keyword").focus(function (event) {
        $(".search-btn").addClass("active_search_btn");
    });
    $(".search-keyword").keydown(function () {
        if(event.which == 13){
            $(".search-btn").click();
        }
    });
    $(".search-keyword").blur(function () {
        $(".search-btn").removeClass("active_search_btn");
    });
};
