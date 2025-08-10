let currentIndex = 0;

const testimonials = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonials.length;

document.getElementById('next').addEventListener('click', () => {
    moveSlide(1);
});

document.getElementById('prev').addEventListener('click', () => {
    moveSlide(-1);
});

function moveSlide(direction) {
    currentIndex += direction;
    
    if (currentIndex < 0) {
        currentIndex = totalTestimonials - 1;
    } else if (currentIndex >= totalTestimonials) {
        currentIndex = 0;
    }

    updateSlidePosition();
}

function updateSlidePosition() {
    const offset = -currentIndex * 280;  // Adjust the distance based on card width and margin
    const container = document.querySelector('.testimonial-container');
    container.style.transform = `translateX(${offset}px)`;
}
