const signInBtn = document.querySelector('#sign-in')
const tabBtn = document.querySelector('.tab')
const  tabContent = document.querySelector('.tab__content')
const  tab = document.querySelector('.tab')
const aboutUsBtn = document.querySelector('#about-us')
aboutUsBtn.addEventListener('click',showMenu) 
 function showMenu(){
    aboutUsBtn.insertAdjacentHTML('afterend',     `
    <div class="modal-wrapper">
                    <nav class="dropdown__menu ">
                        <ul class="dropdown__menu_list">
                            <li class="dropdown__menu_item">
                                <a class="dropdonw__menu_link" href="">
                                    О компании
                                </a>
                            </li>
                            <li class="dropdown__menu_item">
                                <a class="dropdonw__menu_link" href="">
                                    Блог                           
                                 </a>
                            </li>
                            <li class="dropdown__menu_item">
                                <a class="dropdonw__menu_link" href="">
                                    Партнеры                       
                                     </a>
                            </li>
                            <li class="dropdown__menu_item">
                                <a class="dropdonw__menu_link" href="">
                                    Связаться с нами
                                </a>
                            </li>
                             <li class="dropdown__menu_item">
                                <a class="dropdonw__menu_link" href="">
                                    Как это работает
                                </a>
                            </li>
                            <li class="dropdown__menu_item">
                                <a class="dropdonw__menu_link" href="">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </nav>
                 </div>
    `)
}
tabBtn.addEventListener('click', function(){
    showTab()
})
function showTab(){
    tabContent.classList.add('active')
    document.onkeydown = function(e){
        if(e.keyCode == 27){
            tabContent.classList.remove('active')
        }
    }
}
tabBtn.ondblclick = hideTab
function hideTab(){
    tabContent.classList.remove('active')

}

signInBtn.onclick = function(){
    document.location.href = "sign-in.html";
}
