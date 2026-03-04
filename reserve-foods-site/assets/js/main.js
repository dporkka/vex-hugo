document.querySelectorAll('[data-stripe-url]').forEach((button)=>{button.addEventListener('click',()=>{window.location.href=button.dataset.stripeUrl})})
