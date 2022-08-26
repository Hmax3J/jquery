$('#myId') // <div id='myId'></div> 같은 것들이 return 된다.

// 과제: class myClass DOM들을 찾아라.
$('.myClass')

// 과제: name attribute value 가 surname 인 input DOM 들을 찾아라.
$('input[name="surname"]') // <input name='surname'/>

$('#contents ul.people li') // li를 전부 return 한다. collection 이라 그렇다. 집합이다.
// 위 selector 에 해당하는 HTML code 를 작성하라.
/*
<div id='contents'>
    <ul class='people'>
        <li></li>
        <li></li>
    </ul>
</dlv>
*/

$('a.external:first') // 마지막은 last로 찾는다.
/*
<a class='external'></a>
<a class='external'></a>
*/

$('li:odd') // 홀수 번째 li를 return 한다. 카운트는 0부터 시작한다. 그래서 2, 4번째 li가 return 된다.
/*
<ul>
    <li></li>
    <li></li> --
    <li></li>
    <li></li> --
</ul>
*/

$('div:visible') // 화면에 출력되어 있는 보이는 객체들만 찾는다.

$('div:gt(1)') // 1은 collection안에 들어갈 원소의 index다. 1보다 큰 인덱스를 collection에 return 한다.
/* 미만을 찾으려면 lt로 찾는다.
<div></div>
<div></div>
<div></div> --
*/

$('div:animated') // 현재 동작중인 것을 선택한다.

$('a[rel$="thinger"]') // rel이 thinger로 끝나는 것을 return 한다.
/*
<a rel='do-nothinger'></a>
<a rel='so-thinger'></a>
*/

$('div.foo').has('p') // collection 안에 들어있는 것 중에 자식으로 p를 가지고 있는 것만 return 한다. 필터링 한다.
/*
<div class='foo'> --
    <p></p>
</div>
<div class='foo'>
</div>
*/

$('ul li').filter('.current') // li 중에서 current class가 붙어있는 것만 return 한다. 속성을 가지고 있는 것을 return한다. collection return
/*
<ul>
    <li class='current'></li>
    <li></li>
</ul>
*/

$('ul li').not('.current') // current class를 가지고 있지 않은 것을 return 한다. collection return

$('ul li').eq(1) // 1번 인덱스에 있는 것을 찾아내고 싶다. 하나만 찾는다. collection return


$('form :button')
/*
    <form>
        <button></button>
        <input type='button'>
    </form>
*/

$('form :radio') // <input type='radio'/>
$('form :checkbox') // <input type='checkbox'/>

$('form :checked') // 체크되어 있는 것이 return 된다.
/*
<input type='radio'/>
<input type='checkbox'/>
<select><option></option></select>
*/

$('form :selected')
/*
<select><option></option></select>
*/

$('form :enabled') // 기본값은 enabled다.
$('form :diabled')

$('form :file')

$('form :input')
/*
<input type='text'/>
<textarea></textared>
<select></select>
<button type='submit'></button> button은 type='button', type='reset'도 있다.
*/

$('form :text') // <input type='text'/>

$('form :password') // <input type='password'/>

$('form input[name="gender"]:radio') // 자식이 아니다. 내가 가지고 있는 것
// 과제: 위 selector 에 해당하는 HTML code 를 작성하라.
/*
<input name='gender' type='radio'/>
*/

$('form: reset') // <input type='reset'/>

$('form: submit') // <input type='submit'/>