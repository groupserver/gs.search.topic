jQuery.noConflict() 

function gs_search_topics_site_homepage () {
    var searchId = '#gs-search-topic-site-home-search'
    var topicSearch = GSSearch(searchId, '/s/search.ajax', 0, 10, {}, 
                               null);
    jQuery('#gs-site-home-activity-tabs li:first-child a').click();
    topicSearch.load();
}
jQuery(document).ready( function () {
    gsJsLoader.with_module('/++resource++gs-search-base-js-min-20121217.js',
                           gs_search_topics_site_homepage);
});
