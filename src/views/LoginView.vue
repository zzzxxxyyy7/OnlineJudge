<template>
    <div>
        <ContentBase>
            <h4>登录</h4>
            <form>
                <br>
                <label for="username">用户名</label>
                <input type="text" class="register">
                <br><br>
                <label for="pwd">密码</label>
                <input type="password" name="" id="pwd" class="register"><br><br>
                <input type="submit" name="" value="登录" class="submit" @click="register"><br>
            </form>
        </ContentBase>
    </div>
</template>
  
<script>
// @ is an alias to /src
import ContentBase from '@/components/ContentBase';
export default {
    name: 'LoginView',
    components: {
        ContentBase
    }
}
</script>
  
<style scoped>
.container {
    margin-top: 20px;
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
    color: #a81818;
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