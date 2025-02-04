// Firebase 配置
const firebaseConfig = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
};

// 初始化 Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

// 切换登录/注册表单
document.getElementById('showRegister').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.auth-box').forEach(box => box.classList.toggle('d-none'));
});

document.getElementById('showLogin').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelectorAll('.auth-box').forEach(box => box.classList.toggle('d-none'));
});

// 处理登录
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // 登录成功，重定向到编辑器页面
            window.location.href = '/editor.html';
        })
        .catch((error) => {
            alert('登录失败：' + error.message);
        });
});

// 处理注册
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('两次输入的密码不一致');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // 注册成功，重定向到编辑器页面
            window.location.href = '/editor.html';
        })
        .catch((error) => {
            alert('注册失败：' + error.message);
        });
});

// 检查认证状态
auth.onAuthStateChanged(function(user) {
    if (user && window.location.pathname === '/auth.html') {
        // 如果已登录且在登录页面，重定向到编辑器
        window.location.href = '/editor.html';
    }
}); 