$(function () {
  // 대상을 변수에 저장
  const $tabMenu = $('.tab-menu > li');
  const $tabContent = $('.tab-con-item');
  console.log($tabMenu, $tabContent);

  // 초기 세팅 : 탭 콘텐츠가 첫번째만 빼고 다 숨겨져 있어야 한다
  $tabContent.hide();
  $tabContent.eq(0).show();

  // 초기 세팅 : 첫 번째 탭메뉴에 on클래스 부여
  $tabMenu.eq(0).addClass('on');

  // 탭메뉴를 클릭했을 때
  $tabMenu.on('click', function () {
    // 모든 탭메뉴에서 on클래스 삭제
    $tabMenu.removeClass('on');

    // 클릭한 탭메뉴에 on클래스 부여 --> 인덱스 이용
    // 클릭한 메뉴의 인덱스를 구해서 : index()
    let idx = $(this).index();

    // 인덱스에 해당하는 메뉴에 on클래스 부여
    $tabMenu.eq(idx).addClass('on');

    // 모든 탭 콘텐츠를 다 숨기고
    $tabContent.hide();
    // 클릭한 탭메뉴 인덱스에 해당하는 탭 콘텐츠만 보이게
    $tabContent.eq(idx).show();
  });
});
