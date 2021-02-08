const offerBtn = document.querySelector('#offer-btn')
const closeBtn = document.querySelector('.close-btn')
const  introBtn = document.querySelector('.intro__btn')
const   offer  = document.querySelector('#show-offer-modal')
const modal = document.querySelector('.modal')



introBtn.addEventListener('click',function(){
    let modalTitle = document.querySelector('.modal__title')
    modalTitle.innerHTML  = 'Отследить заказ'
    openModal()
})

offerBtn.addEventListener('click',openModal)
closeBtn.addEventListener('click',closeModal)
function openModal(){
    modal.parentElement.classList.remove('hide')
    modal.classList.remove('hide')
    document.onkeydown = function(e){
        if(e.keyCode == 27){
            modal.parentElement.classList.add('hide')
            modal.classList.add('hide')
        }
    }
    offer.onclick = showOfferModal
    function showOfferModal(){
        closeModal()
        const  modalOffer = document.querySelector('.offer-modal')
        const  sendInput = document.querySelector('.modal-offer__btn')
        sendInput.addEventListener('click' , checkInputs)
        modalOffer.classList.remove('hide')
        modalOffer.parentElement.classList.remove('hide')
        function checkInputs(){
            const inputs = document.querySelectorAll('.modal-offer__input')
            inputs.forEach((item)=>{
             let inputValue = item.value
                if( inputValue.length  >= 6 ){
                        showModal2()
                } else if ( inputValue.length <= 5 ) {
                    alert('введите значение')
                }
            }) 
        }
        function showModal2(){
            const  modal2 = document.querySelector('.modal-offer-2')
            modal2.parentElement.classList.remove('hide')
            modal2.classList.remove('hide')
        }
    }
    hideTab()
}
function closeModal(){
    modal.parentElement.classList.add('hide')
    modal.classList.add('hide')
}

