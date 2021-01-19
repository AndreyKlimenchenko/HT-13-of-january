let open = false;
const handleOpenMenu=()=>{
    const element = document.getElementById('burger');
    console.log(element);
    if(!open){
        element.classList.add("burger-menu");
        open = true;
    } else {
        element.classList.remove("burger-menu");
        open = false;
    }

}