document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Captura os valores dos campos
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validação básica
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const passwordValid = password.length >= 6;

    if (!emailValid) {
        document.getElementById('emailError').textContent = 'E-mail inválido.';
    } else {
        document.getElementById('emailError').textContent = '';
    }

    if (!passwordValid) {
        document.getElementById('passwordError').textContent = 'A senha deve ter pelo menos 6 caracteres.';
    } else {
        document.getElementById('passwordError').textContent = '';
    }

    // Se tudo estiver válido, exibe mensagem de sucesso
    if (emailValid && passwordValid) {
        alert('Login efetuado com sucesso!');
    }
});

// Redefinição de senha
document.getElementById('resetPasswordForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid) {
        document.getElementById('resetEmailError').textContent = 'Por favor, insira um e-mail válido.';
    } else {
        document.getElementById('resetEmailError').textContent = '';
        alert('Um link para redefinir sua senha foi enviado para ' + email);
    }
});

// Modal - Redefinição de senha
document.getElementById('resetPasswordForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const email = document.getElementById('resetEmail').value;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!emailValid) {
        document.getElementById('resetEmailError').textContent = 'Por favor, insira um e-mail válido.';
    } else {
        document.getElementById('resetEmailError').textContent = '';
        showModal();
    }
});

// Mostrar o modal
function showModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';

    const closeModalButton = document.getElementById('closeModal');
    closeModalButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });
}
