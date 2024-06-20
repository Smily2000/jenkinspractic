const wrapper=document.querySelector('.wrapper');
const signUpLink=document.querySelector('.signUp-link');
const signInLink=document.querySelector('.signIn-link');

signUpLink.addEventListener('click' , () => {
    wrapper.classList.add('animate-signIn');       
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click' , () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});


// classList.add to dynamically change the appearance of an element based on user action.
// classList.remove()a method used to remove one or more CSS classes from an element's list of classes