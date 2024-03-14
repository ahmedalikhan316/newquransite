


    document.addEventListener("DOMContentLoaded", function() {
        // Function to check if an element is in the viewport
        function isInViewport(element) {
            var rect = element.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        // Function to add animate class when element is in viewport
        function addAnimateClass() {
            var scrollAnimations = document.querySelectorAll('.scroll-animation');
            scrollAnimations.forEach(function(scrollAnimation) {
                if (isInViewport(scrollAnimation)) {
                    var animationClass = scrollAnimation.getAttribute('data-animation');
                    scrollAnimation.classList.remove('animate__opacity-0'); // Remove the opacity-0 class to reveal the image
                    scrollAnimation.classList.add('animate__' + animationClass);
                }
            });
        }

        // Initial check on page load
        addAnimateClass();

        // Add scroll event listener
        window.addEventListener('scroll', function() {
            addAnimateClass();
        });
    });
