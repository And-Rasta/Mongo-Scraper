$(document).ready(() => {
    const saveArticleClick = (event) => {
        const {title, url } = event.target;
        const article = {
            title: title,
            url: url
        };
         
        $.ajax({
            url: '/api/addArticle',
            method: "POST",
            data: article,
            success: (response) => {
                showModal("Article Added.", response);
            }
        })
    };
    
    const showModal = (title, body) => {
        $("#modal-title").text(title);
        $("#modal-body").html(body);
        $("#alert-modal").modal();
    }
    $("#scrape-articles").on("click", () => {
        $.ajax({
            url: '/scrape',
            method: "GET",
            contentType: "text/html",
            success: (data) => {
                $("#article-list").html(data);
                showModal("You've got articles!", '<p>New articles added.</p><p>Please save the articles you wish to keep.</p>');
            }   
        })
    });

    $("#article-list").on("click", ".save-button", saveArticleClick)
})