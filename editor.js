// 初始化 Firebase Storage
const storage = firebase.storage();

// 自定义图片处理器
function imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
        const file = input.files[0];
        const fileName = `blog-images/${Date.now()}-${file.name}`;
        const storageRef = storage.ref(fileName);

        try {
            // 显示上传进度
            const progressBar = document.createElement('div');
            progressBar.className = 'upload-progress';
            document.body.appendChild(progressBar);

            // 上传文件
            const uploadTask = storageRef.put(file);
            
            uploadTask.on('state_changed', 
                (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    progressBar.style.width = progress + '%';
                },
                (error) => {
                    console.error('Upload failed:', error);
                    progressBar.remove();
                },
                async () => {
                    // 获取下载URL
                    const url = await storageRef.getDownloadURL();
                    
                    // 获取编辑器选中的位置
                    const range = quill.getSelection(true);
                    
                    // 在选中位置插入图片
                    quill.insertEmbed(range.index, 'image', url);
                    
                    // 移除进度条
                    progressBar.remove();
                }
            );
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('图片上传失败');
        }
    };
}

// 初始化 Quill 编辑器
const quill = new Quill('#editor', {
    theme: 'snow',
    modules: {
        toolbar: {
            container: [
                ['bold', 'italic', 'underline', 'strike'],
                ['blockquote', 'code-block'],
                [{ 'header': 1 }, { 'header': 2 }],
                [{ 'list': 'ordered'}, { 'list': 'bullet' }],
                [{ 'script': 'sub'}, { 'script': 'super' }],
                [{ 'indent': '-1'}, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
            handlers: {
                image: imageHandler
            }
        }
    }
});

// 保存按钮点击事件
document.getElementById('saveButton').addEventListener('click', function() {
    const title = document.getElementById('titleInput').value;
    const content = quill.root.innerHTML;
    const category = document.getElementById('categorySelect').value;
    
    // 这里添加保存逻辑，可以是保存到本地存储或发送到服务器
    const blogPost = {
        title,
        content,
        category,
        date: new Date().toISOString(),
        id: Date.now()
    };
    
    // 示例：保存到 localStorage
    const posts = JSON.parse(localStorage.getItem('blogPosts') || '[]');
    posts.push(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(posts));
    
    alert('保存成功！');
});

// 检查用户是否已登录
auth.onAuthStateChanged(function(user) {
    if (!user) {
        // 如果未登录，重定向到登录页面
        window.location.href = '/auth.html';
    }
}); 