<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                <span>Saved reports</span>
                <a class="d-flex align-items-center text-muted" href="#">
                <span data-feather="plus-circle"></span>
              </a>
            </h6>
            <ul class="nav flex-column">
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ path: '/admin/products' }" 
                        :class="{active:$route.path=='/admin/products'}">
                        <span data-feather="home"></span>
                        Products <span class="sr-only">(current)</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" :to="{ path: '/custom_orders' }" 
                        :class="{active:$route.path=='/custom_orders'}">
                        <span data-feather="home"></span>
                        Custom Orders 
                    </router-link>
                </li>
            </ul>

        </div>
    </nav>
</template>

<script>
export default {
    created() {
        
    }
}
</script>

<style>
</style>
