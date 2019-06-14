<template>
    <div
            class="show-toast"
            style="z-index: 2147483647; padding: 12px; min-width: 200px; border-radius: 5px; line-height: 1.2; font-size: 12px; color: rgb(255, 255, 255); box-sizing: border-box; background-color: rgba(39, 39, 39, 0.7); position: fixed; left: 50%; transform: translate(-50%, -50%); text-align: center;  top: 50%; bottom: auto;"
            v-show="success"
    >{{successmsg}}</div>
</template>
<script>
    export default {
        data() {
            return{
                success: 0,
                successmsg: ''
            }
        },
        updated() {
            if (this.success) {
                setTimeout(() => {
                    this.success = 0;
                }, 2000);
            }
        }
    }
</script>
<style>

</style>


