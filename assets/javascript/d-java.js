//variables for the search parameters
var searchInput = $("#searchTerm").val();
var recordNum = $("#number-of-records").val();
var startYear = $("#start-year").val();
var endYear = $("#end-year").val();


//API + AJAX query
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
queryURL += '?' + $.param({
    'api-key': "e5e45bfc549a45c4a54e70b4945d102b",
    'q': searchInput,
    'begin-date': startYear,
    'end-date': endYear,
    'page': recordNum});




$("#search-button").on("click", function(event){

    var searchInput = $("#searchTerm").val();
    var recordNum = $("#number-of-records").val();
    var startYear = $("#start-year").val();
    var endYear = $("#end-year").val();
    
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
        'api-key': "e5e45bfc549a45c4a54e70b4945d102b",
        'q': searchInput,
        'begin-date': startYear,
        'end-date': endYear,
        'page': recordNum});

        console.log(queryURL) 
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(article){
        var results = article.response.docs
        
         console.log(results[0].snippet)

        if(recordNum == 1){
            var articleDiv = $("<div>");
            articleDiv.append("<h4>" + results[0].snippet + "<h4>")

            console.log(articleDiv)
            $("#show-results").append(articleDiv)
        }
    });

    })

    $("#clear-results").on("click", function(event){
        $("#show-results").empty()
    })