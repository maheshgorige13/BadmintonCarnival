$(document).ready(function () {
    myFunction();
    $(window).scroll(function () {
        myFunction();
    });
});

function myFunction() {
    var header = document.getElementById("Header");
    var body = document.getElementById("Body");
    var sticky = header.offsetTop;
    if ($(this).scrollTop() > 0) {
        header.classList.add("sticky");
        body.classList.add("sticky");

    } else {
        header.classList.remove("sticky");
        body.classList.remove("sticky");
    }
}

function OpenBookPopup() {
    if (document.getElementById('BookNowPopup').getAttribute('class') == 'PopupHldr') {
        document.getElementById('BookNowPopup').setAttribute('class', 'PopupHldr Active');
    }
    else {
        document.getElementById('BookNowPopup').setAttribute('class', 'PopupHldr');
    }
    return false;
}

function OpenStorePopup() {
    if (document.getElementById('StorePopup').getAttribute('class') == 'PopupHldr') {
        document.getElementById('StorePopup').setAttribute('class', 'PopupHldr Active');
    }
    else {
        document.getElementById('StorePopup').setAttribute('class', 'PopupHldr');
    }
    return false;
}

function OpenPastSpringLnkPopup() {
    if (document.getElementById('PastSpringPopup').getAttribute('class') == 'PopupHldr') {
        document.getElementById('PastSpringPopup').setAttribute('class', 'PopupHldr Active');
    }
    else {
        document.getElementById('PastSpringPopup').setAttribute('class', 'PopupHldr');
    }
    return false;
}

function OpenJOYiZMRewardLnkPopup() {
    if (document.getElementById('JOYiZMRewardsPopup').getAttribute('class') == 'PopupHldr') {
        document.getElementById('JOYiZMRewardsPopup').setAttribute('class', 'PopupHldr Active');
    }
    else {
        document.getElementById('JOYiZMRewardsPopup').setAttribute('class', 'PopupHldr');
    }
    return false;
}


function OpenJOYiZMWebsitePopup() {
    if (document.getElementById('JOYiZMWebsitePopup').getAttribute('class') == 'PopupHldr') {
        document.getElementById('JOYiZMWebsitePopup').setAttribute('class', 'PopupHldr Active');
    }
    else {
        document.getElementById('JOYiZMWebsitePopup').setAttribute('class', 'PopupHldr');
    }
    return false;
}


function GotoTournamentDetails() {
    $('html,body').animate({
        scrollTop: $(".TournamentDetails").offset().top
    },
        'slow');
    return false;
}

function GotoGallery() {
    $('html,body').animate({
        scrollTop: $(".GalleryDv").offset().top
    },
        'slow');
    return false;
}

function GotoCalifornia() {
    $('html,body').animate({
        scrollTop: $(".CaliforniaDv").offset().top
    },
        'slow');
    return false;
}

function GotoSynergy() {
    $('html,body').animate({
        scrollTop: $(".SynergyVenue").offset().top
    },
        'slow');
    return false;
}