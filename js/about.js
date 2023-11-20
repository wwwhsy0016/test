$(document).ready(function(){
    $('.interview-btn img').click(function(){
        $('.modal').addClass('show')
        $('.modal').append( `
        <div class="item_box">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/94OOi5IfUfc?si=hCZnIdbkimqsDMgs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>`)
    })
    $('.modal .dim').click(function(){
        $('.modal').removeClass('show')
        $('.modal .item_box').remove();
    })
    $('.interview-btn img').mouseover(function(){
        $(this).attr('src',$(this).data('animated'))
        //img 태그에 넣어둔 경로 값으로 바꿔줌
    })
    $('.interview-btn img').mouseout(function(){
        $(this).attr('src',$(this).data('static'))

    })
    
})