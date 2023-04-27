// // 1. DOM API
// // HTML 요소 1개 검색 (제일 첫번째만)
// const boxEL = document.querySelector('.box');

// // HTML 요소 적용 메소드
// boxEL.addEventListener();

// // argument 추가 가능
// boxEL.addEventListener(1,2);

// // eg) 이벤트 핸들러
// boxEL.addEventListener('click', function() {
//   console.log('Click!');
// })

// eg1)
// let boxEL = document.querySelector('.box');

// console.log(boxEL);

// boxEL.addEventListener('click', function () {
//   console.log('click!');
// })

// eg2)
// const boxEL = document.querySelector('.box');

// boxEL.classList.add('active');
// let isContains = boxEL.classList.contains('active');
// console.log(isContains);

// boxEL.classList.remove('active');
// isContains = boxEL.classList.contains('active');
// console.log(isContains);

// eg3)
// const boxELs = document.querySelectorAll('.box');
// console.log(boxELs);

// boxELs.forEach(function (boxEL, index) {
//   boxEL.classList.add(`order-${index+1}`);
//   console.log(index, boxEL);
// })

// eg4)
// const boxEL = document.querySelector('.box');
// console.log(boxEL.textContent);

// boxEL.textContent = 'heropy!';
// console.log(boxEL.textContent);

