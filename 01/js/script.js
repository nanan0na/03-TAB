$(function () {
  // 대상을 변수에 저장
  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');

  // 초기 세팅
  tabAction(0);

  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    let idx = $(this).index();

    tabAction(idx);
  });

  // 중복되는 동작을 함수로 정의
  function tabAction(index) {
    $tabContent.hide();
    $tabContent.eq(index).show();

    $tabMenu.removeClass('on');
    $tabMenu.eq(index).addClass('on');
  }
});
