'use strict';
// Topic list for the site homepage
//
// Copyright © 2013, 2014, 2016 OnlineGroups.net and Contributors.
// All Rights Reserved.
//
// This software is subject to the provisions of the Zope Public License,
// Version 2.1 (ZPL). http://groupserver.org/downloads/license/
jQuery.noConflict();

function gs_search_topics_site_homepage() {
    var searchId = '#gs-search-topic-site-home-search', topicSearch = null;
    topicSearch = GSSearch(searchId, '/s/search.ajax', 0, 10, {}, null);
    jQuery('#gs-site-home-activity-tabs li:first-child a').click();
    topicSearch.load();
}
jQuery(document).ready(function() {
    gsJsLoader.with_module('/++resource++gs-search-base-js-min-20140313.js',
                           gs_search_topics_site_homepage);
});
