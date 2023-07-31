const payBtn = document.querySelector('.btn-buy');

payBtn.addEventListener("click", () => {
    fetch("/stripe-checkout",{
        method:"post",
        headers:new Headers({"content-type":"application/json"}),
        body: JSON.stringify({
            items: JSON.parse(localStorage.getItem('cartItem')),
        }),
    })
    .then((res) => res.json())
    .then((url) => {
        location.href = url;
    })
   /* .catch((err) => console.log(err));*/
});