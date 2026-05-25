// مراجع لعناصر الحقول والخطوات
const step1 = document.getElementById('step-1');
const step2 = document.getElementById('step-2');
const stepSuccess = document.getElementById('step-success');
const avatar = document.getElementById('avatar');

const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const emailField = document.getElementById('email-field');
const emailError = document.getElementById('email-error');

// مراقبة المدخلات لتفعيل علامة الصح تلقائياً عند الكتابة مثل الفيديو
firstName.addEventListener('input', () => {
    if(firstName.value.trim() !== "") {
        firstName.parentElement.classList.add('valid-input');
    } else {
        firstName.parentElement.classList.remove('valid-input');
    }
});

lastName.addEventListener('input', () => {
    if(lastName.value.trim() !== "") {
        lastName.parentElement.classList.add('valid-input');
    } else {
        lastName.parentElement.classList.remove('valid-input');
    }
});

// الانتقال للخطوة الثانية مع فحص الإيميل
function goToStep2() {
    const emailValue = email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // كود فحص الإيميل الحقيقي

    if (!emailPattern.test(emailValue)) {
        // إذا كان الإيميل خاطئ (يتحول للأحمر وتظهر علامة التحذير والشخصية تتفاعل)
        emailField.classList.remove('valid-input');
        emailField.classList.add('invalid-input');
        emailError.style.display = 'block';
        
        // تغيير حركة الشخصية لتبدو متفاجئة أو تفكر (لو عندك رابط حركة تفكير)
        avatar.src = "https://i.postimg.com/52dxgGsK/avatar-thinking.gif"; 
        return;
    }

    // إذا كان الإيميل صحيحاً
    emailField.classList.remove('invalid-input');
    emailField.classList.add('valid-input');
    emailError.style.display = 'none';

    // حركة انتقالية انسيابية للخطوة التالية
    step1.classList.remove('active');
    setTimeout(() => {
        step2.style.display = 'block';
        setTimeout(() => step2.classList.add('active'), 50);
        step1.style.display = 'none';
    }, 400);

    // إرجاع الشخصية لوضعها الطبيعي المنتظر
    avatar.src = "https://i.postimg.com/52dxgGsK/avatar-idle.gif";
}

// العودة للخطوة الأولى
function goToStep1() {
    step2.classList.remove('active');
    setTimeout(() => {
        step1.style.display = 'block';
        setTimeout(() => step1.classList.add('active'), 50);
        step2.style.display = 'none';
    }, 400);
}

// إرسال الفورم بنجاح وفك حركة الشخصية السعيدة
function submitForm() {
    const select = document.getElementById('source-select');
    if(select.value === "") {
        alert("Please select how you heard about us!");
        return;
    }

    step2.classList.remove('active');
    setTimeout(() => {
        stepSuccess.style.display = 'block';
        setTimeout(() => stepSuccess.classList.add('active'), 50);
        step2.style.display = 'none';
        
        // تغيير شكل الشخصية لحركة النجاح والاحتفال (Success / Happy Animation)
        avatar.src = "https://i.postimg.com/52dxgGsK/avatar-success.gif";
    }, 400);
}
