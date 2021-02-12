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
    const  modalOffer = document.querySelector('.offer-modal')
    const  sendInput = document.querySelector('.modal-offer__btn')
    const btnModalOffer3 = document.querySelector('.modal-offer-2__btn')
    const btnId = document.querySelector('.input__link')
    const backBtn = document.querySelector('.modal-id__btn')
    const modalId = document.querySelector('.modal-id')
    modal.parentElement.classList.remove('hide')
    modal.classList.remove('hide')
    backBtn.addEventListener('click',function(){
            closeModalId()
            showOfferModal()
    })
    btnId.addEventListener('click',showModalId)
    
    document.onkeydown = function(e){
        if(e.keyCode == 27){
            modal.parentElement.classList.add('hide')
            modal.classList.add('hide')
        }
    }
    offer.onclick = showOfferModal
    function showOfferModal(){
        closeModal()
        btnModalOffer3.addEventListener('click',showOfferModal3)
        modalOffer.classList.remove('hide')
        modalOffer.parentElement.classList.remove('hide')
       sendInput.addEventListener('click',showOfferModal2)
    }
    function closeOfferModal(){
        modalOffer.classList.add('hide')
        modalOffer.parentElement.classList.add('hide')
    }
    function showOfferModal2(){
        closeOfferModal()
        const  modal2 = document.querySelector('.modal-offer-2')
        modal2.parentElement.classList.remove('hide')
        modal2.classList.remove('hide')
    }
    function hideOfferModal2(){
        const  modal2 = document.querySelector('.modal-offer-2')
        modal2.parentElement.classList.add('hide')
        modal2.classList.add('hide')
    }
    function showOfferModal3(){
        hideOfferModal2()
        const modal3 = document.querySelector('.modal-offer-3')
        modal3.parentElement.classList.remove('hide')
        modal3.classList.remove('hide')
    }
    function showModalId (){
        closeOfferModal()
        modalId.parentElement.classList.remove('hide')
        modalId.classList.remove('hide')
}
    function closeModalId(){
        modalId.parentElement.classList.add('hide')
        modalId.classList.add('hide')
    }
        hideTab()
}
function closeModal(){
    modal.parentElement.classList.add('hide')
    modal.classList.add('hide')
}

