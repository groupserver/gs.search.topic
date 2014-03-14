"use strict";jQuery.noConflict();function gs_search_topics_site_homepage(){var b="#gs-search-topic-site-home-search",a=null;
a=GSSearch(b,"/s/search.ajax",0,10,{},null);jQuery("#gs-site-home-activity-tabs li:first-child a").click();
a.load()}jQuery(document).ready(function(){gsJsLoader.with_module("/++resource++gs-search-base-js-min-20140313.js",gs_search_topics_site_homepage)
});