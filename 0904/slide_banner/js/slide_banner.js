$(function(){
  var visual = $('#brandVisual > ul > li'); //큰사진
  var button = $('#buttonList > li'); //pager 버튼
  var current = 0;
  var id;


  button.click(function(){

    var i = $(this).index(); // 클릭한 버튼의 인덱스 번호를 i 에 반환(대입)
    //alert(i);
    button.removeClass('on'); //모든 버튼에서 클래스 on 이 있으면 제거
    $(this).addClass('on');
    //button.eq(i).addClass('on');
    move(i);
    return false;
  });
function timer(){
  id = setInterval(function(){
    var n = current + 1;
    if(n===3) {n = 0;}
    button.eq(n).trigger('click'); 
    // 인덱스 번호 n 에 해당되는 버튼을 컴퓨터가 클릭한다. 

  },3000);

}
timer();

  function move(i){
      if(current == i) return;
      //현재 활성화죈 button(검정색버튼)과 클릭한 버튼이 같으면 move를 빠져나감
      var cu = visual.eq(current);
      var ne = visual.eq(i);
      cu.css('left','0').stop().animate({'left':'-100%'},500);
      ne.css('left','100%').stop().animate({'left':'0'},500);
      current =  i;
  }


});