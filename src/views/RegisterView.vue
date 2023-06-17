<template>
    <div>
        <ContentBase>
            <h4>新用户注册</h4>
            <form>
                <br>
                <span class="p">*</span>
                <label for="username">用户名</label>
                <input type="text" name="" id="username" placeholder="" class="register"><br><br>
                <span class="p">*</span>
                <label for="phonenumber">手机号</label>
                <input type="text" name="" id="phonenumber" class="register">
                <br><br>
                <span class="q">*</span>
                <label for="pwd">登录密码</label>
                <input type="password" name="" id="pwd" class="register"><br><br>
                <span class="q">*</span>
                <label for="c_pwd">确认密码</label>
                <input type="password" name="" id="c_pwd" class="register"><br><br>
                <span class="p">*</span>
                <label for="verify">验证码</label>
                <input type="text" id="verify" class="register" name=""><br><br>
                <input type="checkbox" class="checkbox" name="">
                <span style="font-size:15px">我已阅读并同意《用户注册协议》</span>
                <br><br>
                <input type="submit" name="" value="同意以上协议并注册" class="submit" @click="register"><br>
            </form>
        </ContentBase>
    </div>
</template>
  
<script>
// @ is an alias to /src
import ContentBase from '@/components/ContentBase';
export default {
    name: 'RegisterView',
    components: {
        ContentBase
    },
    methods: {
        register() {
            var checkbox = document.getElementsByClassName('checkbox');
            var username = document.getElementById('username').value;
            var phonenumber = document.getElementById('phonenumber').value;
            var password = document.getElementById('pwd').value;
            var c_password = document.getElementById('c_pwd').value;
            if (username.trim() === '') {
                alert('用户名不能为空！');
                return;
            }
            if (phonenumber.trim() === '') {
                alert('手机号不能为空！');
                return;
            }
            if (password.trim() === '') {
                alert('密码不能为空！');
                return;
            }
            if (c_password.trim() === '') {
                alert('请确认密码！');
                return;
            }
            if (checkbox[0].checked == true) {
                alert("注册成功！");
            } else {
                alert("请先阅读并同意《用户注册协议》！");
            }
        }
    }
}
</script>

<style>
.container {
    margin: 0 auto;

}

form {
    width: 450px;
    margin: 0 auto;
    background: #FFF;
    border-radius: 15px;
    position: relative;
}

h4 {
    font-size: 28px;
    text-align: center;
    color: #FFF;
}

.p {
    color: red;
    margin-left: 33px;
    display: inline-block;
}

label {
    font-size: 18px;
    font-weight: bold;
}

.register {
    height: 35px;
    width: 300px;
}

.q {
    color: red;
    margin-left: 17px;
    display: inline-block;
}

.checkbox {
    margin-left: 100px;
    display: inline-block;
    width: 15px;
    height: 15px;
}

.submit {
    border-radius: 7px;
    margin-left: 150px;
    height: 35px;
    width: 150px;
    background-color: #000;
    border: none;
    display: block;
    padding: 0;
    color: #FFF;
    font-weight: bold;
    cursor: pointer;
}

a {
    text-decoration: none;
    font-weight: bold;
}

.right {
    position: absolute;
    bottom: 20px;
}

.left {
    left: 20px;
}

.right {
    right: 20px;
}
</style>
  