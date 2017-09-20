<template>
    <div class="zh_con">
        <div class="g-log-txet">
            重置密码
        </div>
        <el-form :model="dynamicValidateForm" ref="dynamicValidateForm" label-width="10" class="demo-dynamic" style="margin-top:20px;margin-bottom:20px;">
            <el-form-item prop="email" :rules="[
                      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                      { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur,change' }
                    ]">
                <el-input v-model="dynamicValidateForm.email" placeholder="邮箱地址"></el-input>
            </el-form-item>
            <el-form-item>
                <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                    <el-time-picker type="fixed-time" placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                </el-col>
            </el-form-item>
            <el-form-item style="text-align:center;">
                <el-button type="primary" @click="submitForm('dynamicValidateForm')" style="width:120px;">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.zh_con {
    text-align: left;
    /* min-width: 500px; */
}

.g-log-txet {
    margin-top: 8px;
    color: #2e2e2e;
    font-size: 25px;
    font-weight: bold;
}
</style>
