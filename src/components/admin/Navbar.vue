
<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
        <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap">
                <a class="nav-link" href="#" @click="logout">Sign out</a>
            </li>
        </ul>
</nav>
</template>

<script>
import {ajaxAdminLogout} from '@/api/user'
export default {
     methods: {
        logout() {
            ajaxAdminLogout().then(res => {
                if (res.data.success) {
                    this.$router.push('/login')
                }
            })
        }
    }
}
</script>

<style>
</style>
