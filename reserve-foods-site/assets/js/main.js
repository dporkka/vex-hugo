document.querySelectorAll('[data-stripe-url]').forEach((button)=>{button.addEventListener('click',(event)=>{event.preventDefault();window.location.href=button.dataset.stripeUrl})})
