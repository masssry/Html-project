const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const stepSuccess = document.getElementById('step-success');
const avatar = document.getElementById('avatar');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const emailField = document.getElementById('email-field');
const emailError = document.getElementById('email-error');

// روابط حركات الشخصية المختلفة من الإنترنت مباشرة
const avatarIdle = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExM3ZhcXF1YWZ3dzh6M3c1M2N0eWV4N3p5M295Mmxtbnd0ZXp3Ymd0NiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/v8Y9N60Uv6P3G/giphy.gif"; // وضع الانتظار وهز الرأس
const avatarThinking = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbTN5d3QzazI0Njd0aTFkcmE4cmV6Y3Q4M3p2dDRuOHAwMmptbmx2ZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3o7bu3XilJ5BOES2C4/giphy.gif"; // وضع التفكير والخطأ
const avatarSuccess = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdHBrNDR0azJ3eTlkMGdrZ2Z6YXU3dHR0bmEydnhtNmxtZGFudHBzNCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/l0G18bMGoHImZ3UTe/giphy.gif"; // وضع الاحتفال بالنجاح

// علامة الصح عند كتابة الاسم الأول
firstName.addEventListener('input', () => {
    if(firstName.value.trim() !== "") {
        firstName.parentElement.classList.add('valid-input');
    } else {
        firstName.parentElement.classList.remove('valid-input');
    }
});

// علامة الصح عند كتابة الاسم الثاني
lastName.addEventListener('input', () => {
    if(lastName.value.trim() !== "") {
        lastName.parentElement.classList.add('valid-input');
    } else {
        lastName.parentElement.classList.remove('valid-input');
    }
});

function goToStep2() {
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    // إذا كان الإيميل خطأ، تتغير حركة الشخصية لتفكر أو تقلق
    if (!emailPattern.test(emailValue)) {
        emailField.classList.remove('valid-input');
        emailField.classList.add('invalid-input');
        emailError.style.display = 'block';
        
        avatar.src = avatarThinking; // تغيير الشخصية لوضع التفكير والخطأ
        return;
    }

    // إذا كان صح
    emailField.classList.remove('invalid-input');
    emailField.classList.add('valid-input');
    emailError.style.display = 'none';
    avatar.src = avatarIdle; // إرجاع الشخصية للوضع الطبيعي

    // انتقال انسيابي للخطوة الثانية
    step1.classList.remove('active');
    setTimeout(() => {
        step2.style.display = 'block';
        setTimeout(() => step2.classList.add('active'), 50);
        step1.style.display = 'none';
    }, 400);
}

function goToStep1() {
    step2.classList.remove('active');
    setTimeout(() => {
        step1.style.display = 'block';
        setTimeout(() => step1.classList.add('active'), 50);
        step2.style.display = 'none';
    }, 400);
}

function submitForm() {
    const select = document.getElementById('source-select');
    if(select.value === "") {
        alert("Please select how you heard about us!");
        return;
    }

    // عند النجاح النهائي تتحول الشخصية فوراً لوضع الاحتفال والرقص السعيد
    step2.classList.remove('active');
    setTimeout(() => {
        stepSuccess.style.display = 'block';
        setTimeout(() => stepSuccess.classList.add('active'), 50);
        step2.style.display = 'none';
        
        avatar.src = avatarSuccess; // شخصية تحتفل بنجاح التسجيل!
    }, 400);
}
