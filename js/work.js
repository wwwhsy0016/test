$(document).ready(function(){
    const tabMenu = $('.tabMenu li'),
          tabSlider = $('.tabs > div')
          console.log(tabSlider)
    tabMenu.click(function(){
        tabMenu.removeClass('active')
        $(this).addClass('active')
        tabSlider.hide();
        let targetIdx = $(this).index();
        tabSlider.eq(targetIdx).show();
    })
    tabMenu.eq(0).trigger('click') 
    
    
      $('.swiper-slide').click(function(){
          $('.modal').addClass('show')
          $('.modal').append( `
          <div class="item_box">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data('video')}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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

      $('.tabMenu li').click(function(){
        $('.tabMenu li').removeClass('on')
        $(this).addClass('on')

      })
      

})
new Swiper(".sw-gallery1", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    
      },
      navigation: {
        nextEl: ".button-n",
        prevEl: ".button-p",
      },
  });
new Swiper(".sw-gallery2", {
    effect: "cards",
    grabCursor: true,
    // slidesPerView: 6,
    loop:true,
  });





