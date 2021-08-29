const myModal1 = document.querySelector(".footer")

function myModal() {
    myModal1.insertAdjacentHTML('afterend', `<div id="modal" class="modal">

<!-- Modal content -->
<div class="modal-content">
  <div class="modal-header">
    <span class="close" id='close'>&times;</span>
    <h4>Добро пожаловать на сайт!</h4>
  </div>
  <div class="modal-body">
    <h6>Это всплывающее окно.</h6>
  </div>
  <div class="modal-footer">
  </div>
</div>

</div>`)
}

export default myModal;

