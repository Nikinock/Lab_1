import * as $ from 'jquery'
import * as bootstrap from 'bootstrap'

var modal = new bootstrap.Modal($(".modal"));
var modal_card_now = $('.card');

function fillModal(source){
    modal.hide()
    $(document).find($('.modal-header')).html(source.find('.card-title').text());
    $(document).find($('.modal-body')).html(source.find('.card-text').text());
    modal_card_now = source;
}

function modal_next(){
    if(modal_card_now.parent().next().children().length == 0){
        fillModal(modal_card_now.parent().parent().children().first().children());
    } else {
        fillModal(modal_card_now.parent().next().children());
    }
    modal = new bootstrap.Modal($(".modal"));
    modal.show();
}

function modal_prev(){
    if(modal_card_now.parent().prev().children().length == 0){
        fillModal(modal_card_now.parent().parent().children().last().children());
    } else {
        fillModal(modal_card_now.parent().prev().children());
    }
    modal = new bootstrap.Modal($(".modal"));
    modal.show();
}

$("#load-toast").on('click', function(e) {
    var toast = new bootstrap.Toast($(".toast"))
    toast.show();
})

$(".card").on('click', function(e) {
    fillModal($(this));
    console.log($(this))
    modal = new bootstrap.Modal($(".modal"));
    modal.show();
})

$(".btn-next").on('click', function(e) {
    modal_next();
})

$(".btn-pre").on('click', function(e) {
    modal_prev();
})

$(document).keydown(function (e) { 
        if (e.key === 'ArrowLeft'){
        modal_next();
    } else if (e.key === 'ArrowRight'){
        modal_prev();
    }
})