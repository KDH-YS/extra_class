;
var tabMenuLi = document.querySelectorAll('.tab_menu li');
var tabListUl = document.querySelectorAll('.tab_list ul');
var _loop_1 = function (i) {
    tabMenuLi[i].addEventListener('click', function () {
        tabMenuLi[i].classList.add('on');
        tabListUl[i].classList.add('on');
    });
};
for (var i = 0; i < tabMenuLi.length; i++) {
    _loop_1(i);
}
