//variables for the search parameters
var searchInput = $("#searchTerm").attr("searchInput");
var startYear;
var endYear;
var recordNum;

function searchTerm(input){
    var searchInput = input
}; 

//API + AJAX query
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
    'api-key': "e5e45bfc549a45c4a54e70b4945d102b",
    'q': searchInput,
    'begin-date': startYear,
    'end-date': endYear,
    'page': recordNum});

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(article){
    var results = article.data
    var articleDiv = $("<div>");
    console.log(results)
});
