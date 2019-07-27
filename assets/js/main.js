$(document).ready(function() {
  //   $('.main').on('click', function() {
  //     console.log('test');
  //   });

  //   function clickFunction(e) {
  //     // console.log($(this));
  //   };
  //   [{
  //     color: 'black',
  //     width: '150px',
  //   }]

  //   ['black', 'white', 'red']

  //   $('.main .child').on("click", clickFunction)

  //   $('.main .child').off('click', clickFunction)

  //   $('.child').css({
  //     'background-color': "black",
  //     'width': "200px",
  //   });

  //   function findAllParents(childNode, selector) {
  //     const nodes = [];
  //     let currentRoot = childNode;
  //     while (currentRoot.closest(selector).length !== 0) {
  //       //   console.log(currentRoot);
  //       nodes.push(currentRoot.closest(selector));
  //       currentRoot = currentRoot.closest(selector);
  //     }

  //     // console.log(nodes);
  //   }

  //   findAllParents($('.grand-child'), '.main');

  //   console.log($('.child').closest('.main').closest('.main').length);

  //   console.log($('.child').find('.grand-child'));

  //   console.log($('.main').children());

  //   console.log($('.child').next());

  //   $('.child').each((index, item) => {
  //     console.log(index, item);
  //   })

  //   document.querySelectorAll('.child').forEach((item) => {
  //     item.style.backgroundColor = 'black';
  //   })

  const styles = [{
      'width': '150px',
      'background-color': 'white',
    },
    {
      'width': '200px',
      'background-color': 'black',
    },
    {
      'width': '250px',
      'background-color': 'red',
    }
  ];

  $('.row').each((i, row) => {
    $(row).children('.child').each((j, child) => {
      $(child).attr('data-transformed', '0');
      if (styles[j]) {
        $(child).css(styles[j % 3]);
      }
    })
  });

  $('.row .child').click(function(e) {
    const previuosRotation = $(this).attr('data-transformed');
    const nextRotation = Number(previuosRotation) + 360;

    $(this).css('transform', `rotate(${nextRotation}deg)`);
    $(this).attr('data-transformed', nextRotation);
  });

  $(window).scroll(function() {
    const $header = $('header');
    const headerHeight = $header.innerHeight();
    const scrollTop = $(window).scrollTop();

    if (scrollTop >= headerHeight) {
      $header.addClass('scrolled');
    } else {
      $header.removeClass('scrolled');
    }

    const sectionHeight = $('#main-top').innerHeight();
    const delta = 1 - (scrollTop / sectionHeight);
    $('.top-title').css('opacity', delta);
  });
});
