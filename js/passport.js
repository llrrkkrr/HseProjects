const change = document.getElementById("change")
change.addEventListener("click", change_all)

function change_all(){
    if(document.getElementsByTagName("div")[1].innerHTML === "Короткова"){
        document.getElementsByTagName("div")[1].innerHTML = "Korotkova"
        document.getElementsByTagName("div")[2].innerHTML = "Valeria"
        document.getElementsByTagName("div")[3].innerHTML = "Yurevna"
        document.getElementsByTagName("div")[4].innerHTML = "Female &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26.03.2007"
        document.getElementsByTagName("div")[7].innerHTML = "UVM UMVD FOR PRIMORSKY KRAI"
        document.getElementsByTagName("div")[8].innerHTML = "C. VLADIVOSTOK"
    }
    else {
        document.getElementsByTagName("div")[1].innerHTML = "Короткова"
        document.getElementsByTagName("div")[2].innerHTML = "Валерия"
        document.getElementsByTagName("div")[3].innerHTML = "Юрьевна"
        document.getElementsByTagName("div")[4].innerHTML = "Жен &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 26.03.2007"
        document.getElementsByTagName("div")[7].innerHTML = "УВМ УМВД ПО ПРИМОРСКОМУ КРАЮ"
        document.getElementsByTagName("div")[8].innerHTML = "Г.ВЛАДИВОСТОК"
    }

    }
